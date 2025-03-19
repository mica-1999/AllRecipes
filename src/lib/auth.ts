import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

const addSession = async (userId: number) => {
  try {
     // Check if a session exists for this user
     const findSession = await prisma.session.findFirst({
      where: {
        userId: userId
      }
    });

    const currentTimestamp = new Date();

    if(findSession){
      await prisma.session.update({
        where: {
          id: findSession.id
        },
        data: {
          updatedAt: currentTimestamp
        }
      });
      console.log(`Updated session timestamp for user: ${userId}`);
    }
    else {
      // Create new session
      await prisma.session.create({
        data: {
          userId: userId,
          createdAt: currentTimestamp,
          updatedAt: currentTimestamp
        }
      });
      console.log(`Created new session for user: ${userId}`);
    }
  } catch (error) {
    console.error("Error during session management:", error);
    throw new Error("Error during session creation");
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.username || !credentials?.password) {
            return null;
          }

          // Find the user using Prisma
          const user = await prisma.user.findUnique({
            where: {
                username: credentials.username
            }
          });
          
          if (!user) {
            console.log("User not found for username:", credentials.username);
            return null;
          }

          // Validate password
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          
          if (!isPasswordValid) {
            console.log("Invalid password for username:", credentials.username);
            return null;
          }

          // Track user session
          await addSession(user.id);

          // Return user object (without sensitive data)
          return {
            id: user.id.toString(), // Converting to string as NextAuth expects string IDs
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role
          };
        } 
        catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      version: "2.0", // Use Twitter OAuth 2.0
    }),
    
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // This callback runs when a user signs in
      if (account?.provider === 'credentials') {
        // Your existing credential logic
        return true;
      }
      
      // For social logins
      try {
        // Check if this user already exists in your database
        const existingUser = await prisma.user.findUnique({
          where: {
            email: user.email as string,
          }
        });
        if (existingUser) {
          // User exists, update their session
          await addSession(existingUser.id);
          return true;
        } else {
          // Create a new user in your database
          const newUser = await prisma.user.create({
            data: {
              email: user.email as string,
              username: (user.email as string).split('@')[0] + `-${account?.provider}`,
              firstName: user.name?.split(' ')[0] || '',
              lastName: user.name?.split(' ').slice(1).join(' ') || '',
              password: '', // Empty password for OAuth users
              role: 'viewer',
              isActive: 'active', // Social login users are active by default
            }
          });
          
          // Create session for this new user
          await addSession(newUser.id);
          return true;
        }
      } catch (error) {
        console.error("Error during social sign in:", error);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id;
        session.user.username = token.username as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV !== 'production',
  pages: {
    signIn: "/login",
  },
};

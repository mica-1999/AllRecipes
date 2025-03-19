import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
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
  ],
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  callbacks: {
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

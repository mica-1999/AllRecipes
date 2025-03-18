import NextAuth from "next-auth"; // Core foundation for the Authentication API in Next.js
import { NextResponse } from "next/server"; // Allows us to send responses to the client
import CredentialsProvider from "next-auth/providers/credentials"; // Allows custom authentication (we're using MongoDB)
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

const addSession = async (userId) => {
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

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          // Find the user using Prisma
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          });
          
          if (!user) {
            console.log("User not found for email:", credentials.email);
            return null;
          }

          // Validate password
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          
          if (!isPasswordValid) {
            console.log("Invalid password for user:", credentials.email);
            return null;
          }

          // Track user session
          await addSession(user.id);

          // Return user object (without sensitive data)
          return {
            id: user.id,
            email: user.email,
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
        token.email = user.email;
        token.username = user.username;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.username = token.username;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.role = token.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV !== 'production',
  pages: {
    signIn: "/pages/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
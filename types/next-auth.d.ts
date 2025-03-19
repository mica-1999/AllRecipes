import { DefaultSession } from "next-auth";

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      firstName: string;
      lastName: string;
      role: string;
    } & DefaultSession["user"];
  }

  // Extend User type
  interface User {
    username: string;
    firstName: string;
    lastName: string;
    role: string;
  }
}

// Extend JWT type
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    role: string;
  }
}

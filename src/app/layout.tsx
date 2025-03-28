import type { Metadata } from "next";
import "./globals.css";
import 'remixicon/fonts/remixicon.css';
import NextAuthSessionProvider from "./sessionWrapper";
import { ToastContainer } from 'react-toastify';


export const metadata: Metadata = {
  title: "Home",
  description: "Recipes for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <NextAuthSessionProvider>
          <ToastContainer />
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}

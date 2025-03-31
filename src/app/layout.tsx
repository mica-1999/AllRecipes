import type { Metadata } from "next";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'; // Import Remix Icon CSS
import NextAuthSessionProvider from "./sessionWrapper";
import { ToastContainer } from 'react-toastify'; // Initialize ToastContainer for App
import { ThemeProvider } from "@/app/context/ThemeContext";

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
          <ThemeProvider>
            <ToastContainer />
            {children}
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}

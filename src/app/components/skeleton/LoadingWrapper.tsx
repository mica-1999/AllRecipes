"use client"
import { useTheme } from "@/app/context/ThemeContext";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading } = useTheme();
  
  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-16 bg-gray-200 w-full rounded dark:bg-gray-700 mb-4"></div>
        <div className="h-screen bg-gray-100 w-full rounded dark:bg-gray-800"></div>
      </div>
    );
  }
  
  return <>{children}</>;
}
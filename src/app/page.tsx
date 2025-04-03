import { redirect } from "next/navigation";

// Redirects to the home page on /
export default function Home() {
  redirect("/pages/home");
}
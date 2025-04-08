"use client"
import { useState } from "react";
import Link from "next/link";
import { FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "@/app/components/reusable/Spinner";
import { showToast } from "@/app/components/reusable/Toasters";

export default function Register() {
    // Router instance to navigate between pages
    const router = useRouter();

    // State variables to manage form data, error messages, and loading state
    const [formData, setformData] = useState({ username: "", password: "", confirmpassword: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Validate form data
    const formValidation = () => {
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        if (!formData.username || !formData.password || !formData.confirmpassword) {
            setError("All fields are required");
            return false;
        }
        else if (formData.username.length < 4 || formData.username.length > 15) {
            setError("Username must be between 4 and 15 characters");
            return false;
        }
        else if (!usernameRegex.test(formData.username)) {
            setError("Username can only contain letters, numbers, and underscores (no spaces)");
            return false;
        }
        else if (formData.password !== formData.confirmpassword) {
            setError("Passwords do not match");
            return false;
        }
        return true;
    }

    // Handle form submission
    // This function is called when the form is submitted. It validates the form data, sends a POST request to create a user account, and handles the response.
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formValidation()) {
            setLoading(false);
            return;
        }

        setLoading(true);

        // Create user account
        try {
            const response = await fetch("/api/createUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password
                })
            });

            // Returns user data and error message
            const data = await response.json();

            // If User sucessfully created, add default preferences
            if (response.ok) {
                try {
                    const response = await fetch("/api/preferences", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            userId: data.user.id
                        })
                    })

                    if (!response.ok) {
                        throw new Error("Failed to create preferences for user.");
                    }
                }
                catch (error) {
                    console.error("Error creating preferences for User:", error);
                    setError("An error occurred. Please try again later.");
                }

                // Display success message/clear form and small delay for toast to be visible
                showToast("success", "Account created successfully!", "light");
                setformData({ username: "", password: "", confirmpassword: "" });
                setTimeout(() => {
                    setLoading(true);
                    router.push("/pages/login");
                }, 2500);
            }
        }
        catch (error: Error | unknown) {
            console.error("Registration error:", error);
            setError("Registration failed. Please try again later.");
            setLoading(false);
        }
    }

    return (
        <>
            <div className="bg-white rounded-lg shadow-md px-6 py-7 sm:px-8 sm:py-8 w-full border-t-4 border-[#5eaaae]">
                <div className="text-center mb-5">
                    <h1 className="text-2xl font-bold text-[#452624]">Sign Up </h1>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-1">
                    <div className="">
                        <label htmlFor="username" className="mb-1 flex text-sm font-medium text-[#452624]">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="admin"
                            className="w-full px-3 py-2.5 rounded-md border border-[#e1b891] focus:border-[#452624] focus:outline-none focus:ring-1 focus:ring-[#5eaaae]"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setformData({ ...formData, username: e.target.value })}
                            value={formData.username}
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password" className="mb-1 flex text-sm font-medium text-[#452624]">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="•••••••"
                            className="w-full px-3 py-2.5 rounded-md border border-[#e1b891] focus:border-[#452624] focus:outline-none focus:ring-1 focus:ring-[#5eaaae]"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setformData({ ...formData, password: e.target.value })}
                            value={formData.password}
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="confirmpassword" className="mb-1 flex text-sm font-medium text-[#452624]">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmpassword"
                            id="confirmpassword"
                            placeholder="•••••••"
                            className="w-full px-3 py-2.5 rounded-md border border-[#e1b891] focus:border-[#452624] focus:outline-none focus:ring-1 focus:ring-[#5eaaae]"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setformData({ ...formData, confirmpassword: e.target.value })}
                            value={formData.confirmpassword}
                        />
                    </div>

                    {error && (
                        <div className="bg-red-50 mt-3 border-l-4 border-red-400 p-3 rounded">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-4 w-4 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-xs text-red-600">{error}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full cursor-pointer mt-6 py-2.5 px-4 bg-[#57713a] text-white rounded-md hover:bg-[#4a6231] transition-colors duration-200 font-medium"
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <span>Creating account  </span>
                                <Spinner />
                            </div>
                        ) : (
                            "Create Account"
                        )}
                    </button>
                </form>

                <p className="mt-5 text-center text-sm text-[#452624]">
                    Already have an account?
                    <Link href="/pages/login" className="font-medium text-[#5eaaae] hover:text-[#4c8c90] hover:underline transition-colors duration-200 ml-2">
                        Login Now!
                    </Link>
                </p>
            </div>
        </>
    )
}
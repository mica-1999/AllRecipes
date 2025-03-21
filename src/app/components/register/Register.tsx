"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import React, { FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';

export default function Register() {
    const router = useRouter();
    const [formData,setformData] = useState ({
        username : "",
        password : "",
        confirmpassword : ""
    });

    const [error,setError] = useState("");
    const [loading , setLoading] = useState(false);

    useEffect(() => {
        console.log("formData",formData);
    },[formData]);

    const formValidation = () => {
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        if(!formData.username || !formData.password || !formData.confirmpassword){
            setError("All fields are required");
            return false;
        }
        else if(formData.username.length < 4 || formData.username.length > 15){
            setError("Username must be between 4 and 15 characters");
            return false;
        }
        else if(!usernameRegex.test(formData.username)){
            setError("Username can only contain letters, numbers, and underscores (no spaces)");
            return false;
        }
        else if(formData.password !== formData.confirmpassword){
            setError("Passwords do not match");
            return false;
        }
        return true;
    }

    const handleSubmit =  async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Form validation
        if(!formValidation()){
            setLoading(false);
            return;
        }

        // Continue with registration
        setLoading(true);

        try {
            const response = await fetch("/api/createUser", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    username : formData.username,
                    password : formData.password
                })
            });

            if(!response.ok){
                throw new Error("An error occurred while registering. Please try again later.");
            }

            if(response.ok) {
                // Show success toast
                toast("Account created successfully!");
                
                // Clear form
                setformData({
                    username: "",
                    password: "",
                    confirmpassword: ""
                });
                
                // Brief delay for toast to be visible
                setTimeout(() => {
                    setLoading(true);
                    router.push("/pages/login");
                }, 2500);
            }
        }   
        catch (error: any) {
            setError("Registration failed. Please try again later.");
            setLoading(false);
        } 
    }

    return(
        <>
        <ToastContainer 
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />

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
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setformData({...formData, username: e.target.value})}
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
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setformData({...formData, password: e.target.value})}
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
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setformData({...formData, confirmpassword: e.target.value})}
                            value={formData.confirmpassword}
                        />
                    </div>
                    
                    {error && <p className="flex text-red-500 text-sm mt-2 justify-center">{error}</p>}
                    
                    <button 
                        type="submit"
                        className="w-full cursor-pointer mt-6 py-2.5 px-4 bg-[#57713a] text-white rounded-md hover:bg-[#4a6231] transition-colors duration-200 font-medium"
                        disabled={loading}
                    >
                        {loading ? "Creating account..." : "Create Account"}
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
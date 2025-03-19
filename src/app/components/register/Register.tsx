"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, ChangeEvent } from "react";

export default function Register() {
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

    const handleSubmit = () => async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return(
        <>
            <div className="bg-white rounded-lg shadow-md px-6 py-7 sm:px-8 sm:py-8 w-full border-t-4 border-[#5eaaae]">
                <div className="text-center mb-5">
                    <h1 className="text-2xl font-bold text-[#452624]">Sign Up </h1>
                </div>
                <form onSubmit={handleSubmit()} className="flex flex-col space-y-1">
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
                    
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    
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
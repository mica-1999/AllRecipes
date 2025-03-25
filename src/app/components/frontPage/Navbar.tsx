"use client"

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
    const { data: session, status } = useSession();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(session?.user){
            console.log("User is logged in", session.user);
        }
        
        // Close dropdown when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [session]);

    return(
        <div className="flex justify-between items-center px-16 bg-white h-20 border-b-[1px] border-[#b2b3ca] shadow-md shadow-gray-250">
            {/* Left Side - Logo and Primary Nav */}
            <div id="leftSideBtns" className="flex justify-between items-center gap-5">
                <Link href="/pages/home" className="">
                    <div id="Logo"><h1 className="text-[24px] font-bold">RecipeHub</h1></div>
                </Link>
                <div id="subBtns" className="flex justify-center items-center gap-8">
                    <Link href="/pages/" className="">
                        <div id="Cuisines" className="hover:text-[#747474] transition-colors duration-200">
                            <h2 className="text-[14px]">Cuisines</h2>
                        </div>
                    </Link>
                    <Link href="/pages/" className="">
                        <div id="Ingredients" className="hover:text-[#747474] transition-colors duration-200">
                            <h2 className="text-[14px]">Ingredients</h2>
                        </div>
                    </Link>
                </div>
            </div>
            
            {/* Middle - Search Bar */}
            <div id="middleSearchBtn" className="flex-1 max-w-sm ml-8">
                <div className="flex justify-between items-center w-full h-[45px] px-2.5 py-2.5 
                    rounded-[5px] 
                    border-[1px] border-[#d3d3d3]
                    bg-[#f5f5f5] 
                    focus-within:bg-white focus-within:border-[#747474] focus-within:ring-1 focus-within:ring-[#747474]
                    transition-all duration-200
                    cursor-pointer">
                    <i className="ri-search-line text-[#6c6c6c] text-[20px]"></i>
                    <span className="text-[#6c6c6c]">Ctrl K</span>
                </div>
            </div>
            
            {/* Right Side - Additional Nav and Auth */}
            <div id="rightSideBtns" className="flex justify-end items-center gap-5">
                {/* Additional Navigation Items */}
                <Link href="/pages/categories" className="">
                    <div className="flex items-center gap-1.5 hover:text-[#747474] transition-colors duration-200">
                        <i className="ri-restaurant-line text-[18px]"></i>
                        <span className="text-[14px]">Categories</span>
                    </div>
                </Link>
                
                <Link href="/pages/search" className="">
                    <div className="flex items-center gap-1.5 hover:text-[#747474] transition-colors duration-200">
                        <i className="ri-search-2-line text-[18px]"></i>
                        <span className="text-[14px]">Advanced</span>
                    </div>
                </Link>
                
                <Link href="/pages/mylist" className="">
                    <div className="flex items-center gap-1.5 hover:text-[#747474] transition-colors duration-200">
                        <i className="ri-bookmark-line text-[18px]"></i>
                        <span className="text-[14px]">My List</span>
                    </div>
                </Link>
                
                {/* Separator */}
                <div className="h-6 border-l border-[#d3d3d3] mx-2"></div>
                
                {/* User Menu Section */}
                <div className="flex items-center gap-2">
                    {/* 1. Preferences button - only visible when logged in */}
                    {session?.user && (
                        <Link href="/pages/preferences">
                            <div className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                                <i className="ri-settings-4-line text-[#6c6c6c] text-[18px]"></i>
                            </div>
                        </Link>
                    )}
                    
                    {/* 2. Profile icon - only visible when logged in */}
                    {session?.user && (
                        <Link href="/pages/profile">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
                                <i className="ri-user-line text-[#6c6c6c] text-[16px]"></i>
                            </div>
                        </Link>
                    )}
                    
                    {/* 3. Dropdown menu - always visible */}
                    <div className="relative" ref={dropdownRef}>
                        <button 
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center cursor-pointer"
                        >
                            <i className="ri-arrow-down-s-line text-[#6c6c6c] text-[20px]"></i>
                        </button>
                        
                        {/* Dropdown content */}
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
                                {session?.user ? (
                                    <>
                                        {/* Logged-in user content */}
                                        <div className="px-4 py-2 border-b border-gray-200">
                                            <p className="font-medium text-sm">{session.user.username || session.user.name}</p>
                                            <p className="text-xs text-gray-500 truncate">{session.user.email}</p>
                                        </div>
                                        
                                        <Link href="/pages/profile">
                                            <div className="px-4 py-2 hover:bg-gray-100 text-sm flex items-center">
                                                <i className="ri-user-line mr-2 text-gray-500"></i>
                                                Your Profile
                                            </div>
                                        </Link>
                                        
                                        <Link href="/pages/preferences">
                                            <div className="px-4 py-2 hover:bg-gray-100 text-sm flex items-center">
                                                <i className="ri-settings-4-line mr-2 text-gray-500"></i>
                                                Preferences
                                            </div>
                                        </Link>
                                        
                                        <Link href="/dashboard">
                                            <div className="px-4 py-2 hover:bg-gray-100 text-sm flex items-center">
                                                <i className="ri-dashboard-line mr-2 text-gray-500"></i>
                                                Dashboard
                                            </div>
                                        </Link>
                                        
                                        <div className="border-t border-gray-200 my-1"></div>
                                        
                                        <button 
                                            onClick={() => signOut({ callbackUrl: '/' })}
                                            className="px-4 py-2 hover:bg-gray-100 text-sm w-full text-left flex items-center cursor-pointer"
                                        >
                                            <i className="ri-logout-box-line mr-2 text-gray-500"></i>
                                            Sign out
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        {/* Non-logged-in user content */}
                                        <Link href="/pages/login">
                                            <div className="px-4 py-2 hover:bg-gray-100 text-sm flex items-center">
                                                <i className="ri-login-box-line mr-2 text-gray-500"></i>
                                                Sign in
                                            </div>
                                        </Link>
                                        
                                        <Link href="/pages/signup">
                                            <div className="px-4 py-2 hover:bg-gray-100 text-sm flex items-center">
                                                <i className="ri-user-add-line mr-2 text-gray-500"></i>
                                                Sign up
                                            </div>
                                        </Link>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
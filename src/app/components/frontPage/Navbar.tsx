"use client"
import { useSession, signOut } from "next-auth/react";
import { useState, useRef } from "react";
import Link from "next/link";
import SearchFilter from "@/app/components/frontPage/searchFilters/Search";
import { navItems } from "@/app/dataItems/LayoutData";
import { useClickOutside } from "@/app/components/reusable/ClickOutsideDiv";

export default function Navbar() {
    // Get session data from NextAuth
    const { data: session } = useSession(); 

    // Refs for dropdowns
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dropdownCategoriesRef = useRef<HTMLDivElement>(null);

    // State variables for dropdowns and search filter
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [categoriesOpen, setCategoriesOpen] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState<boolean>(false);

    // Controls closing dropdowns when clicking outside
    useClickOutside(dropdownRef, setDropdownOpen);
    useClickOutside(dropdownCategoriesRef, setCategoriesOpen);

    return(
        <>
        <SearchFilter openSearch={openSearch} setOpenSearch={setOpenSearch} />
        <div className="flex justify-between items-center px-16 bg-white h-20 border-b-[1px] border-[#b2b3ca] shadow-md shadow-gray-250 dark:bg-gray-900 dark:border-gray-700 dark:shadow-gray-900">
            {/* Left Side - Logo and Primary Nav */}
            <div id="leftSideBtns" className="flex justify-between items-center gap-5">
                <Link href="/pages/home" className="">
                    <div id="Logo"><h1 className="text-[24px] font-bold dark:text-white">RecipeHub</h1></div>
                </Link>
            </div>
            
            {/* Middle - Search Bar */}
            <div id="middleSearchBtn" className="hidden md:flex md:flex-1 max-w-sm ml-8 mr-4">
                <div className="flex justify-between items-center w-full h-[45px] px-2.5 py-2.5 
                    rounded-[5px] 
                    border-[1px] border-[#d3d3d3]
                    bg-[#f5f5f5] 
                    focus-within:bg-white focus-within:border-[#747474] focus-within:ring-1 focus-within:ring-[#747474]
                    transition-all duration-200
                    cursor-pointer
                    dark:bg-gray-800 dark:border-gray-600 dark:focus-within:bg-gray-700 dark:focus-within:border-gray-500"
                    onClick={() => setOpenSearch(true)}    
                >
                    <i className="ri-search-line text-[#6c6c6c] text-[20px] dark:text-gray-300"></i>
                    <span className="text-[#6c6c6c] dark:text-gray-300">Ctrl K</span>
                </div>
            </div>
            
            {/* Right Side - Additional Nav and Auth */}
            <div id="rightSideBtns" className="flex justify-end items-center gap-5">
                {/* Additional Navigation Items */}
                <div className="flex items-center gap-1.5 hover:text-[#747474] transition-colors duration-200 cursor-pointer relative hidden lg:flex dark:text-gray-200 dark:hover:text-white" ref={dropdownCategoriesRef} onClick={() => setCategoriesOpen(!categoriesOpen)}>
                    <i className="ri-restaurant-line text-[18px]"></i>
                    <span className="text-[14px]">Categories</span>
                    <i className="ri-arrow-down-s-line text-[18px]"></i>

                    {categoriesOpen && (
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200">
                            <Link href="/pages/home/advancedFilters?category=Popular">
                                <div className="px-4 py-2.5 hover:bg-gray-100 text-sm flex items-center dark:hover:bg-gray-700">
                                    <i className="ri-fire-line mr-2 text-orange-500"></i>
                                    Most Popular Recipes Right Now
                                </div>
                            </Link>
                            
                            <Link href="/weekly-trending">
                                <div className="px-4 py-2.5 hover:bg-gray-100 text-sm flex items-center dark:hover:bg-gray-700">
                                    <i className="ri-star-line mr-2 text-yellow-500"></i>
                                    This Week's Trending Recipes
                                </div>
                            </Link>

                            <Link href="/seasonal">
                                <div className="px-4 py-2.5 hover:bg-gray-100 text-sm flex items-center dark:hover:bg-gray-700">
                                    <i className="ri-sun-line mr-2 text-blue-500"></i>
                                    Seasonal Favorites
                                </div>
                            </Link>

                            <Link href="/featured-chefs">
                                <div className="px-4 py-2.5 hover:bg-gray-100 text-sm flex items-center dark:hover:bg-gray-700">
                                    <i className="ri-user-star-line mr-2 text-purple-500"></i>
                                    Featured Chef Collections
                                </div>
                            </Link>

                            <Link href="/categories">
                                <div className="px-4 py-2.5 hover:bg-gray-100 text-sm flex items-center dark:hover:bg-gray-700">
                                    <i className="ri-apps-line mr-2 text-green-500"></i>
                                    Browse All Categories
                                </div>
                            </Link>
                        </div>
                    )}

                </div>
                
                <Link href="/pages/home/advancedFilters" className="hidden lg:flex">
                    <div className="flex items-center gap-1.5 hover:text-[#747474] transition-colors duration-200 dark:text-gray-200 dark:hover:text-white">
                        <i className="ri-search-2-line text-[18px]"></i>
                        <span className="text-[14px]">Advanced</span>
                    </div>
                </Link>
                
                {session?.user && (
                <Link href="/pages/home/myList" className="hidden lg:flex">
                    <div className="flex items-center gap-1.5 hover:text-[#747474] transition-colors duration-200 dark:text-gray-200 dark:hover:text-white">
                        <i className="ri-bookmark-line text-[18px]"></i>
                        <span className="text-[14px]">My List</span>
                    </div>
                </Link>
                )}
                
                {/* Separator */}
                <div className="h-6 border-l border-[#d3d3d3] mx-2 dark:border-gray-600"></div>
                
                {/* User Menu Section */}
                <div className="flex items-center gap-2">
                    {/* 1. Preferences button - only visible when logged in */}
                    {session?.user && (
                        <Link href="/pages/home/preferences">
                            <div className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 dark:hover:bg-gray-700">
                                <i className="ri-settings-4-line text-[#6c6c6c] text-[18px] dark:text-gray-300"></i>
                            </div>
                        </Link>
                    )}
                    
                    {/* 2. Profile icon - only visible when logged in */}
                    {session?.user && (
                        <Link href="/pages/home/profile">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors duration-200 dark:bg-gray-700 dark:hover:bg-gray-600">
                                <i className="ri-user-line text-[#6c6c6c] text-[16px] dark:text-gray-300"></i>
                            </div>
                        </Link>
                    )}
                    
                    {/* 3. Dropdown menu - always visible */}
                    <div className="relative hidden lg:flex" ref={dropdownRef}>
                        <button 
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center cursor-pointer dark:hover:bg-gray-700"
                        >
                            <i className="ri-arrow-down-s-line text-[#6c6c6c] text-[20px] dark:text-gray-300"></i>
                        </button>
                        
                        {/* Dropdown content */}
                        {dropdownOpen && (
                            <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                {session?.user ? (
                                    <>
                                        {/* Logged-in user content */}
                                        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                                            <p className="font-medium text-sm dark:text-white">{session.user.username || session.user.name}</p>
                                            <p className="text-xs text-gray-500 truncate dark:text-gray-400">{session.user.email}</p>
                                        </div>
                                        
                                        <Link href="/pages/home/profile">
                                            <div className="px-4 py-2 hover:bg-gray-100 text-sm flex items-center dark:hover:bg-gray-700 dark:text-gray-200">
                                                <i className="ri-user-line mr-2 text-gray-500 dark:text-gray-400"></i>
                                                Your Profile
                                            </div>
                                        </Link>
                                        
                                        <Link href="/pages/home/preferences">
                                            <div className="px-4 py-2 hover:bg-gray-100 text-sm flex items-center dark:hover:bg-gray-700 dark:text-gray-200">
                                                <i className="ri-settings-4-line mr-2 text-gray-500 dark:text-gray-400"></i>
                                                Settings
                                            </div>
                                        </Link>
                                        
                                        <Link href="/dashboard">
                                            <div className="px-4 py-2 hover:bg-gray-100 text-sm flex items-center dark:hover:bg-gray-700 dark:text-gray-200">
                                                <i className="ri-dashboard-line mr-2 text-gray-500 dark:text-gray-400"></i>
                                                Dashboard
                                            </div>
                                        </Link>
                                        
                                        <div className="border-t border-gray-200 my-1 dark:border-gray-700"></div>
                                        
                                        <button 
                                            onClick={() => signOut({ callbackUrl: '/' })}
                                            className="px-4 py-2 hover:bg-red-600 hover:text-white text-sm w-full text-left flex items-center cursor-pointer transition-colors duration-200 dark:text-gray-200"
                                        >
                                            <i className="ri-logout-box-line mr-2 text-gray-500 group-hover:text-white dark:text-gray-400"></i>
                                            Sign out
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        {/* Non-logged-in user content */}
                                        <Link href="/pages/login">
                                            <div className="px-4 py-2 hover:bg-gray-100 text-sm flex items-center dark:hover:bg-gray-700 dark:text-gray-200">
                                                <i className="ri-login-box-line mr-2 text-gray-500 dark:text-gray-400"></i>
                                                Sign in
                                            </div>
                                        </Link>
                                        
                                        <Link href="/pages/signup">
                                            <div className="px-4 py-2 hover:bg-gray-100 text-sm flex items-center dark:hover:bg-gray-700 dark:text-gray-200">
                                                <i className="ri-user-add-line mr-2 text-gray-500 dark:text-gray-400"></i>
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

        {/* Responsive Navigation */}
        <div id="responsiveNav" className="w-full h-[65px] fixed bottom-0 bg-white border-t-[1px] border-[#b2b3ca] shadow-lg flex items-center justify-between lg:hidden z-50 dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item, index) => (
                <Link key={index} href={item.link} className="w-1/6 h-full">
                    <div className="flex flex-col h-full items-center justify-center gap-1 hover:bg-gray-300 active:bg-[#e55a29] transition-colors duration-200 dark:hover:bg-gray-700 dark:active:bg-indigo-800 dark:text-gray-200">
                        <i className={`${item.icon} text-[20px]`}></i>
                        <span className="text-[10px] font-medium">{item.name}</span>
                    </div>
                </Link>
            ))}
        </div>
        </>
    );
}
"use client"
import { useEffect, useState } from "react";

export default function BasicFilter() {
    return (
        <div className="flex items-center justify-between w-full px-10 py-4 gap-3">
            <div className="flex flex-col w-[25%] border-r-2 border-[#c1c1c1] pr-4"> 
                <h2 className="text-[16px] text-black font-bold">Cuisines</h2>
                <h2 className="text-[14px] text-[#030303] mt-2">What do you crave?</h2>
            </div>
            <div className="flex flex-col w-[22%] border-r-2 border-[#c1c1c1] pr-4"> 
                <h2 className="text-[16px] text-black font-bold">Filter by</h2>
                <h2 className="text-[14px] text-[#030303] mt-2">Add Ingredient</h2>
            </div>
            <div className="flex flex-col w-[25%] border-r-2 border-[#c1c1c1] pr-4"> 
                <h2 className="text-[16px] text-black font-bold">Filter by difficulty</h2>
                <h2 className="text-[14px] text-[#030303] mt-2">Select level</h2>
            </div>
            <div className="flex flex-col w-[25%]"> 
                <h2 className="text-[16px] text-black font-bold">Filters</h2>
                <h2 className="text-[14px] text-[#030303] mt-2">Customize</h2>
            </div>
            <div className="flex items-center">
                <button className="w-[60px] h-[60px] bg-black rounded-[15px] flex items-center justify-center text-white hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
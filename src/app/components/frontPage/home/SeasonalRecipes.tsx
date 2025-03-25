"use client"
import { useState } from "react";

export default function SeasonalRecipes () {
    const [activeSeason, setActiveSeason] = useState<string>("Spring");

    // Function to determine the background color for a season button
    const getSeasonStyle = (season: string) => {
        if (season === activeSeason) {
            switch (season) {
                case "Spring": return "bg-green-500 text-white";
                case "Summer": return "bg-amber-500 text-white";
                case "Autumn": return "bg-orange-500 text-white";
                case "Winter": return "bg-blue-500 text-white";
                default: return "bg-green-500 text-white";
            }
        }
        return "bg-black text-white hover:bg-gray-800";
    };

    return(
        <>
            <div className="flex items-center justify-between w-full h-15">
                <h2 className="text-[20px]">Seasonal Recipes</h2>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        {["Spring", "Summer", "Autumn", "Winter"].map((season) => (
                            <div 
                                key={season}
                                className={`px-4 py-1.5 rounded-full ${getSeasonStyle(season)} text-sm font-medium cursor-pointer transition-colors duration-200`}
                                onClick={() => setActiveSeason(season)}
                            >
                                {season}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 ml-3">
                        <button className="font-semibold cursor-pointer text-[#FF6B35] hover:text-[#e55a29] transition-colors">View All</button>
                        <i className="ri-arrow-right-s-line text-xl text-[#FF6B35]"></i>
                    </div>
                </div>
            </div>
            <div className="">
                {/* Content will go here */}
            </div>
        </>
    )
}
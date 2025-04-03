"use client"
import { useState } from "react";
import Image from "next/image";
import { seasonalRecipes } from "@/app/data/HomeData";
import { useTheme } from '@/app/context/ThemeContext';

export default function SeasonalRecipes () {
    const { t } = useTheme();
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
        return "bg-black text-white hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700";
    };

    // Get the active season's color for accent elements
    const getSeasonColor = () => {
        switch (activeSeason) {
            case "Spring": return "bg-green-500";
            case "Summer": return "bg-amber-500";
            case "Autumn": return "bg-orange-500";
            case "Winter": return "bg-blue-500";
            default: return "bg-green-500";
        }
    };

    // Get the translated season name
    const getSeasonTranslation = (season: string) => {
        switch (season) {
            case "Spring": return t('seasonal.seasons.spring');
            case "Summer": return t('seasonal.seasons.summer');
            case "Autumn": return t('seasonal.seasons.autumn');
            case "Winter": return t('seasonal.seasons.winter');
            default: return season;
        }
    };

    return(
        <>
            <div className="flex items-center justify-between w-full h-15 [@media(max-width:860px)]:flex-col [@media(max-width:860px)]:items-start">
                <h2 className="text-[20px] dark:text-slate-200">{t('seasonal.title')}</h2>
                <div className="flex items-center gap-4 [@media(max-width:860px)]:mt-2 [@media(max-width:860px)]:justify-between [@media(max-width:860px)]:w-full">
                    <div className="flex items-center gap-3">
                        {["Spring", "Summer", "Autumn", "Winter"].map((season) => (
                            <div 
                                key={season}
                                className={`px-4 py-1.5 rounded-full ${getSeasonStyle(season)} text-sm font-medium cursor-pointer transition-colors duration-200`}
                                onClick={() => setActiveSeason(season)}
                            >
                                {getSeasonTranslation(season)}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 ml-3 max-sm:hidden">
                        <button className="font-semibold cursor-pointer text-[#FF6B35] hover:text-[#e55a29] dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">{t('seasonal.viewAll')}</button>
                        <i className="ri-arrow-right-s-line text-xl text-[#FF6B35] dark:text-indigo-400 cursor-pointer"></i>
                    </div>
                </div>
            </div>
            <div className="w-full h-[352px] mb-12 [@media(max-width:860px)]:overflow-x-auto overflow-y-hidden pb-5 [@media(max-width:860px)]:mt-2">
                <div className="grid grid-cols-3 gap-6 h-full mt-3 [@media(max-width:860px)]:w-[1200px]">
                    {seasonalRecipes[activeSeason as keyof typeof seasonalRecipes].map((recipe) => (
                        <div key={recipe.id} className="relative rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-lg dark:hover:shadow-black/30 w-full">
                            {/* Recipe image */}
                            <div className="h-full w-full relative">
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    fill
                                    sizes="(max-width: 860px) 100vw, 33vw"
                                    className="object-cover"
                                    priority
                                />
                                {/* Overlay - slightly darker in dark mode for better text contrast */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-black/80 dark:via-black/30"></div>
                            </div>
                            
                            {/* Recipe info */}
                            <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                                <div className={`${getSeasonColor()} w-fit px-3 py-1 rounded-full text-xs font-medium mb-2`}>
                                    {recipe.category}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{recipe.title}</h3>
                                <div className="flex items-center mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm">{recipe.time}</span>
                                </div>
                            </div>
                            
                            {/* Action button - appears on hover */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className={`${getSeasonColor()} p-2 rounded-full`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
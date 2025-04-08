"use client"
import { useState, useEffect } from "react";
import { useTheme } from '@/app/context/ThemeContext';
import { CookingTimeProps } from '@/app/types/filters';

const maxTime = 180; // Maximum time in minutes (3 hours)

export default function CookingTime({cookingTime, setCookingTime}: CookingTimeProps) {
    
    // State Variables & Hooks
    const [isModified, setIsModified] = useState<boolean>(false);
    const { t } = useTheme();
    
    // Reset isModified state when cookingTime is reset to 0
    useEffect(() => {
        if (cookingTime === 0) {
            setIsModified(false);
        }
    }, [cookingTime]);
    
    // Handle Change in Range Slider
    const handleCookingTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value >= 5 && value <= maxTime) {
            setCookingTime(value);
            setIsModified(true);
        }
    }

    // Format the time display
    const formatTime = (minutes: number) => {
        if (minutes < 60) {
            return `${minutes} ${t('advancedFilters.minutes')}`;
        } else {
            const hours = Math.floor(minutes / 60);
            const mins = minutes % 60;
            return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
        }
    };

    return(
        <>
            <div className={`bg-white dark:bg-gray-800 p-5 relative hover:z-10 hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-200
                ${isModified 
                    ? "border-l-4 border-indigo-500 dark:border-indigo-400 border-t border-r border-b border-t-gray-200 border-r-gray-200 border-b-gray-200 dark:border-t-gray-700 dark:border-r-gray-700 dark:border-b-gray-700" 
                    : "border border-gray-200 dark:border-gray-700"
                }`}>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{t('advancedFilters.filterSections.cookingTime')}</h2>
                <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{t('advancedFilters.upTo')}:</span>
                        <span className="font-medium text-indigo-600 dark:text-indigo-400">{formatTime(cookingTime)}</span>
                    </div>
                    
                    <input 
                        type="range" 
                        min="5" 
                        max={maxTime} 
                        step="5"
                        value={cookingTime} 
                        onChange={(e) => handleCookingTimeChange(e)}
                        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:accent-indigo-500"
                    />
                    
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>5 {t('advancedFilters.minutes')}</span>
                        <span>1h</span>
                        <span>2h</span>
                        <span>3h</span>
                    </div>
                </div>
            </div>
        </>
    )
}

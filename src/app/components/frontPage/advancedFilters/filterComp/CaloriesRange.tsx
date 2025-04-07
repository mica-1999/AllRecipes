"use client"
import { useState, useEffect } from "react";
import { useTheme } from '@/app/context/ThemeContext';
import { CaloriesRangeProps } from '@/app/types/filters';

// Valid Range for calories
const minCalories = 0;
const maxCalories = 2000;

export default function CaloriesRange({caloriesRange, setCaloriesRange}: CaloriesRangeProps) {
    const { t } = useTheme();
    // State Variables
    const [counter, setCounter] = useState(0);

    // Reset counter if caloriesRange is reset
    useEffect(() => {
        if (caloriesRange.min === 0 && caloriesRange.max === 2000) {
            setCounter(0);
        }
    }, [caloriesRange]);

    // Handle min value change
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value < caloriesRange.max - 50) {
            setCaloriesRange({...caloriesRange, min: value});
        }
        setCounter(counter + 1);
    };
    
    // Handle max value change
    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value > caloriesRange.min + 50) {
            setCaloriesRange({...caloriesRange, max: value});
        }
        setCounter(counter + 1);
    };
    
    return(
        <>
            <div className={`bg-white dark:bg-gray-800 p-5 border-[0.5px] border-gray-200 dark:border-gray-700 relative hover:z-10 hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-200
                ${counter > 0 ? "after:absolute after:top-0 after:right-0 after:h-4 after:w-4 after:rounded-full after:bg-indigo-500 dark:after:bg-indigo-400 after:-translate-y-1/2 after:translate-x-1/2" : ""}`}>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{t('advancedFilters.filterSections.caloriesRange')}</h2>
                <div className="flex flex-col space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{caloriesRange.min} {t('advancedFilters.calories')}</span>
                        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{caloriesRange.max} {t('advancedFilters.calories')}</span>
                    </div>
                    
                    {/* Simplified version with two separate sliders */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">{t('advancedFilters.minimumCalories')}:</label>
                            <input 
                                type="range" 
                                min={minCalories} 
                                max={maxCalories - 100} 
                                value={caloriesRange.min} 
                                step="50"
                                onChange={handleMinChange}
                                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:accent-indigo-500"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">{t('advancedFilters.maximumCalories')}:</label>
                            <input 
                                type="range" 
                                min={minCalories + 100} 
                                max={maxCalories} 
                                value={caloriesRange.max} 
                                step="50"
                                onChange={handleMaxChange}
                                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:accent-indigo-500"
                            />
                        </div>
                    </div>
                    
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>0 {t('advancedFilters.calories')}</span>
                        <span>500 {t('advancedFilters.calories')}</span>
                        <span>1000 {t('advancedFilters.calories')}</span>
                        <span>1500 {t('advancedFilters.calories')}</span>
                        <span>2000 {t('advancedFilters.calories')}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
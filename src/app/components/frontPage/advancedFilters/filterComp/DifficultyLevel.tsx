"use client"
import { useState, useEffect } from "react";
import { difficulties } from "@/app/data/AdvFiltersData";
import { useTheme } from '@/app/context/ThemeContext';
import { DifficultyLevelProps } from '@/app/types/filters';

export default function DifficultyLevel({difficultyLevel, setDifficultyLevel}: DifficultyLevelProps) {
    
    // State variables & Hooks
    const [counter, setCounter] = useState<number>(0);
    const { t } = useTheme();
    
    // Function to handle difficulty level selection
    const selectDifficulty = (difficulty: string) => {
        setDifficultyLevel(difficulty);
        setCounter(counter + 1);
    };
    
    // Reset radio buttons when difficultyLevel is empty
    useEffect(() => {
        if (!difficultyLevel) {
            setCounter(0);
            // Uncheck all radio buttons using DOM directly
            const radioButtons = document.querySelectorAll('input[name="difficulty"]') as NodeListOf<HTMLInputElement>;
            radioButtons.forEach(radio => {
                radio.checked = false;
            });
        }
    }, [difficultyLevel]);

    return(
        <>
            <div className={`bg-white dark:bg-gray-800 p-5 relative hover:z-10 hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-200
                ${difficultyLevel.length > 0 && counter > 0
                    ? "border-l-4 border-indigo-500 dark:border-indigo-400 border-t border-r border-b border-t-gray-200 border-r-gray-200 border-b-gray-200 dark:border-t-gray-700 dark:border-r-gray-700 dark:border-b-gray-700" 
                    : "border border-gray-200 dark:border-gray-700"
                }`}>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    {t('advancedFilters.filterSections.difficultyLevel')}
                    {difficultyLevel.length > 0 && counter > 0 && (
                        <span className="ml-2 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-0.5 rounded-full">
                            1
                        </span>
                    )}
                </h2>
                
                <div className="flex flex-col space-y-3">
                    {difficulties.map((difficulty) => (
                        <div key={difficulty.value} className="flex items-center">
                            <input
                                id={`difficulty-${difficulty.value}`}
                                type="radio"
                                name="difficulty"
                                checked={difficultyLevel === difficulty.value}
                                onChange={() => selectDifficulty(difficulty.value)}
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-400 border-gray-300 dark:border-gray-600 cursor-pointer"
                            />
                            <label 
                                htmlFor={`difficulty-${difficulty.value}`}
                                className="ml-3 flex items-center cursor-pointer"
                            >
                                <span className={`px-2 py-1 rounded text-xs font-medium border ${difficulty.color}`}>
                                    {t(`advancedFilters.difficulty.${difficulty.value.toLowerCase()}`)}
                                </span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

"use client"
import { useState } from "react";
import { difficulties } from "@/app/dataItems/AdvFiltersData";

interface DifficultyLevelProps {
    difficultyLevel: string;
    setDifficultyLevel: (value: string) => void;
}

export default function DifficultyLevel({difficultyLevel, setDifficultyLevel}: DifficultyLevelProps) {
    // State variables
    const [counter , setCounter] = useState<number>(0);
    
    // Function to handle difficulty level selection
    const selectDifficulty = (difficulty: string) => {
        setDifficultyLevel(difficulty);
        setCounter(counter + 1);
    };

    return(
        <>
            <div className={`bg-white p-5 ${difficultyLevel.length > 0 && counter > 0 ? "border-[2.5px] border-green-500": "border-[0.5px] border-gray-200"} relative hover:z-10 hover:shadow-lg transition-all duration-200`}>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Difficulty Level</h2>
                <div className="flex flex-col space-y-3">
                    {difficulties.map((difficulty) => (
                        <div key={difficulty.value} className="flex items-center">
                            <input
                                id={`difficulty-${difficulty.value}`}
                                type="radio"
                                name="difficulty"
                                checked={difficultyLevel === difficulty.value}
                                onChange={() => selectDifficulty(difficulty.value)}
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 cursor-pointer"
                            />
                            <label 
                                htmlFor={`difficulty-${difficulty.value}`}
                                className="ml-3 flex items-center cursor-pointer"
                            >
                                <span className={`px-2 py-1 rounded text-xs font-medium border ${difficulty.color}`}>
                                    {difficulty.value}
                                </span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

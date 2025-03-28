"use client"
import { useState } from "react";

interface CaloriesRangeProps {
    caloriesRange: {
        min: number;
        max: number;
    };
    setCaloriesRange: (value: { min: number; max: number }) => void;
}

export default function CaloriesRange({caloriesRange, setCaloriesRange}: CaloriesRangeProps) {
    const [counter , setCounter] = useState(0);
    
    const minCalories = 0;
    const maxCalories = 2000;
    
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
            <div className={`bg-white p-5 ${counter > 0 ? "border-[2.5px] border-green-500": "border-[0.5px] border-gray-200"} relative hover:z-10 hover:shadow-lg transition-all duration-200`}>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Calories Range</h2>
                <div className="flex flex-col space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-indigo-600">{caloriesRange.min} cal</span>
                        <span className="text-sm font-medium text-indigo-600">{caloriesRange.max} cal</span>
                    </div>
                    
                    {/* Simplified version with two separate sliders */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Minimum calories:</label>
                            <input 
                                type="range" 
                                min={minCalories} 
                                max={maxCalories - 100} 
                                value={caloriesRange.min} 
                                step="50"
                                onChange={handleMinChange}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Maximum calories:</label>
                            <input 
                                type="range" 
                                min={minCalories + 100} 
                                max={maxCalories} 
                                value={caloriesRange.max} 
                                step="50"
                                onChange={handleMaxChange}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                        </div>
                    </div>
                    
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>0 cal</span>
                        <span>500 cal</span>
                        <span>1000 cal</span>
                        <span>1500 cal</span>
                        <span>2000 cal</span>
                    </div>
                </div>
            </div>
        </>
    )
}

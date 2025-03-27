"use client"
import { useState, useEffect } from "react";

interface CaloriesRangeProps {
    caloriesRange: string[];
    setCaloriesRange: (value: string[]) => void;
}

export default function CaloriesRange({caloriesRange, setCaloriesRange}: CaloriesRangeProps) {
    const [minValue, setMinValue] = useState(200);
    const [maxValue, setMaxValue] = useState(800);
    
    const minCalories = 0;
    const maxCalories = 2000;
    
    // Handle min value change
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value < maxValue - 50) {
            setMinValue(value);
        }
    };
    
    // Handle max value change
    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value > minValue + 50) {
            setMaxValue(value);
        }
    };
    
    // Update parent component when range values change
    useEffect(() => {
        setCaloriesRange([`${minValue}-${maxValue} cal`]);
    }, [minValue, maxValue, setCaloriesRange]);
    
    return(
        <>
            <div className="bg-white p-5 border-[0.5px] border-gray-200 relative hover:z-10 hover:shadow-lg transition-all duration-200">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Calories Range</h2>
                <div className="flex flex-col space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-indigo-600">{minValue} cal</span>
                        <span className="text-sm font-medium text-indigo-600">{maxValue} cal</span>
                    </div>
                    
                    {/* Simplified version with two separate sliders */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Minimum calories:</label>
                            <input 
                                type="range" 
                                min={minCalories} 
                                max={maxCalories - 100} 
                                value={minValue} 
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
                                value={maxValue} 
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

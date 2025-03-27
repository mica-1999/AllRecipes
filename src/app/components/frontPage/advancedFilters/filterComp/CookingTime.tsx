"use client"
import { useState, useEffect } from "react";

interface CookingTimeProps {
    cookingTime: string[];
    setCookingTime: (value: string[]) => void;
}

export default function CookingTime({cookingTime, setCookingTime}: CookingTimeProps) {
    const [rangeValue, setRangeValue] = useState(30); // Default to 30 minutes
    const maxTime = 180; // Maximum time in minutes (3 hours)
    
    // Update parent component when range value changes
    useEffect(() => {
        setCookingTime([`${rangeValue} minutes`]);
    }, [rangeValue, setCookingTime]);
    
    // Format the time display
    const formatTime = (minutes: number) => {
        if (minutes < 60) {
            return `${minutes} mins`;
        } else {
            const hours = Math.floor(minutes / 60);
            const mins = minutes % 60;
            return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
        }
    };

    return(
        <>
            <div className="bg-white p-5 border-[0.5px] border-gray-200 relative hover:z-10 hover:shadow-lg transition-all duration-200">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Cooking Time</h2>
                <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Up to:</span>
                        <span className="font-medium text-indigo-600">{formatTime(rangeValue)}</span>
                    </div>
                    
                    <input 
                        type="range" 
                        min="5" 
                        max={maxTime} 
                        step="5"
                        value={rangeValue} 
                        onChange={(e) => setRangeValue(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    />
                    
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>5 mins</span>
                        <span>1h</span>
                        <span>2h</span>
                        <span>3h</span>
                    </div>
                </div>
            </div>
        </>
    )
}

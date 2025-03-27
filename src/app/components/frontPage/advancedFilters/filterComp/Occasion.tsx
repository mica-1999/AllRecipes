"use client"
import { useState } from "react";

interface OccasionProps {
    occasion: string[];
    setOccasion: (value: string[]) => void;
}

export default function Occasion({occasion, setOccasion}: OccasionProps) {
    const occasions = [
        "Birthday", "Holiday", "Casual", "Date Night", 
        "Thanksgiving", "Christmas", "Wedding", "BBQ", 
        "Game Day", "Picnic", "Brunch", "Potluck"
    ];
    
    const toggleOccasion = (value: string) => {
        if (occasion.includes(value)) {
            setOccasion(occasion.filter(item => item !== value));
        } else {
            setOccasion([...occasion, value]);
        }
    };

    return(
        <>
            <div className={`bg-white p-5 ${occasion.length > 0 ? "border-[2.5px] border-green-500": "border-[0.5px] border-gray-200"} relative hover:z-10 hover:shadow-lg transition-all duration-200`}>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Occasion</h2>
                <div className="flex flex-wrap gap-2">
                    {occasions.map((item) => (
                        <div 
                            key={item}
                            onClick={() => toggleOccasion(item)}
                            className={`px-3 py-1.5 rounded-md text-sm cursor-pointer select-none transition-colors ${
                                occasion.includes(item)
                                    ? 'bg-indigo-100 text-indigo-800 font-medium border-2 border-indigo-300'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                            }`}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

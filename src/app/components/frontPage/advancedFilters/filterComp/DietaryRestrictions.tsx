"use client"
import { useState } from "react";

interface DietaryRestrictionsProps {
    dietaryRestrictions: string[];
    setDietaryRestrictions: (value: string[]) => void;
}

export default function DietaryRestrictions({dietaryRestrictions, setDietaryRestrictions}: DietaryRestrictionsProps) {
    const restrictions = [
        { id: "vegetarian", label: "Vegetarian" },
        { id: "vegan", label: "Vegan" },
        { id: "glutenFree", label: "Gluten-Free" },
        { id: "dairyFree", label: "Dairy-Free" },
        { id: "nutFree", label: "Nut-Free" },
        { id: "lowCarb", label: "Low Carb" },
    ];
    
    const toggleRestriction = (restriction: string) => {
        if (dietaryRestrictions.includes(restriction)) {
            setDietaryRestrictions(dietaryRestrictions.filter(item => item !== restriction));
        } else {
            setDietaryRestrictions([...dietaryRestrictions, restriction]);
        }
    };

    return(
        <>
            <div className={`bg-white p-5 ${dietaryRestrictions.length > 0 ? "border-[2.5px] border-green-500": "border-[0.5px] border-gray-200"} relative hover:z-10 hover:shadow-lg transition-all duration-200`}>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Dietary Restrictions</h2>
                <div className="grid grid-cols-2 gap-2">
                    {restrictions.map((restriction) => (
                        <div 
                            key={restriction.id}
                            className="flex items-center"
                        >
                            <input
                                id={restriction.id}
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                                checked={dietaryRestrictions.includes(restriction.label)}
                                onChange={() => toggleRestriction(restriction.label)}
                            />
                            <label 
                                htmlFor={restriction.id}
                                className="ml-2 text-sm text-gray-700 cursor-pointer"
                            >
                                {restriction.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

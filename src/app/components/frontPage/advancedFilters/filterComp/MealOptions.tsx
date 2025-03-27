"use client"
import { useState, useEffect, useRef } from "react";

interface MealOptionsProps {
    mealTypeFilter: string[];
    setMealTypeFilter: (value: string[]) => void;
}

export default function MealOptions({mealTypeFilter, setMealTypeFilter}: MealOptionsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const cuisineOptions = [
        "Italian", "Chinese", "Mexican", "Indian", "Japanese", 
        "Thai", "French", "Greek", "Spanish", "Mediterranean", 
        "American", "Korean", "Vietnamese", "Middle Eastern", "Brazilian"
    ];
    
    // Filter options based on search term
    const filteredOptions = cuisineOptions.filter(cuisine => 
        cuisine.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Toggle selection of a cuisine
    const toggleCuisine = (cuisine: string) => {
        if (mealTypeFilter.includes(cuisine)) {
            setMealTypeFilter(mealTypeFilter.filter(item => item !== cuisine));
        } else {
            setMealTypeFilter([...mealTypeFilter, cuisine]);
        }
    };
    
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        console.log("mealTypeFilter", mealTypeFilter);


    },[])

    return(
        <>
            <div className={`bg-white p-5  ${mealTypeFilter.length > 0 ? "border-[2.5px] border-green-500": "border-[0.5px] border-gray-200"} relative hover:z-10 hover:shadow-lg transition-all duration-200`}>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Cuisine Type</h2>
                <div className="relative" ref={dropdownRef}>
                    <div 
                        className="w-full px-4 py-2 rounded-md border border-gray-300 flex items-center justify-between cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={mealTypeFilter.length ? "text-gray-800" : "text-gray-500"}>
                            {mealTypeFilter.length ? mealTypeFilter.join(", ") : "Italian, Chinese, Mexican..."}
                        </span>
                        <svg className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                    
                    {isOpen && (
                        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-60 overflow-auto border border-gray-200 z-52">
                            <div className="sticky top-0 bg-white p-2 border-b border-gray-200 relative">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search cuisines..."
                                        className="w-full px-3 py-1.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 pr-8"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    {searchTerm && (
                                        <i 
                                            className="ri-eraser-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSearchTerm("");
                                            }}
                                        ></i>
                                    )}
                                </div>
                            </div>
                            <div className="p-2">
                                {filteredOptions.map((cuisine) => (
                                    <div 
                                        key={cuisine} 
                                        className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer rounded-md"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleCuisine(cuisine);
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                            checked={mealTypeFilter.includes(cuisine)}
                                            onChange={() => {}}
                                        />
                                        {cuisine}
                                    </div>
                                ))}
                                {filteredOptions.length === 0 && (
                                    <div className="px-3 py-2 text-sm text-gray-500">No cuisines found</div>
                                )}
                                
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
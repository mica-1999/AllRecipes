"use client"
import { useState, useRef, useMemo } from "react";
import { useClickOutside } from "@/app/components/reusable/ClickOutsideDiv";
import { useTheme } from '@/app/context/ThemeContext';
import { MealOptionsProps } from '@/app/types/filters';

export default function MealOptions({ cuisineFilter, setCuisineFilter }: MealOptionsProps) {


    // State Variables & Hooks
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { t, tArray } = useTheme();

    // Listener for click outside to close the dropdown
    useClickOutside(dropdownRef, setIsOpen);

    // Get cuisine options from translations and filter them based on search term
    const filteredOptions = useMemo(() => {
        return tArray<string>('advancedFilters.cuisineOptions').filter(cuisine =>
            cuisine.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, tArray]);

    // Toggle selection of a cuisine
    const toggleCuisine = (cuisine: string) => {
        if (cuisineFilter.includes(cuisine)) {
            setCuisineFilter(cuisineFilter.filter(item => item !== cuisine));
        } else {
            setCuisineFilter([...cuisineFilter, cuisine]);
        }
    };

    return (
        <>
            <div className={`bg-white dark:bg-gray-800 p-5 relative hover:z-10 hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-200
                ${cuisineFilter.length > 0
                    ? "border-l-4 border-indigo-500 dark:border-indigo-400 border-t border-r border-b border-t-gray-200 border-r-gray-200 border-b-gray-200 dark:border-t-gray-700 dark:border-r-gray-700 dark:border-b-gray-700"
                    : "border border-gray-200 dark:border-gray-700"
                }`}>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    {t('advancedFilters.filterSections.mealOptions')}
                    {cuisineFilter.length > 0 && (
                        <span className="ml-2 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-0.5 rounded-full">
                            {cuisineFilter.length}
                        </span>
                    )}
                </h2>

                <div className="relative" ref={dropdownRef}>
                    <div
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 flex items-center justify-between cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={cuisineFilter.length ? "text-gray-800 dark:text-white" : "text-gray-500 dark:text-gray-400"}>
                            {cuisineFilter.length ? cuisineFilter.join(", ") : t('advancedFilters.cuisinePlaceholder')}
                        </span>
                        <svg className={`h-5 w-5 text-gray-400 dark:text-gray-300 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>

                    {isOpen && (
                        <div className="absolute z-40 mt-1 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg dark:shadow-black/30 max-h-60 overflow-auto border border-gray-200 dark:border-gray-700">
                            <div className="sticky top-0 bg-white dark:bg-gray-800 p-2 border-b border-gray-200 dark:border-gray-700">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder={t('advancedFilters.search')}
                                        className="w-full px-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 pr-8"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    {searchTerm && (
                                        <i
                                            className="ri-eraser-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300"
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
                                        className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-md"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleCuisine(cuisine);
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-400 border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                                            checked={cuisineFilter.includes(cuisine)}
                                            onChange={() => { }}
                                        />
                                        <span className="dark:text-gray-200">{cuisine}</span>
                                    </div>
                                ))}
                                {filteredOptions.length === 0 && (
                                    <div className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">{t('advancedFilters.noCuisinesFound')}</div>
                                )}

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
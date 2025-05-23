"use client"
import { useState, KeyboardEvent } from "react";
import { useTheme } from '@/app/context/ThemeContext';
import { IngredientsProps } from '@/app/types/filters';
import FilterModeToggle from "@/app/components/frontPage/advancedFilters/filterComp/FilterModeToggle";

export default function Ingredients({ ingredients, setIngredients, exactMatchIngredients, setExactMatchIngredients }: IngredientsProps) {

    // State Variables & Hooks
    const [inputValue, setInputValue] = useState<string>("");
    const { t } = useTheme();

    // Add Ingredient Function
    const addIngredient = (ingredient: string) => {
        const trimmed = ingredient.trim();
        if (trimmed && !ingredients.includes(trimmed)) {
            setIngredients([...ingredients, trimmed]);
        }
        setInputValue("");
    };

    // Remove Ingredient Function
    const removeIngredient = (ingredient: string) => {
        setIngredients(ingredients.filter(item => item !== ingredient));
    };

    // On KeyPress Event Handler
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addIngredient(inputValue);
        }
    };

    return (
        <>
            <div className={`bg-white dark:bg-gray-800 p-5 relative hover:z-10 hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-200
                ${ingredients.length > 0
                    ? "border-l-4 border-indigo-500 dark:border-indigo-400 border-t border-r border-b border-t-gray-200 border-r-gray-200 border-b-gray-200 dark:border-t-gray-700 dark:border-r-gray-700 dark:border-b-gray-700"
                    : "border border-gray-200 dark:border-gray-700"
                }`}>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    {t('advancedFilters.filterSections.ingredients')}
                    {ingredients.length > 0 && (
                        <span className="ml-2 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-0.5 rounded-full">
                            {ingredients.length}
                        </span>
                    )}
                </h2>

                {ingredients.length > 1 && (
                    <FilterModeToggle
                        isExactMatch={exactMatchIngredients}
                        setIsExactMatch={setExactMatchIngredients}
                        tooltipText={{
                            all: t('advancedFilters.matchAllIngredients') || "Match all ingredients (AND)",
                            any: t('advancedFilters.matchAnyIngredient') || "Match any ingredient (OR)"
                        }}
                    />
                )}

                <div className="space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder={t('advancedFilters.addIngredientsEnter')}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                        />
                        <button
                            onClick={() => addIngredient(inputValue)}
                            className="absolute right-2 top-2 p-1 rounded-md bg-indigo-500 dark:bg-indigo-600 text-white hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors cursor-pointer"
                        >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                    </div>

                    {ingredients.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {ingredients.map((ingredient, index) => (
                                <div
                                    key={index}
                                    className="bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full text-sm flex items-center"
                                >
                                    {ingredient}
                                    <button
                                        onClick={() => removeIngredient(ingredient)}
                                        className="ml-1.5 text-indigo-500 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-100 cursor-pointer"
                                    >
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {ingredients.length > 1 && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {exactMatchIngredients
                                ? t('advancedFilters.showingAllIngredients') || "Showing recipes with all ingredients"
                                : t('advancedFilters.showingAnyIngredient') || "Showing recipes with any of these ingredients"
                            }
                        </p>
                    )}
                </div>
            </div>
        </>
    )
}

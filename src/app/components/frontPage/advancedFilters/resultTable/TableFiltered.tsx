"use client"
import { useState, useEffect, useCallback } from "react";
import { Recipe } from '@/app/types/recipe';
import { showToast } from "@/app/components/reusable/Toasters";
import { useTheme } from '@/app/context/ThemeContext';
import { TableFilteredProps } from '@/app/types/filters';
import TableHeader from './Headers/TableHeader';
import ResultData from './Content/ResultData';

export default function TableFiltered({
    mainFilterMenu,
    cuisineFilter,
    mealType,
    cookingTime,
    dietaryRestrictions,
    exactMatchDiet,
    ingredients,
    exactMatchIngredients,
    difficultyLevel,
    caloriesRange,
    cookingMethod,
    occasion,
    exactMatchOccasion,
    seasonChoice,
    onResetFilters,
    searchQuery,
    setSearchQuery,
    sortField,
    setSortField,
    sortOrder,
    setSortOrder,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
}: TableFilteredProps) {

    // State variables & hooks
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const { t, savedTheme } = useTheme();

    // Function to handle sorting based on the selected header
    useEffect(() => {
        if (mainFilterMenu === "Top Rated") {
            setSortField("rating");
            setSortOrder("desc");
        } else if (mainFilterMenu === "Popular") {
            setSortField("viewcount");
            setSortOrder("desc");
        } else if (mainFilterMenu === "Latest") {
            setSortField("createdat");
            setSortOrder("desc");
        }
    }, [mainFilterMenu]);

    // Function to handle sorting when a table header is clicked
    const handleSort = (field: string) => {
        if (sortField === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortOrder('desc');
        }
    };

    // Update fetchRecipes to include search query
    const fetchRecipes = useCallback(async () => {
        try {
            const params = new URLSearchParams();

            if (mainFilterMenu === "Seasonal") {
                if (seasonChoice && seasonChoice !== "") {
                    params.append('season', seasonChoice);
                }
            }
            else if (mainFilterMenu === "Top Rated" && sortField !== "viewcount") {
                params.append('sortBy', 'rating');
                params.append('order', sortOrder);
            }
            else if (mainFilterMenu === "Popular" && sortField !== "rating") {
                params.append('sortBy', 'viewcount');
                params.append('order', sortOrder);
            }
            else if (mainFilterMenu === "Latest") {
                params.append('sortBy', 'createdat');
                params.append('order', sortOrder);
            }
            else if (mainFilterMenu === "Random") {
                params.append('random', 'true');
                params.append('limit', '1');
            }
            else {
                params.append('mainFilterMenu', mainFilterMenu);
            }

            if (cuisineFilter.length > 0) params.append('cuisine', cuisineFilter.join(','));
            if (mealType.length > 0) params.append('mealType', mealType.join(','));
            if (cookingTime > 0) params.append('cookingTime', cookingTime.toString());
            if (dietaryRestrictions.length > 0) params.append('diet', dietaryRestrictions.join(','));
            if (ingredients.length > 0) params.append('ingredients', ingredients.join(','));
            if (difficultyLevel) params.append('difficulty', difficultyLevel);
            if (caloriesRange.min > 0) params.append('caloriesMin', caloriesRange.min.toString());
            if (caloriesRange.max < 2000) params.append('caloriesMax', caloriesRange.max.toString());
            if (cookingMethod.length > 0) params.append('method', cookingMethod.join(','));
            if (occasion.length > 0) params.append('occasion', occasion.join(','));
            if (startDate) params.append('startDate', startDate);
            if (endDate) params.append('endDate', endDate);
            if (searchQuery && searchQuery.trim() !== "") params.append('search', searchQuery.trim());
            params.append('exactMatchDiet', exactMatchDiet.toString());
            params.append('exactMatchIngredients', exactMatchIngredients.toString());
            params.append('exactMatchOccasion', exactMatchOccasion.toString());

            if (!params.has('sortBy') && !params.has('order')) {
                params.append('sortBy', sortField);
                params.append('order', sortOrder);
            }

            const queryString = params.toString();
            const url = `/api/recipes${queryString ? `?${queryString}` : ''}`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                setRecipes(data.recipes);
            }
        } catch (error) {
            console.error("Error fetching recipes:", error);
            showToast("error", "Error fetching recipes. Please try again later.", savedTheme);
        }
    }, [
        mainFilterMenu, cuisineFilter, mealType, cookingTime, dietaryRestrictions,
        exactMatchDiet, ingredients, exactMatchIngredients, difficultyLevel,
        caloriesRange, cookingMethod, occasion, exactMatchOccasion, seasonChoice,
        sortField, sortOrder, savedTheme, startDate, endDate, searchQuery
    ]);

    // Fetch recipes when the component mounts or when any of the dependencies change
    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);

    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-black/20 overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="px-6 py-5 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{t('tableFiltered.title')}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('tableFiltered.description')}</p>
                    </div>

                    {/* Search box */}
                    <div className="relative min-w-[240px]">
                        <input
                            type="text"
                            placeholder={t('tableFiltered.searchRecipes') || "Search recipes..."}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-10 pl-10 pr-4 py-2 text-sm rounded-lg border border-gray-300 
                              dark:border-gray-600 dark:bg-gray-700 dark:text-white 
                              placeholder-gray-400 dark:placeholder-gray-400
                              focus:outline-none focus:ring-2 focus:ring-[#FF6B35] dark:focus:ring-indigo-400
                              focus:border-[#FF6B35] dark:focus:border-indigo-400 transition-colors"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400 dark:text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        {searchQuery && (
                            <button
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
                                onClick={() => setSearchQuery("")}
                                aria-label="Clear search"
                            >
                                <i className="ri-close-line"></i>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <TableHeader
                sortField={sortField}
                sortOrder={sortOrder}
                handleSort={handleSort}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
            />

            <div className="flex flex-col w-full">
                <ResultData
                    recipes={recipes}
                    onResetFilters={onResetFilters}
                />
            </div>
        </div>
    );
}
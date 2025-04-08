"use client"
import { useState, useEffect } from "react";
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
    onResetFilters
}: TableFilteredProps) {
    // State variables & Hooks
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [sortField, setSortField] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
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

    // Function to fetch recipes based on the selected filters
    const fetchRecipes = async () => {
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
            else if (mainFilterMenu === "Latest" && sortField !== "createdat") {
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
            params.append('exactMatchDiet', exactMatchDiet.toString());
            params.append('exactMatchIngredients', exactMatchIngredients.toString());
            params.append('exactMatchOccasion', exactMatchOccasion.toString());
            
            if (sortField && sortOrder && sortField !== "") {
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
    };

    // Fetch recipes when the component mounts or any of the dependencies change
    useEffect(() => {
        fetchRecipes();
    }, [
        mainFilterMenu, cuisineFilter, mealType, cookingTime, dietaryRestrictions,
        exactMatchDiet, ingredients, exactMatchIngredients, difficultyLevel,
        caloriesRange, cookingMethod, occasion, exactMatchOccasion, seasonChoice, 
        sortField, sortOrder
    ]);

    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-black/20 overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="px-6 py-5 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{t('tableFiltered.title')}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('tableFiltered.description')}</p>
            </div>
            
            <TableHeader 
                sortField={sortField} 
                sortOrder={sortOrder} 
                handleSort={handleSort} 
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
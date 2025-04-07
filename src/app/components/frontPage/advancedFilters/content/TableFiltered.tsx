"use client"
import Image from "next/image"
import { listHeaders } from "@/app/data/AdvFiltersData"
import { useTheme } from '@/app/context/ThemeContext';
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { TableFilteredProps } from '@/app/types/filters';
import { Recipe } from '@/app/types/recipe';
import Link from "next/link";

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

    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const { t, theme } = useTheme();
    
    // Translating the header labels
    const getHeaderTranslation = (header: string) => {
        switch (header) {
            case "Recipe Name": return t('tableFiltered.headers.recipeName');
            case "Views": return t('tableFiltered.headers.views');
            case "Rating": return t('tableFiltered.headers.rating');
            case "Actions": return t('tableFiltered.headers.actions');
            default: return header;
        }
    };

    const fetchRecipes = async () => {
        try {
            // Build query parameters from filters
            const params = new URLSearchParams();
            
            // Handle special case for Seasonal filter
            if (mainFilterMenu === "Seasonal") {
                if (seasonChoice && seasonChoice !== "") {
                    params.append('season', seasonChoice);
                }
            }
            else if (mainFilterMenu === "Top Rated") {
                
            } 
            else {
                params.append('mainFilterMenu', mainFilterMenu);
            }
            
            // Add all filters to query params - only add non-empty values
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
            
            // Create the URL with parameters
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
            toast.error("Error fetching recipes. Please try again later.", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: theme.toLowerCase() === "dark" ? "dark" : "light"
            });
        }
    }

    useEffect(() => {
        fetchRecipes();
    },[cuisineFilter, mealType, cookingTime, dietaryRestrictions, exactMatchDiet, ingredients, exactMatchIngredients, difficultyLevel, caloriesRange, cookingMethod, occasion, exactMatchOccasion, seasonChoice]);
    
    return(
        <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-black/20 overflow-hidden border border-gray-200 dark:border-gray-700">
            {/* Header Title */}
            <div className="px-6 py-5 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{t('tableFiltered.title')}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('tableFiltered.description')}</p>
            </div>
            
            {/* Table Header - Fixed alignment */}
            <div id="tableHeaders" className="flex w-full bg-gray-50 dark:bg-gray-700/60 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium text-sm">
                {listHeaders.map((header, index) => (
                    <div key={index} className={`
                        py-4 flex items-center
                        ${header === "Recipe Name" ? "w-2/3 md:w-1/2 px-6" : ""}
                        ${header === "Views" ? "w-0 md:w-1/6 hidden md:flex justify-center font-semibold text-[#FF6B35] dark:text-indigo-300" : ""}
                        ${header === "Rating" ? "w-0 md:w-1/6 hidden md:flex justify-center font-semibold text-[#FF6B35] dark:text-indigo-300" : ""}
                        ${header === "Actions" ? "w-1/3 md:w-1/6 justify-center" : ""}
                    `}>
                        {getHeaderTranslation(header)}
                        {(header === "Views" || header === "Rating") && (
                            <button className="ml-1.5 text-gray-400 dark:text-gray-400 hover:text-[#FF6B35] dark:hover:text-indigo-300">
                                <i className="ri-arrow-up-down-line text-xs"></i>
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* Table Body - Fixed alignment to match headers */}
            <div id="table" className="flex flex-col w-full">
                {recipes.length > 0 ? recipes.map((recipe, index) => (
                    <Link href={`/pages/home/recipeDetails?id=${recipe.id}`} key={index}>
                        <div 
                                id={`item-${index}`} 
                                className={`
                                    w-full flex transition-colors duration-150
                                    hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0 cursor-pointer
                                    ${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50/30 dark:bg-gray-800'}
                                `} 
                        >
                            {/* Recipe Name with Image */}
                            <div id="recipeName" className="flex items-center gap-4 w-2/3 md:w-1/2 px-6 py-4">
                                <div id="image" className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] rounded-lg relative overflow-hidden shadow-md dark:shadow-black/30 border border-gray-200 dark:border-gray-700">
                                    <Image 
                                        src={recipe.image} 
                                        alt={recipe.title} 
                                        fill 
                                        className="object-cover object-center rounded-lg" 
                                        sizes="(max-width: 640px) 80px, (max-width: 768px) 90px, 100px" 
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h1 className="font-medium text-gray-800 dark:text-white text-lg line-clamp-1">
                                        {recipe.title}
                                    </h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1 mt-1">
                                        {recipe.description}
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                                            {recipe.categorytype}
                                        </span>
                                        <span className={`
                                            px-2.5 py-1 rounded-full text-xs font-medium
                                            ${recipe.difficulty === "Easy" ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400" : ""}
                                            ${recipe.difficulty === "Medium" ? "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400" : ""}
                                            ${recipe.difficulty === "Hard" ? "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400" : ""}
                                        `}>
                                            {recipe.difficulty}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Views - Fixed alignment to match header */}
                            <div id="views" className="w-0 md:w-1/6 hidden md:flex items-center justify-center py-4">
                                <div className="flex flex-col items-center text-center">
                                    <span className="text-xl font-bold text-gray-800 dark:text-white">{recipe.viewcount.toLocaleString()}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t('tableFiltered.viewsLabel')}</span>
                                </div>
                            </div>
                            
                            {/* Rating - Fixed alignment to match header */}
                            <div id="rating" className="w-0 md:w-1/6 hidden md:flex items-center justify-center py-4">
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex items-center">
                                        <span className="text-xl font-bold text-gray-800 dark:text-white mr-1">{recipe.rating}</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">{t('tableFiltered.outOf5')}</span>
                                    </div>
                                    <div className="flex mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <i 
                                                key={i}
                                                className={`text-base ${i < Math.floor(recipe.rating || 0) ? "ri-star-fill text-amber-400 dark:text-amber-300" : "ri-star-line text-gray-300 dark:text-gray-600"}`}
                                            ></i>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Actions - Fixed alignment to match header */}
                            <div id="actions" className="w-1/3 md:w-1/6 flex items-center justify-center py-4">
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                    <i className="ri-bookmark-line text-lg"></i>
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                                    <i className="ri-folder-add-line text-lg"></i>
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                                    <i className="ri-file-list-line text-lg"></i>
                                </button>
                            </div>
                        </div>
                    </Link>
                )) : (
                    <div className="w-full flex flex-col items-center justify-center py-16 px-4">
                        <div className="w-24 h-24 mb-6 text-gray-300 dark:text-gray-600">
                            <i className="ri-file-search-line text-8xl"></i>
                        </div>
                        <p className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2 text-center">
                            {t('tableFiltered.noResults')}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 text-center max-w-md">
                            {t('tableFiltered.tryAdjusting')}
                        </p>
                        <button 
                            onClick={(e) => {
                                e.preventDefault();
                                if (onResetFilters) {
                                    onResetFilters();
                                }
                            }}
                            className="px-5 py-2.5 bg-[#FF6B35] hover:bg-[#e85f2c] dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center gap-2 shadow-md cursor-pointer"
                        >
                            <i className="ri-refresh-line"></i>
                            {t('tableFiltered.resetFilters')}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
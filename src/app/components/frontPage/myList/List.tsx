import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import { showToast } from "../../reusable/Toasters";
import { PrepareRecipe } from "@/app/types/recipe";
import { useState, useEffect } from "react";

export default function List({ recipes, searchBox, setSearchBox }: { recipes: PrepareRecipe[], searchBox: string, setSearchBox: (value: string) => void }) {

    // State variables & hooks
    const { t, savedTheme } = useTheme();
    const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
    const [tempRecipes, setTempRecipes] = useState<PrepareRecipe[]>(recipes);

    // Update when recipes change
    useEffect(() => {
        setTempRecipes(recipes);
    }, [recipes]);

    // Filter recipes by search box input
    const filteredRecipes = tempRecipes.filter((recipe) =>
        recipe.Recipe.title.toLowerCase().includes(searchBox.toLowerCase())
    );

    // Function to format date
    const formatDate = (dateString: string | null | undefined) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }).format(date);
    };

    // API call to delete a recipe from the preparation list
    const handleDelete = async (recipeId: number) => {
        try {
            // Illusion of instant feedback: remove the recipe from the UI immediately
            setTempRecipes(current => current.filter(recipe => recipe.recipeid !== recipeId));

            const response = await fetch(`/api/myList/prepareList?recipeid=${recipeId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                showToast('success', t('myList.recipeRemoved') || 'Recipe removed from preparation list', savedTheme);
            } else {
                // If the API call fails, revert the to default state
                setTempRecipes(recipes);
                showToast('error', t('myList.errorRemovingRecipe') || 'Failed to remove recipe', savedTheme);
            }
        } catch (error) {
            setTempRecipes(recipes);
            console.error('Error deleting recipe:', error);
            showToast('error', t('myList.errorRemovingRecipe') || 'Failed to remove recipe', savedTheme);
        }
    };

    return (
        <>
            <div className="py-2 mb-10">
                <div className="flex items-center justify-between mb-6 px-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
                        <span className="bg-indigo-100 dark:bg-indigo-900/20 p-2 rounded-lg mr-2">
                            <i className="ri-knife-line text-indigo-600 dark:text-indigo-400"></i>
                        </span>
                        {t('myList.prepareList')}
                        <span className="ml-3 text-sm font-normal text-gray-500 dark:text-gray-400">
                            ({tempRecipes.length})
                        </span>
                    </h2>
                </div>

                {filteredRecipes.length === 0 ? (
                    <div className="w-full py-16 flex flex-col items-center justify-center">
                        <div className="p-6 bg-indigo-100 dark:bg-indigo-900/20 rounded-full mb-4">
                            {tempRecipes.length === 0 ? (
                                <i className="ri-inbox-line text-3xl text-indigo-600 dark:text-indigo-400"></i>
                            ) : (
                                <i className="ri-search-line text-3xl text-indigo-600 dark:text-indigo-400"></i>
                            )}
                        </div>
                        <p className="text-gray-700 dark:text-gray-200 font-medium">
                            {tempRecipes.length === 0
                                ? t('myList.noRecipes')
                                : t('myList.noMatchingPrepareRecipes')}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm text-center mt-2">
                            {tempRecipes.length === 0
                                ? t('myList.prepareListDescription')
                                : t('myList.tryAnotherSearch')}
                        </p>
                        {tempRecipes.length === 0 ? (
                            <Link
                                href="/pages/home/advancedFilters"
                                className="mt-6 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center gap-2"
                            >
                                <i className="ri-search-line"></i>
                                {t('myList.browseRecipes')}
                            </Link>
                        ) : (
                            <button
                                onClick={() => {
                                    setSearchBox('');
                                }}
                                className="mt-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                            >
                                <i className="ri-close-line"></i>
                                {t('myList.clearSearch')}
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="px-6">
                        <div className="space-y-4">
                            {filteredRecipes.map((recipe) => (
                                <div
                                    key={recipe.id}
                                    className={`relative bg-white dark:bg-gray-800 rounded-xl transition-all duration-300 ${hoveredItemId === recipe.id
                                        ? 'shadow-md transform -translate-y-1'
                                        : 'shadow-sm'
                                        }`}
                                    onMouseEnter={() => setHoveredItemId(recipe.id)}
                                    onMouseLeave={() => setHoveredItemId(null)}
                                >
                                    <Link href={`/pages/home/recipeDetails?id=${recipe.recipeid}`}>
                                        <div className="flex p-3 items-center">
                                            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 dark:border-gray-700">
                                                <Image
                                                    src={recipe.Recipe.image || '/images/home/placeholder.jpg'}
                                                    alt={recipe.Recipe.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 640px) 6rem, 7rem"
                                                />
                                            </div>

                                            <div className="ml-4 flex-grow">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <h3 className="font-medium text-lg text-gray-800 dark:text-white line-clamp-1">
                                                                {recipe.Recipe.title}
                                                            </h3>
                                                            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                                                                {recipe.Recipe.categorytype}
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center gap-2 mt-1">
                                                            <div className="flex">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <i
                                                                        key={i}
                                                                        className={`text-sm ${i < Math.floor(recipe.Recipe.rating || 0)
                                                                            ? "ri-star-fill text-amber-400 dark:text-amber-300"
                                                                            : "ri-star-line text-gray-300 dark:text-gray-600"
                                                                            }`}
                                                                    ></i>
                                                                ))}
                                                            </div>
                                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                                ({recipe.Recipe.rating?.toFixed(1) || "0.0"})
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="flex gap-4">
                                                        <button
                                                            className={`px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors text-xs font-medium cursor-pointer opacity-0 ${hoveredItemId === recipe.id ? 'opacity-100' : ''
                                                                }`}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                            }}
                                                        >
                                                            <i className="ri-chef-hat-line mr-1"></i>
                                                            {t('myList.prepareButton')}
                                                        </button>
                                                        <button
                                                            className={`p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all opacity-0 cursor-pointer ${hoveredItemId === recipe.id ? 'opacity-100' : ''
                                                                }`}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                handleDelete(recipe.recipeid);
                                                            }}
                                                        >
                                                            <i className="ri-delete-bin-line"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1 mt-1">
                                                    {recipe.Recipe.description || ''}
                                                </p>

                                                <div className="mt-2 flex flex-wrap items-center gap-2">
                                                    <span className="inline-flex items-center text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                                                        <i className="ri-time-line mr-1"></i>
                                                        {recipe.Recipe.cooktime || "-"} min
                                                    </span>

                                                    {recipe.Recipe.difficulty && (
                                                        <span className={`
                                                        inline-flex items-center text-xs px-2 py-1 rounded
                                                        ${recipe.Recipe.difficulty === "Easy" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : ""}
                                                        ${recipe.Recipe.difficulty === "Medium" ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400" : ""}
                                                        ${recipe.Recipe.difficulty === "Hard" ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400" : ""}
                                                    `}>
                                                            <i className="ri-bar-chart-line mr-1"></i>
                                                            {recipe.Recipe.difficulty}
                                                        </span>
                                                    )}

                                                    {recipe.Recipe.cuisinetype && (
                                                        <span className="inline-flex items-center text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded">
                                                            <i className="ri-restaurant-line mr-1"></i>
                                                            {recipe.Recipe.cuisinetype}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                                                    <div>
                                                        {t('myList.added')} {formatDate(recipe.dateAdded?.toString())}
                                                    </div>
                                                    {recipe.lastPrepared && (
                                                        <div className="font-medium text-indigo-600 dark:text-indigo-400">
                                                            <i className="ri-history-line mr-1"></i>
                                                            {t('myList.lastMade')} {formatDate(recipe.lastPrepared?.toString())}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Quick action buttons that appear on hover */}
                                    <div className={`
                                    absolute bottom-3 right-3 flex space-x-1 transition-opacity duration-300
                                    ${hoveredItemId === recipe.id ? 'opacity-100' : 'opacity-0'}
                                `}>
                                        <Link
                                            href={`/pages/home/recipeDetails?id=${recipe.recipeid}`}
                                            className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                                        >
                                            <i className="ri-arrow-right-line"></i>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
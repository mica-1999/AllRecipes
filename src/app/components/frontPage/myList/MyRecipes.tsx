import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import { Recipe } from "@/app/types/recipe";
import { useState } from "react";
import { showToast } from "../../reusable/Toasters";

export default function MyRecipes({ myRecipes, searchBox, setSearchBox }: { myRecipes: Recipe[], searchBox: string, setSearchBox: (value: string) => void }) {
    const { t, savedTheme } = useTheme();
    const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

    // Filter recipes based on search query
    const filteredRecipes = myRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchBox.toLowerCase())
    );

    // Function to format date
    const formatDate = (dateString: Date | string | null | undefined) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }).format(date);
    };

    const handleDelete = async (recipeId: number) => {
        try {
            // Make the API call to delete the recipe
            const response = await fetch(`/api/myList/personalList?recipeid=${recipeId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                showToast('error', 'Error deleting recipe. Please try again later.', savedTheme);
            }
            else {
                showToast('success', 'Recipe deleted successfully.', savedTheme);
            }
        } catch (error) {
            console.error("Error deleting recipe:", error);
            showToast('error', 'Error deleting recipe. Please try again later.', savedTheme);
        }


    }

    return (
        <>
            <div className="py-2 mb-10">
                <div className="flex items-center justify-between mb-6 px-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
                        <span className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg mr-2">
                            <i className="ri-file-list-3-line text-green-600 dark:text-green-400"></i>
                        </span>
                        {t('myList.myRecipes')}
                        <span className="ml-3 text-sm font-normal text-gray-500 dark:text-gray-400">
                            ({myRecipes.length})
                        </span>
                    </h2>
                </div>

                {filteredRecipes.length === 0 ? (
                    <div className="w-full py-16 flex flex-col items-center justify-center">
                        <div className="p-6 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
                            {myRecipes.length === 0 ? (
                                <i className="ri-file-list-3-line text-3xl text-green-600 dark:text-green-400"></i>
                            ) : (
                                <i className="ri-search-line text-3xl text-green-600 dark:text-green-400"></i>
                            )}
                        </div>
                        <p className="text-gray-700 dark:text-gray-200 font-medium">
                            {myRecipes.length === 0
                                ? t('myList.noMyRecipes')
                                : t('myList.noMatchingRecipes') || "No recipes match your search"}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm text-center mt-2">
                            {myRecipes.length === 0
                                ? t('myList.createRecipeDescription')
                                : t('myList.tryAnotherSearch') || "Try a different search term or clear your search"}
                        </p>
                        {myRecipes.length === 0 ? (
                            <Link
                                href="/pages/home/create"
                                className="mt-6 px-4 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2"
                            >
                                <i className="ri-add-line"></i>
                                {t('myList.createRecipe')}
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
                                    <div className="cursor-pointer" onClick={() => window.location.href = `/pages/home/recipeDetails?id=${recipe.id}`}>
                                        <div className="flex p-3 items-center">
                                            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 dark:border-gray-700">
                                                <Image
                                                    src={recipe.image || '/images/home/placeholder.jpg'}
                                                    alt={recipe.title}
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
                                                                {recipe.title}
                                                            </h3>
                                                            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                                                                {recipe.categorytype}
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center gap-2 mt-1">
                                                            <div className="flex">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <i
                                                                        key={i}
                                                                        className={`text-sm ${i < Math.floor(recipe.rating || 0)
                                                                            ? "ri-star-fill text-amber-400 dark:text-amber-300"
                                                                            : "ri-star-line text-gray-300 dark:text-gray-600"
                                                                            }`}
                                                                    ></i>
                                                                ))}
                                                            </div>
                                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                                ({recipe.rating?.toFixed(1) || "0.0"})
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className={`flex transition-opacity duration-200 ${hoveredItemId === recipe.id ? 'opacity-100' : 'opacity-0'
                                                        }`}>
                                                        <Link
                                                            href={`/pages/home/editRecipe?id=${recipe.id}`}
                                                            className="p-2 rounded-full text-gray-400 hover:text-[#FF6B35] hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <i className="ri-pencil-line"></i>
                                                        </Link>
                                                        <button
                                                            className="p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                handleDelete(recipe.id);
                                                            }}
                                                        >
                                                            <i className="ri-delete-bin-line"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1 mt-1">
                                                    {recipe.description || ''}
                                                </p>

                                                <div className="mt-2 flex flex-wrap items-center gap-2">
                                                    <span className="inline-flex items-center text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                                                        <i className="ri-time-line mr-1"></i>
                                                        {recipe.cooktime || "-"} min
                                                    </span>

                                                    {recipe.difficulty && (
                                                        <span className={`
                                                        inline-flex items-center text-xs px-2 py-1 rounded
                                                        ${recipe.difficulty === "Easy" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : ""}
                                                        ${recipe.difficulty === "Medium" ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400" : ""}
                                                        ${recipe.difficulty === "Hard" ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400" : ""}
                                                    `}>
                                                            <i className="ri-bar-chart-line mr-1"></i>
                                                            {recipe.difficulty}
                                                        </span>
                                                    )}

                                                    {recipe.cuisinetype && (
                                                        <span className="inline-flex items-center text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded">
                                                            <i className="ri-restaurant-line mr-1"></i>
                                                            {recipe.cuisinetype}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                                    {t('myList.created')} {formatDate(recipe.createdat)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`
                                    absolute bottom-3 right-3 flex space-x-1 transition-opacity duration-300
                                    ${hoveredItemId === recipe.id ? 'opacity-100' : 'opacity-0'}
                                `}>
                                        <Link
                                            href={`/pages/home/recipeDetails?id=${recipe.id}`}
                                            className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
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
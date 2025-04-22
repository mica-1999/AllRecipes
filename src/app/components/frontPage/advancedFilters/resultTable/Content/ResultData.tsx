import { Recipe } from '@/app/types/recipe';
import { useTheme } from '@/app/context/ThemeContext';
import { showToast } from '@/app/components/reusable/Toasters';
import Image from "next/image";
import Link from "next/link";

interface ResultDataProps {
    recipes: Recipe[];
    onResetFilters?: () => void;
}

export default function ResultData({ recipes, onResetFilters }: ResultDataProps) {
    const { t, savedTheme } = useTheme();

    // Function to format date 
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }).format(date);
    };

    // API calls for adding to prepare list
    const addToPrepareList = async (recipeId: number) => {
        try {
            const response = await fetch("/api/myList/prepareList", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ recipeId }),
            });

            if (response.ok) {
                showToast("success", t('myList.addedToPrepareList'), savedTheme);
            } else if (response.status === 409) {
                showToast("info", t('myList.recipeAlreadyInPrepareList'), savedTheme);
            }
        } catch (error) {
            console.error("Error adding to prepare list:", error);
            showToast("error", t('myList.errorAddingToPrepareList'), savedTheme);
        }
    }

    // API calls for adding to bookmark
    const addToBookmark = async (recipeId: number) => {
        try {
            const response = await fetch("/api/myList/bookmark", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ recipeId }),
            });

            if (response.ok) {
                showToast("success", t('myList.addedToBookmarks'), savedTheme);
            }
            else if (response.status === 409) {
                showToast("error", t('myList.recipeAlreadyBookmarked'), savedTheme);
            }
        } catch (error) {
            console.error("Error adding to bookmark:", error);
            showToast("error", t('myList.errorAddingToBookmarks'), savedTheme);
        }
    }

    // If no recipes are found, show a message
    if (recipes.length === 0) {
        return (
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
        );
    }

    return (
        <>
            {recipes.map((recipe, index) => (
                <Link href={`/pages/home/recipeDetails?id=${recipe.id}`} key={index}>
                    <div
                        id={`item-${index}`}
                        className={`
                            w-full flex transition-colors duration-150
                            hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0 cursor-pointer
                            ${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50/30 dark:bg-gray-800'}
                        `}
                    >
                        <div id="recipeName" className="flex items-center gap-4 w-2/5 md:w-2/5 px-6 py-4">
                            <div id="image" className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] rounded-lg relative overflow-hidden shadow-md dark:shadow-black/30 border border-gray-200 dark:border-gray-700 flex-shrink-0">
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    fill
                                    className="object-cover object-center rounded-lg"
                                    sizes="(max-width: 640px) 80px, 90px"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h1 className="font-medium text-gray-800 dark:text-white text-lg line-clamp-1">
                                    {recipe.title}
                                </h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
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

                        <div id="views" className="w-0 md:w-1/8 hidden md:flex items-center justify-center py-4">
                            <div className="flex flex-col items-center text-center">
                                <span className="text-xl font-bold text-gray-800 dark:text-white">{recipe.viewcount.toLocaleString()}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t('tableFiltered.viewsLabel')}</span>
                            </div>
                        </div>

                        <div id="rating" className="w-0 md:w-1/8 hidden md:flex items-center justify-center py-4">
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

                        <div id="date" className="w-0 md:w-1/6 hidden md:flex items-center justify-center py-4">
                            <div className="flex flex-col items-center text-center">
                                <span className="text-base font-medium text-gray-800 dark:text-white">
                                    {formatDate(recipe.createdat)}
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {t('tableFiltered.dateAdded')}
                                </span>
                            </div>
                        </div>

                        <div id="actions" className="w-3/5 md:w-1/6 flex items-center justify-center py-4">
                            <button
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    addToBookmark(recipe.id)
                                }}
                                aria-label={t('myList.addToBookmarks')}
                            >
                                <i className="ri-bookmark-line text-lg"></i>
                            </button>
                            <button
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    addToPrepareList(recipe.id)
                                }}
                                aria-label={t('myList.addToPrepareList')}
                            >
                                <i className="ri-folder-add-line text-lg"></i>
                            </button>
                            <button
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                                aria-label={t('myList.viewDetails')}
                            >
                                <i className="ri-file-list-line text-lg"></i>
                            </button>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
}
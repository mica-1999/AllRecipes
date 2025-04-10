import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";
import { Recipe } from "@/app/types/recipe";

export default function MyRecipes({ myRecipes }: { myRecipes: Recipe[] }) {
    const { tArray, t } = useTheme();

    // Function to handle navigation to recipe details page
    const ToRecipeDetails = (id: number) => {
        window.location.href = `/pages/home/recipeDetails?id=${id}`;
    }

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

    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-lg dark:shadow-black/20 overflow-hidden border border-gray-100 dark:border-gray-700 mb-20">
            {/* Table Header */}
            <div id="tableHeaders" className="flex w-full bg-gray-50 dark:bg-gray-700/60 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-200 font-medium text-sm">
                {tArray<string>('myList.mylistHeaders').map((header, index) => (
                    <div key={index} className={`
                        px-4 py-3.5 flex items-center
                        ${index === 0 ? "w-1/4 lg:w-1/3" : "w-1/8 hidden md:flex"}
                        ${index === 1 || index === 2 ? "lg:flex md:hidden" : ""}
                        ${index === 7 ? "w-1/4 md:w-1/8 justify-end md:justify-center" : ""}
                    `}>
                        {header}
                    </div>
                ))}
            </div>

            {/* Table Body */}
            <div id="table" className="flex flex-col w-full">
                {myRecipes.length > 0 ? (
                    myRecipes.map((recipe, index) => (
                        <div
                            id={`item-${index}`}
                            className={`
                                w-full flex transition-colors duration-150
                                hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0 cursor-pointer
                                ${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50/30 dark:bg-gray-800'}
                            `}
                            key={index}
                            onClick={() => ToRecipeDetails(recipe.id)}
                        >
                            {/* Recipe Name with Image */}
                            <div id="recipeName" className="flex items-center gap-3 w-1/4 lg:w-1/3 p-2.5">
                                <div id="image" className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-lg relative overflow-hidden shadow-sm dark:shadow-black/30 border border-gray-200 dark:border-gray-700">
                                    <Image
                                        src={recipe.image || '/images/home/placeholder.jpg'}
                                        alt={recipe.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h1 className="font-medium text-gray-800 dark:text-white line-clamp-1">
                                        {recipe.title}
                                    </h1>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {recipe.description ? recipe.description.substring(0, 40) + '...' : ''}
                                    </p>
                                </div>
                            </div>

                            {/* Category */}
                            <div id="category" className="w-1/8 hidden lg:flex items-center px-4">
                                <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                                    {recipe.categorytype}
                                </span>
                            </div>

                            {/* Difficulty */}
                            <div id="difficulty" className="w-1/8 hidden lg:flex items-center px-4">
                                <span className={`
                                    px-2.5 py-1 rounded-full text-xs font-medium
                                    ${recipe.difficulty === "Easy" ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400" : ""}
                                    ${recipe.difficulty === "Medium" ? "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400" : ""}
                                    ${recipe.difficulty === "Hard" ? "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400" : ""}
                                `}>
                                    {recipe.difficulty}
                                </span>
                            </div>

                            {/* Cooking Time */}
                            <div id="cookingTime" className="w-1/8 hidden md:flex items-center px-4 text-gray-700 dark:text-gray-300 text-sm">
                                <i className="ri-time-line mr-1.5 text-gray-400 dark:text-gray-500"></i>
                                <span>{recipe.cooktime || 0} min</span>
                            </div>

                            {/* Rating */}
                            <div id="rating" className="w-1/8 hidden md:flex items-center px-4">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <i
                                            key={i}
                                            className={`text-sm ${i < Math.floor(recipe.rating || 0) ? "ri-star-fill text-amber-400 dark:text-amber-300" : "ri-star-line text-gray-300 dark:text-gray-600"}`}
                                        ></i>
                                    ))}
                                </div>
                            </div>

                            {/* Created At */}
                            <div id="lastMade" className="w-1/8 hidden md:flex items-center px-4 text-sm text-gray-600 dark:text-gray-400">
                                <span>N/A</span>
                            </div>

                            {/* Date Added */}
                            <div id="dateAdded" className="w-1/8 hidden md:flex items-center px-4 text-sm text-gray-600 dark:text-gray-400">
                                <span>{formatDate(recipe.createdat)}</span>
                            </div>

                            {/* Actions */}
                            <div id="actions" className="w-1/4 md:w-1/8 flex items-center justify-end md:justify-center gap-2 p-2.5">
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-[#FF6B35] dark:hover:text-indigo-300 transition-colors cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        window.location.href = `/pages/home/editRecipe?id=${recipe.id}`;
                                    }}
                                >
                                    <i className="ri-pencil-line"></i>
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        // Delete recipe handler
                                    }}
                                >
                                    <i className="ri-delete-bin-line"></i>
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        // More options handler
                                    }}
                                >
                                    <i className="ri-more-2-fill"></i>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="w-full py-16 flex flex-col items-center justify-center">
                        <i className="ri-file-list-3-line text-5xl text-gray-300 dark:text-gray-600 mb-4"></i>
                        <p className="text-gray-500 dark:text-gray-400">{t('myList.noMyRecipes')}</p>
                    </div>
                )}
            </div>

            {/* Table Footer */}
            <div className="flex justify-between items-center px-4 py-3 bg-gray-50 dark:bg-gray-700/60 border-t border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-600 dark:text-gray-300 ml-10">
                    {t('myList.showing')} <span className="font-medium dark:text-white">{myRecipes.length}</span> {t('myList.of')} <span className="font-medium dark:text-white">{myRecipes.length}</span> {t('myList.recipes')}
                </div>
                <div className="flex gap-1">
                    <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors">
                        <i className="ri-arrow-left-s-line"></i>
                    </button>
                    {[1].map(page => (
                        <button
                            key={page}
                            className={`w-8 h-8 rounded flex items-center justify-center transition-colors bg-[#FF6B35] dark:bg-indigo-600 text-white`}
                        >
                            {page}
                        </button>
                    ))}
                    <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors">
                        <i className="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
"use client"
import Image from "next/image"
import { listHeaders, filteredRecipesData } from "@/app/dataItems/AdvFiltersData"
import { useTheme } from '@/app/context/ThemeContext';

export default function TableFiltered() {
    const { t } = useTheme();
    
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
    
    return(
        <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-black/20 overflow-hidden border border-gray-200 dark:border-gray-700">
            {/* Header Title */}
            <div className="px-6 py-5 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{t('tableFiltered.title')}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('tableFiltered.description')}</p>
            </div>
            
            {/* Table Header - Updated with better dark mode color */}
            <div id="tableHeaders" className="flex w-full bg-gray-50 dark:bg-gray-700/60 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium text-sm">
                {listHeaders.map((header, index) => (
                    <div key={index} className={`
                        px-6 py-4 flex items-center
                        ${header === "Recipe Name" ? "w-2/3 md:w-1/2" : ""}
                        ${header === "Views" || header === "Rating" ? "w-1/6 hidden md:flex font-semibold text-[#FF6B35] dark:text-indigo-300" : ""}
                        ${header === "Actions" ? "w-1/3 md:w-1/6 justify-end md:justify-center" : ""}
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

            {/* Table Body - Updated with better alternating row colors */}
            <div id="table" className="flex flex-col w-full">
                {filteredRecipesData.map((recipe, index) => (
                    <div 
                        id={`item-${index}`} 
                        className={`
                            w-full flex transition-colors duration-150
                            hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0 cursor-pointer
                            ${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50/30 dark:bg-gray-800'}
                        `} 
                        key={index}
                    >
                        {/* Recipe Name with Image */}
                        <div id="recipeName" className="flex items-center gap-4 w-2/3 md:w-1/2 p-4">
                            <div id="image" className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] rounded-lg relative overflow-hidden shadow-md dark:shadow-black/30 border border-gray-200 dark:border-gray-700">
                                <Image
                                    src={recipe.image}
                                    alt={recipe.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h1 className="font-medium text-gray-800 dark:text-white text-lg line-clamp-1">
                                    {recipe.name}
                                </h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1 mt-1">
                                    {recipe.description}
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                                        {recipe.category}
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
                        
                        {/* Views - Highlighted */}
                        <div id="views" className="w-1/6 hidden md:flex items-center px-4">
                            <div className="flex flex-col items-center text-center">
                                <span className="text-xl font-bold text-gray-800 dark:text-white">{recipe.views.toLocaleString()}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t('tableFiltered.viewsLabel')}</span>
                            </div>
                        </div>
                        
                        {/* Rating - Highlighted */}
                        <div id="rating" className="w-1/6 hidden md:flex items-center justify-center px-4">
                            <div className="flex flex-col items-center text-center">
                                <div className="flex items-center">
                                    <span className="text-xl font-bold text-gray-800 dark:text-white mr-1">{recipe.rating}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">{t('tableFiltered.outOf5')}</span>
                                </div>
                                <div className="flex mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <i 
                                            key={i}
                                            className={`text-base ${i < Math.floor(recipe.rating) ? "ri-star-fill text-amber-400 dark:text-amber-300" : "ri-star-line text-gray-300 dark:text-gray-600"}`}
                                        ></i>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Actions */}
                        <div id="actions" className="w-1/3 md:w-1/6 flex items-center justify-end md:justify-center gap-2 p-4">
                            <button className="px-3 py-2 rounded-lg bg-[#FF6B35] dark:bg-indigo-600 text-white hover:bg-[#e05a2a] dark:hover:bg-indigo-500 transition-colors text-sm font-medium">
                                <i className="ri-eye-line mr-1"></i>
                                {t('tableFiltered.viewButton')}
                            </button>
                            <button className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                <i className="ri-bookmark-line text-lg"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
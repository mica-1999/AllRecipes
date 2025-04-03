import Image from "next/image"
import { useTheme } from "@/app/context/ThemeContext";

export default function List() {
    const { tArray, t } = useTheme()
    
    // Function to handle navigation to recipe details page
    const ToRecipeDetails = (id: number) => {
        window.location.href = `/pages/home/recipeDetails?id=${id}`;
    }

    return (
        <div className="w-full dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-lg dark:shadow-black/20 overflow-hidden border border-gray-100 dark:border-gray-700 mb-20">
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <div 
                        id={`item-${index}`} 
                        className={`
                            w-full flex transition-colors duration-150
                            hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0 cursor-pointer
                            ${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50/30 dark:bg-gray-800'}
                        `} 
                        key={index}
                        onClick={() => ToRecipeDetails(item)}
                    >
                        {/* Recipe Name with Image */}
                        <div id="recipeName" className="flex items-center gap-3 w-1/4 lg:w-1/3 p-2.5">
                            <div id="image" className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-lg relative overflow-hidden shadow-sm dark:shadow-black/30 border border-gray-200 dark:border-gray-700">
                                <Image
                                    src={`/images/home/trending/trending${(index % 6) + 1}.jpg`}
                                    alt="Recipe thumbnail"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h1 className="font-medium text-gray-800 dark:text-white line-clamp-1">
                                    {["Homemade Pancakes", "Beef Stir Fry", "Vegetable Soup", "Chocolate Cake", 
                                      "Grilled Salmon", "Caesar Salad", "Chicken Curry", "Mushroom Risotto",
                                      "Apple Pie", "Spaghetti Carbonara"][index % 10]}
                                </h1>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {["Sweet", "Savory", "Healthy", "Dessert", "Seafood"][index % 5]}
                                </p>
                            </div>
                        </div>
                        
                        {/* Category */}
                        <div id="category" className="w-1/8 hidden lg:flex items-center px-4">
                            <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                                {["Breakfast", "Dinner", "Lunch", "Dessert", "Snack"][index % 5]}
                            </span>
                        </div>
                        
                        {/* Difficulty */}
                        <div id="difficulty" className="w-1/8 hidden lg:flex items-center px-4">
                            <span className={`
                                px-2.5 py-1 rounded-full text-xs font-medium
                                ${index % 3 === 0 ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400" : ""}
                                ${index % 3 === 1 ? "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400" : ""}
                                ${index % 3 === 2 ? "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400" : ""}
                            `}>
                                {["Easy", "Medium", "Hard"][index % 3]}
                            </span>
                        </div>
                        
                        {/* Cooking Time */}
                        <div id="cookingTime" className="w-1/8 hidden md:flex items-center px-4 text-gray-700 dark:text-gray-300 text-sm">
                            <i className="ri-time-line mr-1.5 text-gray-400 dark:text-gray-500"></i>
                            <span>{[15, 25, 30, 45, 60][index % 5]} min</span>
                        </div>
                        
                        {/* Rating */}
                        <div id="rating" className="w-1/8 hidden md:flex items-center px-4">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <i 
                                        key={i}
                                        className={`text-sm ${i < (4 - index % 2) ? "ri-star-fill text-amber-400 dark:text-amber-300" : "ri-star-line text-gray-300 dark:text-gray-600"}`}
                                    ></i>
                                ))}
                            </div>
                        </div>
                        
                        {/* Last Made */}
                        <div id="lastMade" className="w-1/8 hidden md:flex items-center px-4 text-sm text-gray-600 dark:text-gray-400">
                            <span>{["2024-05-01", "2024-04-28", "2024-04-15", "2024-04-10", "2024-03-20"][index % 5]}</span>
                        </div>
                        
                        {/* Date Added */}
                        <div id="dateAdded" className="w-1/8 hidden md:flex items-center px-4 text-sm text-gray-600 dark:text-gray-400">
                            <span>{["2024-01-15", "2024-02-20", "2024-03-10", "2024-03-25", "2024-04-05"][index % 5]}</span>
                        </div>
                        
                        {/* Actions */}
                        <div id="actions" className="w-1/4 md:w-1/8 flex items-center justify-end md:justify-center gap-2 p-2.5">
                            <button className="px-3 py-1.5 rounded-lg bg-[#FF6B35] dark:bg-indigo-600 text-white hover:bg-[#e05a2a] dark:hover:bg-indigo-500 transition-colors text-xs font-medium cursor-pointer">
                                <i className="ri-chef-hat-line mr-1"></i>
                                {t('myList.prepareButton')}
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer">
                                <i className="ri-more-2-fill"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Table Footer */}
            <div className="flex justify-between items-center px-4 py-3 bg-gray-50 dark:bg-gray-700/60 border-t border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-600 dark:text-gray-300 ml-10">
                    {t('myList.showing')} <span className="font-medium dark:text-white">10</span> {t('myList.of')} <span className="font-medium dark:text-white">24</span> {t('myList.recipes')}
                </div>
                <div className="flex gap-1">
                    <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors">
                        <i className="ri-arrow-left-s-line"></i>
                    </button>
                    {[1, 2, 3].map(page => (
                        <button 
                            key={page} 
                            className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
                                page === 1 
                                    ? 'bg-[#FF6B35] dark:bg-indigo-600 text-white' 
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                            }`}
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
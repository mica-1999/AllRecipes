import Image from "next/image"
import { useTheme } from "@/app/context/ThemeContext"
import { useState } from "react"

export default function RecipesTab() {
    const { t } = useTheme();
    const [activeCategory, setActiveCategory] = useState<string>("All");

    // Sample recipe data - in a real app, this would come from an API
    const recipes = [
        {
            id: 1,
            title: "Homemade Pizza",
            image: "/images/home/trending/trending1.jpg",
            category: "Italian",
            difficulty: "Medium",
            time: "45 min",
            rating: 4.8,
            likes: 156
        },
        {
            id: 2,
            title: "Spaghetti Carbonara",
            image: "/images/home/trending/trending2.jpg",
            category: "Italian",
            difficulty: "Easy",
            time: "20 min",
            rating: 4.5,
            likes: 98
        },
        {
            id: 3,
            title: "Chicken Curry",
            image: "/images/home/trending/trending3.jpg",
            category: "Indian",
            difficulty: "Medium",
            time: "35 min",
            rating: 4.7,
            likes: 124
        },
        {
            id: 4,
            title: "Greek Salad",
            image: "/images/home/trending/trending4.jpg",
            category: "Greek",
            difficulty: "Easy",
            time: "15 min",
            rating: 4.2,
            likes: 87
        },
        {
            id: 5,
            title: "Chocolate Cake",
            image: "/images/home/trending/trending5.jpg",
            category: "Dessert",
            difficulty: "Hard",
            time: "90 min",
            rating: 4.9,
            likes: 203
        },
        {
            id: 6,
            title: "Beef Tacos",
            image: "/images/home/trending/trending6.jpg",
            category: "Mexican",
            difficulty: "Medium",
            time: "30 min",
            rating: 4.6,
            likes: 132
        }
    ];

    // Categories
    const categories = ["All", "Italian", "Indian", "Greek", "Dessert", "Mexican"];

    // Filter recipes based on active category
    const filteredRecipes = activeCategory === "All"
        ? recipes
        : recipes.filter(recipe => recipe.category === activeCategory);

    return (
        <div className="space-y-6">
            {/* Category filters */}
            <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === category
                                ? "bg-[#FF6B35] dark:bg-indigo-600 text-white"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {filteredRecipes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredRecipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md dark:shadow-lg dark:shadow-black/20 dark:hover:shadow-xl dark:hover:shadow-black/30 border border-gray-100 dark:border-gray-700 transition-shadow cursor-pointer"
                        >
                            <div className="relative h-48 w-full">
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md dark:shadow-black/30">
                                    <i className="ri-heart-line text-[#FF6B35] dark:text-indigo-400 text-lg"></i>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <div className="flex items-center gap-1 text-white">
                                        <i className="ri-star-fill text-amber-400 text-sm"></i>
                                        <span className="text-sm font-medium">{recipe.rating}</span>
                                        <span className="text-xs text-gray-300">({recipe.likes})</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{recipe.title}</h3>

                                <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                                        {recipe.category}
                                    </span>
                                    <span className={`px-2 py-1 rounded text-xs
                                        ${recipe.difficulty === "Easy" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : ""}
                                        ${recipe.difficulty === "Medium" ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400" : ""}
                                        ${recipe.difficulty === "Hard" ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400" : ""}
                                    `}>
                                        {recipe.difficulty}
                                    </span>
                                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs">
                                        <i className="ri-time-line mr-1"></i>{recipe.time}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                                    <button className="text-[#FF6B35] dark:text-indigo-400 text-sm font-medium">
                                        <i className="ri-edit-line mr-1"></i> {t('profile.recipes.edit')}
                                    </button>
                                    <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#FF6B35] dark:hover:text-indigo-400">
                                        <i className="ri-eye-line mr-1"></i> {t('profile.recipes.view')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-4">
                        <i className="ri-restaurant-line text-3xl text-gray-500 dark:text-gray-400"></i>
                    </div>
                    <h2 className="text-lg text-gray-700 dark:text-gray-300">{t('profile.emptyStates.noRecipesCategory')}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{t('profile.emptyStates.tryDifferentCategory')}</p>
                </div>
            )}

            {/* Add recipe button */}
            <div className="fixed bottom-24 right-6 z-10">
                <button className="w-14 h-14 rounded-full bg-[#FF6B35] dark:bg-indigo-600 text-white shadow-lg dark:shadow-black/30 flex items-center justify-center hover:bg-[#e85f2c] dark:hover:bg-indigo-500 transition-colors">
                    <i className="ri-add-line text-2xl"></i>
                </button>
            </div>
        </div>
    );
}

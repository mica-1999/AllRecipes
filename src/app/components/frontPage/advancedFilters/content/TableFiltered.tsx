import Image from "next/image"

const listHeaders = [
    "Recipe Name",
    "Views",
    "Rating",
    "Actions"
]

// Sample data for filtered recipes
const filteredRecipesData = [
    { 
        id: 1, 
        name: "Vegetable Curry", 
        category: "Main Course", 
        difficulty: "Medium", 
        image: "/images/home/trending/trending1.jpg", 
        views: 1245, 
        rating: 4.8, 
        dateAdded: "2024-04-15",
        description: "Spicy vegetable curry with coconut milk"
    },
    { 
        id: 2, 
        name: "Chocolate Brownies", 
        category: "Dessert", 
        difficulty: "Easy", 
        image: "/images/home/trending/trending2.jpg", 
        views: 3872, 
        rating: 4.9, 
        dateAdded: "2024-03-22",
        description: "Rich and fudgy chocolate brownies"
    },
    { 
        id: 3, 
        name: "Grilled Salmon", 
        category: "Seafood", 
        difficulty: "Medium", 
        image: "/images/home/trending/trending3.jpg", 
        views: 2143, 
        rating: 4.7, 
        dateAdded: "2024-02-18",
        description: "Lemon herb grilled salmon with asparagus"
    },
    { 
        id: 4, 
        name: "Avocado Toast", 
        category: "Breakfast", 
        difficulty: "Easy", 
        image: "/images/home/trending/trending4.jpg", 
        views: 5621, 
        rating: 4.5, 
        dateAdded: "2024-01-30",
        description: "Creamy avocado on toasted sourdough"
    },
    { 
        id: 5, 
        name: "Beef Wellington", 
        category: "Main Course", 
        difficulty: "Hard", 
        image: "/images/home/trending/trending5.jpg", 
        views: 982, 
        rating: 4.9, 
        dateAdded: "2024-01-05",
        description: "Classic beef wellington with mushroom duxelles"
    },
    { 
        id: 6, 
        name: "Spinach Salad", 
        category: "Salad", 
        difficulty: "Easy", 
        image: "/images/home/trending/trending6.jpg", 
        views: 1756, 
        rating: 4.4, 
        dateAdded: "2023-12-12",
        description: "Fresh spinach salad with strawberries and feta"
    },
];

export default function TableFiltered() {
    return(
        <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            {/* Header Title */}
            <div className="px-6 py-5 bg-white border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Filtered Results</h2>
                <p className="text-sm text-gray-500 mt-1">Recipes that match your advanced filter criteria</p>
            </div>
            
            {/* Table Header */}
            <div id="tableHeaders" className="flex w-full bg-gray-50 border-b border-gray-200 text-gray-700 font-medium text-sm">
                {listHeaders.map((header, index) => (
                    <div key={index} className={`
                        px-6 py-4 flex items-center
                        ${header === "Recipe Name" ? "w-2/3 md:w-1/2" : ""}
                        ${header === "Views" || header === "Rating" ? "w-1/6 hidden md:flex font-semibold text-[#FF6B35]" : ""}
                        ${header === "Actions" ? "w-1/3 md:w-1/6 justify-end md:justify-center" : ""}
                    `}>
                        {header}
                        {(header === "Views" || header === "Rating") && (
                            <button className="ml-1.5 text-gray-400 hover:text-[#FF6B35]">
                                <i className="ri-arrow-up-down-line text-xs"></i>
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* Table Body */}
            <div id="table" className="flex flex-col w-full">
                {filteredRecipesData.map((recipe, index) => (
                    <div 
                        id={`item-${index}`} 
                        className={`
                            w-full flex transition-colors duration-150
                            hover:bg-gray-50 border-b border-gray-100 last:border-b-0 cursor-pointer
                            ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}
                        `} 
                        key={index}
                    >
                        {/* Recipe Name with Image */}
                        <div id="recipeName" className="flex items-center gap-4 w-2/3 md:w-1/2 p-4">
                            <div id="image" className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] rounded-lg relative overflow-hidden shadow-md border border-gray-200">
                                <Image
                                    src={recipe.image}
                                    alt={recipe.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h1 className="font-medium text-gray-800 text-lg line-clamp-1">
                                    {recipe.name}
                                </h1>
                                <p className="text-sm text-gray-500 line-clamp-1 mt-1">
                                    {recipe.description}
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                        {recipe.category}
                                    </span>
                                    <span className={`
                                        px-2.5 py-1 rounded-full text-xs font-medium
                                        ${recipe.difficulty === "Easy" ? "bg-green-100 text-green-700" : ""}
                                        ${recipe.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" : ""}
                                        ${recipe.difficulty === "Hard" ? "bg-red-100 text-red-700" : ""}
                                    `}>
                                        {recipe.difficulty}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Views - Highlighted */}
                        <div id="views" className="w-1/6 hidden md:flex items-center px-4">
                            <div className="flex flex-col items-center text-center">
                                <span className="text-xl font-bold text-gray-800">{recipe.views.toLocaleString()}</span>
                                <span className="text-xs text-gray-500 mt-1">Views</span>
                            </div>
                        </div>
                        
                        {/* Rating - Highlighted */}
                        <div id="rating" className="w-1/6 hidden md:flex items-center justify-center px-4">
                            <div className="flex flex-col items-center text-center">
                                <div className="flex items-center">
                                    <span className="text-xl font-bold text-gray-800 mr-1">{recipe.rating}</span>
                                    <span className="text-xs text-gray-500">/5</span>
                                </div>
                                <div className="flex mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <i 
                                            key={i}
                                            className={`text-base ${i < Math.floor(recipe.rating) ? "ri-star-fill text-amber-400" : "ri-star-line text-gray-300"}`}
                                        ></i>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Actions */}
                        <div id="actions" className="w-1/3 md:w-1/6 flex items-center justify-end md:justify-center gap-2 p-4">
                            <button className="px-3 py-2 rounded-lg bg-[#FF6B35] text-white hover:bg-[#e05a2a] transition-colors text-sm font-medium">
                                <i className="ri-eye-line mr-1"></i>
                                View
                            </button>
                            <button className="p-2.5 rounded-full hover:bg-gray-100 text-gray-600 hover:text-blue-500 transition-colors">
                                <i className="ri-bookmark-line text-lg"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
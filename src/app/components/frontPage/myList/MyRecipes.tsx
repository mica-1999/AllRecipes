import Image from "next/image"

const listHeaders = [
    "Recipe Name",
    "Category",
    "Difficulty",
    "Cooking Time",
    "Rating",
    "Last Made",
    "Date Added",
    "Actions"
]

export default function MyRecipes() {
    return (
        <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            {/* Table Header */}
            <div id="tableHeaders" className="flex w-full bg-gray-50 border-b border-gray-200 text-gray-600 font-medium text-sm">
                {listHeaders.map((header, index) => (
                    <div key={index} className={`
                        px-4 py-3.5 flex items-center
                        ${header === "Recipe Name" ? "w-1/4 lg:w-1/3" : "w-1/8 hidden md:flex"}
                        ${header === "Category" || header === "Difficulty" ? "lg:flex md:hidden" : ""}
                        ${header === "Actions" ? "w-1/4 md:w-1/8 justify-end md:justify-center" : ""}
                    `}>
                        {header}
                    </div>
                ))}
            </div>

            {/* Table Body */}
            <div id="table" className="flex flex-col w-full">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
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
                        <div id="recipeName" className="flex items-center gap-3 w-1/4 lg:w-1/3 p-2.5">
                            <div id="image" className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-lg relative overflow-hidden shadow-sm border border-gray-200">
                                <Image
                                    src={`/images/home/trending/trending${(index % 6) + 1}.jpg`}
                                    alt="Recipe thumbnail"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h1 className="font-medium text-gray-800 line-clamp-1">
                                    {["Mom's Special Pasta", "Grandma's Cookies", "Dad's BBQ", "Family Pizza", 
                                      "Holiday Roast Turkey", "Weekend Pancakes"][index % 6]}
                                </h1>
                                <p className="text-xs text-gray-500">
                                    {["Family Recipe", "Holiday Special", "Quick Meal", "Weekend Favorite", "Special Occasion", "Everyday"][index % 6]}
                                </p>
                            </div>
                        </div>
                        
                        {/* Category */}
                        <div id="category" className="w-1/8 hidden lg:flex items-center px-4">
                            <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                {["Pasta", "Dessert", "BBQ", "Main Course", "Holiday", "Breakfast"][index % 6]}
                            </span>
                        </div>
                        
                        {/* Difficulty */}
                        <div id="difficulty" className="w-1/8 hidden lg:flex items-center px-4">
                            <span className={`
                                px-2.5 py-1 rounded-full text-xs font-medium
                                ${index % 3 === 0 ? "bg-green-100 text-green-700" : ""}
                                ${index % 3 === 1 ? "bg-yellow-100 text-yellow-700" : ""}
                                ${index % 3 === 2 ? "bg-red-100 text-red-700" : ""}
                            `}>
                                {["Easy", "Medium", "Hard"][index % 3]}
                            </span>
                        </div>
                        
                        {/* Cooking Time */}
                        <div id="cookingTime" className="w-1/8 hidden md:flex items-center px-4 text-gray-700 text-sm">
                            <i className="ri-time-line mr-1.5 text-gray-400"></i>
                            <span>{[30, 45, 60, 90, 120, 20][index % 6]} min</span>
                        </div>
                        
                        {/* Rating */}
                        <div id="rating" className="w-1/8 hidden md:flex items-center px-4">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <i 
                                        key={i}
                                        className={`text-sm ${i < (5 - index % 2) ? "ri-star-fill text-amber-400" : "ri-star-line text-gray-300"}`}
                                    ></i>
                                ))}
                            </div>
                        </div>
                        
                        {/* Last Made */}
                        <div id="lastMade" className="w-1/8 hidden md:flex items-center px-4 text-sm text-gray-600">
                            <span>{["2024-05-10", "2024-04-30", "2024-04-22", "2024-04-15", "2024-03-25", "2024-05-05"][index % 6]}</span>
                        </div>
                        
                        {/* Date Added */}
                        <div id="dateAdded" className="w-1/8 hidden md:flex items-center px-4 text-sm text-gray-600">
                            <span>{["2023-10-15", "2023-11-20", "2023-12-10", "2024-01-05", "2024-02-12", "2024-03-08"][index % 6]}</span>
                        </div>
                        
                        {/* Actions */}
                        <div id="actions" className="w-1/4 md:w-1/8 flex items-center justify-end md:justify-center gap-2 p-2.5">
                            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-[#FF6B35] transition-colors cursor-pointer">
                                <i className="ri-pencil-line"></i>
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-red-500 transition-colors cursor-pointer">
                                <i className="ri-delete-bin-line"></i>
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-blue-500 transition-colors cursor-pointer">
                                <i className="ri-more-2-fill"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Table Footer */}
            <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-t border-gray-200 mb-20">
                <div className="text-sm text-gray-600 ml-10">
                    Showing <span className="font-medium">6</span> of <span className="font-medium">6</span> recipes
                </div>
                <div className="flex gap-1">
                    <button className="p-2 rounded hover:bg-gray-200 text-gray-600 transition-colors">
                        <i className="ri-arrow-left-s-line"></i>
                    </button>
                    <button className="w-8 h-8 rounded flex items-center justify-center transition-colors bg-[#FF6B35] text-white">
                        1
                    </button>
                    <button className="p-2 rounded hover:bg-gray-200 text-gray-600 transition-colors">
                        <i className="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
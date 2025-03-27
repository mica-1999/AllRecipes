import Image from "next/image";

export default function Bookmarked() {
    // Sample data for bookmarked recipes
    const bookmarkedRecipes = [
        { id: 1, title: "Pasta Carbonara", imageUrl: "/images/home/seasonal/autumn1.jpg", date: "15 Jan" },
        { id: 2, title: "Chicken Stir Fry", imageUrl: "/images/home/seasonal/autumn2.jpg", date: "12 Jan" },
        { id: 3, title: "Veggie Soup", imageUrl: "/images/home/seasonal/spring3.jpg", date: "10 Jan" },
        { id: 4, title: "Beef Tacos", imageUrl: "/images/home/seasonal/spring2.jpg", date: "5 Jan" },
    ];

    return(
        <>
            <div className="px-10 py-2">
                <div className="flex items-center mb-4">
                    <h2 className="text-xl font-semibold">Your Bookmarks</h2>
                </div>
                
                    {bookmarkedRecipes.map((recipe) => (
                        <div key={recipe.id} className="flex items-center border-b border-gray-200 pb-3 hover:bg-gray-200 cursor-pointer">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden mr-3 flex-shrink-0 border-2 border-white shadow-md">
                                <Image 
                                    src={recipe.imageUrl} 
                                    alt={recipe.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            
                            <div className="flex-grow">
                                <h3 className="font-medium text-gray-800">{recipe.title}</h3>
                                <p className="text-xs text-gray-500">Bookmarked {recipe.date}</p>
                            </div>
                            
                            <div className="flex-shrink-0 flex space-x-2">
                                <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                    </svg>
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}
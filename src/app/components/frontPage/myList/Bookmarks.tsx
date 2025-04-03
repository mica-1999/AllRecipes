import Image from "next/image";
import { bookmarkedRecipes } from "@/app/data/MyListData";
import { useTheme } from "@/app/context/ThemeContext";

export default function Bookmarked() {
    const { t } = useTheme()
    return(
        <>
            <div className="px-10 py-2">
                <div className="flex items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{t('myList.bookmarks')}</h2>
                </div>
                
                    {bookmarkedRecipes.map((recipe) => (
                        <div key={recipe.id} className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden mr-3 flex-shrink-0 border-2 border-white dark:border-gray-800 shadow-md dark:shadow-black/30">
                                <Image 
                                    src={recipe.imageUrl} 
                                    alt={recipe.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            
                            <div className="flex-grow">
                                <h3 className="font-medium text-gray-800 dark:text-white">{recipe.title}</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{t('myList.bookmarked')} {recipe.date}</p>
                            </div>
                            
                            <div className="flex-shrink-0 flex space-x-2">
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                    </svg>
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
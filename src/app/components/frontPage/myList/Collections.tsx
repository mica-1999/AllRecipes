import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import { Collection } from "@/app/types/recipe";
import { showToast } from "@/app/components/reusable/Toasters";

export default function Collections({ collections, searchBox, setSearchBox }: { collections: Collection[], searchBox: string, setSearchBox: (value: string) => void }) {
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

    // Calculate number of recipes per collection
    const getRecipeCount = (collection: Collection) => {
        return collection.recipes?.length || 0;
    };

    // Function to delete collection
    const deleteCollection = async (id: number, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            const response = await fetch(`/api/myList/collection?id=${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                showToast("success", t('myList.collectionDeleted'), savedTheme);
                // Ideally, use state management to update the UI without a full reload
                window.location.reload();
            } else {
                showToast("error", t('myList.errorDeletingCollection'), savedTheme);
            }
        } catch (error) {
            console.error("Error deleting collection:", error);
            showToast("error", t('myList.errorDeletingCollection'), savedTheme);
        }
    };

    return (
        <>
            <div className="px-10 py-2 mb-10">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{t('myList.collections')}</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            {collections.length} {collections.length === 1 ? t('myList.collection') : t('myList.collections')}
                        </span>
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors">
                            <i className="ri-add-line"></i>
                        </button>
                    </div>
                </div>

                {collections.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {collections
                            .filter((collection) => collection.name.toLowerCase().includes(searchBox.toLowerCase()))
                            .map((collection) => (
                                <Link
                                    href={`/pages/home/collection?id=${collection.id}`}
                                    key={collection.id}
                                    className="block"
                                >
                                    <div className="flex flex-col h-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative h-[160px] w-full">
                                            <Image
                                                src={collection.recipes && collection.recipes.length > 0
                                                    ? collection.recipes[0]?.Recipe?.image || '/images/home/placeholder.jpg'
                                                    : '/images/home/placeholder.jpg'}
                                                alt={collection.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                                <div className="p-4 text-white w-full">
                                                    <h3 className="font-medium text-xl line-clamp-1">
                                                        {collection.name}
                                                    </h3>
                                                    <span className="text-sm text-gray-200 mt-1 inline-block">
                                                        {getRecipeCount(collection)} {getRecipeCount(collection) === 1 ? t('myList.recipe') : t('myList.recipes')}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Multi-image preview for collections with multiple recipes */}
                                            {collection.recipes && collection.recipes.length > 1 && (
                                                <div className="absolute top-3 right-3 flex -space-x-3">
                                                    {collection.recipes.slice(0, 3).map((recipe, idx) => (
                                                        <div key={idx} className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden relative shadow-sm">
                                                            <Image
                                                                src={recipe.Recipe?.image || '/images/home/placeholder.jpg'}
                                                                alt=""
                                                                fill
                                                                className="object-cover"
                                                                sizes="28px"
                                                            />
                                                        </div>
                                                    ))}
                                                    {collection.recipes.length > 3 && (
                                                        <div className="w-7 h-7 rounded-full bg-gray-800/70 border-2 border-white dark:border-gray-800 flex items-center justify-center shadow-sm">
                                                            <span className="text-xs text-white">+{collection.recipes.length - 3}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-4 flex-grow bg-white dark:bg-gray-800">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                    <i className="ri-calendar-line mr-1"></i>
                                                    <span>
                                                        {formatDate(collection.createdat)}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mt-3">
                                                <div className="flex items-center gap-2">
                                                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            // Edit collection 
                                                        }}
                                                    >
                                                        <i className="ri-edit-line"></i>
                                                    </button>
                                                    <button
                                                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                                                        onClick={(e) => deleteCollection(collection.id, e)}
                                                    >
                                                        <i className="ri-delete-bin-line"></i>
                                                    </button>
                                                </div>
                                                <button
                                                    className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                    }}
                                                >
                                                    <i className="ri-more-fill"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}

                        {/* Add New Collection Card */}
                        <div className="flex flex-col h-full border border-gray-200 dark:border-gray-700 border-dashed rounded-lg overflow-hidden cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                            <div className="flex items-center justify-center h-full min-h-[250px]">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-3">
                                        <i className="ri-add-line text-3xl text-gray-500 dark:text-gray-400"></i>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 font-medium">{t('myList.createNewCollection')}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center max-w-[180px]">
                                        {t('myList.organizeYourFavoriteRecipes')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full py-16 flex flex-col items-center justify-center">
                        <i className="ri-folders-line text-5xl text-gray-300 dark:text-gray-600 mb-4"></i>
                        <p className="text-gray-500 dark:text-gray-400 mb-3">{t('myList.noCollections')}</p>
                        <button className="px-4 py-2 bg-[#FF6B35] dark:bg-indigo-600 hover:bg-[#e85f2c] dark:hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center gap-2">
                            <i className="ri-add-line"></i>
                            {t('myList.createCollection')}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import { Bookmark } from "@/app/types/recipe";
import { showToast } from "@/app/components/reusable/Toasters";
import { useState } from "react";

export default function Bookmarked({ bookmarks, searchBox, setSearchBox }: { bookmarks: Bookmark[], searchBox: string, setSearchBox: (value: string) => void }) {
    const { t, savedTheme } = useTheme();
    const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

    // Filter bookmarks based on search query
    const filteredBookmarks = bookmarks.filter((bookmark) =>
        bookmark.Recipe.title.toLowerCase().includes(searchBox.toLowerCase())
    );

    // Function to remove a bookmark
    const removeBookmark = async (id: number, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            const response = await fetch(`/api/myList/bookmark?id=${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                showToast("success", t('myList.bookmarkRemoved'), savedTheme);
                window.location.reload();
            } else {
                showToast("error", t('myList.errorRemovingBookmark'), savedTheme);
            }
        } catch (error) {
            console.error("Error removing bookmark:", error);
            showToast("error", t('myList.errorRemovingBookmark'), savedTheme);
        }
    };

    // Function to format date
    const formatDate = (dateString: string | null | undefined) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }).format(date);
    };

    return (
        <>
            <div className="py-2 mb-10">
                <div className="flex items-center justify-between mb-6 px-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
                        <span className="bg-[#FF6B35]/10 dark:bg-[#FF6B35]/20 p-2 rounded-lg mr-2">
                            <i className="ri-bookmark-fill text-[#FF6B35] dark:text-[#FF6B35]"></i>
                        </span>
                        {t('myList.bookmarks')}
                        <span className="ml-3 text-sm font-normal text-gray-500 dark:text-gray-400">
                            ({bookmarks.length})
                        </span>
                    </h2>
                </div>

                {/* Show empty state if no bookmarks or no matches */}
                {filteredBookmarks.length === 0 ? (
                    <div className="w-full py-16 flex flex-col items-center justify-center">
                        <div className="p-6 bg-[#FF6B35]/10 dark:bg-[#FF6B35]/20 rounded-full mb-4">
                            {bookmarks.length === 0 ? (
                                <i className="ri-bookmark-line text-3xl text-[#FF6B35]"></i>
                            ) : (
                                <i className="ri-search-line text-3xl text-[#FF6B35]"></i>
                            )}
                        </div>
                        <p className="text-gray-700 dark:text-gray-200 font-medium">
                            {bookmarks.length === 0
                                ? t('myList.noBookmarks')
                                : t('myList.noMatchingBookmarks') || "No bookmarks match your search"}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm text-center mt-2">
                            {bookmarks.length === 0
                                ? (t('myList.bookmarksDescription') || "Save your favorite recipes here for quick access later")
                                : (t('myList.tryAnotherSearch') || "Try a different search term or clear your search")}
                        </p>
                        {bookmarks.length === 0 ? (
                            <Link
                                href="/pages/home"
                                className="mt-6 px-4 py-2 bg-[#FF6B35] hover:bg-[#e55d2a] dark:bg-[#FF6B35] dark:hover:bg-[#e55d2a] text-white rounded-lg transition-colors flex items-center gap-2"
                            >
                                <i className="ri-search-line"></i>
                                {t('myList.findRecipes')}
                            </Link>
                        ) : (
                            <button
                                onClick={() => {
                                    setSearchBox("");
                                }}
                                className="mt-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                            >
                                <i className="ri-close-line"></i>
                                {t('myList.clearSearch') || "Clear search"}
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="px-6">
                        <div className="space-y-4">
                            {filteredBookmarks.map((bookmark) => (
                                <div
                                    key={bookmark.id}
                                    className={`relative bg-white dark:bg-gray-800 rounded-xl transition-all duration-300 ${hoveredItemId === bookmark.id
                                        ? 'shadow-md transform -translate-y-1'
                                        : 'shadow-sm'
                                        }`}
                                    onMouseEnter={() => setHoveredItemId(bookmark.id)}
                                    onMouseLeave={() => setHoveredItemId(null)}
                                >
                                    <Link href={`/pages/home/recipeDetails?id=${bookmark.recipeid}`}>
                                        <div className="flex p-3 items-center">
                                            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 dark:border-gray-700">
                                                <Image
                                                    src={bookmark.Recipe?.image || '/images/home/placeholder.jpg'}
                                                    alt={bookmark.Recipe?.title || ''}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 640px) 6rem, 7rem"
                                                />
                                            </div>

                                            <div className="ml-4 flex-grow">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h3 className="font-medium text-lg text-gray-800 dark:text-white line-clamp-1">
                                                            {bookmark.Recipe?.title}
                                                        </h3>

                                                        <div className="flex items-center gap-2 mt-1">
                                                            <div className="flex">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <i
                                                                        key={i}
                                                                        className={`text-sm ${i < Math.floor(bookmark.Recipe?.rating || 0)
                                                                            ? "ri-star-fill text-amber-400 dark:text-amber-300"
                                                                            : "ri-star-line text-gray-300 dark:text-gray-600"
                                                                            }`}
                                                                    ></i>
                                                                ))}
                                                            </div>
                                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                                ({bookmark.Recipe?.rating?.toFixed(1) || "0.0"})
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <button
                                                        className={`p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all ${hoveredItemId === bookmark.id ? 'opacity-100' : 'opacity-0'
                                                            }`}
                                                        onClick={(e) => removeBookmark(bookmark.id, e)}
                                                        aria-label="Remove bookmark"
                                                    >
                                                        <i className="ri-delete-bin-6-line"></i>
                                                    </button>
                                                </div>

                                                <div className="mt-2 flex flex-wrap items-center gap-2">
                                                    <span className="inline-flex items-center text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                                                        <i className="ri-time-line mr-1"></i>
                                                        {bookmark.Recipe?.cooktime || "-"} min
                                                    </span>

                                                    {bookmark.Recipe?.difficulty && (
                                                        <span className={`
                                                        inline-flex items-center text-xs px-2 py-1 rounded
                                                        ${bookmark.Recipe?.difficulty === "Easy" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : ""}
                                                        ${bookmark.Recipe?.difficulty === "Medium" ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400" : ""}
                                                        ${bookmark.Recipe?.difficulty === "Hard" ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400" : ""}
                                                    `}>
                                                            <i className="ri-bar-chart-line mr-1"></i>
                                                            {bookmark.Recipe?.difficulty}
                                                        </span>
                                                    )}

                                                    {bookmark.Recipe?.cuisinetype && (
                                                        <span className="inline-flex items-center text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded">
                                                            <i className="ri-restaurant-line mr-1"></i>
                                                            {bookmark.Recipe?.cuisinetype}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                                    {t('myList.bookmarked')} {formatDate(bookmark.dateAdded)}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Quick action buttons that appear on hover */}
                                    <div className={`
                                    absolute bottom-3 right-3 flex space-x-1 transition-opacity duration-300
                                    ${hoveredItemId === bookmark.id ? 'opacity-100' : 'opacity-0'}
                                `}>
                                        <Link
                                            href={`/pages/home/recipeDetails?id=${bookmark.recipeid}`}
                                            className="p-2 rounded-full bg-[#FF6B35] text-white hover:bg-[#e55d2a] transition-colors"
                                        >
                                            <i className="ri-arrow-right-line"></i>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
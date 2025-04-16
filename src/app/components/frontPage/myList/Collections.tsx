import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import { Collection } from "@/app/types/recipe";
import { showToast } from "@/app/components/reusable/Toasters";
import { useClickOutside } from "../../reusable/ClickOutsideDiv";

export default function Collections({ collections, searchBox, setSearchBox }: { collections: Collection[], searchBox: string, setSearchBox: (value: string) => void }) {

    // State variables & hooks & refs
    const { t, savedTheme } = useTheme();
    const [tempCollections, setTempCollections] = useState<Collection[]>(collections);
    const [showModal, setShowModal] = useState(false);
    const [newCollectionName, setNewCollectionName] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    // Click outside to close modal
    useClickOutside(modalRef, setShowModal)

    // Update whenever collections change
    useEffect(() => {
        setTempCollections(collections);
    }, [collections]);

    // Focus input when modal opens
    useEffect(() => {
        if (showModal && inputRef.current) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [showModal]);

    // Filter collections based on search query
    const filteredCollections = tempCollections.filter((collection) =>
        collection.name.toLowerCase().includes(searchBox.toLowerCase())
    );

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
            // Optimistically update UI
            setTempCollections(current => current.filter(col => col.id !== id));

            const response = await fetch(`/api/myList/collections?id=${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                showToast("success", t('myList.collectionDeleted'), savedTheme);
            } else {
                // Revert optimistic update on error
                setTempCollections(collections);
                showToast("error", t('myList.errorDeletingCollection'), savedTheme);
            }
        } catch (error) {
            console.error("Error deleting collection:", error);
            // Revert optimistic update on exception
            setTempCollections(collections);
            showToast("error", t('myList.errorDeletingCollection'), savedTheme);
        }
    };

    // Function to create a new collection
    const createCollection = async () => {
        if (!newCollectionName.trim()) return;

        try {
            // Create temporary collection for optimistic UI
            const tempNewCollection: Collection = {
                id: Date.now(), // Temporary ID
                name: newCollectionName,
                userid: 0, // Will be set by API
                createdat: new Date().toISOString(),
                updatedat: new Date().toISOString(),
                recipes: []
            };

            // Update UI immediately (optimistic update)
            setTempCollections([...tempCollections, tempNewCollection]);

            // Reset modal
            setShowModal(false);
            setNewCollectionName('');

            // Make API call
            const response = await fetch('/api/myList/collections', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: newCollectionName })
            });

            if (!response.ok) {
                // Revert optimistic update on error
                setTempCollections(collections);
                showToast('error', t('myList.errorCreatingCollection') || 'Failed to create collection', savedTheme);
            } else {
                // Get the real collection data with proper ID
                const createdCollection = await response.json();
                setTempCollections(prev =>
                    prev.map(col => col.id === tempNewCollection.id ? createdCollection : col)
                );
                showToast('success', t('myList.collectionCreated') || 'Collection created successfully', savedTheme);
            }
        } catch (error) {
            console.error('Error creating collection:', error);
            setTempCollections(collections);
            showToast('error', t('myList.errorCreatingCollection') || 'Failed to create collection', savedTheme);
        }
    };

    return (
        <>
            {/* Collection creation modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4">
                    <div
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 animate-fadeIn"
                        onClick={(e) => e.stopPropagation()}
                        ref={modalRef}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                {t('myList.createNewCollection')}
                            </h3>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                            >
                                <i className="ri-close-line text-xl"></i>
                            </button>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="collection-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {t('myList.collectionName') || 'Collection Name'}
                            </label>
                            <input
                                ref={inputRef}
                                type="text"
                                id="collection-name"
                                placeholder={t('myList.collectionNamePlaceholder') || "E.g., Italian Favorites, Weeknight Dinners"}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                                           focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                                value={newCollectionName}
                                onChange={(e) => setNewCollectionName(e.target.value)}
                                maxLength={50}
                            />
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {t('myList.collectionNameHelp') || "Give your collection a descriptive name"}
                            </p>
                        </div>

                        <div className="flex justify-end gap-3 mt-5">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 
                                           text-gray-800 dark:text-white rounded-lg transition-colors cursor-pointer"
                            >
                                {t('themeSettings.cancel') || "Cancel"}
                            </button>
                            <button
                                onClick={createCollection}
                                disabled={!newCollectionName.trim()}
                                className={`px-4 py-2 rounded-lg bg-purple-600 text-white transition-colors  ${!newCollectionName.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700 cursor-pointer'
                                    }`}
                            >
                                {t('myList.create') || "Create"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="py-2 mb-10">
                <div className="flex items-center mb-6 px-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
                        <span className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-lg mr-2">
                            <i className="ri-folder-fill text-purple-600 dark:text-purple-400"></i>
                        </span>
                        {t('myList.collections')}
                        <span className="ml-3 text-sm font-normal text-gray-500 dark:text-gray-400">
                            ({tempCollections.length})
                        </span>
                    </h2>
                </div>

                {/* Show empty state if no collections or no matching collections */}
                {filteredCollections.length === 0 ? (
                    <div className="w-full py-16 flex flex-col items-center justify-center">
                        <div className="p-6 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                            {tempCollections.length === 0 ? (
                                <i className="ri-folders-line text-3xl text-purple-600 dark:text-purple-400"></i>
                            ) : (
                                <i className="ri-search-line text-3xl text-purple-600 dark:text-purple-400"></i>
                            )}
                        </div>
                        <p className="text-gray-700 dark:text-gray-200 font-medium">
                            {tempCollections.length === 0
                                ? t('myList.noCollections')
                                : t('myList.noMatchingCollections') || "No collections match your search"}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm text-center mt-2">
                            {tempCollections.length === 0
                                ? (t('myList.organizeYourFavoriteRecipes') || "Organize your favorite recipes into themed collections")
                                : (t('myList.tryAnotherSearch') || "Try a different search term or clear your search")}
                        </p>
                        {tempCollections.length === 0 ? (
                            <button
                                onClick={() => setShowModal(true)}
                                className="mt-6 px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                            >
                                <i className="ri-add-line"></i>
                                {t('myList.createCollection')}
                            </button>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
                        {filteredCollections.map((collection) => (
                            <Link
                                href={`/pages/home/collection?id=${collection.id}`}
                                key={collection.id}
                                className="block"
                            >
                                <div className="flex flex-col h-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <div className="relative h-[160px] w-full">
                                        <Image
                                            src={collection.recipes && collection.recipes.length > 0
                                                ? collection.recipes[0]?.Recipe?.image || '/images/home/collectionDefault.jpg'
                                                : '/images/home/collectionDefault.jpg'}
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
                                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        // Edit collection 
                                                    }}
                                                >
                                                    <i className="ri-edit-line"></i>
                                                </button>
                                                <button
                                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer"
                                                    onClick={(e) => deleteCollection(collection.id, e)}
                                                >
                                                    <i className="ri-delete-bin-line"></i>
                                                </button>
                                            </div>
                                            <button
                                                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors cursor-pointer"
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

                        {/* Add New Collection Card - only shown when not searching */}
                        {!searchBox && (
                            <div
                                onClick={() => setShowModal(true)}
                                className="block cursor-pointer"
                            >
                                <div className="flex flex-col h-full border border-gray-200 dark:border-gray-700 border-dashed rounded-lg overflow-hidden hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    <div className="flex items-center justify-center h-full min-h-[250px]">
                                        <div className="flex flex-col items-center">
                                            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3">
                                                <i className="ri-add-line text-3xl text-purple-600 dark:text-purple-400"></i>
                                            </div>
                                            <p className="text-gray-700 dark:text-gray-300 font-medium">{t('myList.createNewCollection')}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center max-w-[180px]">
                                                {t('myList.organizeYourFavoriteRecipes')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
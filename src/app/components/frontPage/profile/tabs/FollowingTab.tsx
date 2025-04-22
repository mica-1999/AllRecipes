import Image from "next/image"
import { useTheme } from "@/app/context/ThemeContext"
import { useState } from "react"

export default function FollowingTab() {
    const { t } = useTheme();
    const [searchTerm, setSearchTerm] = useState("");

    // Sample following data - in a real app, this would come from an API
    const following = [
        {
            id: 1,
            name: "Gordon Ramsey",
            username: "@chefgordon",
            image: "/images/home/profile/chef1.jpg",
            bio: "Multi-Michelin star chef and television personality. Passionate about quality ingredients and techniques.",
            recipeCount: 215,
            followersCount: 2500000
        },
        {
            id: 2,
            name: "Julia Child",
            username: "@juliachild",
            image: "/images/home/profile/chef2.jpg",
            bio: "Bringing French cuisine to everyday American kitchens. Author of 'Mastering the Art of French Cooking'.",
            recipeCount: 178,
            followersCount: 1800000
        },
    ];

    // Filter following based on search term
    const filteredFollowing = following.filter(chef =>
        chef.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chef.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chef.bio.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Search box */}
            <div className="relative">
                <input
                    type="text"
                    placeholder={t('profile.following.searchPlaceholder')}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] dark:focus:ring-indigo-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="ri-search-line absolute left-3 top-3 text-gray-400 dark:text-gray-500"></i>
                {searchTerm && (
                    <button
                        className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        onClick={() => setSearchTerm("")}
                    >
                        <i className="ri-close-line"></i>
                    </button>
                )}
            </div>

            {filteredFollowing.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredFollowing.map((chef) => (
                        <div
                            key={chef.id}
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md dark:shadow-lg dark:shadow-black/20 dark:hover:shadow-xl dark:hover:shadow-black/30 border border-gray-100 dark:border-gray-700 transition-shadow"
                        >
                            <div className="p-5">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-sm dark:shadow-black/20">
                                        <Image
                                            src={chef.image || "/images/home/profile/defaulticon.png"}
                                            alt={chef.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-medium text-gray-800 dark:text-white">{chef.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{chef.username}</p>
                                    </div>
                                    <button className="px-3 py-1.5 rounded-full text-sm font-medium bg-[#FF6B35] dark:bg-indigo-600 text-white hover:bg-[#e85f2c] dark:hover:bg-indigo-500">
                                        {t('profile.following.unfollow')}
                                    </button>
                                </div>

                                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                                    {chef.bio}
                                </p>

                                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        <i className="ri-cookbook-line mr-1"></i>
                                        {t('profile.following.recipeCount').replace('{count}', chef.recipeCount.toString())}
                                    </div>
                                    <button className="text-[#FF6B35] dark:text-indigo-400 text-sm font-medium">
                                        {t('profile.following.viewProfile')} <i className="ri-arrow-right-s-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-4">
                        <i className="ri-user-follow-line text-3xl text-gray-500 dark:text-gray-400"></i>
                    </div>
                    <h2 className="text-lg text-gray-700 dark:text-gray-300">
                        {searchTerm
                            ? t('profile.following.noSearchResults')
                            : t('profile.emptyStates.following')}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {searchTerm
                            ? t('profile.following.tryDifferentSearch')
                            : t('profile.following.startFollowing')}
                    </p>
                    {!searchTerm && (
                        <button className="mt-4 px-4 py-2 rounded-md bg-[#FF6B35] dark:bg-indigo-600 text-white hover:bg-[#e85f2c] dark:hover:bg-indigo-500 transition-colors">
                            {t('profile.following.discoverChefs')}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

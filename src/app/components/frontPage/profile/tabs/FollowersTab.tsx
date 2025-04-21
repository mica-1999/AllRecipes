import Image from "next/image"
import { useTheme } from "@/app/context/ThemeContext"
import { useState } from "react"

export default function FollowersTab() {
    const { t } = useTheme();
    const [searchTerm, setSearchTerm] = useState("");

    // Sample follower data - in a real app, this would come from an API
    const followers = [
        {
            id: 1,
            name: "Sarah Johnson",
            username: "@sarahcooks",
            image: "/images/home/profile/user1.jpg",
            bio: "Food enthusiast and amateur chef. Love trying new recipes!",
            following: true,
            recipeCount: 45
        },
        {
            id: 2,
            name: "Michael Chen",
            username: "@chefmike",
            image: "/images/home/profile/user2.jpg",
            bio: "Professional chef with 10 years of experience. Specializes in Asian fusion.",
            following: false,
            recipeCount: 132
        },
        {
            id: 3,
            name: "Priya Patel",
            username: "@priyaskitchen",
            image: "/images/home/profile/user3.jpg",
            bio: "Sharing authentic Indian recipes passed down through generations.",
            following: true,
            recipeCount: 87
        },
        {
            id: 4,
            name: "Carlos Rodriguez",
            username: "@tasteofmexico",
            image: "/images/home/profile/user4.jpg",
            bio: "Mexican cuisine expert and cookbook author.",
            following: false,
            recipeCount: 63
        },
        {
            id: 5,
            name: "Emma Wilson",
            username: "@sweetemma",
            image: "/images/home/profile/user5.jpg",
            bio: "Pastry chef specializing in European desserts. Baking is my therapy!",
            following: true,
            recipeCount: 91
        },
        {
            id: 6,
            name: "James Lee",
            username: "@jamescooks",
            image: "/images/home/profile/user6.jpg",
            bio: "Home cook sharing easy weeknight dinner ideas for busy families.",
            following: false,
            recipeCount: 38
        }
    ];

    // Filter followers based on search term
    const filteredFollowers = followers.filter(follower =>
        follower.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        follower.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        follower.bio.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Search box */}
            <div className="relative">
                <input
                    type="text"
                    placeholder={t('profile.followers.searchPlaceholder')}
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

            {filteredFollowers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredFollowers.map((follower) => (
                        <div
                            key={follower.id}
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md dark:shadow-lg dark:shadow-black/20 dark:hover:shadow-xl dark:hover:shadow-black/30 border border-gray-100 dark:border-gray-700 transition-shadow"
                        >
                            <div className="p-5">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-sm dark:shadow-black/20">
                                        <Image
                                            src={follower.image || "/images/home/profile/defaulticon.png"}
                                            alt={follower.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-medium text-gray-800 dark:text-white">{follower.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{follower.username}</p>
                                    </div>
                                    <button
                                        className={`px-3 py-1.5 rounded-full text-sm font-medium ${follower.following
                                                ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                                                : "bg-[#FF6B35] dark:bg-indigo-600 text-white hover:bg-[#e85f2c] dark:hover:bg-indigo-500"
                                            }`}
                                    >
                                        {follower.following ? t('profile.followers.following') : t('profile.followers.follow')}
                                    </button>
                                </div>

                                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                                    {follower.bio}
                                </p>

                                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        <i className="ri-cookbook-line mr-1"></i>
                                        {t('profile.followers.recipeCount').replace('{count}', follower.recipeCount.toString())}
                                    </div>
                                    <button className="text-[#FF6B35] dark:text-indigo-400 text-sm font-medium">
                                        {t('profile.followers.viewProfile')} <i className="ri-arrow-right-s-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-4">
                        <i className="ri-user-search-line text-3xl text-gray-500 dark:text-gray-400"></i>
                    </div>
                    <h2 className="text-lg text-gray-700 dark:text-gray-300">
                        {searchTerm
                            ? t('profile.followers.noSearchResults')
                            : t('profile.emptyStates.followers')}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {searchTerm
                            ? t('profile.followers.tryDifferentSearch')
                            : t('profile.followers.noFollowersYet')}
                    </p>
                </div>
            )}
        </div>
    );
}

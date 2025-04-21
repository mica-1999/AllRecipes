import Image from "next/image"
import { useTheme } from "@/app/context/ThemeContext"

export default function AboutTab() {
    const { t } = useTheme();

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left column: Gallery */}
            <div className="md:col-span-1">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-lg dark:shadow-black/20 border border-gray-100 dark:border-gray-700">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                        <i className="ri-gallery-line mr-2 text-[#FF6B35] dark:text-indigo-400"></i>
                        {t('profile.gallery.title')}
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="aspect-square rounded-md overflow-hidden relative shadow-sm dark:shadow-black/30 hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-black/40 transition-shadow">
                                <Image
                                    src={`/images/home/trending/trending${(item % 6) + 1}.jpg`}
                                    alt={t('profile.gallery.imageAlt')}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 text-sm text-[#FF6B35] dark:text-indigo-400 hover:text-[#e55a29] dark:hover:text-indigo-300 font-medium flex items-center justify-center">
                        <i className="ri-add-line mr-1"></i>
                        {t('profile.gallery.viewAll')}
                    </button>
                </div>
            </div>

            {/* Right column: About section + Posts feed */}
            <div className="md:col-span-2 space-y-8">
                {/* About section */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-lg dark:shadow-black/20 border border-gray-100 dark:border-gray-700">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                        <i className="ri-user-heart-line mr-2 text-[#FF6B35] dark:text-indigo-400"></i>
                        {t('profile.aboutSection.title').replace('{name}', 'Jane')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {t('profile.aboutSection.bio')}
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="flex items-center">
                            <div className="w-1/3 text-gray-500 dark:text-gray-400 flex items-center">
                                <i className="ri-map-pin-line mr-2"></i>
                                {t('profile.aboutSection.location')}
                            </div>
                            <div className="w-2/3 text-gray-800 dark:text-gray-200">New York, USA</div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-1/3 text-gray-500 dark:text-gray-400 flex items-center">
                                <i className="ri-award-line mr-2"></i>
                                {t('profile.aboutSection.joined')}
                            </div>
                            <div className="w-2/3 text-gray-800 dark:text-gray-200">March 2023</div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-1/3 text-gray-500 dark:text-gray-400 flex items-center">
                                <i className="ri-heart-line mr-2"></i>
                                {t('profile.aboutSection.favoriteCuisine')}
                            </div>
                            <div className="w-2/3 text-gray-800 dark:text-gray-200">Mediterranean, Asian</div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-1/3 text-gray-500 dark:text-gray-400 flex items-center">
                                <i className="ri-trophy-line mr-2"></i>
                                {t('profile.aboutSection.achievements')}
                            </div>
                            <div className="w-2/3 text-gray-800 dark:text-gray-200">
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 rounded-full text-xs font-medium">{t('profile.achievements.topChef')}</span>
                                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-xs font-medium">{t('profile.achievements.recipeCreator')}</span>
                                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-xs font-medium">{t('profile.achievements.trendsetter')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Posts/Activity Feed Section - Facebook style */}
                <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center">
                        <i className="ri-file-list-3-line mr-2 text-[#FF6B35] dark:text-indigo-400"></i>
                        {t('profile.posts.title') || "Recent Posts"}
                    </h2>

                    {/* Create Post Box */}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm dark:shadow-lg dark:shadow-black/20 border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                <Image
                                    src="/images/home/profile/haha.webp"
                                    alt="Profile"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-grow">
                                <input
                                    type="text"
                                    placeholder={t('profile.posts.createPost') || "What recipe are you making today?"}
                                    className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] dark:focus:ring-indigo-400"
                                />
                            </div>
                        </div>
                        <div className="flex gap-2 mt-3 border-t border-gray-100 dark:border-gray-700 pt-3">
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i className="ri-image-line text-green-500 dark:text-green-400"></i>
                                <span className="text-sm">{t('profile.posts.photo') || "Photo"}</span>
                            </button>
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i className="ri-vidicon-line text-blue-500 dark:text-blue-400"></i>
                                <span className="text-sm">{t('profile.posts.video') || "Video"}</span>
                            </button>
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i className="ri-file-list-3-line text-amber-500 dark:text-amber-400"></i>
                                <span className="text-sm">{t('profile.posts.recipe') || "Recipe"}</span>
                            </button>
                        </div>
                    </div>

                    {/* Posts */}
                    {[
                        {
                            id: 1,
                            type: 'recipe',
                            title: "Homemade Pizza",
                            content: "Just made this amazing homemade pizza with sourdough crust! The secret is letting the dough rest overnight in the refrigerator for that perfect texture.",
                            image: "/images/home/trending/trending1.jpg",
                            likes: 42,
                            comments: 8,
                            shares: 3,
                            time: "2 hours ago",
                        },
                        {
                            id: 2,
                            type: 'text',
                            content: "Looking for recipe suggestions using fresh basil from my garden. Any ideas?",
                            likes: 15,
                            comments: 23,
                            shares: 0,
                            time: "Yesterday",
                        },
                        {
                            id: 3,
                            type: 'photo',
                            content: "Family dinner night! Made my grandmother's special lasagna recipe.",
                            image: "/images/home/trending/trending3.jpg",
                            likes: 67,
                            comments: 12,
                            shares: 5,
                            time: "3 days ago",
                        },
                    ].map((post) => (
                        <div
                            key={post.id}
                            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm dark:shadow-lg dark:shadow-black/20 border border-gray-100 dark:border-gray-700"
                        >
                            {/* Post Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                    <Image
                                        src="/images/home/profile/haha.webp"
                                        alt="Profile"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <p className="font-medium text-gray-800 dark:text-white">Jane Doe</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{post.time}</p>
                                </div>
                                <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                                    <i className="ri-more-fill"></i>
                                </button>
                            </div>

                            {/* Post Content */}
                            <div className="space-y-3">
                                {post.type === 'recipe' && (
                                    <h3 className="font-medium text-lg text-gray-800 dark:text-white">{post.title}</h3>
                                )}
                                <p className="text-gray-600 dark:text-gray-300">{post.content}</p>

                                {post.image && (
                                    <div className="relative h-60 w-full mt-3 rounded-lg overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title || "Post image"}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Post Stats */}
                            <div className="flex items-center justify-between mt-4 pt-1 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center gap-1">
                                    <i className="ri-heart-fill text-red-500"></i>
                                    <span>{post.likes}</span>
                                </div>
                                <div className="flex gap-3">
                                    <span>{post.comments} {t('profile.posts.comments')}</span>
                                    <span>{post.shares} {t('profile.posts.shares')}</span>
                                </div>
                            </div>

                            {/* Post Actions */}
                            <div className="flex border-t border-gray-100 dark:border-gray-700 mt-3 pt-2">
                                <button className="flex-1 flex items-center justify-center gap-2 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
                                    <i className="ri-heart-line"></i>
                                    <span>{t('profile.posts.like')}</span>
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
                                    <i className="ri-chat-1-line"></i>
                                    <span>{t('profile.posts.comment')}</span>
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
                                    <i className="ri-share-forward-line"></i>
                                    <span>{t('profile.posts.share')}</span>
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Load More Button */}
                    <button className="w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        {t('profile.posts.loadMore')}
                    </button>
                </div>
            </div>
        </div>
    );
}

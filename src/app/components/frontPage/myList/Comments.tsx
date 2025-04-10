"use client"
import Image from "next/image";
import { useState } from "react";
import { commentsData } from "@/app/data/MyListData";
import { useTheme } from "@/app/context/ThemeContext";
import { Comment } from "@/app/types/recipe";

export default function Comments({ comments }: { comments: Comment[] }) {
    const { t } = useTheme();
    // State to manage the active tab (My Comments or Liked Comments)
    const [activeTab, setActiveTab] = useState<'my' | 'liked'>('my');

    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-lg dark:shadow-black/20 overflow-hidden border border-gray-100 dark:border-gray-700 mb-20">
            <div className="px-5 py-4 bg-gray-50 dark:bg-gray-700/60 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-1">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{t('myList.comments.recentTitle')}</h2>
                    <div className="flex gap-1 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
                        <button
                            onClick={() => setActiveTab('my')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${activeTab === 'my'
                                ? 'bg-white dark:bg-gray-600 text-gray-800 dark:text-white shadow-sm dark:shadow-black/10'
                                : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                                }`}
                        >
                            {t('myList.comments.myComments')}
                        </button>
                        <button
                            onClick={() => setActiveTab('liked')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${activeTab === 'liked'
                                ? 'bg-white dark:bg-gray-600 text-gray-800 dark:text-white shadow-sm dark:shadow-black/10'
                                : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                                }`}
                        >
                            {t('myList.comments.likedComments')}
                        </button>
                    </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {activeTab === 'my'
                        ? t('myList.comments.myCommentsDescription')
                        : t('myList.comments.likedCommentsDescription')
                    }
                </p>
            </div>

            <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {commentsData.map((comment) => (
                    <div key={comment.id} className="p-5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                        <div className="flex items-start">
                            {/* User Profile */}
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full relative overflow-hidden shadow-sm dark:shadow-black/20 border border-gray-200 dark:border-gray-700">
                                    <Image
                                        src={comment.userImage}
                                        alt={`${comment.userName} ${t('myList.comments.profile')}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Comment Content */}
                            <div className="ml-4 flex-1">
                                {/* User Info and Time */}
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center">
                                        <h3 className="font-medium text-gray-800 dark:text-white">{comment.userName}</h3>
                                        <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">{comment.time}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <button
                                            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                            title={t('myList.comments.like')}
                                        >
                                            <i className="ri-heart-line text-sm"></i>
                                        </button>
                                        <button
                                            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400 hover:text-[#FF6B35] dark:hover:text-indigo-300 transition-colors"
                                            title={t('myList.comments.reply')}
                                        >
                                            <i className="ri-reply-line text-sm"></i>
                                        </button>
                                        <button
                                            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                                            title={t('myList.comments.delete')}
                                        >
                                            <i className="ri-delete-bin-line text-sm"></i>
                                        </button>
                                    </div>
                                </div>

                                {/* Comment Text */}
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{comment.comment}</p>

                                {/* Recipe Reference */}
                                <div className="flex items-center bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
                                    <div className="w-16 h-16 rounded-lg relative overflow-hidden shadow-sm dark:shadow-black/30">
                                        <Image
                                            src={comment.recipeImage}
                                            alt={comment.recipeName}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <h4 className="font-medium text-gray-800 dark:text-white text-sm">{comment.recipeName}</h4>
                                        <div className="flex items-center mt-1 gap-3">
                                            <span className="text-xs text-gray-500 dark:text-gray-400">{comment.date}</span>
                                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                                <i className="ri-heart-fill text-red-400 dark:text-red-400/90 mr-1"></i>
                                                <span>{comment.likes}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer with Load More Button */}
            <div className="bg-gray-50 dark:bg-gray-700/60 px-5 py-3 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full py-2 bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center">
                    <i className="ri-refresh-line mr-1.5 mt-1"></i>
                    {t('myList.comments.loadMore')}
                </button>
            </div>
        </div>
    );
}
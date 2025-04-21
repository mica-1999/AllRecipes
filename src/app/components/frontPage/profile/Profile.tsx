"use client"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { profileTabs } from "@/app/data/ProfileData"
import { useTheme } from "@/app/context/ThemeContext"
import AboutTab from "./tabs/AboutTab"
import RecipesTab from "./tabs/RecipesTab"
import FollowersTab from "./tabs/FollowersTab"
import FollowingTab from "./tabs/FollowingTab"

export default function Profile() {
    // Using NextAuth to get the session data
    const { status } = useSession()

    // State Variables & Hooks
    const [activeTab, setActiveTab] = useState('About');
    const { t } = useTheme();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            {/* Profile Banner */}
            <div className="w-full h-64 relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-md dark:shadow-lg dark:shadow-black/30">
                <div className="absolute inset-0 bg-black opacity-20">
                    <Image
                        src="/images/home/profile/banner1.jpg"
                        alt={t('profile.bannerAlt')}
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>

                {/* Profile Icon */}
                <div className="absolute -bottom-16 left-10 sm:left-16 bg-white dark:bg-gray-800 rounded-full border-4 border-white dark:border-gray-700 w-32 h-32 flex justify-center items-center shadow-lg dark:shadow-black/30 overflow-hidden">
                    <Image
                        src="/images/home/profile/haha.webp"
                        alt={t('profile.avatarAlt')}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Profile Info */}
            <div className="w-full pt-5 pb-4 px-4 sm:pl-54 sm:pr-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Jane Doe</h1>
                        <p className="text-gray-600 dark:text-gray-400 flex items-center">
                            <i className="ri-cookbook-line mr-2"></i>
                            {t('profile.recipeCount').replace('{count}', '489')}
                        </p>
                    </div>
                    <div className="flex gap-3 mt-2 sm:mt-0">
                        {status === "authenticated" ? (
                            <>
                                <button className="px-4 py-2 bg-[#FF6B35] dark:bg-indigo-600 text-white rounded-md hover:bg-[#e55a29] dark:hover:bg-indigo-500 transition-colors flex items-center shadow-sm dark:shadow-black/20 cursor-pointer">
                                    <i className="ri-edit-line mr-2"></i>
                                    {t('profile.buttons.editProfile')}
                                </button>
                                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors flex items-center shadow-sm dark:shadow-black/20 cursor-pointer">
                                    <i className="ri-settings-4-line mr-2"></i>
                                    {t('profile.buttons.settings')}
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="px-4 py-2 bg-[#FF6B35] dark:bg-indigo-600 text-white rounded-md hover:bg-[#e55a29] dark:hover:bg-indigo-500 transition-colors flex items-center shadow-sm dark:shadow-black/20">
                                    <i className="ri-user-add-line mr-2"></i>
                                    {t('profile.buttons.follow')}
                                </button>
                                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors flex items-center shadow-sm dark:shadow-black/20">
                                    <i className="ri-mail-line mr-2"></i>
                                    {t('profile.buttons.message')}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Profile Tabs - Styled similar to myList */}
            <div className="flex items-center w-full border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
                {profileTabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`
                            flex items-center justify-center gap-2 px-6 h-14 cursor-pointer
                            relative transition-all duration-200 
                            ${activeTab === tab.name
                                ? 'text-[#FF6B35] dark:text-indigo-400 font-medium'
                                : 'text-gray-600 dark:text-gray-400 hover:text-[#FF6B35] dark:hover:text-indigo-400'} 
                            whitespace-nowrap
                        `}
                        onClick={() => setActiveTab(tab.name)}
                    >
                        <i className={`${tab.icon} text-lg`}></i>
                        <h1 className="text-base">{t(`profile.tabs.${tab.id}`)}</h1>

                        {/* Active indicator */}
                        {activeTab === tab.name && (
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FF6B35] dark:bg-indigo-400"></div>
                        )}
                    </div>
                ))}
            </div>

            {/* Profile Content */}
            <div className="w-full py-8">
                {activeTab === 'About' && <AboutTab />}
                {activeTab === 'Recipes' && <RecipesTab />}
                {activeTab === 'Followers' && <FollowersTab />}
                {activeTab === 'Following' && <FollowingTab />}
            </div>
        </div>
    )
}
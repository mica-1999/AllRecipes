"use client"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { profileTabs } from "@/app/data/ProfileData"
import { useTheme } from "@/app/context/ThemeContext"

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
                                <button className="px-4 py-2 bg-[#FF6B35] dark:bg-indigo-600 text-white rounded-md hover:bg-[#e55a29] dark:hover:bg-indigo-500 transition-colors flex items-center shadow-sm dark:shadow-black/20">
                                    <i className="ri-edit-line mr-2"></i>
                                    {t('profile.buttons.editProfile')}
                                </button>
                                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors flex items-center shadow-sm dark:shadow-black/20">
                                    <i className="ri-settings-4-line mr-2"></i>
                                    {t('profile.buttons.settings')}
                                </button>
                            </>
                        ):(
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
                {activeTab === 'About' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                        
                        <div className="md:col-span-2">
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
                        </div>
                    </div>
                )}
                
                {activeTab === 'Recipes' && (
                    <div className="text-center py-8">
                        <h2 className="text-lg text-gray-700 dark:text-gray-300">{t('profile.emptyStates.recipes')}</h2>
                    </div>
                )}
                
                {activeTab === 'Followers' && (
                    <div className="text-center py-8">
                        <h2 className="text-lg text-gray-700 dark:text-gray-300">{t('profile.emptyStates.followers')}</h2>
                    </div>
                )}
                
                {activeTab === 'Following' && (
                    <div className="text-center py-8">
                        <h2 className="text-lg text-gray-700 dark:text-gray-300">{t('profile.emptyStates.following')}</h2>
                    </div>
                )}
            </div>
        </div>
    )
}
"use client"
import Image from "next/image";
import Link from "next/link";
import { useTheme } from '@/app/context/ThemeContext';

export default function RecipeOfDay () {
    const { t } = useTheme();
    
    return(
        <>
            <div className="flex items-center w-full h-15 mt-25">
                <h2 className="text-[20px] dark:text-slate-200">{t('recipeOfDay.title')}</h2>
            </div>
            <div className="flex w-full h-[294px] mb-15 gap-4">
                <div className="flex w-full bg-white dark:bg-gray-800 rounded-[15px] overflow-hidden shadow-sm dark:shadow-lg dark:shadow-black/20">
                    {/* Left side - Image */}
                    <div className="w-2/5 relative">
                        <Image
                            src="/images/home/day/img1.jpg"
                            alt="Recipe of the day"
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm">
                            {t('recipeOfDay.todaysPick')}
                        </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="w-3/5 p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-medium mb-2 dark:text-white">Sushi Special</h3>
                            <p className="text-gray-600 dark:text-gray-300">A delicate selection of fresh, expertly crafted sushi rolls with premium fish, topped with a perfect blend of seasonings and garnished with a touch of wasabi and pickled ginger.</p>
                            
                            <div className="flex gap-5 mt-4">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm dark:text-gray-300">{t('recipeOfDay.time').replace('{minutes}', '30')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="text-sm dark:text-gray-300">{t('recipeOfDay.servings').replace('{count}', '4')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <span className="text-sm dark:text-gray-300">{t('recipeOfDay.difficulty.medium')}</span>
                                </div>
                            </div>
                        </div>
                        
                        <Link href="/recipe/moms-special-pasta" className="self-end">
                            <button className="bg-[#FF6B35] hover:bg-[#e55a29] text-white px-5 py-2 rounded-[5px] transition-colors mt-4 dark:bg-indigo-600 dark:hover:bg-indigo-500">
                                {t('recipeOfDay.viewRecipe')}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
"use client"
import Image from "next/image";
import { useTheme } from '@/app/context/ThemeContext';

const images = ["rated1.jpg", "rated2.jpg", "rated3.jpg", "rated4.jpg", "rated5.jpg"];

export default function TopRated () {
    const { t } = useTheme();
    
    return (
        <>
            <div className="flex items-center justify-between w-full h-15">
                <h2 className="text-[20px] dark:text-slate-200">{t('topRated.title')}</h2>
                <div className="flex items-center gap-4">
                    {/* View All button */}
                    <div className="flex items-center gap-2">
                        {/* Left arrow button */}
                        <button className="w-[40px] h-[40px] bg-black hover:bg-[#FF6B35] dark:bg-gray-800 dark:hover:bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6"/>
                            </svg>
                        </button>
                        {/* Right arrow button */}
                        <button className="w-[40px] h-[40px] bg-black hover:bg-[#FF6B35] dark:bg-gray-800 dark:hover:bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex w-full h-[294px] mb-15 gap-4">
                {images.map((_, i) => (
                    <div className="w-1/5 h-full bg-[#D3D3D3] dark:bg-gray-800 rounded-[15px] relative overflow-hidden p-3 shadow-sm dark:shadow-md dark:shadow-black/30 transition-colors" key={i}>
                        <div className="w-full h-[70%] rounded-[15px] relative overflow-hidden">
                            <Image
                                src={`/images/home/toprated/${images[i]}`}
                                alt={t('topRated.imageAlt')}
                                fill
                                sizes="(max-width: 1024px) 100vw, 20vw"
                                className="object-cover"
                                priority
                            />
                            <div className="flex justify-between px-3 items-center absolute top-4 w-full">
                                <div className="flex justify-center items-center w-[43px] h-[28px] bg-black text-white rounded-[20px]">
                                    <p className="text-[12px]">{t('topRated.rating').replace('{rating}', '9.5')}</p>
                                </div>
                                <div className="flex justify-center items-center w-[28px] h-[28px] bg-black text-white rounded-[20px]">
                                    <i className="ri-heart-fill"></i>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full h-[40%]">
                            <h2 className="text-[16px] mt-2 dark:text-white">{t('topRated.recipeTitle')}</h2>
                            <p className="text-[14px] font-light dark:text-gray-400">{t('topRated.category')}</p>
                            <div className="flex w-full items-center justify-between">
                                <h2 className="text-[16px] font-bold mt-2 dark:text-gray-200">{t('topRated.description')}</h2>
                                <i className="ri-arrow-right-s-line text-xl dark:text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="lg:hidden flex w-full h-[294px] mb-15 gap-4 overflow-x-auto pb-2">
                {images.map((_, i) => (
                    <div className="w-[250px] flex-shrink-0 h-full bg-[#D3D3D3] dark:bg-gray-800 rounded-[15px] relative overflow-hidden p-3 shadow-sm dark:shadow-md dark:shadow-black/30 transition-colors" key={i}>
                        <div className="w-full h-[70%] rounded-[15px] relative overflow-hidden">
                            <Image
                                src={`/images/home/toprated/${images[i]}`}
                                alt={t('topRated.imageAlt')}
                                fill
                                sizes="250px"
                                className="object-cover"
                                priority
                            />
                            <div className="flex justify-between px-3 items-center absolute top-4 w-full">
                                <div className="flex justify-center items-center w-[43px] h-[28px] bg-black text-white rounded-[20px]">
                                    <p className="text-[12px]">{t('topRated.rating').replace('{rating}', '9.5')}</p>
                                </div>
                                <div className="flex justify-center items-center w-[28px] h-[28px] bg-black text-white rounded-[20px]">
                                    <i className="ri-heart-fill"></i>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full h-[40%]">
                            <h2 className="text-[16px] mt-2 dark:text-white">{t('topRated.recipeTitle')}</h2>
                            <p className="text-[14px] font-light dark:text-gray-400">{t('topRated.category')}</p>
                            <div className="flex w-full items-center justify-between">
                                <h2 className="text-[16px] font-bold mt-2 dark:text-gray-200">{t('topRated.description')}</h2>
                                <i className="ri-arrow-right-s-line text-xl dark:text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
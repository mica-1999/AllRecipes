"use client"
import Image from "next/image";
import BasicFilter from "@/app/components/frontPage/home/BasicFilter";
import { useTheme } from '@/app/context/ThemeContext';

export default function ImageContainer(){
    const { t } = useTheme();
    
    return (
        <div id="imageSection" className="w-full h-[260px] sm:h-[280px] md:h-[300px] relative mb-12 sm:mb-20 md:mb-16 rounded-[15px]">
            <Image
                src="/images/home/change.jpg"
                alt={t('imageContainer.imageAlt')}
                fill
                className="object-cover rounded-[15px]"
                priority
            />
            <div className="absolute inset-0 bg-black/60 dark:bg-black/70 rounded-[15px]" />
            <div className="flex flex-col items-center justify-center relative z-10 text-white h-full px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">{t('imageContainer.title')}</h1>
                <p className="mt-2 text-sm sm:text-base text-center">{t('imageContainer.description')}</p>
                <div id="filterSection" className="hidden sm:flex w-[95%] sm:w-[90%] md:w-[80%] lg:w-[68%] bg-[#D3D3D3] dark:bg-gray-800 rounded-[30px] sm:rounded-[60px] absolute -bottom-11 left-1/2 -translate-x-1/2 items-center z-20 shadow-md dark:shadow-black/30">
                    <BasicFilter />
                </div>
                <div className="sm:hidden w-[80%] bg-[#D3D3D3] dark:bg-gray-800 rounded-[30px] absolute -bottom-8 left-1/2 -translate-x-1/2 flex justify-center p-3 z-20 shadow-md dark:shadow-black/30">
                    <button className="flex items-center justify-center space-x-2 text-black dark:text-white">
                        <span className="font-semibold">{t('imageContainer.filterRecipes')}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
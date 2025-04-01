"use client"
import { useTheme } from '@/app/context/ThemeContext';

export default function BasicFilter() {
    const { t } = useTheme();

    return (
        <div className="flex items-center justify-between w-full px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4">
            {/* Filter categories - tablet and up */}
            <div className="hidden sm:flex sm:w-[23%] md:w-[24%] items-center pr-2 md:pr-3">
                <div className="flex flex-col w-full">
                    <h2 className="text-[13px] md:text-[14px] lg:text-[16px] text-black dark:text-white font-bold truncate">{t('basicFilter.cuisines')}</h2>
                    <h2 className="text-[11px] md:text-[12px] lg:text-[14px] text-[#030303] dark:text-gray-300 mt-1 truncate">{t('basicFilter.whatCrave')}</h2>
                </div>
            </div>
            
            <div className="hidden sm:flex sm:w-[23%] md:w-[22%] items-center pr-2 md:pr-3">
                <div className="flex flex-col w-full">
                    <h2 className="text-[13px] md:text-[14px] lg:text-[16px] text-black dark:text-white font-bold truncate">{t('basicFilter.filterBy')}</h2>
                    <h2 className="text-[11px] md:text-[12px] lg:text-[14px] text-[#030303] dark:text-gray-300 mt-1 truncate">{t('basicFilter.addIngredient')}</h2>
                </div>
            </div>
            
            <div className="hidden sm:flex sm:w-[23%] md:w-[22%] items-center pr-2 md:pr-3">
                <div className="flex flex-col w-full">
                    <h2 className="text-[13px] md:text-[14px] lg:text-[16px] text-black dark:text-white font-bold truncate">{t('basicFilter.difficulty')}</h2>
                    <h2 className="text-[11px] md:text-[12px] lg:text-[14px] text-[#030303] dark:text-gray-300 mt-1 truncate">{t('basicFilter.selectLevel')}</h2>
                </div>
            </div>
            
            <div className="hidden sm:flex sm:w-[20%] md:w-[20%] items-center">
                <div className="flex flex-col w-full">
                    <h2 className="text-[13px] md:text-[14px] lg:text-[16px] text-black dark:text-white font-bold truncate">{t('basicFilter.filters')}</h2>
                    <h2 className="text-[11px] md:text-[12px] lg:text-[14px] text-[#030303] dark:text-gray-300 mt-1 truncate">{t('basicFilter.customize')}</h2>
                </div>
            </div>
            
            {/* Search button */}
            <div className="flex items-center justify-center sm:ml-auto sm:pl-1 md:pl-2">
                <button className="w-[45px] h-[45px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px] bg-black dark:bg-indigo-600 rounded-[12px] sm:rounded-[15px] flex items-center justify-center text-white hover:bg-gray-800 dark:hover:bg-indigo-500 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
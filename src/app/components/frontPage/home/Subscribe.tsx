"use client"
import { useTheme } from '@/app/context/ThemeContext';

export default function Subscribe() {
    const { t } = useTheme();
    
    return (
        <>
            <div className="flex flex-col min-[885px]:flex-row items-start min-[885px]:items-center justify-between w-full py-6 px-8 
                bg-[#D3D3D3] dark:bg-gray-800 
                rounded-[8px] 
                border border-[#E0E0E0] dark:border-gray-700 
                shadow-sm dark:shadow-md dark:shadow-black/20 
                mb-20">
                {/* Left side - Content */}
                <div className="flex flex-col gap-2 max-w-full min-[885px]:max-w-[60%] mb-4 min-[885px]:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{t('subscribe.title')}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        {t('subscribe.description')}
                    </p>
                </div>
                
                {/* Form - Works for both mobile and desktop */}
                <div className="flex flex-col min-[885px]:flex-row items-center gap-3 w-full min-[885px]:w-auto">
                    <div className="relative w-full min-[885px]:w-64">
                        <input 
                            type="email" 
                            placeholder={t('subscribe.placeholder')}
                            className="w-full h-[42px] px-4 py-2 
                                rounded-[5px] 
                                border border-[#d3d3d3] dark:border-gray-600
                                bg-white dark:bg-gray-700 dark:text-white dark:placeholder-gray-400
                                focus:outline-none focus:border-[#747474] dark:focus:border-indigo-400
                                focus:ring-1 focus:ring-[#747474] dark:focus:ring-indigo-400
                                transition-all duration-200"
                        />
                    </div>
                    <button 
                        className="w-full min-[885px]:w-auto h-[42px] px-5 py-2 
                            bg-[#FF6B35] dark:bg-indigo-600
                            text-white text-sm font-medium
                            rounded-[5px] 
                            hover:bg-[#e55a29] dark:hover:bg-indigo-500
                            transition-colors duration-200
                            flex items-center justify-center gap-2
                            cursor-pointer"
                    >
                        <span>{t('subscribe.button')}</span>
                        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
        </>
    );
}
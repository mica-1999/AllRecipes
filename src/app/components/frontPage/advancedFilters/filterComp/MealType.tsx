"use client"
import { useTheme } from '@/app/context/ThemeContext';
import { MealTypeProps } from '@/app/types/filters';

export default function MealType({mealType, setMealType}: MealTypeProps) {
    const { t, tArray } = useTheme();
    
    const toggleMealType = (type: string) => {
        if (mealType.includes(type)) {
            setMealType(mealType.filter(item => item !== type));
        } else {
            setMealType([...mealType, type]);
        }
    };

    return(
        <>
            <div className={`bg-white dark:bg-gray-800 p-5 border-[0.5px] border-gray-200 dark:border-gray-700 relative hover:z-10 hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-200
                ${mealType.length > 0 ? "after:absolute after:top-0 after:right-0 after:h-4 after:w-4 after:rounded-full after:bg-indigo-500 dark:after:bg-indigo-400 after:-translate-y-1/2 after:translate-x-1/2" : ""}`}>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{t('advancedFilters.filterSections.mealType')}</h2>
                <div className="flex flex-wrap gap-2">
                    {tArray<string>('advancedFilters.mealTypes').map((type) => (
                        <button
                            key={type}
                            onClick={() => toggleMealType(type)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
                                mealType.includes(type)
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

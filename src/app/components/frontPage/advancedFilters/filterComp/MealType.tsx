"use client"
import { useTheme } from '@/app/context/ThemeContext';
import { MealTypeProps } from '@/app/types/filters';

export default function MealType({ mealType, setMealType }: MealTypeProps) {
    const { t, tArray } = useTheme();

    const toggleMealType = (type: string) => {
        if (mealType.includes(type)) {
            setMealType(mealType.filter(item => item !== type));
        } else {
            setMealType([...mealType, type]);
        }
    };

    return (
        <>
            <div className={`bg-white dark:bg-gray-800 p-5 relative hover:z-10 hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-200
                ${mealType.length > 0
                    ? "border-l-4 border-indigo-500 dark:border-indigo-400 border-t border-r border-b border-t-gray-200 border-r-gray-200 border-b-gray-200 dark:border-t-gray-700 dark:border-r-gray-700 dark:border-b-gray-700"
                    : "border border-gray-200 dark:border-gray-700"
                }`}>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                    {t('advancedFilters.filterSections.mealType')}
                    {mealType.length > 0 && (
                        <span className="ml-2 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-0.5 rounded-full">
                            {mealType.length}
                        </span>
                    )}
                </h2>
                <div className="flex flex-wrap gap-2">
                    {tArray<string>('advancedFilters.mealTypes').map((type) => (
                        <button
                            key={type}
                            onClick={() => toggleMealType(type)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${mealType.includes(type)
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

"use client"
import { methods } from "@/app/data/AdvFiltersData";
import { useTheme } from '@/app/context/ThemeContext';
import { CookingMethodProps } from '@/app/types/filters';

export default function CookingMethod({ cookingMethod, setCookingMethod }: CookingMethodProps) {
    const { t } = useTheme();

    // Function to toggle the selected cooking method
    const toggleMethod = (method: string) => {
        if (cookingMethod.includes(method)) {
            setCookingMethod(cookingMethod.filter(item => item !== method));
        } else {
            setCookingMethod([...cookingMethod, method]);
        }
    };

    // Function to get the method translation
    const getMethodTranslation = (methodName: string) => {

        // Handle specific cases for translations (space and special characters)
        if (methodName === "Sautéing") return t('advancedFilters.cookingMethods.sauteing');
        if (methodName === "Slow Cooking") return t('advancedFilters.cookingMethods.slowCooking');

        // Convert method name to lowercase and remove spaces for use as a translation key
        const key = methodName.toLowerCase().replace(/\s+/g, '');
        return t(`advancedFilters.cookingMethods.${key}`);
    };

    return (
        <>
            <div className={`bg-white dark:bg-gray-800 p-5 relative hover:z-10 hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-200
                ${cookingMethod.length > 0
                    ? "border-l-4 border-indigo-500 dark:border-indigo-400 border-t border-r border-b border-t-gray-200 border-r-gray-200 border-b-gray-200 dark:border-t-gray-700 dark:border-r-gray-700 dark:border-b-gray-700"
                    : "border border-gray-200 dark:border-gray-700"
                }`}>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    {t('advancedFilters.filterSections.cookingMethod')}
                    {cookingMethod.length > 0 && (
                        <span className="ml-2 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-0.5 rounded-full">
                            {cookingMethod.length}
                        </span>
                    )}
                </h2>
                <div className="grid grid-cols-4 gap-3">
                    {methods.map((method) => (
                        <div
                            key={method.name}
                            onClick={() => toggleMethod(method.name)}
                            className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-colors ${cookingMethod.includes(method.name)
                                    ? 'bg-indigo-100 dark:bg-indigo-900/70 ring-2 ring-indigo-400 dark:ring-indigo-500'
                                    : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                                }`}
                        >
                            <span className="text-2xl mb-1 dark:text-gray-200">{method.icon}</span>
                            <span className="text-xs font-medium text-center text-gray-700 dark:text-gray-300">{getMethodTranslation(method.name)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

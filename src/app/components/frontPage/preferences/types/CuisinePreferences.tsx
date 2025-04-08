"use client"
import { cuisineTypeBox } from "@/app/data/PreferencesData";
import { useTheme } from '@/app/context/ThemeContext';
import { CuisinePreferencesProps } from '@/app/types/preferences';

export default function CuisinePreferences({ preferences, customColors, onPreferenceChange }: CuisinePreferencesProps) {
    const { t } = useTheme();

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-lg dark:shadow-black/20 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
                <i className="ri-global-line text-xl text-[#FF6B35] dark:text-indigo-400 mr-2"></i>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{t('preferences.cuisinePreferences.title')}</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{t('preferences.cuisinePreferences.subtitle')}</p>

            <div className="space-y-3">
                {cuisineTypeBox.map((item) => (
                    <label
                        key={item.id}
                        className="flex items-start cursor-pointer group p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700/70 transition-colors"
                    >
                        <div className="flex items-center h-5">
                            <input
                                id={item.id}
                                type="checkbox"
                                checked={preferences.includes(item.id)}
                                onChange={() => onPreferenceChange(item.id)}
                                className="h-4 w-4 text-[#FF6B35] dark:text-indigo-500 border-gray-300 dark:border-gray-600 rounded focus:ring-[#FF6B35] dark:focus:ring-indigo-500 dark:bg-gray-700"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <div className="flex items-center">
                                <i className={`${item.icon} mr-2 text-gray-600 dark:text-gray-400 group-hover:text-[#FF6B35] group-hover:dark:text-indigo-400`}></i>
                                <span className="font-medium text-gray-700 dark:text-gray-200">{item.name}</span>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                            <div className="mt-1 w-full h-2 rounded-full" style={{ backgroundColor: customColors[item.id] || item.color }}></div>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
}

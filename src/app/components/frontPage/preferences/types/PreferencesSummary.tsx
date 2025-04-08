"use client"
import { mealTypeBox, dietRestrictionBox, cuisineTypeBox, cookingPreferenceBox } from "@/app/data/PreferencesData";
import { useTheme } from '@/app/context/ThemeContext';
import { PreferencesSummaryProps } from '@/app/types/preferences';

export default function PreferencesSummary({
    dietPreferences,
    cuisinePreferences,
    mealPreferences,
    cookingPreferences,
    customColors
}: PreferencesSummaryProps) {
    const { t } = useTheme();

    return (
        <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-lg dark:shadow-black/20">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('preferences.summary.title')}</h3>

            {/* Diet preferences */}
            <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('preferences.summary.diet')}</h4>
                <div className="flex flex-wrap gap-2">
                    {dietPreferences.length > 0 ? (
                        dietPreferences.map(pref => {
                            const item = dietRestrictionBox.find(i => i.id === pref);
                            return (
                                <span
                                    key={pref}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                                    style={{
                                        backgroundColor: `${customColors[pref] || item?.color}40`,
                                        color: customColors[pref] || item?.color
                                    }}
                                >
                                    <i className={`${item?.icon} mr-1`}></i>
                                    {item?.name}
                                </span>
                            );
                        })
                    ) : (
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{t('preferences.summary.noneSelected')}</span>
                    )}
                </div>
            </div>

            {/* Cuisine preferences */}
            <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('preferences.summary.cuisine')}</h4>
                <div className="flex flex-wrap gap-2">
                    {cuisinePreferences.length > 0 ? (
                        cuisinePreferences.map(pref => {
                            const item = cuisineTypeBox.find(i => i.id === pref);
                            return (
                                <span
                                    key={pref}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                                    style={{
                                        backgroundColor: `${customColors[pref] || item?.color}40`,
                                        color: customColors[pref] || item?.color
                                    }}
                                >
                                    <i className={`${item?.icon} mr-1`}></i>
                                    {item?.name}
                                </span>
                            );
                        })
                    ) : (
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{t('preferences.summary.noneSelected')}</span>
                    )}
                </div>
            </div>

            {/* Meal preferences */}
            <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('preferences.summary.mealType')}</h4>
                <div className="flex flex-wrap gap-2">
                    {mealPreferences.length > 0 ? (
                        mealPreferences.map(pref => {
                            const item = mealTypeBox.find(i => i.id === pref);
                            return (
                                <span
                                    key={pref}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                                    style={{
                                        backgroundColor: `${customColors[pref] || item?.color}40`,
                                        color: customColors[pref] || item?.color
                                    }}
                                >
                                    <i className={`${item?.icon} mr-1`}></i>
                                    {item?.name}
                                </span>
                            );
                        })
                    ) : (
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{t('preferences.summary.noneSelected')}</span>
                    )}
                </div>
            </div>

            {/* Cooking preferences */}
            <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('preferences.summary.cooking')}</h4>
                <div className="flex flex-wrap gap-2">
                    {cookingPreferences.length > 0 ? (
                        cookingPreferences.map(pref => {
                            const item = cookingPreferenceBox.find(i => i.id === pref);
                            return (
                                <span
                                    key={pref}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                                    style={{
                                        backgroundColor: `${customColors[pref] || item?.color}40`,
                                        color: customColors[pref] || item?.color
                                    }}
                                >
                                    <i className={`${item?.icon} mr-1`}></i>
                                    {item?.name}
                                </span>
                            );
                        })
                    ) : (
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{t('preferences.summary.noneSelected')}</span>
                    )}
                </div>
            </div>

            <div className="flex items-center justify-center mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-100 dark:border-blue-800/30">
                <i className="ri-information-line text-blue-500 dark:text-blue-400 text-lg mr-2"></i>
                <p className="text-sm text-blue-700 dark:text-blue-300">{t('themeSettings.sessionNote')}</p>
            </div>
        </div>
    );
}

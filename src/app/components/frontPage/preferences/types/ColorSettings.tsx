"use client"
import { mealTypeBox, dietRestrictionBox, cuisineTypeBox, cookingPreferenceBox } from "@/app/data/PreferencesData";
import Image from 'next/image';
import { useTheme } from '@/app/context/ThemeContext';
import { ColorSettingsProps } from '@/app/types/preferences';

export default function ColorSettings({ 
    dietPreferences,
    cuisinePreferences,
    mealPreferences,
    cookingPreferences,
    customColors,
    onColorChange,
    onColorReset
}: ColorSettingsProps) {
    const { t } = useTheme();
    
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-lg dark:shadow-black/20 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-6">
                <i className="ri-palette-line text-xl text-[#FF6B35] dark:text-indigo-400 mr-2"></i>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{t('preferences.colorSettings.title')}</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{t('preferences.colorSettings.subtitle')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Diet Colors */}
                <div className="rounded-lg shadow-md dark:shadow-lg dark:shadow-black/20 p-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-medium text-gray-800 dark:text-white mb-3">{t('preferences.summary.diet')}</h3>
                    <div className="space-y-4">
                        {dietRestrictionBox.map(item => (
                            <div key={item.id} className="flex items-center justify-between py-1">
                                <label htmlFor={`color-${item.id}`} className="flex items-center flex-1 cursor-pointer">
                                    <div 
                                        className="w-4 h-4 rounded-full mr-2 border border-gray-200 dark:border-gray-600" 
                                        style={{ backgroundColor: customColors[item.id] || item.color }}
                                    ></div>
                                    <span className="text-sm text-gray-700 dark:text-gray-200">{item.name}</span>
                                </label>
                                <div className="flex items-center">
                                    <input 
                                        type="color" 
                                        id={`color-${item.id}`}
                                        value={customColors[item.id] || item.color}
                                        onChange={(e) => onColorChange(item.id, e.target.value)}
                                        className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent"
                                    />
                                    <button 
                                        onClick={() => onColorReset(item.id)}
                                        className="ml-2 p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                                        title={t('preferences.colorSettings.reset')}
                                    >
                                        <i className="ri-refresh-line"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cuisine Colors */}
                <div className="rounded-lg shadow-md dark:shadow-lg dark:shadow-black/20 p-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-medium text-gray-800 dark:text-white mb-3">{t('preferences.summary.cuisine')}</h3>
                    <div className="space-y-4">
                        {cuisineTypeBox.map(item => (
                            <div key={item.id} className="flex items-center justify-between py-1">
                                <label htmlFor={`color-${item.id}`} className="flex items-center flex-1 cursor-pointer">
                                    <div 
                                        className="w-4 h-4 rounded-full mr-2 border border-gray-200 dark:border-gray-600" 
                                        style={{ backgroundColor: customColors[item.id] || item.color }}
                                    ></div>
                                    <span className="text-sm text-gray-700 dark:text-gray-200">{item.name}</span>
                                </label>
                                <div className="flex items-center">
                                    <label className="mr-2 text-sm text-gray-600 dark:text-gray-400">{t('preferences.colorSettings.color')}:</label>
                                    <input 
                                        type="color" 
                                        id={`color-${item.id}`}
                                        value={customColors[item.id] || item.color}
                                        onChange={(e) => onColorChange(item.id, e.target.value)}
                                        className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent"
                                    />
                                    <button 
                                        onClick={() => onColorReset(item.id)}
                                        className="ml-2 p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                                        title={t('preferences.colorSettings.reset')}
                                    >
                                        <i className="ri-refresh-line"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Meal Type Colors */}
                <div className="rounded-lg shadow-md dark:shadow-lg dark:shadow-black/20 p-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-medium text-gray-800 dark:text-white mb-3">{t('preferences.summary.mealType')}</h3>
                    <div className="space-y-4">
                        {mealTypeBox.map(item => (
                            <div key={item.id} className="flex items-center justify-between py-1">
                                <label htmlFor={`color-${item.id}`} className="flex items-center flex-1 cursor-pointer">
                                    <div 
                                        className="w-4 h-4 rounded-full mr-2 border border-gray-200 dark:border-gray-600" 
                                        style={{ backgroundColor: customColors[item.id] || item.color }}
                                    ></div>
                                    <span className="text-sm text-gray-700 dark:text-gray-200">{item.name}</span>
                                </label>
                                <div className="flex items-center">
                                    <input 
                                        type="color" 
                                        id={`color-${item.id}`}
                                        value={customColors[item.id] || item.color}
                                        onChange={(e) => onColorChange(item.id, e.target.value)}
                                        className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent"
                                    />
                                    <button 
                                        onClick={() => onColorReset(item.id)}
                                        className="ml-2 p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                                        title={t('preferences.colorSettings.reset')}
                                    >
                                        <i className="ri-refresh-line"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cooking Preference Colors */}
                <div className="rounded-lg shadow-md dark:shadow-lg dark:shadow-black/20 p-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-medium text-gray-800 dark:text-white mb-3">{t('preferences.summary.cooking')}</h3>
                    <div className="space-y-4">
                        {cookingPreferenceBox.map(item => (
                            <div key={item.id} className="flex items-center justify-between py-1">
                                <label htmlFor={`color-${item.id}`} className="flex items-center flex-1 cursor-pointer">
                                    <div 
                                        className="w-4 h-4 rounded-full mr-2 border border-gray-200 dark:border-gray-600" 
                                        style={{ backgroundColor: customColors[item.id] || item.color }}
                                    ></div>
                                    <span className="text-sm text-gray-700 dark:text-gray-200">{item.name}</span>
                                </label>
                                <div className="flex items-center">
                                    <input 
                                        type="color" 
                                        id={`color-${item.id}`}
                                        value={customColors[item.id] || item.color}
                                        onChange={(e) => onColorChange(item.id, e.target.value)}
                                        className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent"
                                    />
                                    <button 
                                        onClick={() => onColorReset(item.id)}
                                        className="ml-2 p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                                        title={t('preferences.colorSettings.reset')}
                                    >
                                        <i className="ri-refresh-line"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Color Preview Section */}
            <div className="mt-8 p-5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                <h3 className="font-medium text-gray-800 dark:text-white mb-4">{t('preferences.colorSettings.title')}</h3>
                <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg dark:shadow-black/30 rounded-lg overflow-hidden">
                    <div className="relative h-48">
                        <Image 
                            src="/images/home/change.jpg" 
                            alt="Sample recipe" 
                            fill
                            quality={100}
                            className="object-cover"
                        />
                        
                        {/* Color indicators for preview */}
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                            {dietPreferences.map(pref => {
                                const item = dietRestrictionBox.find(i => i.id === pref);
                                return (
                                    <div 
                                        key={pref} 
                                        className="w-4 h-4 rounded-full border border-white dark:border-gray-900 shadow-sm dark:shadow-black/30" 
                                        style={{ backgroundColor: customColors[pref] || item?.color }}
                                        title={item?.name}
                                    ></div>
                                );
                            })}
                        </div>
                        
                        <div className="absolute top-3 right-3 flex flex-wrap gap-1">
                            {cuisinePreferences.map(pref => {
                                const item = cuisineTypeBox.find(i => i.id === pref);
                                return (
                                    <div 
                                        key={pref} 
                                        className="w-4 h-4 rounded-full border border-white dark:border-gray-900 shadow-sm dark:shadow-black/30" 
                                        style={{ backgroundColor: customColors[pref] || item?.color }}
                                        title={item?.name}
                                    ></div>
                                );
                            })}
                        </div>
                        
                        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                            {mealPreferences.map(pref => {
                                const item = mealTypeBox.find(i => i.id === pref);
                                return (
                                    <div 
                                        key={pref} 
                                        className="w-4 h-4 rounded-full border border-white dark:border-gray-900 shadow-sm dark:shadow-black/30" 
                                        style={{ backgroundColor: customColors[pref] || item?.color }}
                                        title={item?.name}
                                    ></div>
                                );
                            })}
                        </div>
                        
                        <div className="absolute bottom-3 right-3 flex flex-wrap gap-1">
                            {cookingPreferences.map(pref => {
                                const item = cookingPreferenceBox.find(i => i.id === pref);
                                return (
                                    <div 
                                        key={pref} 
                                        className="w-4 h-4 rounded-full border border-white dark:border-gray-900 shadow-sm dark:shadow-black/30" 
                                        style={{ backgroundColor: customColors[pref] || item?.color }}
                                        title={item?.name}
                                    ></div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="p-4">
                        <h4 className="font-medium text-gray-800 dark:text-white">Sample Recipe Title</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t('preferences.colorSettings.preview')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

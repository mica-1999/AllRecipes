import React from 'react';
import { dietRestrictionBox } from './DietPreferences';
import { cuisineTypeBox } from './CuisinePreferences';
import { mealTypeBox } from './MealPreferences';
import { cookingPreferenceBox } from './CookingPreferences';

interface ColorSettingsProps {
    dietPreferences: string[];
    cuisinePreferences: string[];
    mealPreferences: string[];
    cookingPreferences: string[];
    customColors: {[key: string]: string};
    onColorChange: (id: string, value: string) => void;
    onColorReset: (id: string) => void;
}

export default function ColorSettings({ 
    dietPreferences,
    cuisinePreferences,
    mealPreferences,
    cookingPreferences,
    customColors,
    onColorChange,
    onColorReset
}: ColorSettingsProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
                <i className="ri-palette-line text-xl text-[#FF6B35] mr-2"></i>
                <h2 className="text-xl font-semibold text-gray-800">Visual Identification</h2>
            </div>
            <p className="text-sm text-gray-600 mb-6">
                Customize colors to easily identify recipe categories when browsing through lists.
                These colors will appear as indicators next to recipes in search results and lists.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Diet Colors */}
                <div>
                    <h3 className="font-medium text-gray-800 mb-3">Diet Restriction Colors</h3>
                    <div className="space-y-4">
                        {dietRestrictionBox.map(item => (
                            <div key={item.id} className="flex items-center">
                                <label htmlFor={`color-${item.id}`} className="flex items-center flex-1">
                                    <div 
                                        className="w-4 h-4 rounded-full mr-2" 
                                        style={{ backgroundColor: customColors[item.id] || item.color }}
                                    ></div>
                                    <span className="text-sm text-gray-700">{item.name}</span>
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
                                        className="ml-2 text-gray-500 hover:text-red-500"
                                        title="Reset to default"
                                    >
                                        <i className="ri-refresh-line"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cuisine Colors */}
                <div>
                    <h3 className="font-medium text-gray-800 mb-3">Cuisine Type Colors</h3>
                    <div className="space-y-4">
                        {cuisineTypeBox.map(item => (
                            <div key={item.id} className="flex items-center">
                                <label htmlFor={`color-${item.id}`} className="flex items-center flex-1">
                                    <div 
                                        className="w-4 h-4 rounded-full mr-2" 
                                        style={{ backgroundColor: customColors[item.id] || item.color }}
                                    ></div>
                                    <span className="text-sm text-gray-700">{item.name}</span>
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
                                        className="ml-2 text-gray-500 hover:text-red-500"
                                        title="Reset to default"
                                    >
                                        <i className="ri-refresh-line"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Meal Type Colors */}
                <div>
                    <h3 className="font-medium text-gray-800 mb-3">Meal Type Colors</h3>
                    <div className="space-y-4">
                        {mealTypeBox.map(item => (
                            <div key={item.id} className="flex items-center">
                                <label htmlFor={`color-${item.id}`} className="flex items-center flex-1">
                                    <div 
                                        className="w-4 h-4 rounded-full mr-2" 
                                        style={{ backgroundColor: customColors[item.id] || item.color }}
                                    ></div>
                                    <span className="text-sm text-gray-700">{item.name}</span>
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
                                        className="ml-2 text-gray-500 hover:text-red-500"
                                        title="Reset to default"
                                    >
                                        <i className="ri-refresh-line"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cooking Preference Colors */}
                <div>
                    <h3 className="font-medium text-gray-800 mb-3">Cooking Preference Colors</h3>
                    <div className="space-y-4">
                        {cookingPreferenceBox.map(item => (
                            <div key={item.id} className="flex items-center">
                                <label htmlFor={`color-${item.id}`} className="flex items-center flex-1">
                                    <div 
                                        className="w-4 h-4 rounded-full mr-2" 
                                        style={{ backgroundColor: customColors[item.id] || item.color }}
                                    ></div>
                                    <span className="text-sm text-gray-700">{item.name}</span>
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
                                        className="ml-2 text-gray-500 hover:text-red-500"
                                        title="Reset to default"
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
            <div className="mt-8 p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-4">Recipe Card Preview</h3>
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="relative">
                        <img 
                            src="/images/recipe-example.jpg" 
                            alt="Sample recipe" 
                            className="h-48 w-full object-cover"
                            onError={(e) => {
                                // Fallback to a colorful gradient if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%23FF6B35'/%3E%3Cstop offset='1' stop-color='%23F7C59F'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23444' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E";
                            }}
                        />
                        
                        {/* Color indicators for preview */}
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                            {dietPreferences.map(pref => {
                                const item = dietRestrictionBox.find(i => i.id === pref);
                                return (
                                    <div 
                                        key={pref} 
                                        className="w-3 h-3 rounded-full" 
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
                                        className="w-3 h-3 rounded-full" 
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
                                        className="w-3 h-3 rounded-full" 
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
                                        className="w-3 h-3 rounded-full" 
                                        style={{ backgroundColor: customColors[pref] || item?.color }}
                                        title={item?.name}
                                    ></div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="p-4">
                        <h4 className="font-medium">Sample Recipe Title</h4>
                        <p className="text-sm text-gray-600 mt-1">This is how your recipes will appear with the selected color indicators.</p>
                    </div>
                </div>
                
                <p className="text-sm text-gray-500 mt-4">
                    <i className="ri-information-line mr-1"></i>
                    Recipe cards will show colored indicators for the categories you've selected, making it easier to identify recipes at a glance.
                </p>
            </div>
        </div>
    );
}

import React from 'react';
import { dietRestrictionBox } from './DietPreferences';
import { cuisineTypeBox } from './CuisinePreferences';
import { mealTypeBox } from './MealPreferences';
import { cookingPreferenceBox } from './CookingPreferences';

interface PreferencesSummaryProps {
    dietPreferences: string[];
    cuisinePreferences: string[];
    mealPreferences: string[];
    cookingPreferences: string[];
    customColors: {[key: string]: string};
}

export default function PreferencesSummary({ 
    dietPreferences, 
    cuisinePreferences, 
    mealPreferences,
    cookingPreferences,
    customColors 
}: PreferencesSummaryProps) {
    return (
        <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Your Selected Preferences</h3>
            
            {/* Diet preferences */}
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
                    <span className="text-gray-500 text-sm">No diet restrictions selected</span>
                )}
            </div>
            
            {/* Cuisine preferences */}
            <div className="mt-4 flex flex-wrap gap-2">
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
                    <span className="text-gray-500 text-sm">No cuisine preferences selected</span>
                )}
            </div>
            
            {/* Meal preferences */}
            <div className="mt-4 flex flex-wrap gap-2">
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
                    <span className="text-gray-500 text-sm">No meal types selected</span>
                )}
            </div>
            
            {/* Cooking preferences */}
            <div className="mt-4 flex flex-wrap gap-2">
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
                    <span className="text-gray-500 text-sm">No cooking preferences selected</span>
                )}
            </div>
        </div>
    );
}

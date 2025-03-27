import React from 'react';

export const cuisineTypeBox = [
    { id: "portuguese", name: "Portuguese", icon: "ri-flag-line", description: "Traditional Portuguese dishes", color: "#006600" },
    { id: "italian", name: "Italian", icon: "ri-restaurant-line", description: "Italian cuisine", color: "#E53935" },
    { id: "mediterranean", name: "Mediterranean", icon: "ri-sun-line", description: "Mediterranean diet", color: "#1E88E5" },
    { id: "asian", name: "Asian", icon: "ri-vip-crown-line", description: "Asian flavors", color: "#D81B60" },
    { id: "american", name: "American", icon: "ri-store-line", description: "American classics", color: "#3949AB" }
];

interface CuisinePreferencesProps {
    preferences: string[];
    customColors: {[key: string]: string};
    onPreferenceChange: (id: string) => void;
}

export default function CuisinePreferences({ preferences, customColors, onPreferenceChange }: CuisinePreferencesProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <i className="ri-global-line text-xl text-[#FF6B35] mr-2"></i>
                <h2 className="text-xl font-semibold text-gray-800">Cuisine Preferences</h2>
            </div>
            <p className="text-sm text-gray-600 mb-6">What types of cuisine do you prefer?</p>
            
            <div className="space-y-3">
                {cuisineTypeBox.map((item) => (
                    <label key={item.id} className="flex items-start cursor-pointer group p-2 rounded-md hover:bg-gray-50">
                        <div className="flex items-center h-5">
                            <input
                                id={item.id}
                                type="checkbox"
                                checked={preferences.includes(item.id)}
                                onChange={() => onPreferenceChange(item.id)}
                                className="h-4 w-4 text-[#FF6B35] border-gray-300 rounded focus:ring-[#FF6B35]"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <div className="flex items-center">
                                <i className={`${item.icon} mr-2 text-gray-600 group-hover:text-[#FF6B35]`}></i>
                                <span className="font-medium text-gray-700">{item.name}</span>
                            </div>
                            <p className="text-gray-500 mt-1">{item.description}</p>
                            <div className="mt-1 w-full h-2 rounded-full" style={{ backgroundColor: customColors[item.id] || item.color }}></div>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
}

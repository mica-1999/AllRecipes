export const mealTypeBox = [
    { id: "breakfast", name: "Breakfast", icon: "ri-cup-line", description: "Morning meals", color: "#FFA000" },
    { id: "lunch", name: "Lunch", icon: "ri-restaurant-2-line", description: "Midday meals", color: "#F57C00" },
    { id: "dinner", name: "Dinner", icon: "ri-restaurant-fill", description: "Evening meals", color: "#6D4C41" },
    { id: "snack", name: "Snack", icon: "ri-cake-line", description: "Light bites", color: "#00897B" },
    { id: "dessert", name: "Dessert", icon: "ri-cake-3-line", description: "Sweet treats", color: "#EC407A" },
    { id: "drink", name: "Drink", icon: "ri-goblet-line", description: "Beverages", color: "#42A5F5" }
];

interface MealPreferencesProps {
    preferences: string[];
    customColors: {[key: string]: string};
    onPreferenceChange: (id: string) => void;
}

export default function MealPreferences({ preferences, customColors, onPreferenceChange }: MealPreferencesProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <i className="ri-timer-line text-xl text-[#FF6B35] mr-2"></i>
                <h2 className="text-xl font-semibold text-gray-800">Meal Types</h2>
            </div>
            <p className="text-sm text-gray-600 mb-6">What kinds of meals are you interested in?</p>
            
            <div className="space-y-3">
                {mealTypeBox.map((item) => (
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

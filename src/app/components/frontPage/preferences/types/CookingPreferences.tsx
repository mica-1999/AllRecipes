export const cookingPreferenceBox = [
    { id: "quick", name: "Quick & Easy", icon: "ri-timer-flash-line", description: "Under 30 minutes", color: "#00BCD4" },
    { id: "beginner", name: "Beginner", icon: "ri-user-smile-line", description: "Simple techniques", color: "#8BC34A" },
    { id: "intermediate", name: "Intermediate", icon: "ri-user-star-line", description: "Some cooking experience", color: "#FF9800" },
    { id: "advanced", name: "Advanced", icon: "ri-user-settings-line", description: "Complex techniques", color: "#F44336" },
    { id: "onepot", name: "One Pot", icon: "ri-bowl-line", description: "Minimal cleanup", color: "#795548" },
    { id: "mealprep", name: "Meal Prep", icon: "ri-fridge-line", description: "Make ahead meals", color: "#607D8B" }
];

interface CookingPreferencesProps {
    preferences: string[];
    customColors: {[key: string]: string};
    onPreferenceChange: (id: string) => void;
}

export default function CookingPreferences({ preferences, customColors, onPreferenceChange }: CookingPreferencesProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <i className="ri-knife-line text-xl text-[#FF6B35] mr-2"></i>
                <h2 className="text-xl font-semibold text-gray-800">Cooking Preferences</h2>
            </div>
            <p className="text-sm text-gray-600 mb-6">How much time and skill do you have?</p>
            
            <div className="space-y-3">
                {cookingPreferenceBox.map((item) => (
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

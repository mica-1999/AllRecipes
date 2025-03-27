export const dietRestrictionBox = [
    { id: "vegetarian", name: "Vegetarian", icon: "ri-plant-line", description: "No meat, fish, or poultry", color: "#4CAF50" },
    { id: "vegan", name: "Vegan", icon: "ri-leaf-line", description: "No animal products", color: "#8BC34A" },
    { id: "gluten-free", name: "Gluten-free", icon: "ri-seed-line", description: "No wheat, barley, or rye", color: "#FFEB3B" },
    { id: "dairy-free", name: "Dairy-free", icon: "ri-drop-line", description: "No milk, cheese, or dairy", color: "#03A9F4" },
    { id: "nut-free", name: "Nut-free", icon: "ri-forbidden-2-line", description: "No tree nuts or peanuts", color: "#FF5722" }
];

interface DietPreferencesProps {
    preferences: string[];
    customColors: {[key: string]: string};
    onPreferenceChange: (id: string) => void;
}

export default function DietPreferences({ preferences, customColors, onPreferenceChange }: DietPreferencesProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <i className="ri-restaurant-line text-xl text-[#FF6B35] mr-2"></i>
                <h2 className="text-xl font-semibold text-gray-800">Diet Restrictions</h2>
            </div>
            <p className="text-sm text-gray-600 mb-6">Select any dietary restrictions you have</p>
            
            <div className="space-y-3">
                {dietRestrictionBox.map((item) => (
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
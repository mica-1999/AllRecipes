"use client"

interface CookingMethodProps {
    cookingMethod: string[];
    setCookingMethod: (value: string[]) => void;
}

export default function CookingMethod({cookingMethod, setCookingMethod}: CookingMethodProps) {
    const methods = [
        { name: "Baking", icon: "🍞" },
        { name: "Frying", icon: "🍳" },
        { name: "Grilling", icon: "🔥" },
        { name: "Steaming", icon: "♨️" },
        { name: "Boiling", icon: "🍲" },
        { name: "Roasting", icon: "🍗" },
        { name: "Sautéing", icon: "🥘" },
        { name: "Slow Cooking", icon: "⏱️" }
    ];
    
    const toggleMethod = (method: string) => {
        if (cookingMethod.includes(method)) {
            setCookingMethod(cookingMethod.filter(item => item !== method));
        } else {
            setCookingMethod([...cookingMethod, method]);
        }
    };

    return(
        <>
            <div className={`bg-white p-5 ${cookingMethod.length > 0 ? "border-[2.5px] border-green-500": "border-[0.5px] border-gray-200"} relative hover:z-10 hover:shadow-lg transition-all duration-200`}>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Cooking Method</h2>
                <div className="grid grid-cols-4 gap-3">
                    {methods.map((method) => (
                        <div 
                            key={method.name}
                            onClick={() => toggleMethod(method.name)}
                            className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-colors ${
                                cookingMethod.includes(method.name)
                                    ? 'bg-indigo-100 ring-2 ring-indigo-400'
                                    : 'bg-gray-50 hover:bg-gray-100'
                            }`}
                        >
                            <span className="text-2xl mb-1">{method.icon}</span>
                            <span className="text-xs font-medium text-center text-gray-700">{method.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

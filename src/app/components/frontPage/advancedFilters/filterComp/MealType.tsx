"use client"
import { mealTypes } from "@/app/dataItems/AdvFiltersData";

interface MealTypeProps {
    mealType: string[];
    setMealType: (value: string[]) => void;
}

export default function MealType({mealType, setMealType}: MealTypeProps) {
    const toggleMealType = (type: string) => {
        if (mealType.includes(type)) {
            setMealType(mealType.filter(item => item !== type));
        } else {
            setMealType([...mealType, type]);
        }
    };

    return(
        <>
            <div className={`bg-white p-5 ${mealType.length > 0 ? "border-[2.5px] border-green-500": "border-[0.5px] border-gray-200"} relative hover:z-10 hover:shadow-lg transition-all duration-200`}>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Meal Type</h2>
                <div className="flex flex-wrap gap-2">
                    {mealTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => toggleMealType(type)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
                                mealType.includes(type)
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

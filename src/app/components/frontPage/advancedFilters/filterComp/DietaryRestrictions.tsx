"use client"
import { restrictions } from "@/app/dataItems/AdvFiltersData";
import { useTheme } from '@/app/context/ThemeContext';

interface DietaryRestrictionsProps {
    dietaryRestrictions: string[];
    setDietaryRestrictions: (value: string[]) => void;
}

export default function DietaryRestrictions({dietaryRestrictions, setDietaryRestrictions}: DietaryRestrictionsProps) {    
    const { t } = useTheme();
    
    const toggleRestriction = (restriction: string) => {
        if (dietaryRestrictions.includes(restriction)) {
            setDietaryRestrictions(dietaryRestrictions.filter(item => item !== restriction));
        } else {
            setDietaryRestrictions([...dietaryRestrictions, restriction]);
        }
    };

    return(
        <>
            <div className={`bg-white dark:bg-gray-800 p-5 ${dietaryRestrictions.length > 0 ? "border-[2.5px] border-green-500": "border-[0.5px] border-gray-200 dark:border-gray-700"} relative hover:z-10 hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-200`}>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{t('advancedFilters.filterSections.dietaryRestrictions')}</h2>
                <div className="grid grid-cols-2 gap-2">
                    {restrictions.map((restriction) => (
                        <div 
                            key={restriction.id}
                            className="flex items-center"
                        >
                            <input
                                id={restriction.id}
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-400 border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                                checked={dietaryRestrictions.includes(restriction.label)}
                                onChange={() => toggleRestriction(restriction.label)}
                            />
                            <label 
                                htmlFor={restriction.id}
                                className="ml-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                            >
                                {restriction.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

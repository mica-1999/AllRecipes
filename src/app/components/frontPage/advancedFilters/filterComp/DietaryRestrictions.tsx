"use client"
import { useTheme } from '@/app/context/ThemeContext';
import { DietaryRestrictionsProps } from '@/app/types/filters';

export default function DietaryRestrictions({dietaryRestrictions, setDietaryRestrictions}: DietaryRestrictionsProps) {    
    const { t, tArray } = useTheme();
    
    // Helper function to convert display format to database format
    const toDbFormat = (displayValue: string): string => {
        // Convert "Gluten-Free" to "GlutenFree" etc.
        return displayValue.replace(/[-\s]/g, '');
    };

    const toggleRestriction = (restriction: string) => {
        // We're already receiving the DB format here, no need to convert again
        if (dietaryRestrictions.includes(restriction)) {
            setDietaryRestrictions(dietaryRestrictions.filter(item => item !== restriction));
        } else {
            setDietaryRestrictions([...dietaryRestrictions, restriction]);
        }
    };

    return(
        <>
            <div className={`bg-white dark:bg-gray-800 p-5 border-[0.5px] border-gray-200 dark:border-gray-700 relative hover:z-10 hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-200
                ${dietaryRestrictions.length > 0 ? "after:absolute after:top-0 after:right-0 after:h-4 after:w-4 after:rounded-full after:bg-indigo-500 dark:after:bg-indigo-400 after:-translate-y-1/2 after:translate-x-1/2" : ""}`}>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{t('advancedFilters.filterSections.dietaryRestrictions')}</h2>
                <div className="grid grid-cols-2 gap-2">
                    {tArray<string>('advancedFilters.restrictions').map((restriction, i) => {
                        // Convert to DB format once and reuse it
                        const dbValue = toDbFormat(restriction);
                        
                        return (
                            <div 
                                key={i}
                                className="flex items-center cursor-pointer"
                                onClick={() => toggleRestriction(dbValue)}
                            >
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-400 border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                                    checked={dietaryRestrictions.includes(dbValue)}
                                    readOnly
                                />
                                <label 
                                    className="ml-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                                >
                                    {restriction}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

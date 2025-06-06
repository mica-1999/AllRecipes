"use client"
import { useTheme } from '@/app/context/ThemeContext';
import { DietaryRestrictionsProps } from '@/app/types/filters';
import FilterModeToggle from "@/app/components/frontPage/advancedFilters/filterComp/FilterModeToggle";

export default function DietaryRestrictions({ dietaryRestrictions, setDietaryRestrictions, exactMatchDiet, setExactMatchDiet }: DietaryRestrictionsProps) {
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

    return (
        <>
            <div className={`bg-white dark:bg-gray-800 p-5 relative hover:z-10 hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-200
                ${dietaryRestrictions.length > 0
                    ? "border-l-4 border-indigo-500 dark:border-indigo-400 border-t border-r border-b border-t-gray-200 border-r-gray-200 border-b-gray-200 dark:border-t-gray-700 dark:border-r-gray-700 dark:border-b-gray-700"
                    : "border border-gray-200 dark:border-gray-700"
                }`}>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    {t('advancedFilters.filterSections.dietaryRestrictions')}
                    {dietaryRestrictions.length > 0 && (
                        <span className="ml-2 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-0.5 rounded-full">
                            {dietaryRestrictions.length}
                        </span>
                    )}
                </h2>

                {dietaryRestrictions.length > 1 && (
                    <FilterModeToggle
                        isExactMatch={exactMatchDiet}
                        setIsExactMatch={setExactMatchDiet}
                        tooltipText={{
                            all: t('advancedFilters.matchAllRestrictions') || "Match all restrictions (AND)",
                            any: t('advancedFilters.matchAnyRestriction') || "Match any restriction (OR)"
                        }}
                    />
                )}

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

                {dietaryRestrictions.length > 1 && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                        {exactMatchDiet
                            ? t('advancedFilters.showingAllRestrictions') || "Showing recipes with all selected restrictions"
                            : t('advancedFilters.showingAnyRestriction') || "Showing recipes with any selected restriction"
                        }
                    </p>
                )}
            </div>
        </>
    )
}

"use client"
import { useTheme } from '@/app/context/ThemeContext';
import { OccasionProps } from '@/app/types/filters';
import FilterModeToggle from "@/app/components/frontPage/advancedFilters/filterComp/FilterModeToggle";

export default function Occasion({ occasion, setOccasion, exactMatchOccasion, setExactMatchOccasion }: OccasionProps) {
    const { t, tArray } = useTheme();

    const toggleOccasion = (value: string) => {
        if (occasion.includes(value)) {
            setOccasion(occasion.filter(item => item !== value));
        } else {
            setOccasion([...occasion, value]);
        }
    };

    return (
        <>
            <div className={`bg-white dark:bg-gray-800 p-5 relative hover:z-10 hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-200
                ${occasion.length > 0
                    ? "border-l-4 border-indigo-500 dark:border-indigo-400 border-t border-r border-b border-t-gray-200 border-r-gray-200 border-b-gray-200 dark:border-t-gray-700 dark:border-r-gray-700 dark:border-b-gray-700"
                    : "border border-gray-200 dark:border-gray-700"
                }`}>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    {t('advancedFilters.filterSections.occasion')}
                    {occasion.length > 0 && (
                        <span className="ml-2 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-0.5 rounded-full">
                            {occasion.length}
                        </span>
                    )}
                </h2>

                {occasion.length > 1 && (
                    <FilterModeToggle
                        isExactMatch={exactMatchOccasion}
                        setIsExactMatch={setExactMatchOccasion}
                        tooltipText={{
                            all: t('advancedFilters.matchAllOccasions') || "Match all occasions (AND)",
                            any: t('advancedFilters.matchAnyOccasion') || "Match any occasion (OR)"
                        }}
                    />
                )}

                <div className="flex flex-wrap gap-2">
                    {tArray<string>('advancedFilters.occasions').map((item) => (
                        <div
                            key={item}
                            onClick={() => toggleOccasion(item)}
                            className={`px-3 py-1.5 rounded-md text-sm cursor-pointer select-none transition-colors ${occasion.includes(item)
                                    ? 'bg-indigo-100 dark:bg-indigo-900/70 text-indigo-800 dark:text-indigo-200 font-medium border-2 border-indigo-300 dark:border-indigo-700'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 border-2 border-transparent'
                                }`}
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {occasion.length > 1 && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                        {exactMatchOccasion
                            ? t('advancedFilters.showingAllOccasions') || "Showing recipes for all selected occasions"
                            : t('advancedFilters.showingAnyOccasion') || "Showing recipes for any selected occasion"
                        }
                    </p>
                )}
            </div>
        </>
    )
}

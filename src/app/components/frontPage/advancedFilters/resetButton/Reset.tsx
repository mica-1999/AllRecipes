interface ResetAdvFiltersProps {
    resetAllFilters: () => void;
}

export default function ResetAdvFilters({ resetAllFilters }: ResetAdvFiltersProps) {
    return (
        <>
            <div
                className="
                    fixed right-0 top-52 z-50
                    flex items-center justify-center w-12 h-10
                    pr-2
                    bg-gradient-to-r from-amber-500 to-red-500 dark:from-rose-600 dark:to-red-700 text-white rounded-l-lg shadow-lg dark:shadow-black/30
                    hover:w-14 hover:from-amber-600 hover:to-red-600 dark:hover:from-rose-700 dark:hover:to-red-800 hover:shadow-xl dark:hover:shadow-black/40 cursor-pointer
                    transition-all duration-300 ease-in-out"
                title="Reset Filters"
                onClick={resetAllFilters}
            >
                <i className="ri-refresh-line text-xl"></i>
            </div>
        </>
    )
} 
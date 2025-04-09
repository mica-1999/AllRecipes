"use client"
interface FilterModeToggleProps {
  isExactMatch: boolean;
  setIsExactMatch: (value: boolean) => void;
  tooltipText?: {
    all: string;
    any: string;
  };
}

export default function FilterModeToggle({
  isExactMatch,
  setIsExactMatch,
  tooltipText = {
    all: "Match all (AND)",
    any: "Match any (OR)"
  }
}: FilterModeToggleProps) {

  return (
    <div
      className={`absolute top-4 right-4 p-1.5 rounded-md cursor-pointer transition-colors duration-200 ${isExactMatch
        ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300'
        : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
        }`}
      onClick={() => setIsExactMatch(!isExactMatch)}
      title={isExactMatch ? tooltipText.all : tooltipText.any}
    >
      <i className={`${isExactMatch ? 'ri-filter-3-fill' : 'ri-filter-off-fill'} text-base`}></i>
    </div>
  );
}

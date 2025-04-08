import { listHeaders } from "@/app/data/AdvFiltersData";
import { useTheme } from '@/app/context/ThemeContext';

interface TableHeaderProps {
  sortField: string;
  sortOrder: 'asc' | 'desc';
  handleSort: (field: string) => void;
}

export default function TableHeader({ sortField, sortOrder, handleSort }: TableHeaderProps) {
  const { t } = useTheme();

  // Function to get the translation for the table headers
  const getHeaderTranslation = (header: string) => {
    switch (header) {
      case "Recipe Name": return t('tableFiltered.headers.recipeName');
      case "Views": return t('tableFiltered.headers.views');
      case "Rating": return t('tableFiltered.headers.rating');
      case "Date": return t('tableFiltered.headers.date');
      case "Actions": return t('tableFiltered.headers.actions');
      default: return header;
    }
  };

  return (
    <div className="flex w-full bg-gray-50 dark:bg-gray-700/60 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium text-sm">
      {listHeaders.map((header, index) => (
        <div key={index} className={`
                    py-4 flex items-center
                    ${header === "Recipe Name" ? "w-2/5 md:w-2/5 px-6" : ""}
                    ${header === "Views" ? "w-0 md:w-1/8 hidden md:flex justify-center font-semibold " + (sortField === "viewcount" ? "text-[#FF6B35] dark:text-indigo-300" : "") : ""}
                    ${header === "Rating" ? "w-0 md:w-1/8 hidden md:flex justify-center font-semibold " + (sortField === "rating" ? "text-[#FF6B35] dark:text-indigo-300" : "") : ""}
                    ${header === "Date" ? "w-0 md:w-1/6 hidden md:flex justify-center font-semibold " + (sortField === "createdat" ? "text-[#FF6B35] dark:text-indigo-300" : "") : ""}
                    ${header === "Actions" ? "w-3/5 md:w-1/6 justify-center" : ""}
                `}>
          {getHeaderTranslation(header)}
          {(header === "Views" || header === "Rating") && (
            <button
              className="ml-1.5 text-gray-400 dark:text-gray-400 hover:text-[#FF6B35] dark:hover:text-indigo-300"
              onClick={(e) => {
                e.preventDefault();
                handleSort(
                  header === "Views" ? "viewcount" :
                    header === "Rating" ? "rating" :
                      "createdat"
                );
              }}
            >
              {(
                (header === "Views" && sortField === "viewcount") ||
                (header === "Rating" && sortField === "rating")
              ) ? (
                sortOrder === "asc" ?
                  <i className="ri-arrow-up-line text-xs text-[#FF6B35] dark:text-indigo-300"></i> :
                  <i className="ri-arrow-down-line text-xs text-[#FF6B35] dark:text-indigo-300"></i>
              ) : (
                <i className="ri-arrow-up-down-line text-xs"></i>
              )}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
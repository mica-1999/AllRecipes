import { listHeaders } from "@/app/data/AdvFiltersData";
import { useTheme } from '@/app/context/ThemeContext';
import { useState, useEffect, useRef } from "react";
import { useClickOutside } from "@/app/components/reusable/ClickOutsideDiv";

interface TableHeaderProps {
  sortField: string;
  sortOrder: 'asc' | 'desc';
  handleSort: (field: string) => void;
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
}

export default function TableHeader({ sortField, sortOrder, handleSort, startDate, setStartDate, endDate, setEndDate }: TableHeaderProps) {

  // State variables & hooks
  const [dateDropdown, setDateDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, setDateDropdown);
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

  const handleQuickDate = (days: number) => {
    let start = new Date(); // Manipulated date
    const end = new Date(); // Current date

    switch (days) {
      case 1:
        start.setDate(start.getDate() - 1); // Yesterday
        break;
      case 7:
        start.setDate(start.getDate() - 7); // Last 7 days
        break;
      case 30:
        start.setDate(start.getDate() - 30); // Last 30 days
        break;
      case 182:
        start.setDate(start.getDate() - 182); // Last 6 months
        break;
      case 365:
        start.setFullYear(start.getFullYear() - 1); // Last year
        break;
      default:
        start = new Date(); // Reset to current date
        break;
    }
    setStartDate(start.toISOString().split('T')[0]); // Format to YYYY-MM-DD
    setEndDate(end.toISOString().split('T')[0]); // Format to YYYY-MM-DD
    setDateDropdown(false); // Close the dropdown
  }

  useEffect(() => {
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);

  }, [startDate, endDate])

  return (
    <div className="flex w-full bg-gray-50 dark:bg-gray-700/60 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium text-sm relative">
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
          {(header === "Date") && (
            <>
              <button
                className="ml-1.5 text-gray-400 dark:text-gray-400 hover:text-[#FF6B35] dark:hover:text-indigo-300"
                onClick={(e) => {
                  e.preventDefault();
                  setDateDropdown(!dateDropdown);
                }}>
                <i className={`ri-calendar-line text-xs ${dateDropdown ? "text-[#FF6B35] dark:text-indigo-300" : ""}`}></i>
              </button>
              {dateDropdown && (
                <div className="absolute top-11 w-[280px] bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 z-20" ref={dropdownRef}>
                  {/* Header with Close Button */}
                  <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 dark:border-gray-700">
                    <h4 className="font-medium text-sm text-gray-800 dark:text-gray-100">
                      {t('tableFiltered.dateFilter.title') || 'Date Filter'}
                    </h4>
                    <button
                      onClick={() => setDateDropdown(false)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <i className="ri-close-line"></i>
                    </button>
                  </div>

                  {/* Custom Range Section */}
                  <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div>
                        <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">
                          {t('tableFiltered.dateFilter.start') || 'From'}
                        </label>
                        <input
                          type="date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="w-full text-xs px-2 py-1.5 rounded border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-[#FF6B35] dark:focus:ring-indigo-300"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">
                          {t('tableFiltered.dateFilter.end') || 'To'}
                        </label>
                        <input
                          type="date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="w-full text-xs px-2 py-1.5 rounded border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-[#FF6B35] dark:focus:ring-indigo-300"
                        />
                      </div>
                    </div>
                    <button
                      className="w-full bg-[#FF6B35] dark:bg-indigo-500 text-white text-xs py-1.5 rounded hover:bg-[#ff8559] dark:hover:bg-indigo-600 transition-colors"
                      onClick={() => {
                        // Add your date range filter logic here
                        setDateDropdown(false);
                      }}
                    >
                      {t('tableFiltered.dateFilter.apply') || 'Apply Range'}
                    </button>
                  </div>

                  {/* Quick Filters Section */}
                  <div className="p-2">
                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        className="text-xs px-2 py-1.5 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => {
                          handleQuickDate(1);
                          setDateDropdown(false);
                        }}
                      >
                        {t('tableFiltered.dateFilter.last7Days') || 'Last 7 Days'}
                      </button>
                      <button
                        className="text-xs px-2 py-1.5 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => {
                          handleQuickDate(30);
                          setDateDropdown(false);
                        }}
                      >
                        {t('tableFiltered.dateFilter.lastMonth') || 'Last Month'}
                      </button>
                      <button
                        className="text-xs px-2 py-1.5 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => {
                          handleQuickDate(182);
                          setDateDropdown(false);
                        }}
                      >
                        {t('tableFiltered.dateFilter.last6Month') || 'Last 6 Month'}
                      </button>
                      <button
                        className="text-xs px-2 py-1.5 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => {
                          handleQuickDate(365);
                          setDateDropdown(false);
                        }}
                      >
                        {t('tableFiltered.dateFilter.allTime') || 'All Time'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )
          }
        </div>
      ))}
    </div>
  );
}
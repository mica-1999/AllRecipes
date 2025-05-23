"use client"
import { Dispatch, SetStateAction } from 'react'
import { listItems } from '@/app/data/MyListData';
import { useTheme } from '@/app/context/ThemeContext';

export default function Filters({ selectedMenu, setSelectedMenu, searchBox, setSearchBox }: {
    selectedMenu: string;
    setSelectedMenu: Dispatch<SetStateAction<string>>;
    searchBox: string;
    setSearchBox: (value: string) => void;
}) {
    const { t } = useTheme();

    return (
        <>
            <div className="flex items-center w-full px-10 pt-10 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
                {listItems.map((item, index) => (
                    <div
                        id="filterMenu"
                        className={`
                        flex items-center justify-center gap-2 px-6 h-14 cursor-pointer
                        relative transition-all duration-200 hover:text-[#FF6B35] dark:hover:text-indigo-300 whitespace-nowrap
                        ${selectedMenu === item.id
                                ? 'text-[#FF6B35] dark:text-indigo-300 font-medium'
                                : 'text-gray-600 dark:text-gray-300'}            
                    `}
                        key={index}
                        onClick={() => setSelectedMenu(item.id)}
                    >
                        <i className={`${item.icon} text-lg`}></i>
                        <h1 className="text-base">{t(`myList.tabs.${item.id}`)}</h1>

                        {/* Active indicator */}
                        {selectedMenu === item.id && (
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FF6B35] dark:bg-indigo-400"></div>
                        )}
                    </div>
                ))}
            </div>
            <div id="search&exports" className="flex items-center justify-between w-full px-10 py-5 gap-4 flex-wrap">
                <div className="w-full lg:w-[60%] relative">
                    <input
                        className="w-full h-12 px-12 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-[8px] 
                    text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:border-[#FF6B35] dark:focus:border-indigo-400 
                    focus:ring-1 focus:ring-[#FF6B35] dark:focus:ring-indigo-400 transition-all"
                        type="text"
                        placeholder={`${t('myList.search')} ${t(`myList.tabs.${selectedMenu}`)}`}
                        onChange={(e) => setSearchBox(e.target.value)}
                        value={searchBox}
                    />
                    <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-[#A8A8A8] dark:text-gray-400 text-lg"></i>
                </div>

                <div className="flex items-center gap-3 ml-auto">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-[#D3D3D3] dark:bg-gray-700 text-black dark:text-white rounded-[5px] hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                        <i className="ri-filter-3-line"></i>
                        <span>{t('myList.filter')}</span>
                    </button>

                    {selectedMenu != 'commented' &&
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-teal-500 dark:bg-teal-600 text-white rounded-[5px] hover:bg-teal-600 dark:hover:bg-teal-700 transition-colors cursor-pointer">
                            <i className="ri-download-line"></i>
                            <span>{t('myList.export')}</span>
                        </button>
                    }
                    {(selectedMenu !== 'commented' && selectedMenu !== 'collections') &&
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#FF6B35] dark:bg-indigo-600 text-white rounded-[5px] hover:bg-[#e55a29] dark:hover:bg-indigo-500 transition-colors cursor-pointer">
                            <i className="ri-upload-line"></i>
                            <span>{t('myList.import')}</span>
                        </button>
                    }
                </div>
            </div>
        </>
    );
}
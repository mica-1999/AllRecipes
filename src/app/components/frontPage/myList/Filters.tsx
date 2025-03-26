"use client"

import { Dispatch, SetStateAction } from 'react'

const listItems = [
    {name: 'List', icon: "ri-list-check"},
    {name: 'My Recipes', icon: "ri-edit-2-line"},
    {name: 'Collections', icon: "ri-folder-line"},
    {name: 'Bookmarked', icon: "ri-bookmark-line"},
    {name: 'Liked', icon: "ri-heart-line"},
    {name: 'Commented', icon: "ri-chat-3-line"}

] 

export default function Filters({selectedMenu, setSelectedMenu}: {
    selectedMenu: string;
    setSelectedMenu: Dispatch<SetStateAction<string>>;
}) {
    return (
        <>
        <div className="flex items-center w-full px-10 pt-10 border-b border-gray-200 overflow-x-auto">
            {listItems.map((item, index) => (
                <div
                    id="filterMenu" 
                    className={`
                        flex items-center justify-center gap-2 px-6 h-14 cursor-pointer
                        relative transition-all duration-200 hover:text-[#FF6B35] whitespace-nowrap
                        ${selectedMenu === item.name 
                            ? 'text-[#FF6B35] font-medium' 
                            : 'text-gray-600'}            
                    `} 
                    key={index} 
                    onClick={() => setSelectedMenu(item.name)}
                >
                    <i className={`${item.icon} text-lg`}></i>
                    <h1 className="text-base">{item.name}</h1>
                    
                    {/* Active indicator */}
                    {selectedMenu === item.name && (
                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FF6B35]"></div>
                    )}
                </div>
            ))}
        </div>
        <div id="search&exports" className="flex items-center justify-between w-full px-10 py-5 gap-4 flex-wrap">
            <div className="w-full lg:w-[60%] relative">
                <input 
                    className="w-full h-12 px-12 py-3 bg-white border border-gray-200 rounded-[8px] focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all" 
                    type="text" 
                    placeholder={`Search in ${selectedMenu}`} 
                />
                <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-[#A8A8A8] text-lg"></i>
            </div>
            <div className="flex items-center gap-3 ml-auto">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-[#D3D3D3] text-black rounded-[5px] hover:bg-gray-300 transition-colors cursor-pointer">
                    <i className="ri-filter-3-line"></i>
                    <span>Filter</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-[#D3D3D3] text-black rounded-[5px] hover:bg-gray-300 transition-colors cursor-pointer">
                    <i className="ri-download-line"></i>
                    <span>Export</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-[#FF6B35] text-white rounded-[5px] hover:bg-[#e55a29] transition-colors cursor-pointer">
                    <i className="ri-upload-line"></i>
                    <span>Import</span>
                </button>
            </div>
        </div>
        </>
    );
}
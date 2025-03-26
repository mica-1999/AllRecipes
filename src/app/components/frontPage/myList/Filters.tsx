"use client"

import { useState } from "react";

const listItems = [
    {name: 'List', icon: "ri-list-check"},
    {name: 'Collections', icon: "ri-folder-line"},
    {name: 'My Recipes', icon: "ri-edit-2-line"},
    {name: 'Commented', icon: "ri-chat-3-line"},
    {name: 'Liked', icon: "ri-heart-line"},
    {name: 'Bookmarked', icon: "ri-bookmark-line"}
] 

export default function Filters() {
    const [menuSelected, setMenuSelected] = useState('List');

    return (
        <div className="flex items-center w-full px-10 pt-10 border-b border-gray-200">
            {listItems.map((item, index) => (
                <div 
                    className={`
                        flex items-center justify-center gap-2 px-6 h-14 cursor-pointer
                        relative transition-all duration-200 hover:text-[#FF6B35]
                        ${menuSelected === item.name 
                            ? 'text-[#FF6B35] font-medium' 
                            : 'text-gray-600'}            
                    `} 
                    key={index} 
                    onClick={() => setMenuSelected(item.name)}
                >
                    <i className={`${item.icon} text-lg`}></i>
                    <h1 className="text-base">{item.name}</h1>
                    
                    {/* Active indicator */}
                    {menuSelected === item.name && (
                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FF6B35]"></div>
                    )}
                </div>
            ))}
        </div>
    );
}
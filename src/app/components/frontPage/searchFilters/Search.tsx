import { useEffect, useState, useRef } from 'react';
import { useClickOutside } from '@/app/components/reusable/ClickOutsideDiv';

interface SearchFilterProps {
    openSearch: boolean;
    setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchFilter ({openSearch, setOpenSearch}: SearchFilterProps) {
    // Ref for the search box element
    const searchRef = useRef<HTMLDivElement>(null);
    
    // State Variable
    const [isFocused, setIsFocused] = useState<boolean>(false);
    
    // Hook to detect clicks outside the search box
    useClickOutside(searchRef, setOpenSearch)

    // Adds Dark Overlay to the body when Search is open
    useEffect(() => {
        if (openSearch) {
            document.body.classList.add('overlay-active');
        } else {
            document.body.classList.remove('overlay-active');
        }
        
        // Cleanup on component unmount
        return () => {
            document.body.classList.remove('overlay-active');
            document.removeEventListener
        };
    }, [openSearch]);

    return(
        <>
        {openSearch && (
            <div className="fixed inset-0 flex justify-center pt-5 z-101 pointer-events-none" ref={searchRef}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl dark:shadow-black/30 w-[720px] h-[62px] mx-4 pointer-events-auto px-2.5 flex items-center justify-between border border-gray-300 dark:border-gray-700">
                    {/* Search box with icon and input */}
                    <div className={`
                        flex items-center flex-grow mr-3 px-3 py-2 rounded-md
                        transition-all duration-200 bg-gray-50 dark:bg-gray-700 border
                        ${isFocused 
                            ? 'border-[#FF6B35] dark:border-indigo-500 ring-1 ring-[#FF6B35] dark:ring-indigo-500 bg-white dark:bg-gray-700' 
                            : 'border-gray-300 dark:border-gray-600'}
                    `}>
                        <div className="flex-shrink-0 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className={`h-5 w-5 ${
                                    isFocused 
                                        ? 'text-[#FF6B35] dark:text-indigo-400' 
                                        : 'text-gray-400 dark:text-gray-500'
                                } transition-colors duration-200`} 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search recipes..."
                            className="flex-grow font-medium text-gray-700 dark:text-gray-200 border-none focus:ring-0 outline-none bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
                            autoFocus
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                    </div>

                    {/* Cancel button - with border */}
                    <button 
                        onClick={() => setOpenSearch(false)} 
                        className="flex-shrink-0 px-4 py-1.5 rounded-md text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white transition-colors font-medium"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        )}
        </>
    )
}

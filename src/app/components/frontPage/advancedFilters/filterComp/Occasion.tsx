"use client"
import { useTheme } from '@/app/context/ThemeContext';

interface OccasionProps {
    occasion: string[];
    setOccasion: (value: string[]) => void;
}

export default function Occasion({occasion, setOccasion}: OccasionProps) {    
    const { t,tArray } = useTheme();
    
    const toggleOccasion = (value: string) => {
        if (occasion.includes(value)) {
            setOccasion(occasion.filter(item => item !== value));
        } else {
            setOccasion([...occasion, value]);
        }
    };

    return(
        <>
            <div className={`bg-white dark:bg-gray-800 p-5 ${occasion.length > 0 ? "border-[2.5px] border-green-500 dark:border-green-600": "border-[0.5px] border-gray-200 dark:border-gray-700"} relative hover:z-10 hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-200`}>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{t('advancedFilters.filterSections.occasion')}</h2>
                <div className="flex flex-wrap gap-2">
                    {tArray<string>('advancedFilters.occasions').map((item) => (
                        <div 
                            key={item}
                            onClick={() => toggleOccasion(item)}
                            className={`px-3 py-1.5 rounded-md text-sm cursor-pointer select-none transition-colors ${
                                occasion.includes(item)
                                    ? 'bg-indigo-100 dark:bg-indigo-900/70 text-indigo-800 dark:text-indigo-200 font-medium border-2 border-indigo-300 dark:border-indigo-700'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 border-2 border-transparent'
                            }`}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

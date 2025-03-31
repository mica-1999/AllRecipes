"use client"
import { useState, useEffect ,useRef } from "react";
import { useSearchParams } from "next/navigation";

// Components
import MealOptions from "@/app/components/frontPage/advancedFilters/filterComp/MealOptions";
import MealType from "@/app/components/frontPage/advancedFilters/filterComp/MealType";
import CookingTime from "@/app/components/frontPage/advancedFilters/filterComp/CookingTime";
import DietaryRestrictions from "@/app/components/frontPage/advancedFilters/filterComp/DietaryRestrictions";
import Ingredients from "@/app/components/frontPage/advancedFilters/filterComp/Ingredients";
import DifficultyLevel from "@/app/components/frontPage/advancedFilters/filterComp/DifficultyLevel";
import CaloriesRange from "@/app/components/frontPage/advancedFilters/filterComp/CaloriesRange";
import CookingMethod from "@/app/components/frontPage/advancedFilters/filterComp/CookingMethod";
import Occasion from "@/app/components/frontPage/advancedFilters/filterComp/Occasion";
import TableFiltered from "@/app/components/frontPage/advancedFilters/content/TableFiltered";
import { mainFilters, seasonsData } from "@/app/dataItems/AdvFiltersData";
import { useClickOutside } from "@/app/components/reusable/ClickOutsideDiv";

interface CaloriesRangeType {
    min: number;
    max: number;
}

export default function AdvFilters () {
    // Get the search params from the URL to update the Filters
    const searchParams = useSearchParams();
    const query = searchParams.get("category") || "";

    // State variables for Main Filter Menu
    const [mainFilterMenu, setMainFilterMenu] = useState<string>("Latest"); // Main Menu
    const [selectedSeason, setSelectedSeason] = useState<typeof seasonsData[0] | null>(null);
    const [seasonChoice , setSeasonChoice] = useState<string>(""); // Seasonal Dropdown Menu
    const [seasonalOpen, setSeasonalOpen] = useState<Boolean>(false); // Dropdown Menu Open/Close

    // Ref for the dropdown menu
    const seasonsRef = useRef<HTMLDivElement>(null);

    // Close the dropdown when clicking outside of it
    useClickOutside(seasonsRef, setSeasonalOpen);

    // State variables for Filters
    const [mealTypeFilter, setMealTypeFilter] = useState<string[]>([]);
    const [mealType, setMealType] = useState<string[]>([]);
    const [cookingTime, setCookingTime] = useState<number>(30);
    const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([]);
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [difficultyLevel, setDifficultyLevel] = useState<string>("Easy");
    const [caloriesRange, setCaloriesRange] = useState<CaloriesRangeType>({min: 200, max: 800});
    const [cookingMethod, setCookingMethod] = useState<string[]>([]);
    const [occasion, setOccasion] = useState<string[]>([]);

    // Main Menu Change Handler
    const handleMenuChange = (menu: string) => {
        if (menu === "Seasonal") {
            setMainFilterMenu(menu);
            setSeasonalOpen(!seasonalOpen);
        } else {
            setMainFilterMenu(menu);
            setSeasonalOpen(false);
        }
    }

    // Update the main filter menu based on the query parameter
    useEffect(() => {
        if (query) {
            setMainFilterMenu(query);
        }
    }, [query]);

    return(
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white rounded-lg shadow-md p-6 mb-8">
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{mainFilterMenu}</h1>
                            {seasonChoice && (
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    selectedSeason ? `${selectedSeason.bgColor} ${selectedSeason.textColor}` : 'bg-indigo-100 text-indigo-800'
                                }`}>
                                    {seasonChoice}
                                </span>
                            )}
                        </div>
                        
                        <p className="text-sm text-gray-600">Choose your filter preference to see matching recipes below</p>
                    </div>                

                    <div id="mainMenuBtns" className="flex flex-wrap justify-start md:justify-end gap-3 mt-4 md:mt-0">
                        {mainFilters.map((filter) => (
                            <div className="relative" key={filter}>
                                <button 
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer
                                    ${mainFilterMenu === filter 
                                        ? 'bg-indigo-600 text-white shadow-md' 
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                    onClick={() => handleMenuChange(filter)}
                                >
                                    
                                    {filter === "Seasonal" ? (
                                        <>
                                            {seasonChoice ? seasonChoice : "Seasonal"}
                                            <i className={`ri-arrow-${seasonalOpen ? 'up' : 'down'}-s-line ml-2`}></i>
                                        </>
                                    ) : (
                                        filter
                                    )}
                                </button>
                                {filter == "Seasonal" && (
                                    <div id="seasonsDropdown" className="absolute w-full mt-1 bg-white shadow-lg rounded-md z-40" ref={seasonsRef} style={{display: seasonalOpen ? "block" : "none"}}>
                                        <div className="py-2">
                                            {seasonsData.map((season) => (
                                                <button 
                                                    key={season.name} 
                                                    className={`block px-4 py-2 text-sm w-full text-left cursor-pointer ${season.hoverBg} ${season.hoverText}`}
                                                    onClick={() => {
                                                        setSeasonalOpen(false);
                                                        setSeasonChoice(season.name);
                                                        setSelectedSeason(season);
                                                    }}
                                                >
                                                    {season.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="overflow-hidden shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                        <MealOptions mealTypeFilter={mealTypeFilter} setMealTypeFilter={setMealTypeFilter} />
                        <MealType mealType={mealType} setMealType={setMealType} />
                        <CookingTime cookingTime={cookingTime} setCookingTime={setCookingTime} />
                        <DietaryRestrictions dietaryRestrictions={dietaryRestrictions} setDietaryRestrictions={setDietaryRestrictions} />
                        <Ingredients ingredients={ingredients} setIngredients={setIngredients} />
                        <DifficultyLevel difficultyLevel={difficultyLevel} setDifficultyLevel={setDifficultyLevel} />
                        <CaloriesRange caloriesRange={caloriesRange} setCaloriesRange={setCaloriesRange} />
                        <CookingMethod cookingMethod={cookingMethod} setCookingMethod={setCookingMethod} />
                        <Occasion occasion={occasion} setOccasion={setOccasion} />
                    </div>
                </div>

                <div className="mt-8">
                    <TableFiltered />
                </div>
            </div>
        </>
    )
}
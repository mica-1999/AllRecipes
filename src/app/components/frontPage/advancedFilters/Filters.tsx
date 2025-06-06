"use client"
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTheme } from '@/app/context/ThemeContext';
import { CaloriesRangeType } from '@/app/types/filters';
import { showToast } from "@/app/components/reusable/Toasters";
import { seasonsData } from "@/app/data/AdvFiltersData";
import { useClickOutside } from "@/app/components/reusable/ClickOutsideDiv";
import { useSession } from "next-auth/react";

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
import TableFiltered from "@/app/components/frontPage/advancedFilters/resultTable/TableFiltered";
import ResetAdvFilters from "@/app/components/frontPage/advancedFilters/resetButton/Reset"

export default function AdvFilters() {
    const { data: session } = useSession(); // Get the session data to check if the user is logged in

    // Get the search params from the URL to update the Filters
    const searchParams = useSearchParams();
    const urlCategory = searchParams.get("category") || "";
    const dateParam = searchParams.get('date');

    // Theme context for settings
    const { t, tArray, savedTheme } = useTheme();

    // State variables for Main Filter Menu
    const [mainFilterMenu, setMainFilterMenu] = useState<string>(urlCategory || tArray<string>('advancedFilters.mainFilters')[0]); // Main Menu
    const [selectedSeason, setSelectedSeason] = useState<typeof seasonsData[0] | null>(null);
    const [seasonChoice, setSeasonChoice] = useState<string>(""); // Seasonal Dropdown Menu
    const [seasonalOpen, setSeasonalOpen] = useState<boolean>(false); // Dropdown Menu Open/Close
    const [searchQuery, setSearchQuery] = useState<string>(""); // Search query for filtering recipes

    // Ref for the dropdown menu
    const seasonsRef = useRef<HTMLDivElement>(null);
    useClickOutside(seasonsRef, setSeasonalOpen); // Custom hook to close the dropdown when clicking outside

    // State variables for Filters
    const [cuisineFilter, setCuisineFilter] = useState<string[]>([]);  // Changed from mealTypeFilter
    const [mealType, setMealType] = useState<string[]>([]);
    const [cookingTime, setCookingTime] = useState<number>(0);
    const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([]);
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [difficultyLevel, setDifficultyLevel] = useState<string>("");
    const [caloriesRange, setCaloriesRange] = useState<CaloriesRangeType>({ min: 0, max: 2000 });
    const [cookingMethod, setCookingMethod] = useState<string[]>([]);
    const [occasion, setOccasion] = useState<string[]>([]);

    //  State variables for table header sorting
    const [sortField, setSortField] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const [startDate, setStartDate] = useState<string>(() => {
        if (dateParam === "7days") {
            const date = new Date();
            date.setDate(date.getDate() - 7);
            return date.toISOString().split('T')[0];
        }
        return new Date(2000, 0, 1).toISOString().split('T')[0];
    });
    const [endDate, setEndDate] = useState<string>(new Date().toISOString().split('T')[0]);

    // State variables for OR or AND operations in Diet/Ingredients/Occasion
    // By default it will show all recipes that match any of the selected filters
    const [exactMatchDiet, setExactMatchDiet] = useState<boolean>(true);
    const [exactMatchIngredients, setExactMatchIngredients] = useState<boolean>(true);
    const [exactMatchOccasion, setExactMatchOccasion] = useState<boolean>(false);

    // Translate season name
    const getSeasonTranslation = (season: string) => {
        switch (season) {
            case "Spring": return t('advancedFilters.seasons.spring');
            case "Summer": return t('advancedFilters.seasons.summer');
            case "Autumn": return t('advancedFilters.seasons.autumn');
            case "Winter": return t('advancedFilters.seasons.winter');
            default: return season;
        }
    };

    // Main Menu Change Handler
    const handleMenuChange = (menu: string) => {
        const filters = tArray<string>('advancedFilters.mainFilters');

        if (menu === filters[4]) { // If the menu is "Seasonal"
            setMainFilterMenu(menu);
            setSeasonalOpen(!seasonalOpen);
        } else {
            setMainFilterMenu(menu);
            setSeasonalOpen(false);
        }
    }

    // Reset all filter states to their initial values
    const resetAllFilters = () => {

        setMainFilterMenu(tArray<string>('advancedFilters.mainFilters')[0]); // Reset to the first menu item
        setCuisineFilter([]);
        setMealType([]);
        setCookingTime(0);
        setDietaryRestrictions([]);
        setIngredients([]);
        setDifficultyLevel("");
        setCaloriesRange({ min: 0, max: 2000 });
        setCookingMethod([]);
        setOccasion([]);
        setSeasonChoice("");
        setExactMatchDiet(true);
        setExactMatchIngredients(true);
        setExactMatchOccasion(false);
        setSearchQuery("");
        setSortField("");
        setSortOrder('desc');
        setStartDate("");
        setEndDate(new Date().toISOString().split('T')[0]);

        // Show a toast notification to confirm filters were reset
        showToast("success", t('advancedFilters.filtersReset'), savedTheme);
    };


    // Load User's Preference for Advanced Filters
    useEffect(() => {
        const loadMealPreferences = async () => {
            try {
                const response = await fetch('/api/preferences/meal', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    showToast("error", t('advancedFilters.errorLoadingPreferences'), savedTheme);
                    return;
                }

                const data = await response.json();
                setCookingMethod(data.cookingPreferences || []);
                setMealType(data.mealPreferences || []);
                setDietaryRestrictions(data.dietPreferences || []);
                setCuisineFilter(data.cuisinePreferences || []);
            } catch (error) {
                console.error("Error loading meal preferences:", error);
                showToast("error", t('advancedFilters.errorLoadingPreferences'), savedTheme);
            }
        }


        loadMealPreferences();
    }, [session, savedTheme, t]);

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg dark:shadow-black/20 p-6 mb-8 transition-colors">
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{mainFilterMenu}</h1>
                            {seasonChoice && (
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${selectedSeason ? `${selectedSeason.bgColor} ${selectedSeason.textColor}` : 'bg-indigo-100 text-indigo-800'
                                    }`}>
                                    {getSeasonTranslation(seasonChoice)}
                                </span>
                            )}
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-300">{t('advancedFilters.title')}</p>
                    </div>

                    <div id="mainMenuBtns" className="flex flex-wrap justify-start md:justify-end gap-3 mt-4 md:mt-0">
                        {tArray<string>('advancedFilters.mainFilters').map((filter: string, index) => (
                            <div className="relative" key={filter}>
                                <button
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer
                                    ${mainFilterMenu === filter
                                            ? 'bg-indigo-600 text-white shadow-md'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                                    onClick={() => handleMenuChange(filter)}
                                >

                                    {index === 4 ? (
                                        <>
                                            {seasonChoice ? getSeasonTranslation(seasonChoice) : filter}
                                            <i className={`ri-arrow-${seasonalOpen ? 'up' : 'down'}-s-line ml-2`}></i>
                                        </>
                                    ) : (
                                        filter
                                    )}
                                </button>
                                {index === 4 && (
                                    <div id="seasonsDropdown" className="absolute w-full mt-1 bg-white dark:bg-gray-800 shadow-lg dark:shadow-black/30 rounded-md z-40" ref={seasonsRef} style={{ display: seasonalOpen ? "block" : "none" }}>
                                        <div className="py-2">
                                            {seasonsData.map((season) => (
                                                <button
                                                    key={season.name}
                                                    className={`block px-4 py-2 text-sm w-full text-left cursor-pointer dark:text-gray-200 ${season.hoverBg} ${season.hoverText} dark:hover:bg-gray-700`}
                                                    onClick={() => {
                                                        setSeasonalOpen(false);
                                                        setSeasonChoice(season.name);
                                                        setSelectedSeason(season);
                                                    }}
                                                >
                                                    {getSeasonTranslation(season.name)}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="overflow-hidden shadow-md dark:shadow-lg dark:shadow-black/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 dark:bg-gray-800 dark:divide-gray-700">
                        <MealOptions cuisineFilter={cuisineFilter} setCuisineFilter={setCuisineFilter} />
                        <MealType mealType={mealType} setMealType={setMealType} />
                        <CookingTime cookingTime={cookingTime} setCookingTime={setCookingTime} />
                        <DietaryRestrictions dietaryRestrictions={dietaryRestrictions} setDietaryRestrictions={setDietaryRestrictions} exactMatchDiet={exactMatchDiet} setExactMatchDiet={setExactMatchDiet} />
                        <Ingredients ingredients={ingredients} setIngredients={setIngredients} exactMatchIngredients={exactMatchIngredients} setExactMatchIngredients={setExactMatchIngredients} />
                        <DifficultyLevel difficultyLevel={difficultyLevel} setDifficultyLevel={setDifficultyLevel} />
                        <CaloriesRange caloriesRange={caloriesRange} setCaloriesRange={setCaloriesRange} />
                        <CookingMethod cookingMethod={cookingMethod} setCookingMethod={setCookingMethod} />
                        <Occasion occasion={occasion} setOccasion={setOccasion} exactMatchOccasion={exactMatchOccasion} setExactMatchOccasion={setExactMatchOccasion} />
                    </div>
                </div>

                <div className="mt-8">
                    <TableFiltered
                        mainFilterMenu={mainFilterMenu}
                        cuisineFilter={cuisineFilter}
                        mealType={mealType}
                        cookingTime={cookingTime}
                        dietaryRestrictions={dietaryRestrictions}
                        exactMatchDiet={exactMatchDiet}
                        ingredients={ingredients}
                        exactMatchIngredients={exactMatchIngredients}
                        difficultyLevel={difficultyLevel}
                        caloriesRange={caloriesRange}
                        cookingMethod={cookingMethod}
                        occasion={occasion}
                        exactMatchOccasion={exactMatchOccasion}
                        seasonChoice={seasonChoice}
                        onResetFilters={resetAllFilters}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        sortField={sortField}
                        setSortField={setSortField}
                        sortOrder={sortOrder}
                        setSortOrder={setSortOrder}
                        startDate={startDate}
                        setStartDate={setStartDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
                    />
                </div>
            </div>
            <ResetAdvFilters resetAllFilters={resetAllFilters} />
        </>
    )
}
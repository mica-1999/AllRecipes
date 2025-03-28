"use client"
import { useState } from "react";
import MealOptions from "./filterComp/MealOptions";
import MealType from "./filterComp/MealType";
import CookingTime from "./filterComp/CookingTime";
import DietaryRestrictions from "./filterComp/DietaryRestrictions";
import Ingredients from "./filterComp/Ingredients";
import DifficultyLevel from "./filterComp/DifficultyLevel";
import CaloriesRange from "./filterComp/CaloriesRange";
import CookingMethod from "./filterComp/CookingMethod";
import Occasion from "./filterComp/Occasion";
import TableFiltered from "./content/TableFiltered";

const mainFilters = ["Latest", "Popular", "Top Rated", "Random"]; 
interface CaloriesRangeType {
    min: number;
    max: number;

}

export default function AdvFilters () {
    const [mainFilterMenu, setMainFilterMenu] = useState("Popular");
    const [mealTypeFilter, setMealTypeFilter] = useState<string[]>([]);
    const [mealType, setMealType] = useState<string[]>([]);
    const [cookingTime, setCookingTime] = useState<number>(30);
    const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([]);
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [difficultyLevel, setDifficultyLevel] = useState<string[]>([]);
    const [caloriesRange, setCaloriesRange] = useState<CaloriesRangeType>({min: 200, max: 800});
    const [cookingMethod, setCookingMethod] = useState<string[]>([]);
    const [occasion, setOccasion] = useState<string[]>([]);

    return(
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white rounded-lg shadow-md p-6 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{mainFilterMenu}</h1>
                        <p className="text-sm text-gray-600">Choose your filter preference</p>
                    </div>                

                    <div id="mainMenuBtns" className="flex flex-wrap justify-start md:justify-end gap-3 mt-4 md:mt-0">
                        {mainFilters.map((filter) => (
                            <button 
                                key={filter}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer
                                ${mainFilterMenu === filter 
                                    ? 'bg-indigo-600 text-white shadow-md' 
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                onClick={() => setMainFilterMenu(filter)}
                            >
                                {filter}
                            </button>
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
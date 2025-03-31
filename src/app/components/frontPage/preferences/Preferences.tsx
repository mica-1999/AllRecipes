"use client"
import { useState } from "react";
import Link from "next/link";
import { toast } from 'react-toastify';

// Import components
import DietPreferences from "@/app/components/frontPage/preferences/types/DietPreferences";
import CuisinePreferences from "@/app/components/frontPage/preferences/types/CuisinePreferences";
import MealPreferences from "@/app/components/frontPage/preferences/types/MealPreferences";
import CookingPreferences from "@/app/components/frontPage/preferences/types/CookingPreferences";
import ColorSettings from "@/app/components/frontPage/preferences/types/ColorSettings";
import PreferencesSummary from "@/app/components/frontPage/preferences/types/PreferencesSummary";

export default function CustomizedPreferences() {
    // State management
    const [dietPreferences, setDietPreferences] = useState<string[]>([]);
    const [cuisinePreferences, setCuisinePreferences] = useState<string[]>([]);
    const [mealPreferences, setMealPreferences] = useState<string[]>([]);
    const [cookingPreferences, setCookingPreferences] = useState<string[]>([]);
    const [saved, setSaved] = useState(false);
    const [customColors, setCustomColors] = useState<{[key: string]: string}>({});
    const [activeTab, setActiveTab] = useState("preferences"); // preferences or colors

    // Handlers for each preference
    const handleDietChange = (id: string) => {
        setDietPreferences(prev => 
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
        if (saved) setSaved(false);
    };

    const handleCuisineChange = (id: string) => {
        setCuisinePreferences(prev => 
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
        if (saved) setSaved(false);
    };

    const handleMealChange = (id: string) => {
        setMealPreferences(prev => 
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
        if (saved) setSaved(false);
    };

    const handleCookingChange = (id: string) => {
        setCookingPreferences(prev => 
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
        if (saved) setSaved(false);
    };

    const handleColorChange = (id: string, value: string) => {
        setCustomColors(prev => ({
            ...prev,
            [id]: value
        }));
        if (saved) setSaved(false);
    };

    const handleColorReset = (id: string) => {
        setCustomColors(prev => {
            const newColors = {...prev};
            delete newColors[id];
            return newColors;
        });
        if (saved) setSaved(false);
    };

    // Function to save preferences
    const savePreferences = () => {
        toast.success("Changes saved successfully!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light"
        });
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-20">
            {/* Header with buttons */}
            <div className="border-b border-gray-200 pb-5 mb-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Your Preferences</h1>
                        <p className="mt-2 text-sm text-gray-600">Customize your recipe recommendations and visual settings</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button 
                            onClick={savePreferences}
                            className={`inline-flex items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium transition-all duration-200 cursor-pointer ${
                                saved ? 
                                "bg-green-600 text-white hover:bg-green-700" : 
                                "bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] hover:from-[#e55a29] hover:to-[#e57a4d] text-white"
                            }`}
                        >
                            {saved ? (
                                <>
                                    <i className="ri-check-line mr-2"></i>
                                    Saved!
                                </>
                            ) : (
                                <>
                                    <i className="ri-save-line mr-2"></i>
                                    Save Preferences
                                </>
                            )}
                        </button>
                        <Link href="/pages/home">
                            <button className="inline-flex items-center px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                                <i className="ri-arrow-left-line mr-2"></i>
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-8">
                <button
                    onClick={() => setActiveTab("preferences")}
                    className={`px-4 py-2 text-sm font-medium ${activeTab === "preferences" 
                        ? "border-b-2 border-[#FF6B35] text-[#FF6B35]" 
                        : "text-gray-500 hover:text-gray-700"}`}
                >
                    <i className="ri-settings-4-line mr-1"></i>
                    Recipe Preferences
                </button>
                <button
                    onClick={() => setActiveTab("colors")}
                    className={`px-4 py-2 text-sm font-medium ${activeTab === "colors" 
                        ? "border-b-2 border-[#FF6B35] text-[#FF6B35]" 
                        : "text-gray-500 hover:text-gray-700"}`}
                >
                    <i className="ri-palette-line mr-1"></i>
                    Visual Settings
                </button>
            </div>

            {/* Content based on active tab */}
            {activeTab === "preferences" && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <DietPreferences 
                            preferences={dietPreferences}
                            customColors={customColors}
                            onPreferenceChange={handleDietChange}
                        />
                        
                        <CuisinePreferences 
                            preferences={cuisinePreferences}
                            customColors={customColors}
                            onPreferenceChange={handleCuisineChange}
                        />
                        
                        <MealPreferences 
                            preferences={mealPreferences}
                            customColors={customColors}
                            onPreferenceChange={handleMealChange}
                        />
                        
                        <CookingPreferences 
                            preferences={cookingPreferences}
                            customColors={customColors}
                            onPreferenceChange={handleCookingChange}
                        />
                    </div>
                    
                    <PreferencesSummary 
                        dietPreferences={dietPreferences}
                        cuisinePreferences={cuisinePreferences}
                        mealPreferences={mealPreferences}
                        cookingPreferences={cookingPreferences}
                        customColors={customColors}
                    />
                </>
            )}

            {activeTab === "colors" && (
                <ColorSettings 
                    dietPreferences={dietPreferences}
                    cuisinePreferences={cuisinePreferences}
                    mealPreferences={mealPreferences}
                    cookingPreferences={cookingPreferences}
                    customColors={customColors}
                    onColorChange={handleColorChange}
                    onColorReset={handleColorReset}
                />
            )}
        </div>
    );
}
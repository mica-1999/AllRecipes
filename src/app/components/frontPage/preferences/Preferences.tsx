"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from '@/app/context/ThemeContext';
import { showToast } from "@/app/components/reusable/Toasters";
import { useSession } from "next-auth/react";

// Import components
import DietPreferences from "@/app/components/frontPage/preferences/types/DietPreferences";
import CuisinePreferences from "@/app/components/frontPage/preferences/types/CuisinePreferences";
import MealPreferences from "@/app/components/frontPage/preferences/types/MealPreferences";
import CookingPreferences from "@/app/components/frontPage/preferences/types/CookingPreferences";
import ColorSettings from "@/app/components/frontPage/preferences/types/ColorSettings";
import PreferencesSummary from "@/app/components/frontPage/preferences/types/PreferencesSummary";

export default function CustomizedPreferences() {
    const session = useSession();

    // State management & hooks
    const [dietPreferences, setDietPreferences] = useState<string[]>([]);
    const [cuisinePreferences, setCuisinePreferences] = useState<string[]>([]);
    const [mealPreferences, setMealPreferences] = useState<string[]>([]);
    const [cookingPreferences, setCookingPreferences] = useState<string[]>([]);
    const [saved, setSaved] = useState(false);
    const [customColors, setCustomColors] = useState<{ [key: string]: string }>({});
    const [activeTab, setActiveTab] = useState("preferences");
    const { t, savedTheme } = useTheme();

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
            const newColors = { ...prev };
            delete newColors[id];
            return newColors;
        });
        if (saved) setSaved(false);
    };

    // Function to save preferences
    const savePreferences = async () => {
        try {
            const response = await fetch("/api/preferences/meal", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    dietPreferences,
                    cuisinePreferences,
                    mealPreferences,
                    cookingPreferences,
                }),
            });

            if (!response.ok) {
                showToast("error", "Failed to save preferences. Please try again later.", savedTheme);
                return;
            }

            showToast("success", "Changes saved successfully!", savedTheme);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);

        } catch (error) {
            console.error("Error saving preferences:", error);
            showToast("error", "An error occurred while saving preferences.", savedTheme);
        }
    };


    // Load preferences on component mount
    useEffect(() => {
        if (!session.data) return;

        const fetchPreferences = async () => {
            try {
                const response = await fetch(`/api/preferences/meal`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    showToast("error", "Failed to fetch preferences. Please try again later.", savedTheme);
                    return;
                }

                const data = await response.json();
                setDietPreferences(data.dietPreferences || []);
                setCuisinePreferences(data.cuisinePreferences || []);
                setMealPreferences(data.mealPreferences || []);
                setCookingPreferences(data.cookingPreferences || []);

            } catch (error) {
                console.error("Error fetching preferences:", error);
                showToast("error", "An error occurred while fetching preferences.", savedTheme);
            }
        }


        fetchPreferences();
    }, [session, savedTheme]);


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-20">
            {/* Header with buttons */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-5 mb-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('preferences.title')}</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{t('preferences.subtitle')}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={savePreferences}
                            className={`inline-flex items-center px-4 py-2 rounded-md shadow-sm dark:shadow-black/20 text-sm font-medium transition-all duration-200 cursor-pointer ${saved ?
                                "bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-600" :
                                "bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] dark:from-indigo-600 dark:to-indigo-500 hover:from-[#e55a29] hover:to-[#e57a4d] dark:hover:from-indigo-500 dark:hover:to-indigo-400 text-white"
                                }`}
                        >
                            {saved ? (
                                <>
                                    <i className="ri-check-line mr-2"></i>
                                    {t('preferences.saved')}
                                </>
                            ) : (
                                <>
                                    <i className="ri-save-line mr-2"></i>
                                    {t('preferences.save')}
                                </>
                            )}
                        </button>
                        <Link href="/pages/home">
                            <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm dark:shadow-black/20 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer">
                                <i className="ri-arrow-left-line mr-2"></i>
                                {t('preferences.backToHome')}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
                <button
                    onClick={() => setActiveTab("preferences")}
                    className={`px-4 py-2 text-sm font-medium cursor-pointer ${activeTab === "preferences"
                        ? "border-b-2 border-[#FF6B35] dark:border-indigo-400 text-[#FF6B35] dark:text-indigo-400"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"}`}
                >
                    <i className="ri-settings-4-line mr-1"></i>
                    {t('preferences.tabs.recipePreferences')}
                </button>
                <button
                    onClick={() => setActiveTab("colors")}
                    className={`px-4 py-2 text-sm font-medium cursor-pointer ${activeTab === "colors"
                        ? "border-b-2 border-[#FF6B35] dark:border-indigo-400 text-[#FF6B35] dark:text-indigo-400"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"}`}
                >
                    <i className="ri-palette-line mr-1"></i>
                    {t('preferences.tabs.visualSettings')}
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
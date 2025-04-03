"use client"
import { useSession } from "next-auth/react";
import { useState, useRef } from "react"
import { toast } from 'react-toastify';
import { useClickOutside } from '@/app/components/reusable/ClickOutsideDiv';
import { modeStyles, languageOptions } from "@/app/data/LayoutData";
import { useTheme } from "@/app/context/ThemeContext";

interface HandleResetProps {
    method: "reset" | "cancel";
}

export default function StickyButton() {
    // Get session data from NextAuth
    const { data: session } = useSession(); 

    // Get theme and language from context
    const { theme, setTheme, language, setLanguage, savedTheme, setSavedTheme, savedLanguage, setSavedLanguage, t } = useTheme();
    
    // Ref to DIV
    const configRef = useRef<HTMLDivElement>(null) // Used to close the config menu when clicking outside of it
    
    // State variables
    const [showConfig, setShowConfig] = useState(false) // Controls the visibility of the config menu

    // Use the click outside hook directly - no need for useEffect
    useClickOutside(configRef, setShowConfig);
    
    // Function to handle confirmation of changes
    const handleSavedChanges = async () => {
        try{
            const response = await fetch("/api/preferences",{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: session?.user.id,
                    visualTheme: theme,
                    language: language 
                })
            })

            if(response.ok){
                // Save new theme and language to context        
                setSavedTheme(theme); 
                setSavedLanguage(language);      
                
                // Close the config menu and show success message
                setShowConfig(false)
                toast.success(t('themeSettings.changesSaved'), {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: theme.toLowerCase() === "dark" ? "dark" : "light"
                });
            }
        }
        catch(error){
            console.error("Error saving preferences:", error)
            toast.error(t('themeSettings.errorSaving'), {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: theme.toLowerCase() === "dark" ? "dark" : "light"
            });
        }
    }



    const handleReset = (method: HandleResetProps["method"]) => {
        setLanguage(savedLanguage);
        setTheme(savedTheme);

        if (method !== "cancel") {
            toast.info(t('themeSettings.settingsReset'), {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: savedTheme.toLowerCase() === "dark" ? "dark" : "light"
            });
        }
    }
    
    return(
        <>
            <div 
                className="
                    fixed right-0 top-40 z-50
                    flex items-center justify-center w-12 h-10
                    pr-2
                    bg-[#FF6B35] text-white rounded-l-lg shadow-lg
                    hover:w-14 hover:bg-[#ff8255] hover:shadow-xl cursor-pointer
                    transition-all duration-300 ease-in-out
                    dark:bg-indigo-600 dark:hover:bg-indigo-500"
                onClick={() => setShowConfig(!showConfig)}
            >
                <i className="ri-settings-3-line text-xl"></i>
            </div>

            {showConfig && (
                <div className="
                    fixed z-52 right-0
                    w-[400px] h-full
                    flex flex-col 
                    py-7 pl-5 pr-5 
                    bg-gradient-to-b from-gray-100 to-gray-200
                    shadow-xl
                    overflow-y-auto
                    dark:from-gray-800 dark:to-gray-900
                    " 
                ref={configRef}>
                    <div className="flex items-center justify-between border-b-2 border-gray-300 pb-2 -mx-5 px-5 dark:border-gray-700">
                        <div className="flex flex-col">
                            <h2 className="text-[18px] font-semibold text-gray-800 dark:text-white">{t('themeSettings.title')}</h2>
                            <p className="text-[12px] text-gray-600 dark:text-gray-400">{t('themeSettings.subtitle')}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <button 
                                onClick={() => handleReset("reset")}
                                className="cursor-pointer hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">
                                <i className="ri-refresh-line text-[23px]"></i>
                            </button>
                            <button 
                                className="cursor-pointer hover:text-red-600 transition-colors dark:text-gray-300 dark:hover:text-red-400" 
                                onClick={() => {
                                    handleReset("cancel");
                                    setShowConfig(false);
                                }}
                            >
                                <i className="ri-close-line text-[30px]"></i>
                            </button>
                        </div>
                    </div>

                    <div id="themeStyles" className="flex flex-col mt-5">
                        <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 rounded-md h-8 p-2 w-fit text-[13px] text-white font-medium shadow-sm dark:from-blue-700 dark:to-blue-800">
                            <h2>{t('themeSettings.theming')}</h2>
                        </div>
                        <h2 className="text-[16px] font-semibold mt-5 text-gray-800 dark:text-white">{t('themeSettings.styleMode')}</h2>
                        <div className="flex justify-between gap-3 mt-3 w-full">
                            {modeStyles.map((mode, index) => (
                                <div key={index} className="flex flex-col w-1/3 justify-center">
                                    <button 
                                        onClick={() => {
                                            setTheme(mode.type)
                                        }
                                            
                                        }
                                        className={`w-full py-3 rounded-[14px] cursor-pointer transition-all duration-200 ${
                                            theme === mode.type 
                                                ? `bg-gradient-to-r ${mode.activeGradient} shadow-md`
                                                : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                                        }`}
                                    >
                                        <i className={`${mode.icon} text-[28px] ${theme === mode.type ? "text-white" : "text-gray-700 dark:text-gray-200"}`}></i>
                                    </button>
                                    <p className="text-[12px] mt-1 text-center font-medium text-gray-700 dark:text-gray-300">
                                        {t(`themeSettings.modes.${mode.id}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="languageSettings" className="flex flex-col mt-8">
                        <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 rounded-md h-8 p-2 w-fit text-[13px] text-white font-medium shadow-sm dark:from-green-700 dark:to-green-800">
                            <h2>{t('themeSettings.language')}</h2>
                        </div>
                        <h2 className="text-[16px] font-semibold mt-5 text-gray-800 dark:text-white">{t('themeSettings.chooseLanguage')}</h2>
                        <div className="flex justify-between gap-3 mt-3 w-full">
                            {languageOptions.map((languagearray, index) => (
                                <div key={index} className="flex flex-col w-1/3 justify-center">
                                    <button 
                                        onClick={() => setLanguage(languagearray.type)}
                                        className={`w-full py-3 rounded-[14px] cursor-pointer transition-all duration-200 ${
                                            language === languagearray.type
                                                ? `bg-gradient-to-r ${languagearray.activeGradient} shadow-md`
                                                : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                                        }`}
                                    >
                                        <i className={`${languagearray.icon} text-[28px] ${language === languagearray.type ? "text-white" : "text-gray-700 dark:text-gray-200"}`}></i>
                                    </button>
                                    <p className="text-[12px] mt-1 text-center font-medium text-gray-700 dark:text-gray-300">
                                        {t(`themeSettings.languages.${languagearray.id}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div id="btns" className="flex flex-col mt-10 mb-5">
                        <div className="border-t border-gray-300 dark:border-gray-700 pt-6 pb-2 -mx-5 px-5">
                            <div className="flex items-center justify-between gap-4">
                                <button 
                                    className="flex-1 py-2 px-3 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium rounded-lg transition-all duration-200 flex items-center justify-center cursor-pointer dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                                    onClick={() => {
                                        handleReset("cancel");
                                        setShowConfig(false);
                                    }}
                                >
                                    <i className="ri-close-circle-line mr-1.5 text-base"></i>
                                    {t('themeSettings.cancel')}
                                </button>
                                <button 
                                    className="flex-1 py-2 px-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] hover:from-[#e55a29] hover:to-[#e57a4d] text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer dark:from-indigo-600 dark:to-indigo-700 dark:hover:from-indigo-700 dark:hover:to-indigo-800"
                                    onClick={() => handleSavedChanges()}
                                >
                                    <i className="ri-check-line mr-1.5 text-base"></i>
                                    {t('themeSettings.applyChanges')}
                                </button>
                            </div>
                            <p className="text-center text-xs text-gray-500 mt-4 dark:text-gray-400">
                                {t('themeSettings.sessionNote')}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
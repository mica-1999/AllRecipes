"use client"
import { useState, useRef } from "react"

const modeStyles = [
    {type: "Light", icon: "ri-sun-line", activeGradient: "from-[#FFB938] to-[#FFA238]"},
    {type: "Dark", icon: "ri-moon-line", activeGradient: "from-[#6C72CB] to-[#5A60B6]"},
    {type: "Auto", icon: "ri-computer-line", activeGradient: "from-[#4A90E2] to-[#357ABD]"}
]

const languageOptions = [
    {type: "English", code: "en", icon: "ri-flag-line", activeGradient: "from-[#DC1C2C] to-[#00247D]"},
    {type: "Portuguese", code: "pt", icon: "ri-translate-2", activeGradient: "from-[#006600] to-[#FF0000]"},
    {type: "Spanish", code: "es", icon: "ri-global-line", activeGradient: "from-[#FF0000] to-[#FFC400]"}
]

export default function StickyButton() {
    const [showConfig, setShowConfig] = useState(false)
    const [selectedMode, setSelectedMode] = useState(0)
    const [selectedLanguage, setSelectedLanguage] = useState(0)
    const configRef = useRef<HTMLDivElement>(null)
    
    return(
        <>
            <div 
                className="
                    fixed right-0 top-40 z-50
                    flex items-center justify-center w-12 h-10
                    pr-2
                    bg-[#FF6B35] text-white rounded-l-lg shadow-lg
                    hover:w-14 hover:bg-[#ff8255] hover:shadow-xl cursor-pointer
                    transition-all duration-300 ease-in-out"
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
                    " 
                ref={configRef}>
                    <div className="flex items-center justify-between border-b-2 border-gray-300 pb-2 -mx-5 px-5">
                        <div className="flex flex-col">
                            <h2 className="text-[18px] font-semibold text-gray-800">Layout Preferences</h2>
                            <p className="text-[12px] text-gray-600">Customize and preview in real time</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <button className="cursor-pointer hover:text-blue-600 transition-colors">
                                <i className="ri-refresh-line text-[23px]"></i>
                            </button>
                            <button className="cursor-pointer hover:text-red-600 transition-colors" onClick={() => setShowConfig(false)}>
                                <i className="ri-close-line text-[30px]"></i>
                            </button>
                        </div>
                    </div>

                    <div id="themeStyles" className="flex flex-col mt-5">
                        <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 rounded-md h-8 p-2 w-fit text-[13px] text-white font-medium shadow-sm">
                            <h2>Theming</h2>
                        </div>
                        <h2 className="text-[16px] font-semibold mt-5 text-gray-800">Style (Mode)</h2>
                        <div className="flex justify-between gap-3 mt-3 w-full">
                            {modeStyles.map((mode, index) => (
                                <div key={index} className="flex flex-col w-1/3 justify-center">
                                    <button 
                                        onClick={() => setSelectedMode(index)}
                                        className={`w-full py-3 rounded-[14px] cursor-pointer transition-all duration-200 ${
                                            selectedMode === index 
                                                ? `bg-gradient-to-r ${mode.activeGradient} shadow-md`
                                                : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                    >
                                        <i className={`${mode.icon} text-[28px] ${selectedMode === index ? "text-white" : "text-gray-700"}`}></i>
                                    </button>
                                    <p className="text-[12px] mt-1 text-center font-medium text-gray-700">{mode.type}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="languageSettings" className="flex flex-col mt-8">
                        <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 rounded-md h-8 p-2 w-fit text-[13px] text-white font-medium shadow-sm">
                            <h2>Language</h2>
                        </div>
                        <h2 className="text-[16px] font-semibold mt-5 text-gray-800">Choose Language</h2>
                        <div className="flex justify-between gap-3 mt-3 w-full">
                            {languageOptions.map((language, index) => (
                                <div key={index} className="flex flex-col w-1/3 justify-center">
                                    <button 
                                        onClick={() => setSelectedLanguage(index)}
                                        className={`w-full py-3 rounded-[14px] cursor-pointer transition-all duration-200 ${
                                            selectedLanguage === index 
                                                ? `bg-gradient-to-r ${language.activeGradient} shadow-md`
                                                : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                    >
                                        <i className={`${language.icon} text-[28px] ${selectedLanguage === index ? "text-white" : "text-gray-700"}`}></i>
                                    </button>
                                    <p className="text-[12px] mt-1 text-center font-medium text-gray-700">{language.type}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div id="btns" className="flex flex-col mt-10 mb-5">
                        <div className="border-t border-gray-300 pt-6 pb-2 -mx-5 px-5">
                            <div className="flex items-center justify-between gap-4">
                                <button 
                                    className="flex-1 py-2 px-3 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium rounded-lg transition-all duration-200 flex items-center justify-center cursor-pointer"
                                    onClick={() => setShowConfig(false)}
                                >
                                    <i className="ri-close-circle-line mr-1.5 text-base"></i>
                                    Cancel
                                </button>
                                <button 
                                    className="flex-1 py-2 px-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] hover:from-[#e55a29] hover:to-[#e57a4d] text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer"
                                >
                                    <i className="ri-check-line mr-1.5 text-base"></i>
                                    Apply Changes
                                </button>
                            </div>
                            <p className="text-center text-xs text-gray-500 mt-4">
                                Changes will be applied to your current session
                            </p>
                        </div>
                    </div>
                    
                </div>
            )}
        </>
    )
}
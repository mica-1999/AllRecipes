"use client"
import { Socials } from "@/app/data/LayoutData";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from '@/app/context/ThemeContext';

export default function Footer() {
    // State variables & hooks
    const [currentYear, setCurrentYear] = useState<string | null>("");
    const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
    const { t } = useTheme();

    // Get Current Year on Mount 
    useEffect(() => {
        setCurrentYear(new Date().getFullYear().toString());
    }, []);

    return (
        <footer>
            {/* ======================== ABOUT US SECTION ======================== */}
            <div id="socialsSection" className="flex max-lg:flex-col max-lg:items-center justify-between bg-gray-100 w-full text-gray-800 dark:bg-gray-800 dark:text-white">
                <div className="flex flex-col w-[40%] max-lg:w-[80%] max-sm:px-0 p-13">
                    <h1 className="text-[1.25rem] font-semibold mb-5 text-gray-700 dark:text-gray-200">{t('footer.aboutUs')}</h1>
                    <p className="text-gray-600 dark:text-gray-400">{t('footer.aboutDescription')}</p>

                    <div className="flex gap-5 mt-5">
                        {Socials.map((social, index) => (
                            <Link href={social.url} key={index}>
                                <div
                                    className={`flex justify-center items-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300 ${hoveredSocial === index ? 'translate-y-[-4px]' : ''
                                        }`}
                                    style={{
                                        backgroundColor: hoveredSocial === index ? `#${social.color}` : ''
                                    }}
                                    onMouseEnter={() => setHoveredSocial(index)}
                                    onMouseLeave={() => setHoveredSocial(null)}
                                >
                                    <i className={`${social.icon} text-gray-700 dark:text-gray-200`}></i>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* ======================== CONTACT SECTION ======================== */}
                <div className="flex flex-col w-[30%] max-lg:w-[80%] max-lg:pt-0 max-sm:px-0 p-13">
                    <h1 className="text-[1.25rem] font-semibold mb-5 text-gray-700 dark:text-gray-200">{t('footer.contactInfo')}</h1>
                    <div className="flex items-center gap-3">
                        <i className="ri-map-pin-line text-[#FF6B35]"></i>
                        <p className="text-gray-600 dark:text-gray-400">{t('footer.address')}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                        <i className="ri-phone-line text-[#FF6B35]"></i>
                        <a className="transform hover:translate-x-2 transition-all duration-200" href="tel:+351964420812">
                            <p className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">+351 964 420 812</p>
                        </a>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                        <i className="ri-mail-line text-[#FF6B35]"></i>
                        <a className="transform hover:translate-x-2 transition-all duration-200" href="mailto:micael1999work@gmail.com">
                            <p className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">micael1999work@gmail.com</p>
                        </a>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                        <i className="ri-id-card-line text-[#FF6B35]"></i>
                        <p className="text-gray-600 dark:text-gray-400">261446509</p>
                    </div>
                </div>

                {/* ======================== LINKS SECTION ======================== */}
                <div className="flex flex-col w-[30%] p-13 max-lg:w-[80%] max-lg:pt-0 max-sm:px-0">
                    <h1 className="text-[1.25rem] font-semibold mb-5 text-gray-700 dark:text-gray-200">{t('footer.quickLinks')}</h1>
                    <div className="flex">
                        <ul className="flex flex-col w-1/2 list-disc ml-5 gap-3 marker:text-[#FF6B35]">
                            <li className="hover:marker:text-gray-700 dark:hover:marker:text-gray-200">
                                <Link href="/pages/home/" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 inline-block transform hover:translate-x-2 transition-all duration-200">
                                    {t('footer.home')}
                                </Link>
                            </li>
                            <li className="hover:marker:text-gray-700 dark:hover:marker:text-gray-200">
                                <Link href="/pages/home/advancedFilters/" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 inline-block transform hover:translate-x-2 transition-all duration-200">
                                    {t('footer.recipes')}
                                </Link>
                            </li>
                            <li className="hover:marker:text-gray-700 dark:hover:marker:text-gray-200">
                                <Link href="/pages/" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 inline-block transform hover:translate-x-2 transition-all duration-200">
                                    {t('footer.about')}
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col w-1/2 list-disc ml-5 gap-3 marker:text-[#FF6B35]">
                            <li className="hover:marker:text-gray-700 dark:hover:marker:text-gray-200">
                                <Link href="/pages/" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 inline-block transform hover:translate-x-2 transition-all duration-200">
                                    {t('footer.faq')}
                                </Link>
                            </li>
                            <li className="hover:marker:text-gray-700 dark:hover:marker:text-gray-200">
                                <Link href="/pages/" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 inline-block transform hover:translate-x-2 transition-all duration-200">
                                    {t('footer.privacyPolicy')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="copyRightSection" className="flex max-[1024px]:mb-[65px] justify-center items-center bg-gray-200 text-gray-600 h-17 dark:bg-gray-900 dark:text-gray-500">
                <p>{t('footer.copyright').replace('{year}', currentYear || '')}</p>
            </div>
        </footer>
    );
}
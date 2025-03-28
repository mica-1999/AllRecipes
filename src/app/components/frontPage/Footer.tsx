"use client"
import { Socials } from "@/app/dataItems/socials";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
    const [currentYear, setCurrentYear] = useState("");
    const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

    // Get Current Year
    useEffect(() => {
        setCurrentYear(new Date().getFullYear().toString());
    }, []);

    return(
        <footer>
            {/* ======================== ABOUT US SECTION ======================== */}
            <div id="socialsSection" className="flex max-lg:flex-col max-lg:items-center justify-between bg-gray-800 w-full text-white">
                <div className="flex flex-col w-[40%] max-lg:w-[80%] max-sm:px-0 p-13">
                    <h1 className="text-[1.25rem] font-semibold mb-5 text-gray-200">About Us</h1>
                    <p className="text-gray-400">RecipeHub is your go-to platform to discover, save, and share delicious recipes. Organize your favorites, explore new dishes, and connect with a community of food lovers. Start your culinary journey with us today!</p>

                    <div className="flex gap-5 mt-5">
                    {Socials.map((social, index) => (
                        <Link href={social.url} key={index}>
                            <div 
                                className={`flex justify-center items-center w-9 h-9 rounded-full bg-gray-700 hover:bg-[#FF6B35] transition-all duration-300 ${
                                    hoveredSocial === index ? 'translate-y-[-4px]' : ''
                                }`}
                                onMouseEnter={() => setHoveredSocial(index)}
                                onMouseLeave={() => setHoveredSocial(null)}
                            >
                                <i className={`${social.icon} text-gray-200`}></i>
                            </div>
                        </Link>
                    ))}
                    </div>
                </div>

                {/* ======================== CONTACT SECTION ======================== */}
                <div className="flex flex-col w-[30%] max-lg:w-[80%] max-lg:pt-0 max-sm:px-0 p-13">
                    <h1 className="text-[1.25rem] font-semibold mb-5 text-gray-200">Contact Info</h1>
                    <div className="flex items-center gap-3">
                        <i className="ri-map-pin-line text-[#FF6B35]"></i>
                        <p className="text-gray-400">Canhas, Funchal, Madeira</p>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                        <i className="ri-phone-line text-[#FF6B35]"></i>
                        <a className="transform hover:translate-x-2 transition-all duration-200" href="tel:+351964420812">
                            <p className="text-gray-400 hover:text-gray-200">+351 964 420 812</p>
                        </a>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                        <i className="ri-mail-line text-[#FF6B35]"></i>
                        <a className="transform hover:translate-x-2 transition-all duration-200" href="mailto:micael1999work@gmail.com">
                            <p className="text-gray-400 hover:text-gray-200">micael1999work@gmail.com</p>
                        </a>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                        <i className="ri-id-card-line text-[#FF6B35]"></i>
                        <p className="text-gray-400">261446509</p>
                    </div>
                </div>

                {/* ======================== LINKS SECTION ======================== */}
                <div className="flex flex-col w-[30%] p-13 max-lg:w-[80%] max-lg:pt-0 max-sm:px-0">
                    <h1 className="text-[1.25rem] font-semibold mb-5 text-gray-200">Quick Links</h1>
                    <div className="flex">
                        <ul className="flex flex-col w-1/2 list-disc ml-5 gap-3 marker:text-[#FF6B35]">
                            <li className="hover:marker:text-gray-200">
                                <Link href="/pages/home/" className="text-gray-400 hover:text-gray-200 inline-block transform hover:translate-x-2 transition-all duration-200">
                                    Home
                                </Link>
                            </li>
                            <li className="hover:marker:text-gray-200">
                                <Link href="/pages/home/advancedFilters/" className="text-gray-400 hover:text-gray-200 inline-block transform hover:translate-x-2 transition-all duration-200">
                                    Recipes
                                </Link>
                            </li>
                            <li className="hover:marker:text-gray-200">
                                <Link href="/pages/" className="text-gray-400 hover:text-gray-200 inline-block transform hover:translate-x-2 transition-all duration-200">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col w-1/2 list-disc ml-5 gap-3 marker:text-[#FF6B35]">
                            <li className="hover:marker:text-gray-200">
                                <Link href="/pages/" className="text-gray-400 hover:text-gray-200 inline-block transform hover:translate-x-2 transition-all duration-200">
                                    FAQ
                                </Link>
                            </li>
                            <li className="hover:marker:text-gray-200">
                                <Link href="/pages/" className="text-gray-400 hover:text-gray-200 inline-block transform hover:translate-x-2 transition-all duration-200">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="copyRightSection" className="flex max-[1024px]:mb-[65px] justify-center items-center bg-gray-900 text-gray-500 h-17">
                <p>© {currentYear} · <a href="https://micaelportfolio.vercel.app/pages/blog" className="text-[#FF6B35] hover:text-[#ff8c5a] transition-colors duration-200"> Micael Ribeiro </a> <span className="max-sm:hidden">· Web Design & Development · Madeira - Portugal </span></p>
            </div>
        </footer>
    );
}
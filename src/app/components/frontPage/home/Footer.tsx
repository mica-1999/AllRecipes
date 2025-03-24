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
            <div id="socialsSection" className="flex justify-between px-16 bg-[#1a1a1a] w-full h-80 text-white">
                <div className="flex flex-col w-[40%] p-13">
                    <h1 className="text-[1.25rem] font-semibold mb-5 text-[#d3d3d3]">About Us</h1>
                    <p className="text-[#6c6c6c]">RecipeHub is your go-to platform to discover, save, and share delicious recipes. Organize your favorites, explore new dishes, and connect with a community of food lovers. Start your culinary journey with us today!</p>

                    <div className="flex gap-5 mt-5">
                    {Socials.map((social, index) => (
                        <Link href={social.url} key={index}>
                            <div 
                                className={`flex justify-center items-center w-9 h-9 rounded-full transition-all duration-300 ${hoveredSocial === index ? 'translate-y-[-4px]' : ''}`}
                                style={{ 
                                    backgroundColor: hoveredSocial === index ? `#${social.color}` : '#2e2e2e' 
                                }}
                                onMouseEnter={() => setHoveredSocial(index)}
                                onMouseLeave={() => setHoveredSocial(null)}
                            >
                                <i className={`${social.icon} text-[#d3d3d3]`}></i>
                            </div>
                        </Link>
                    ))}
                    </div>
                </div>

                {/* ======================== CONTACT SECTION ======================== */}
                <div className="flex flex-col w-[30%] p-13">
                    <h1 className="text-[1.25rem] font-semibold mb-5 text-[#d3d3d3]">Contact Info</h1>
                    <p className="text-[#6c6c6c]">Localização: </p>
                    <p className="text-[#6c6c6c] mt-4">Telefone </p>
                    <p className="text-[#6c6c6c] mt-4">Email:</p>
                    <p className="text-[#6c6c6c] mt-4">NIF:</p>
                </div>

                {/* ======================== LINKS SECTION ======================== */}
                <div className="flex flex-col w-[30%] p-13">
                    <h1 className="text-[1.25rem] font-semibold mb-5 text-[#d3d3d3]">Quick Links</h1>
                    <div className="flex">
                        <div className="flex flex-col w-1/2">
                            <ul>
                                <li><Link href="/pages/" className="text-[#747474] hover:text-[#d3d3d3] transition-colors duration-200">Home</Link></li>
                                <li><Link href="/pages/" className="text-[#747474] hover:text-[#d3d3d3] transition-colors duration-200">Recipes</Link></li>
                                <li><Link href="/pages/" className="text-[#747474] hover:text-[#d3d3d3] transition-colors duration-200">About</Link></li>
                                <li><Link href="/pages/" className="text-[#747474] hover:text-[#d3d3d3] transition-colors duration-200">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-1/2">
                            <ul>
                                <li><Link href="/pages/" className="text-[#747474] hover:text-[#d3d3d3] transition-colors duration-200">Home</Link></li>
                                <li><Link href="/pages/" className="text-[#747474] hover:text-[#d3d3d3] transition-colors duration-200">Recipes</Link></li>
                                <li><Link href="/pages/" className="text-[#747474] hover:text-[#d3d3d3] transition-colors duration-200">About</Link></li>
                                <li><Link href="/pages/" className="text-[#747474] hover:text-[#d3d3d3] transition-colors duration-200">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="copyRightSection" className="flex justify-center items-center bg-[#111111] text-[#6c6c6c] h-17">
                <p>© {currentYear} · Micael Ribeiro · Web Design & Development · Madeira - Portugal</p>
            </div>
        </footer>
    );
}
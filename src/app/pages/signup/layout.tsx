import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Register Page',
    description: 'Register',
};

interface RegisterLayoutProps {
    children: ReactNode;
}

export default function RegisterLayout({ children }:RegisterLayoutProps) {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 relative">
        <Link href="/" 
            className="absolute top-4 left-4 z-20 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 group">
            <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </span>
            <span className="font-medium">Back</span>
        </Link>
        
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:py-4 lg:px-12">
            <div className="w-full max-w-md sm:max-w-lg">
                {children}
            </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />
            <Image 
                src="/images/signup/food2.jpg" 
                alt="Delicious Food" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw" 
                style={{ objectFit: "cover" }} 
                className="object-center transform scale-105 hover:scale-100 transition-transform duration-700"
                priority
            />

            <div className="absolute bottom-10 left-10 z-10 text-white max-w-xs">
                <h2 className="text-3xl font-bold mb-3 drop-shadow-md">Moms Recipes</h2>
                <p className="text-base opacity-95 drop-shadow-md leading-relaxed">Discover, share, and enjoy delicious family recipes passed down through generations</p>
            </div>
        </div>
    </div>
    )
}
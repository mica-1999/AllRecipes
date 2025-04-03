import { ReactNode } from 'react';
import Navbar from '@/app/components/frontPage/Navbar';
import Footer from '@/app/components/frontPage/Footer';
import StickyButton from '@/app/components/frontPage/ThemeSettings';
import LoadingWrapper from '@/app/components/skeleton/LoadingWrapper';

export const metadata = {
    title: 'Home Page',
    description: 'Discover new recipes',
};

interface LoginLayoutProps {
    children: ReactNode;
}

export default function HomeLayout ({children}: LoginLayoutProps) {
    return (
        <LoadingWrapper>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <StickyButton />
                <Footer />
            </div>
        </LoadingWrapper>
    );
}
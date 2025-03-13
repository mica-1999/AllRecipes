import { ReactNode } from 'react';
import Image from 'next/image';

export const metadata = {
    title: 'LoginPage',
    description: 'Login with your credentials',
};

interface LoginLayoutProps {
    children: ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
    return (
        <div className="container flex">
            <div className="w-1/2 h-screen">
                <Image className="object-cover w-full h-full" src="/images/login/login-desktop.webp" alt="Login" width={500} height={500} />
            </div>
            <div className="w-1/2">
                {children}
            </div>
        </div>
    );
}
import Link from 'next/link';
import { useState } from 'react';

type NavItem = {
    href: string;
    label: string;
}
interface HeaderProps {
    navItems: NavItem[];
}

function Header({navItems} : HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full flex justify-start gap-3 items-center py-3 px-4 sm:px-6 lg:px-8 z-50 border-b-2 border-subtle bg-lightPink">
            <nav className="w-full">
                <div className="flex justify-start items-center gap-3">
                    <img src="/images/R_logo.png" alt="R logo" className="h-12 w-12" />
                    <div className="hidden sm:flex gap-2">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href}>
                                <p className="text-gray px-4 py-2 cursor-pointer font-poppins font-semibold transition-colors duration-300 ease-out hover:text-transition">
                                    {item.label}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
            <button className="block sm:hidden text-darkmagenta border-none cursor-pointer py-2 px-5 mx-2 hover:text-gray" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                Menu
            </button>
            {isMobileMenuOpen && (
                <nav className="absolute top-16 left-0 w-full bg-lightPink p-4 flex flex-col gap-2 sm:hidden">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                            <p className="text-gray px-4 py-2 cursor-pointer font-poppins font-semibold transition-colors duration-300 ease-out hover:text-transition">
                                {item.label}
                            </p>
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}

export { Header };
export type { NavItem };
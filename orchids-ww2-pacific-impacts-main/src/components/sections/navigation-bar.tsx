"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

// Minimal `cn` utility to merge Tailwind classes, mimicking a utility commonly found in Next.js/Shadcn projects.
const cn = (...inputs: Array<string | undefined | null | false | 0>): string => {
  return inputs.filter(Boolean).join(' ');
};

const NavigationBar = () => {
    const pathname = usePathname();
    const [isCountriesOpen, setIsCountriesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsCountriesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsCountriesOpen(false);
    }, [pathname]);

    // Base classes derived from the computed styles and HTML structure to ensure consistency.
    const navItemClasses = "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-[color,box-shadow] hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px] focus-visible:outline-1";

    const countries = [
        { name: 'Japan', href: '/countries/japan' },
        { name: 'China', href: '/countries/china' },
        { name: 'Korea', href: '/countries/korea' },
        { name: 'Vietnam', href: '/countries/vietnam' },
        { name: 'Thailand', href: '/countries/thailand' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="font-bold text-lg sm:text-xl text-foreground">
                    WW2 Pacific Impact
                </Link>

                {/* Desktop Navigation */}
                <nav aria-label="Main" className="hidden lg:flex relative max-w-max flex-1 items-center justify-center">
                    <ul className="group flex flex-1 list-none items-center justify-center gap-1">
                        <li className="relative">
                            <Link 
                                href="/" 
                                className={cn(
                                    navItemClasses,
                                    pathname === '/' ? 'bg-accent' : 'bg-background'
                                )}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="relative" ref={dropdownRef}>
                            <button 
                                onClick={() => setIsCountriesOpen(!isCountriesOpen)}
                                className={cn(navItemClasses, "bg-background")}
                                data-state={isCountriesOpen ? 'open' : 'closed'}
                            >
                                Countries
                                <ChevronDown 
                                    className={cn(
                                        "relative top-[1px] ml-1 h-3 w-3 shrink-0 transition-transform duration-300",
                                        isCountriesOpen && "rotate-180"
                                    )}
                                    aria-hidden="true" 
                                />
                            </button>
                            
                            {isCountriesOpen && (
                                <div className="absolute left-0 top-full mt-2 w-48 rounded-md border bg-popover shadow-lg z-50">
                                    <div className="p-1">
                                        {countries.map((country) => (
                                            <Link
                                                key={country.href}
                                                href={country.href}
                                                className="block px-4 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                                                onClick={() => setIsCountriesOpen(false)}
                                            >
                                                {country.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className="relative">
                            <Link 
                                href="/timeline" 
                                className={cn(
                                    navItemClasses,
                                    pathname === '/timeline' ? 'bg-accent' : 'bg-background'
                                )}
                            >
                                Timeline
                            </Link>
                        </li>
                        <li className="relative">
                            <Link 
                                href="/interactive" 
                                className={cn(
                                    navItemClasses,
                                    pathname === '/interactive' ? 'bg-accent' : 'bg-background'
                                )}
                            >
                                Interactive
                            </Link>
                        </li>
                        <li className="relative">
                            <Link 
                                href="/revision" 
                                className={cn(
                                    navItemClasses,
                                    pathname === '/revision' ? 'bg-accent' : 'bg-background'
                                )}
                            >
                                Revision
                            </Link>
                        </li>
                        <li className="relative">
                            <Link 
                                href="/resources" 
                                className={cn(
                                    navItemClasses,
                                    pathname === '/resources' ? 'bg-accent' : 'bg-background'
                                )}
                            >
                                Resources
                            </Link>
                        </li>
                        <li className="relative">
                            <Link 
                                href="/about" 
                                className={cn(
                                    navItemClasses,
                                    pathname === '/about' ? 'bg-accent' : 'bg-background'
                                )}
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="lg:hidden border-t bg-background">
                    <div className="container mx-auto px-4 py-4">
                        <ul className="flex flex-col space-y-2">
                            <li>
                                <Link 
                                    href="/" 
                                    className={cn(
                                        "block px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent",
                                        pathname === '/' ? 'bg-accent' : ''
                                    )}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <button 
                                    onClick={() => setIsCountriesOpen(!isCountriesOpen)}
                                    className="w-full flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent"
                                >
                                    Countries
                                    <ChevronDown 
                                        className={cn(
                                            "h-4 w-4 transition-transform duration-300",
                                            isCountriesOpen && "rotate-180"
                                        )}
                                    />
                                </button>
                                {isCountriesOpen && (
                                    <ul className="mt-2 ml-4 space-y-2">
                                        {countries.map((country) => (
                                            <li key={country.href}>
                                                <Link
                                                    href={country.href}
                                                    className="block px-4 py-2 rounded-md text-sm hover:bg-accent transition-colors"
                                                >
                                                    {country.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link 
                                    href="/timeline" 
                                    className={cn(
                                        "block px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent",
                                        pathname === '/timeline' ? 'bg-accent' : ''
                                    )}
                                >
                                    Timeline
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/interactive" 
                                    className={cn(
                                        "block px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent",
                                        pathname === '/interactive' ? 'bg-accent' : ''
                                    )}
                                >
                                    Interactive
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/revision" 
                                    className={cn(
                                        "block px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent",
                                        pathname === '/revision' ? 'bg-accent' : ''
                                    )}
                                >
                                    Revision
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/resources" 
                                    className={cn(
                                        "block px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent",
                                        pathname === '/resources' ? 'bg-accent' : ''
                                    )}
                                >
                                    Resources
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/about" 
                                    className={cn(
                                        "block px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent",
                                        pathname === '/about' ? 'bg-accent' : ''
                                    )}
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavigationBar;
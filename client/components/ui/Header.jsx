"use client";

import Link from "next/link";
import { useState } from "react";
import NavButton from "./NavButton";
import {  Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-green-600">
                    EcoBazaar
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex ">
                    <NavButton variant="link" href='/home' label='Home' />
                    <NavButton variant="link" href='/products' label='Products' />
                    <NavButton variant="link" href='/about' label='About' />
                    <NavButton variant="link" href='/contact' label='Contact' />

                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-green-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {!isOpen ? <Menu/> : <X/>}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <nav className="flex flex-col p-4 ">
                       <NavButton variant="link" href='/home' label='Home' />
                    <NavButton variant="link" href='/products' label='Products' />
                    <NavButton variant="link" href='/about' label='About' />
                    <NavButton variant="link" href='/contact' label='Contact' />
                    </nav>
                </div>
            )}
        </header>
    );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import NavButton from "./ui/NavButton";
import { Menu, X, ShoppingCart, User } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(true);


    // 🛒 Example cart count (you can replace it later with Redux or Context)
    const cartCount = 3; // dynamically fetch from state or backend

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                    EcoBazaar
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center ">
                    <NavButton variant="link" href="/home" label="Home" />
                    <NavButton variant="link" href="/products" label="Products" />
                    <NavButton variant="link" href="/about-us" label="About Us" />
                    <NavButton variant="link" href="/contact-us" label="Contact Us" />

                    {/* Cart and User Buttons */}
                    <div className="flex items-center space-x-3 pl-4 border-l border-gray-200 relative">
                        {/* Cart Button with Badge */}
                        <div className="relative">
                            <NavButton icon={ShoppingCart} label="Cart" href="/cart" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
                                    {cartCount}
                                </span>
                            )}
                        </div>

                        {/* User/Login Button */}
                        {!isAuthenticated && <NavButton icon={User} label="Login" href="/login" />}
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-green-600 hover:text-green-700 transition"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
                    <nav className="flex flex-col p-4 space-y-3">
                        <NavButton variant="link" href="/home" label="Home" />
                        <NavButton variant="link" href="/products" label="Products" />
                        <NavButton variant="link" href="/about-us" label="About Us" />
                        <NavButton variant="link" href="/contact-us" label="Contact Us" />

                        {/* Mobile Cart + User Buttons */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className="relative">
                                <NavButton icon={ShoppingCart} label="Cart" href="/cart" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                            <NavButton icon={User} label="Login" href="/login" />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

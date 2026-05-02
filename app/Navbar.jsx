"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            setIsAdmin(!!localStorage.getItem("adminToken"));
        };
        checkAuth();
        window.addEventListener("storage", checkAuth);
        window.addEventListener("admin-auth-change", checkAuth);
        return () => {
            window.removeEventListener("storage", checkAuth);
            window.removeEventListener("admin-auth-change", checkAuth);
        };
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        window.dispatchEvent(new Event("admin-auth-change"));
        router.push("/admin/login");
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="nav-container">
            {/* Logo Left - Decreased Size */}
            <div className="flex-shrink-0">
                <Link href="/">
                    <Image 
                        src="/images/logo.png" 
                        alt="Akshaya Vahini" 
                        width={100} 
                        height={40} 
                        className="object-contain" 
                        priority 
                    />
                </Link>
            </div>

            {/* Links Centered - Using Flex Grow for better spacing */}
            <div className="hidden lg:flex items-center justify-center flex-1 nav-links">
                <Link href="/" className={pathname === "/" ? "text-green-600" : ""}>Home</Link>
                <Link href="/register">How to Register</Link>
                <Link href="/About">About</Link>
                <Link href="#questions">Support</Link>
            </div>

            {/* Action Right */}
            <div className="hidden lg:block flex-shrink-0">
                {isAdmin ? (
                    <button onClick={handleLogout} className="signin-btn">
                        Logout
                    </button>
                ) : (
                    <Link href="/admin/login" className="signin-btn">
                        Sign In
                    </Link>
                )}
            </div>

            {/* Hamburger Icon - Mobile Only */}
            <div className="lg:hidden ml-auto">
                <button onClick={toggleMenu} className="text-brand-green text-2xl focus:outline-none">
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>
            </div>

            {/* Mobile Menu - Shown only when isMenuOpen is true */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-[70px] left-0 w-full bg-white shadow-xl z-50 py-6 px-6 flex flex-col gap-6 animate-fadeIn">
                    <Link href="/" onClick={() => setIsMenuOpen(false)} className={pathname === "/" ? "text-green-600 font-bold" : "text-slate-800 font-medium"}>Home</Link>
                    <Link href="/register" onClick={() => setIsMenuOpen(false)} className="text-slate-800 font-medium">How to Register</Link>
                    <Link href="/About" onClick={() => setIsMenuOpen(false)} className="text-slate-800 font-medium">About</Link>
                    <Link href="#questions" onClick={() => setIsMenuOpen(false)} className="text-slate-800 font-medium">Support</Link>
                    <div className="pt-4 border-t border-slate-100">
                        {isAdmin ? (
                            <button onClick={handleLogout} className="w-full signin-btn py-3">
                                Logout
                            </button>
                        ) : (
                            <Link href="/admin/login" onClick={() => setIsMenuOpen(false)} className="w-full signin-btn py-3 text-center block">
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}

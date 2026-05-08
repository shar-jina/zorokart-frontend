"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHome, faUserPlus, faInfoCircle, faHeadset, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";



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



    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        window.dispatchEvent(new Event("admin-auth-change"));
        router.push("/admin/login");
    };

    return (
        <>
            <nav className="nav-container">
                {/* Logo Left */}
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

                {/* Links Centered - Desktop Only */}
                <div className="hidden lg:flex items-center justify-center flex-1 nav-links">
                    <Link href="/" className={pathname === "/" ? "text-green-600" : ""}>Home</Link>
                    <Link href="/register">How to Register</Link>
                    <Link href="/About">About</Link>
                    <Link href="#questions">Support</Link>
                </div>

                {/* Action Right - Desktop Only */}
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


            </nav>

            {/* Mobile Bottom Navigation Bar - FIXED POSITION OUTSIDE NAV */}
            <div className="mobile-bottom-nav lg:hidden">
                <Link href="/" className={`mobile-nav-item ${pathname === "/" ? "active" : ""}`}>
                    <FontAwesomeIcon icon={faHome} />
                    <span>Home</span>
                </Link>
                <Link href="/register" className={`mobile-nav-item ${pathname === "/register" ? "active" : ""}`}>
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Register</span>
                </Link>
                <Link href="/About" className={`mobile-nav-item ${pathname === "/About" ? "active" : ""}`}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    <span>About</span>
                </Link>
                <Link href="#questions" className="mobile-nav-item">
                    <FontAwesomeIcon icon={faHeadset} />
                    <span>Support</span>
                </Link>
                {isAdmin ? (
                    <button onClick={handleLogout} className="mobile-nav-item">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span>Logout</span>
                    </button>
                ) : (
                    <Link href="/admin/login" className={`mobile-nav-item ${pathname === "/admin/login" ? "active" : ""}`}>
                        <FontAwesomeIcon icon={faUser} />
                        <span>Sign In</span>
                    </Link>
                )}


            </div>
        </>
    );
}

"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const buttonStyle = {
        position: 'fixed',
        bottom: '110px',
        left: '30px',
        width: '65px',
        height: '65px',
        backgroundColor: theme === 'light' ? '#1e293b' : '#42A147',
        color: 'white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        boxShadow: theme === 'light' 
            ? '0 10px 30px rgba(0, 0, 0, 0.3)' 
            : '0 10px 30px rgba(0, 0, 0, 0.8)',
        zIndex: 10001,
        border: theme === 'light' ? '4px solid #42A147' : '4px solid #ffffff',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        WebkitTapHighlightColor: 'transparent',
        animation: 'pulse-green 2s infinite'
    };




    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes pulse-green {
                    0% { box-shadow: 0 0 0 0 rgba(66, 161, 71, 0.7); }
                    70% { box-shadow: 0 0 0 15px rgba(66, 161, 71, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(66, 161, 71, 0); }
                }
            ` }} />
            <button
                onClick={toggleTheme}
                className="theme-toggle-btn"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
                <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
            </button>

        </>
    );
}




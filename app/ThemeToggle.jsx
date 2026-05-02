"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
            <style jsx>{`
                .theme-toggle {
                    position: fixed;
                    bottom: 24px;
                    left: 24px;
                    width: 56px;
                    height: 56px;
                    background-color: var(--foreground);
                    color: var(--background);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
                    z-index: 1000;
                    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s, color 0.3s;
                    border: none;
                    cursor: pointer;
                }

                .theme-toggle:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
                }

                @media (max-width: 768px) {
                    .theme-toggle {
                        bottom: 20px;
                        left: 20px;
                        width: 48px;
                        height: 48px;
                        font-size: 20px;
                    }
                }
            `}</style>
        </button>
    );
}

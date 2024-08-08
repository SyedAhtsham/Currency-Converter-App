import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false); // State for dark/light theme

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark', !isDarkMode); // Toggle dark mode class on body
    };

    return (
        <>
            <nav className="max-container mx-auto p-6 ">
                
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center font-semibold text-2xl">
                        <a href="#" className=''>
                            <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
                            Simple Convert
                        </a>
                    </div>

                    {/* Theme Toggle Button */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="px-4 py-2 rounded focus:outline-none"
                        >
                            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-xl" />
                        </button>

                        

                    </div>
                </div>

                
            </nav>
            
        </>
    );
}

export default Navbar;

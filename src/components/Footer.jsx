import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-8">
            <div className="max-container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                {/* Logo and Description */}
                <div className="mb-6 md:mb-0">
                    <div className="flex items-center font-semibold text-xl mb-3">
                        <a href="#">
                            <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
                            Simple Convert
                        </a>
                    </div>
                    <p className="mt-2 text-sm">
                        Get the latest rates for all major currencies worldwide.
                    </p>
                </div>

          

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a href="#" className="text-slate-400 hover:text-white">
                        {/* Replace with actual icons */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h4v4M2 20h4v4M12 8v12M16 12v8M8 16v4" />
                        </svg>
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h4v4M2 20h4v4M12 8v12M16 12v8M8 16v4" />
                        </svg>
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h4v4M2 20h4v4M12 8v12M16 12v8M8 16v4" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

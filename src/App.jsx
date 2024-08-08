import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo with Exchange Icon */}
        <div className="flex items-center text-white text-xl">
          <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
          <a href="#">Simple Convert</a>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">Conversion</a>
          <a href="#" className="text-gray-300 hover:text-white">Result</a>
          <a href="#" className="text-gray-300 hover:text-white">Settings</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden space-y-2 mt-4">
          <a href="#" className="block text-gray-300 hover:text-white">Home</a>
          <a href="#" className="block text-gray-300 hover:text-white">Conversion</a>
          <a href="#" className="block text-gray-300 hover:text-white">Result</a>
          <a href="#" className="block text-gray-300 hover:text-white">Settings</a>
        </div>
      )}
    </nav>
  );
}

export default App;

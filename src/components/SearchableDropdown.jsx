import React, { useState, useEffect, useRef } from 'react';
import { countriesCurrencies } from '../constants/index';

function SearchableDropdown({ selected, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownSelected, setDropdownSelected] = useState(selected);
    const dropdownRef = useRef(null);

    const filteredCurrencies = countriesCurrencies.filter((item) =>
        item.currency.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelect = (currency) => {
        setDropdownSelected(currency);
        onSelect(currency); // Notify parent component
        setIsOpen(false);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
                {dropdownSelected || "Choose currency"}
            </button>

            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-slate-300 rounded-md shadow-lg">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search currencies..."
                        className="w-full px-3 py-2 border-b border-slate-300 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />

                    <ul className="max-h-60 overflow-y-auto">
                        {filteredCurrencies.length > 0 ? (
                            filteredCurrencies.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSelect(item.currency)}
                                    className="px-3 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                                >
                                    {item.currency}
                                </li>
                            ))
                        ) : (
                            <li className="px-3 py-2 text-slate-500">No results found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SearchableDropdown;

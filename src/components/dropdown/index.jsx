// components/Dropdown.js

import React, { useState } from 'react';

const Dropdown = ({ isOpen, toggleDropdown, menuItems }) => {
    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="text-gray-700 focus:outline-none"
            >
                Services Dropdown
            </button>
            {isOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.path}
                            className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;

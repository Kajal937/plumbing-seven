import { menu } from '@/utils/data/notes';
import Link from 'next/link';
import React, { useState } from 'react';
import { LuPhoneCall } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu and close icons
import { useRouter } from 'next/router';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();
    const { slug } = router.query

    const handleChange = (e) => {
        router.push(`/service/${e.target.value}`)
    }

    return (
        <div className="w-full h-[60px] shadow-sm bg-white fixed top-0 z-50">
            <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="lg:w-16 sm:w-16">
                    <img src='https://plumbing-seven.vercel.app/logo.png' alt="Logo" className="h-12 sm:h-auto" />
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="sm:hidden text-black"
                >
                    {showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* Desktop menu */}
                <ul className="hidden sm:flex items-center gap-8 font-semibold">
                    {menu.map((value, index) => {
                        if (value?.children) {
                            return <select onChange={handleChange} value={'services'} name="cars" id="cars">
                                <option>Services</option>
                                <option value="professional-plumbing-repair">Professional Plumbing Repair</option>
                                <option value="heating-repair">Heating Repair</option>
                                <option value="professional-ac-repair">Professional AC/HVAC Repair</option>
                                <option value="drain-cleaning-&-repair-service">Drain Cleaning & Repair Service</option>
                            </select>
                        } else {
                            return (
                                <li key={index}>
                                    <Link href={value.path} passHref>
                                        <p className={`text-black ${value.name === 'Home' ? 'text-[#004E89] underline' : ''}`}>
                                            {value.name}
                                        </p>
                                    </Link>
                                </li>
                            )
                        }
                    }

                    )}
                    <li>
                        <button className="flex items-center bg-custom-blue text-[#004E89] px-4 py-2 rounded gap-x-2">
                            <LuPhoneCall className='text-black' />
                            CALL US
                        </button>
                    </li>
                </ul>
            </div>

            {/* Mobile menu */}
            <div className={`sm:hidden ${showMenu ? 'block' : 'hidden'} absolute top-12 w-full bg-white shadow-sm`}>
                <ul className="flex flex-col items-center gap-4 py-4">
                    {menu.map((value, index) => (
                        <li key={index}>
                            <Link href={value.path} passHref>
                                <p className={value.name === 'Home' ? 'text-[#004E89] underline' : 'text-black'}>
                                    {value.name}
                                </p>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button className="flex items-center bg-custom-blue text-[#004E89] px-4 py-2 rounded gap-x-2">
                            <LuPhoneCall className='text-black' />
                            CALL US
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

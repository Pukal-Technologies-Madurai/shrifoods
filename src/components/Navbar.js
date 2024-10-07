import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
    };

    return (
        <nav className={`flex items-center justify-between p-6 bg-primary text-white shadow-lg ${isScrolled ? "fixed top-0 left-0 w-full z-50" : ""}`}>
            <img
                src={logo}
                width={55}
                height={55}
                alt="Logo"
                className="rounded-full"
            />

            <div className="hidden md:flex space-x-8">
                <Link to="/" className="hover:text-gray-300 transition-colors duration-300 text-xl">
                    Home
                </Link>
                <Link to="/about" className="hover:text-gray-300 transition-colors duration-300 text-xl">
                    About
                </Link>
                <Link to="/products" className="hover:text-gray-300 transition-colors duration-300 text-xl">
                    Products
                </Link>
                <Link to="/facility" className="hover:text-gray-300 transition-colors duration-300 text-xl">
                    Facilities
                </Link>
                <Link to="/services" className="hover:text-gray-300 transition-colors duration-300 text-xl">
                    Services
                </Link>

                {/* Submenu */}
                <div className="relative">
                    <button onClick={toggleSubmenu} className="hover:text-gray-300 transition-colors duration-300 text-xl">
                        Contract
                    </button>

                    {submenuOpen && (
                        <div className="absolute left-0 mt-2 bg-gray-800 text-white p-3 rounded-lg shadow-lg">
                            <Link to="/chips" className="block px-4 py-2 hover:bg-gray-700 text-lg rounded transition-colors duration-300">
                                Chips Manufacturing
                            </Link>
                            <Link to="/energybar" className="block px-4 py-2 hover:bg-gray-700 text-lg rounded transition-colors duration-300">
                                Energy Bar Manufacturing
                            </Link>
                            <Link to="/readytocook" className="block px-4 py-2 hover:bg-gray-700 text-lg rounded transition-colors duration-300">
                                Ready to Cook Products Manufacturing
                            </Link>
                        </div>
                    )}
                </div>

                <Link to="/contact" className="hover:text-gray-300 transition-colors duration-300 text-xl">
                    Contact Us
                </Link>
            </div>

            <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-16 right-0 w-64 bg-gray-800 text-white p-4 rounded-lg shadow-lg md:hidden z-50">
                    <div className="flex flex-col space-y-4">
                        <Link to="/" className="hover:text-gray-300 transition-colors duration-300 text-lg" onClick={toggleMenu}>
                            Home
                        </Link>
                        <Link to="/about" className="hover:text-gray-300 transition-colors duration-300 text-lg" onClick={toggleMenu}>
                            About
                        </Link>
                        <Link to="/products" className="hover:text-gray-300 transition-colors duration-300 text-lg" onClick={toggleMenu}>
                            Products
                        </Link>
                        <Link to="/facility" className="hover:text-gray-300 transition-colors duration-300 text-lg" onClick={toggleMenu}>
                            Facilities
                        </Link>
                        <Link to="/services" className="hover:text-gray-300 transition-colors duration-300 text-lg" onClick={toggleMenu}>
                            Services
                        </Link>

                        {/* Submenu for Mobile */}
                        <button onClick={toggleSubmenu} className="hover:text-gray-300 transition-colors duration-300 text-lg">
                            Contract
                        </button>

                        {submenuOpen && (
                            <div className="flex flex-col space-y-2 pl-4">
                                <Link to="/chips" className="hover:text-gray-300 text-base" onClick={toggleMenu}>
                                    Chips Manufacturing
                                </Link>
                                <Link to="/energybar" className="hover:text-gray-300 text-base" onClick={toggleMenu}>
                                    Energy Bar Manufacturing
                                </Link>
                                <Link to="/readytocook" className="hover:text-gray-300 text-base" onClick={toggleMenu}>
                                    Ready to Cook Products Manufacturing
                                </Link>
                            </div>
                        )}

                        <Link to="/contact" className="hover:text-gray-300 transition-colors duration-300 text-lg" onClick={toggleMenu}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
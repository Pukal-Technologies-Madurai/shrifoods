import { Link } from "gatsby";
import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
    return (
        <footer className="bg-primary">
            <div className="w-full max-w-screen-xl mx-auto p-3 md:p-5 lg:px-7 lg:py-1 ">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 space-y-4 sm:space-y-0">

                    <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3">
                        <img src={logo} className="h-10 sm:h-12" alt="Logo" />
                        <span className="self-center text-xl md:text-2xl font-semibold text-white whitespace-nowrap">Shri Foods India</span>
                    </Link>

                    {/* Navigation Links */}
                    <ul className="flex flex-wrap items-center text-xs sm:text-sm md:text-base font-medium text-white">
                        <li className="me-4 md:me-6">
                            <Link to="/about" className="hover:underline">About</Link>
                        </li>
                        <li className="me-4 md:me-6">
                            <Link to="/products" className="hover:underline">Products</Link>
                        </li>
                        <li className="me-4 md:me-6">
                            <Link to="/facility" className="hover:underline">Facilities</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Optional Footer Line */}
                <hr className="my-3 border-gray-200 dark:border-gray-700 lg:my-4" />

                {/* Footer Credits */}
                <div className="text-center text-xs sm:text-sm md:text-base text-white">
                    © {new Date().getFullYear()}
                    <Link to="/" className="font-semibold hover:underline ml-1">Shri Foods India™</Link>.
                    All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
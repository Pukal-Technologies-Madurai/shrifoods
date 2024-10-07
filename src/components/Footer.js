import { Link } from "gatsby";
import React from "react";
import logo from "../images/logo.webp";

const Footer = () => {
    return (
        <footer className="bg-primary">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Shri Foods India</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white">
                        <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
                        <Link to="/products" className="hover:underline me-4 md:me-6">Products</Link>
                        <Link to="/facility" className="hover:underline me-4 md:me-6">Facilities</Link>
                        <Link to="/contact" className="hover:underline">Contact</Link>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-white sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <Link to="/" className="hover:underline">Shri Foods India™</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer
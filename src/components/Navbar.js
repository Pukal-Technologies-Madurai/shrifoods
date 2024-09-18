import { Link } from "gatsby";
import React, { useState } from "react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between p-4 bg-primary text-white">
            <img src={"./static/images/logo.webp"} width={50} height={50} alt="Logo" className="rounded-full" />
            <div className="hidden md:flex space-x-4">
                <Link to="/" className="hover:text-gray-300 text-2xl">Home</Link>
                <Link to="/about" className="hover:text-gray-300 text-2xl">About</Link>
                <Link to="/products" className="hover:text-gray-300 text-2xl">Products</Link>
                <Link to="/facility" className="hover:text-gray-300 text-2xl">Facility</Link>
                <Link to="/services" className="hover:text-gray-300 text-2xl">Services</Link>
                <Link to="/contact" className="hover:text-gray-300 text-2xl">Contact Us</Link>
            </div>
            <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute top-16 right-0 w-48 bg-gray-800 text-white md:hidden">
                    <div className="flex flex-col space-y-2 p-4">
                        <Link to="/" className="hover:text-gray-300 text-2xl" onClick={toggleMenu}>Home</Link>
                        <Link to="/about" className="hover:text-gray-300 text-2xl" onClick={toggleMenu}>About</Link>
                        <Link to="/products" className="hover:text-gray-300 text-2xl" onClick={toggleMenu}>Products</Link>
                        <Link to="/facility" className="hover:text-gray-300 text-2xl" onClick={toggleMenu}>Facility</Link>
                        <Link to="/services" className="hover:text-gray-300 text-2xl" onClick={toggleMenu}>Services</Link>
                        <Link to="/contact" className="hover:text-gray-300 text-2xl" onClick={toggleMenu}>Contact Us</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
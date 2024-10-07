import React from "react";
import Layout from "../components/Layout";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <Layout>
            <div className="bg-gradient-to-r from-orange-100 via-orange-50 to-yellow-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Contact Us</h1>
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">For enquiries, please provide the following details</h2>
                            <form className="space-y-4">
                                <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                                <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                                <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                                <input type="text" placeholder="Company" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                <input type="text" placeholder="Subject" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                                <textarea placeholder="Your message" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="4" required></textarea>
                                <button type="submit" className="w-full bg-orange-600 text-white p-3 rounded-md hover:bg-orange-700 transition duration-300 ease-in-out transform hover:-translate-y-1">Send Message</button>
                            </form>
                        </div>

                        <div className="lg:w-1/2 space-y-8">
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <MapPin className="text-blue-600 mr-4" />
                                        <div>
                                            <p className="font-semibold">Shri Foods India</p>
                                            <p>DP.NO.CS 8, SIDCO Industrial Estate,</p>
                                            <p>near Kappalur, Madurai,</p>
                                            <p>Tamil Nadu 625008</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="text-blue-600 mr-4" />
                                        <p>+91 90253 16142</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="text-blue-600 mr-4" />
                                        <a href="mailto:shrifoodsindia@gmail.com" className="text-blue-600 hover:underline">shrifoodsindia@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-4 h-80">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.1968784425735!2d78.0299635741444!3d9.833825675873847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00d15e9b826e2b%3A0x72d8eeda445cb1f3!2sShri%20Foods!5e0!3m2!1sen!2sin!4v1728039921892!5m2!1sen!2sin"
                                    frameBorder="0"
                                    className="w-full h-full rounded-md"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
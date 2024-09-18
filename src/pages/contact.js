import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
    return (
        <Layout>
            <div className="flex flex-col md:flex-row p-24">
                <div className="md:w-1/2 p-4">
                    <h2 className="text-2xl font-bold mb-4">For enquiries, please provide the following details:</h2>
                    <form className="space-y-4">
                        <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" required />
                        <input type="tel" placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded" required />
                        <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" required />
                        <input type="text" placeholder="Company" className="w-full p-2 border border-gray-300 rounded" />
                        <input type="text" placeholder="Subject" className="w-full p-2 border border-gray-300 rounded" required />
                        <textarea placeholder="Questions" className="w-full p-2 border border-gray-300 rounded" rows="4" required></textarea>
                        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Submit</button>
                    </form>
                </div>

                <div className="md:w-1/2 p-4 bg-gray-100 rounded-md">
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <p className="mb-2">Shri Foods India</p>
                    <p className="mb-2">DP.NO.CS 8, SIDCO Industrial Estate,</p>
                    <p className="mb-2">near Kappalur, Madurai,</p>
                    <p className="mb-2">Tamil Nadu 625008</p>
                    <p className="mb-2">Phone: +91 90253 16142</p>
                    <p>Email: <a href="mailto:shrifoodsindia@gmail.com" className="text-blue-600">shrifoodsindia@gmail.com</a></p>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
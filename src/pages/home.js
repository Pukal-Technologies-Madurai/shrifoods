import React from "react";
import { navigate } from "gatsby";


const Home = () => {
    return (
        <React.Fragment>
            <div className="h-screen w-full flex flex-col justify-center items-center text-white text-center px-4 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    Transforming Ideas into<br />Culinary Delights
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl">
                    Crafting Your Food Vision into Reality
                </p>
                <button
                    onClick={() => { navigate("/products") }}
                    className="bg-white text-orange-500 text-lg md:text-xl font-semibold py-3 px-8 rounded-full hover:bg-orange-100 transition duration-300"
                >
                    Explore Our Products
                </button>
            </div>

            <div className="h-[60vh] flex items-center justify-center bg-gradient-to-r from-orange-100 to-yellow-100">
                <div className="max-w-2xl w-full py-3 text-center mx-auto">
                    <h1 className="text-5xl font-bold text-orange-600 mb-6">About Us</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Welcome to Shri Food, Madurai – your ultimate destination for innovative and modernistic food product ideas brought to life. Nestled in the heart of the southern temple city of Madurai, a city celebrated not only for its rich historical tapestry but also for its traditional culinary delights, we stand as a beacon of culinary innovation.
                    </p>
                    <button onClick={() => { navigate("/about") }} className="bg-white text-orange-500 text-lg md:text-xl font-semibold py-3 px-8 rounded-full hover:bg-orange-200 transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center px-4 py-12 bg-gradient-to-r from-green-100 via-green-50 to-green-200">
                <div className="flex-1 mb-4 md:mb-0">
                    <img
                        src="../static/images/112.webp"
                        alt="Wholesome Food Products"
                        className="rounded-[50px] shadow-lg w-full"
                    />
                </div>

                <div className="flex-1 pl-4 md:pl-8 text-center">
                    <h1 className="text-4xl font-bold text-black mb-4">Farm to Fork</h1>
                    <p className="text-lg text-gray-700 mb-4">
                        Discover Our Wide Range of Wholesome Food Products
                    </p>
                    <p className="text-gray-500 mb-6">Ready to Eat | Ready to Cook</p>

                    <button onClick={() => { navigate("/products") }} className="bg-green-600 text-white text-lg px-6 py-3 rounded-full hover:bg-green-700 block mx-auto">
                        Explore Products
                    </button>
                </div>
            </div>

            <div className="relative h-[50vh] w-full overflow-hidden bg-gradient-to-r from-orange-100 to-yellow-100 p-12">
                {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <p className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight max-w-4xl">
                        State-of-the-Art Manufacturing Facility
                    </p>
                    <button onClick={() => { navigate("/facility") }} className="bg-white text-orange-500 text-lg md:text-xl font-semibold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300 shadow-lg">
                        Check our Facilities
                    </button>
                </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-200 to-green-600 py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-black">
                    <div className="flex flex-col items-center">
                        <p className="text-5xl font-bold">01</p>
                        <p className="text-lg mt-2">Manufacturing Facility</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-5xl font-bold">40+</p>
                        <p className="text-lg mt-2">Products</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-5xl font-bold">20+</p>
                        <p className="text-lg mt-2">Machinery</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-5xl font-bold">10k</p>
                        <p className="text-lg mt-2">Tones Produced</p>
                    </div>
                </div>
            </div>



            <div class="flex justify-center p-4">
                <iframe
                    src="https://www.instagram.com/shrifoodsindia/embed/"
                    class="w-full max-w-lg h-[563px] border-0"
                    scrolling="no"
                    allowtransparency="true">
                </iframe>
            </div>


        </React.Fragment>
    )
}

export default Home
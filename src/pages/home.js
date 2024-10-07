import React from "react";
import { navigate } from "gatsby";
import productBack from "../images/112.png";

const Home = () => {
    return (
        <React.Fragment>
            <div className="h-[390px] md:h-[350px] lg:h-[400px] xl:h-[450px] flex flex-col justify-center items-center text-white text-center background-img">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 [text-shadow:_3px_5px_8px_rgba(0,0,0,0.75)]">
                    Transforming Ideas into<br />Culinary Delights
                </h1>
                <p className="text-2xl md:text-2xl lg:text-2xl mb-8 max-w-3xl [text-shadow:_1px_2px_5px_rgba(0,0,0,0.95)]">
                    Crafting Your Food Vision into Reality
                </p>
                <button
                    onClick={() => { navigate("/products") }}
                    className="mt-4 bg-white text-orange-600 text-lg md:text-xl font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300"
                >
                    Explore Our Products
                </button>
            </div>

            <div className="h-[50vh] sm:h-[60vh] flex items-center justify-center bg-gradient-to-r from-orange-100 to-yellow-100 w-full px-4 sm:px-8 lg:px-16">
                <div className="max-w-4xl w-full text-center mx-auto">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
                        About Us
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-black mb-4 sm:mb-6">
                        Welcome to Shri Foods, your ultimate destination for innovative and modernistic food product ideas brought to life. Nestled in the heart of the southern temple city of Madurai, a city celebrated not only for its rich historical tapestry but also for its traditional culinary delights, we stand as a beacon of culinary innovation.
                    </p>
                    <button onClick={() => { navigate("/about") }} className="bg-white text-orange-500 text-sm sm:text-lg lg:text-xl font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-green-600 hover:text-white transition duration-300">
                        Read More
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center px-4 py-12 bg-gradient-to-r from-orange-100 to-yellow-100">
                <div className="w-full md:w-1/2 lg:w-2/5 ml-6 mb-6 md:mb-0">
                    <img
                        src={productBack}
                        alt="Wholesome Food Products"
                        className="rounded-[20px] md:rounded-[30px] lg:rounded-[50px] shadow-lg w-full"
                    />
                </div>

                <div className="w-full md:w-1/2 lg:w-3/5 pl-4 md:pl-8 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-orange-600 mb-4">
                        FARM TO FORK
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-700 mb-4">
                        Discover Our Wide Range of Wholesome Food Products
                    </p>
                    <p className="text-gray-500 mb-6 text-sm sm:text-base lg:text-lg">
                        Ready to Eat | Ready to Cook
                    </p>

                    <button
                        onClick={() => { navigate("/products") }}
                        className="bg-white text-orange-600 text-sm sm:text-lg lg:text-xl font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-green-600 transition duration-300"
                    >
                        Explore Products
                    </button>
                </div>
            </div>

            <div className="relative h-[50vh] w-full overflow-hidden bg-gradient-to-r from-orange-100 to-yellow-100 p-12">
                {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <p className="text-3xl md:text-5xl font-black text-orange-600 mb-6 leading-tight max-w-4xl">
                        State-of-the-Art Manufacturing Facility
                    </p>
                    <button onClick={() => { navigate("/facility") }} className="bg-white text-orange-500 text-lg md:text-xl font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 shadow-lg">
                        Check our Facilities
                    </button>
                </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-600 to-primary py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-black">
                    <div className="flex flex-col items-center">
                        <p className="text-5xl font-bold text-white">01</p>
                        <p className="text-lg mt-2 text-white">Manufacturing Facility</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-5xl font-bold text-white">20+</p>
                        <p className="text-lg mt-2 text-white">Machinery</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-5xl font-bold text-white">40+</p>
                        <p className="text-lg mt-2 text-white">Products</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-5xl font-bold text-white">10k</p>
                        <p className="text-lg mt-2 text-white">Tones Produced</p>
                    </div>
                </div>
            </div>



            <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-r from-orange-100 to-yellow-100 p-4">
                <div className="relative w-full max-w-screen-lg">
                    <iframe
                        src="https://www.instagram.com/shrifoodsindia/embed/"
                        className="w-full h-[500px] border-0"
                        scrolling="no"
                        allowTransparency="true"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
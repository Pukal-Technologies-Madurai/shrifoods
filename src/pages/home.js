import React from "react";
import { navigate } from "gatsby";
import CountUp from "react-countup";
import productBack from "../images/112.png";
import slide1 from "../images/slide-1.png";
import slide2 from "../images/slide-2.png";
import slide3 from "../images/slide-3.png";
import HomeImageSlider from "../components/HomeImageSlider";

const Home = () => {
  const AnimatedStat = ({ end, duration = 4, suffix = "", text }) => (
    <div className="flex flex-col items-center">
      <p className="text-4xl md:text-5xl font-bold">
        <CountUp end={end} duration={duration} suffix={suffix} />
      </p>
      <p className="text-base md:text-lg mt-2">{text}</p>
    </div>
  );

  return (
    <React.Fragment>
      <HomeImageSlider images={[slide1, slide2, slide3]} />

      <div className="py-10 md:py-12 bg-gradient-to-br from-orange-50 to-yellow-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 mb-6">
            ABOUT US
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-black mb-8">
            Welcome to Shri Foods, your ultimate destination for innovative and
            modernistic food product ideas brought to life. Nestled in the heart
            of the southern temple city of Madurai, a city celebrated not only
            for its rich historical tapestry but also for its traditional
            culinary delights, we stand as a beacon of culinary innovation.
          </p>
          <button
            onClick={() => {
              navigate("/about");
            }}
            className="bg-white text-orange-500 text-base md:text-lg font-semibold py-3 px-8 rounded-full hover:bg-green-600 hover:text-white transition duration-300"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="py-10 md:py-12 bg-gradient-to-br from-orange-50 to-yellow-100">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 mx-auto max-w-screen-lg">
          <div className="w-full lg:w-1/2 max-w-sm lg:max-w-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-300 rounded-full filter blur-3xl opacity-20 transform -rotate-6"></div>
              <img
                src={productBack}
                alt="Wholesome Food Products"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-orange-600 mb-6">
              FARM TO FORK
            </h2>
            <p className="text-xl md:text-2xl font-bold text-gray-700 mb-4">
              Discover Our Wide Range of <br />
              Wholesome Food Products
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Ready to Eat <span className="mx-2">|</span> Ready to Cook
            </p>
            <button
              onClick={() => {
                navigate("/products");
              }}
              className="bg-white text-orange-500 text-base md:text-lg font-semibold py-3 px-8 rounded-full shadow hover:bg-green-600 hover:text-white transition duration-300 transform hover:scale-105"
            >
              Explore Products
            </button>
          </div>
        </div>
      </div>

      <div className="relative py-10 md:py-12 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-orange-600 mb-6">
            {`State-of-the-Art Manufacturing Facility`.toUpperCase()}
          </h2>
          <button
            onClick={() => {
              navigate("/facility");
            }}
            className="bg-white text-orange-500 text-base md:text-lg font-semibold py-3 px-8 rounded-full hover:bg-green-600 hover:text-white transition duration-300"
          >
            Check our Facilities
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-600 to-orange-800 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <AnimatedStat end={1} suffix="" text="Manufacturing Facility" />
          <AnimatedStat end={20} suffix="+" text="Machinery" />
          <AnimatedStat end={40} suffix="+" text="Products" />
          <AnimatedStat end={10} suffix="k" text="Tonnes Produced" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

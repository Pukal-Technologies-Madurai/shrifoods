import React from "react";
import Layout from "../components/Layout";
import {
  Play,
  Box,
  Settings,
  Building2,
  Navigation,
  PlaneTakeoff,
} from "lucide-react";

const TimelineEvent = ({ year, events, isLeft, icon: Icon }) => (
  <div
    className={`mb-12 flex flex-col md:flex-row justify-between items-center w-full ${
      isLeft ? "md:flex-row-reverse" : ""
    }`}
  >
    <div className="order-1 md:w-5/12"></div>

    {/* Year Circle */}
    <div className="z-20 flex items-center justify-center order-1 bg-orange-500 shadow-lg w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full my-4">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
        {year}
      </h1>
    </div>

    {/* Event Card */}
    <div
      className={`order-1 bg-white border border-gray-200 rounded-lg shadow-md w-full md:w-5/12 px-6 py-4 ${
        isLeft ? "md:text-right" : ""
      }`}
    >
      <div className="flex items-start">
        {/* Icon Section */}
        <div className={`flex-shrink-0 ${isLeft ? "md:ml-4" : "md:mr-0 mr-0"}`}>
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-orange-500" />
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h3 className="font-bold text-left ml-4 text-sm sm:text-base md:text-lg">
            {events[0]}
          </h3>
          {events.slice(1).map((event, index) => (
            <p
              key={index}
              className="text-left ml-4 text-sm sm:text-base text-gray-700 leading-relaxed mt-2"
            >
              {event}
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const about = () => {
  const timelineEvents = [
    {
      year: 2024,
      events: [
        "03 Brands Launched",
        "A timeline is a graphical representation on which important events are marked.",
      ],
      icon: PlaneTakeoff,
    },
    {
      year: 2023,
      events: [
        "Launched 02 Brands for popped grains & Millet puffs - Mobite, Cerelia",
      ],
      icon: Play,
    },
    {
      year: 2022,
      events: ["Contract manufacturing, Expanded SKUs"],
      icon: Settings,
    },
    {
      year: 2021,
      events: ["Expanded to New Facility", "Commercialized popped grains"],
      icon: Building2,
    },
    {
      year: 2020,
      events: [
        "New Product Development - Popped grains & extrusion puffing",
        "Distribution of WoW across Tamil Nadu",
      ],
      icon: PlaneTakeoff,
    },
    {
      year: 2019,
      events: ["Started commercial production", "Launched WoW Brand"],
      icon: Play,
    },
    { year: 2018, events: ["Founded in Madurai, Tamil Nadu"], icon: Building2 },
  ];

  return (
    <Layout>
      <div className="py-8 md:py-10 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="border-b-2 border-orange-600 p-2 md:p-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-orange-600 text-center">
            OUR VISION
          </h2>
          <p className="text-center text-base md:text-lg lg:text-xl text-black leading-relaxed max-w-3xl mx-auto">
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-600">
              "
            </span>
            To become India's leading provider of innovative, healthy and
            delicious Snack products ensure quality, Sustainability and Customer
            Satisfaction.
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-600">
              "
            </span>
          </p>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="border-b-2 border-orange-600 p-2 md:p-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-orange-600 text-center -mt-8">
            OUR MISSION
          </h2>
          <p className="text-center text-base md:text-lg lg:text-xl text-black leading-relaxed max-w-3xl mx-auto">
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-600">
              "
            </span>
            Set the benchmark in delivering premium, nutritious and innovative
            value added millet that satisfy diverse Consumers across India.
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-600">
              "
            </span>
          </p>
        </div>
      </div>

      <div className="py-3 md:py-4 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-100 to-yellow-100">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-orange-600 text-center">
          OUR STORY
        </h2>
        <div className="space-y-4 md:space-y-6 text-black leading-relaxed max-w-4xl mx-auto text-base md:text-lg">
          <p className="text-justify">
            Welcome to Shri Foods, your ultimate destination for innovative and
            modernistic food product ideas brought to life. Nestled in the heart
            of the southern temple city of Madurai, a city celebrated not only
            for its rich historical tapestry but also for its traditional
            culinary delights, we stand as a beacon of culinary innovation.
          </p>
          <p className="text-justify">
            Madurai's reputation for delectable cuisine made from fresh
            ingredients is now entering a new era of globalized tastes, and Shri
            Foods is at the forefront of this transformation. Founded in Tamil
            Nadu, India, with a profound passion for blending traditional food
            practices with the trends of the modern food industry, our journey
            began only a few years ago but has quickly made a significant
            impact.
          </p>
          <p className="text-justify">
            At Shri Foods, we pride ourselves on producing the highest quality
            extruder snacks and puffed snacks. Our select range of crops
            includes corn, Value-added millets, cereals, wheat, barley, jowar,
            and pearl millet, carefully chosen to ensure both health and
            flavour. Renowned as one of the leading manufacturers of healthy and
            tasty snacks in South Tamil Nadu, we are dedicated to offering our
            customers the best of both worlds: the rich heritage of traditional
            grains and the innovative appeal of modern snack foods.
          </p>
          <p className="text-justify">
            Join us in this delicious journey where tradition meets innovation,
            and every bite is a testament to our love and dedication to our
            customers.
          </p>
        </div>
      </div>

      <div className="py-4 md:py-8 px-4 md:px-8 bg-gradient-to-r from-orange-100 to-yellow-100">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-orange-600">
          OUR JOURNEY
        </h1>
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="relative wrap overflow-hidden p-8 md:p-12">
            <div
              className="border-2 absolute border-opacity-20 border-orange-500 h-full hidden md:block"
              style={{ left: "50%" }}
            ></div>
            <div
              className="border-2 absolute border-opacity-20 border-orange-500 h-full hidden md:block"
              style={{ left: "50%" }}
            ></div>
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={index}
                year={event.year}
                events={event.events}
                isLeft={index % 2 === 0}
                icon={event.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default about;

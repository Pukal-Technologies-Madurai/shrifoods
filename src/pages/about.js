import React from "react";
import Layout from "../components/Layout";
import { Play, Package, Settings, Building2, Truck } from "lucide-react";

const TimelineEvent = ({ year, events, isLeft, icon: Icon }) => (
    <div className={`mb-12 flex justify-between items-center w-full ${isLeft ? "flex-row-reverse" : ""}`}>
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center justify-center order-1 bg-green-500 shadow-lg w-16 h-16 rounded-full">
            <h1 className="text-xl font-bold text-white">{year}</h1>
        </div>
        <div className={`order-1 bg-white border border-gray-200 rounded-lg shadow-md w-5/12 px-6 py-4 ${isLeft ? "text-right" : ""}`}>
            <div className={`flex items-center ${isLeft ? "justify-end" : ""} mb-3`}>
                <Icon className={`w-8 h-8 ${isLeft ? "ml-5" : "mr-5"} text-green-500`} />
                <h3 className="font-bold text-lg">{events[0]}</h3>
            </div>
            {events.slice(1).map((event, index) => (
                <p key={index} className="text-sm text-gray-700 leading-relaxed">{event}</p>
            ))}
        </div>
    </div>
);

const about = () => {
    const timelineEvents = [
        { year: 2024, events: ["03 Brands Launched", "A timeline is a graphical representation on which important events are marked."], icon: Play },
        { year: 2023, events: ["Launched 02 Brands for popped grains & Millet puffs- Mobite, cerelia"], icon: Package },
        { year: 2022, events: ["Contract manufacturing, Expanded SKUs"], icon: Settings },
        { year: 2021, events: ["Expanded to New Facility", "Commercialized popped grains"], icon: Building2 },
        { year: 2020, events: ["New Product Development- Popped grains & extrusion Puffing", "Distribution of WoW across tamil nadu"], icon: Truck },
        { year: 2019, events: ["Started commercial production", "Launched WoW Brand"], icon: Play },
        { year: 2018, events: ["Founded in Madurai, Tamil Nadu"], icon: Building2 },
    ]

    return (
        <Layout>
            <div className="py-10 px-8 md:px-16 bg-gradient-to-r from-orange-100 via-orange-50 to-yellow-100">
                <div className="border-2 border-primary p-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-600 text-center">Our Vision</h2>
                    <p className="text-center text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        <span className="text-2xl md:text-3xl font-bold text-orange-600">“</span>
                        To set the benchmark in delivering premium, nutritious, and innovative value-added millet snack products that satisfy diverse consumers across India.
                        <span className="text-2xl md:text-3xl font-bold text-orange-600">”</span>
                    </p>
                </div>
            </div>

            <div className="py-10 px-8 md:px-16 bg-gradient-to-r from-orange-100 via-orange-50 to-yellow-100">
                <div className="border-2 border-primary p-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-600 text-center">Our Mission</h2>
                    <p className="text-center text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        <span className="text-2xl md:text-3xl font-bold text-orange-600">“</span>
                        To set the benchmark in delivering premium, nutritious, and innovative value-added millet snack products that satisfy diverse consumers across
                        <span className="text-2xl md:text-3xl font-bold text-orange-600">”</span>
                    </p>
                </div>
            </div>

            <div className="py-16 px-8 md:px-16 bg-gradient-to-r from-orange-100 to-yellow-100">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-600 text-center">Our Story</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    <p>
                        Welcome to Shri Food, Madurai – your ultimate destination for innovative and modernistic food product ideas brought to life. Nestled in the heart of the southern temple city of Madurai, a city celebrated not only for its rich historical tapestry but also for its traditional culinary delights, we stand as a beacon of culinary innovation.
                    </p>
                    <p>
                        Madurai's reputation for delectable cuisine made from fresh ingredients is now entering a new era of globalized tastes, and Shri Food is at the forefront of this transformation. Founded in Tamil Nadu, India, with a profound passion for blending traditional food practices with the trends of the modern food industry, our journey began only a few years ago but has quickly made a significant impact.
                    </p>
                    <p>
                        At Shri Food, we pride ourselves on producing the highest quality extruder snacks and puffed snacks. Our select range of crops includes corn, millets, cereals, wheat, barley, jowar, and pearl millet, carefully chosen to ensure both health and flavor. Renowned as one of the leading manufacturers of healthy and tasty snacks in South Tamil Nadu, we are dedicated to offering our customers the best of both worlds: the rich heritage of traditional grains and the innovative appeal of modern snack foods.
                    </p>
                    <p>
                        Join us in this delicious journey where tradition meets innovation, and every bite is a testament to our love and dedication to our customers.
                    </p>
                </div>
            </div>

            <div className="mx-auto py-16 px-4 md:px-8 bg-gradient-to-r from-orange-100 via-orange-50 to-yellow-100">
                <h1 className="text-4xl font-bold mb-12 text-center text-green-600">Our Journey</h1>
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2 absolute border-opacity-20 border-green-500 h-full" style={{ left: '50%' }}></div>
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
        </Layout>
    )
}

export default about
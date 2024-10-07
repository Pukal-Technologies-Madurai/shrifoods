import React, { useState } from "react";
import Layout from "../components/Layout";
import Incubator from "../images/facility/Incubator.png";
import Distilled from "../images/facility/Distilled Water Maker.png";
import Muffle from "../images/facility/Muffle Furnace.png";
import Hot from "../images/facility/Hot Air Oven.png";
import Technico from "../images/facility/Technico Starch Test.png";
import Dedicator from "../images/facility/Dedicator.png";
import HotPlate from "../images/facility/Hot Plate.png";
import ShelfLife from "../images/facility/Shelf Life Chamber.png";
import DigitalpH from "../images/facility/Digital pH Meter.png";
import Microwave from "../images/facility/Microwave.png";
import Other from "../images/facility/Other Equipment.png";

import Pulverizer from "../images/facility/Pulverizer.png";
import Chocolate from "../images/facility/Chocolate Melter.png";
import CoolingUnit from "../images/facility/Chocolate Cooling Unit.png";
import AirPuff from "../images/facility/Air Puff Gun.png";

const TabContent = ({ items }) => (
    <div className="flex flex-col space-y-12">
        {items.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
                {/* Left side: Video or Image */}
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    {item.videoSrc ? (
                        <iframe
                            src={item.videoSrc}
                            frameBorder="0"
                            className="w-full h-64 md:h-96 rounded-lg shadow-lg"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    ) : item.imageSrc ? (
                        <img
                            src={item.imageSrc}
                            alt={item.title}
                            className="w-full h-64 rounded-lg shadow-lg object-contain"
                        />
                    ) : null}
                </div>
                {/* Right side: Title and Description */}
                <div className="w-full md:w-1/2 px-4 md:px-8">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                        {item.title}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg text-justify">
                        {item.description}
                    </p>
                </div>
            </div>
        ))}
    </div>
);

const Facility = () => {
    const [activeTab, setActiveTab] = useState("production");

    const tabs = {
        production: {
            items: [
                {
                    title: "Twin Screw Extruder",
                    description: "A Twin Screw Extruder is a versatile and efficient piece of machinery widely used in the food processing industry. It features two intermeshing screws mounted on parallel shafts within a closed barrel. This design allows for exceptional mixing, cooking, and forming capabilities. The twin-screw mechanism provides precise control over processing conditions, making it ideal for producing a wide range of food products with consistent texture and quality. Its ability to handle various ingredients and formulations, from doughs to pastes, makes it a key tool in creating innovative and high-quality food products.",
                    videoSrc: "https://www.youtube.com/embed/vPx8l9ImFEw?autoplay=1&loop=1&mute=1&playlist=vPx8l9ImFEw"
                },
                {
                    title: "Core Filler",
                    description: "A core filler is a specialized piece of equipment used in food production to inject fillings into snacks and confections. It precisely inserts a desired filling, such as cream, jam, or chocolate, into the center of products, ensuring consistent quality and taste. This machine is essential for creating filled treats that surprise and delight with every bite.",
                    videoSrc: "https://www.youtube.com/embed/A1uTZBDzb9w?autoplay=1&loop=1&mute=1&playlist=A1uTZBDzb9w"
                },
                {
                    title: "Dryer",
                    description: "A dryer is an essential equipment designed to remove moisture from various products, ensuring extended shelf life and preserving quality. It works by circulating hot air or applying direct heat, effectively reducing moisture content while retaining flavor and nutritional value. This process is vital for producing a diverse range of dried products, enhancing their safety and longevity.",
                    videoSrc: "https://www.youtube.com/embed/e7qSGsTdzUE?autoplay=1&loop=1&mute=1&playlist=e7qSGsTdzUE"
                },
                {
                    title: "Seasoning",
                    description: "A seasoning machine is designed for uniformly applying flavorings, spices, or coatings to food products. It ensures even distribution and adherence of seasonings, enhancing taste and appearance. This machine is key in food processing for achieving consistent flavor profiles across batches.",
                    videoSrc: "https://www.youtube.com/embed/ILJTRR8W9oI?autoplay=1&loop=1&mute=1&playlist=ILJTRR8W9oI"
                },
                {
                    title: "Vertical Packing",
                    description: "A vertical packaging machine is a highly efficient device used for the automated packaging of a wide range of products. It operates by forming, filling, and sealing packages from a single roll of film, ensuring speed and precision. Ideal for packing food items, pharmaceuticals, and other goods, this machine is renowned for its accuracy, reliability, and ability to handle various packaging materials and sizes",
                    videoSrc: "https://www.youtube.com/embed/cf4QOo2zuIA?autoplay=1&loop=1&mute=1&playlist=cf4QOo2zuIA"
                },
                {
                    title: "Cereal Bar Making",
                    description: "Cereal bar making involves a process of blending various ingredients like grains, nuts, fruits, and sweeteners, and then pressing them into a bar shape. This method often includes baking or chilling to set the bars. It's a popular way to create nutritious, portable snacks that offer a balance of flavors and textures, catering to health-conscious consumers seeking convenient eating options.",
                    videoSrc: "https://www.youtube.com/embed/lj117trJ2ao?autoplay=1&loop=1&mute=1&playlist=lj117trJ2ao"
                },
                {
                    title: "Chocolate Enrobing",
                    description: "Chocolate enrobing is a process where confections, such as candies, fruits, nuts, or cookies, are coated in a smooth layer of chocolate. This technique involves passing the items through a curtain of tempered chocolate, ensuring a uniform and glossy finish. Chocolate enrobing not only enhances the taste and texture of the treats but also gives them an attractive, professional appearance, making it a favorite in confectionery production.",
                    videoSrc: "https://www.youtube.com/embed/nMKMA1BaO04?autoplay=1&loop=1&mute=1&playlist=nMKMA1BaO04"
                },
                {
                    title: "Horizontal Packing",
                    description: "Horizontal packing is a packaging process typically used for solid, irregularly shaped, or delicate products. In this method, items are placed on a conveyor belt and wrapped in film as they move horizontally through the machine. This technique provides a secure, efficient way to package a wide range of products, ensuring protection and maintaining their integrity during handling and transport.",
                    videoSrc: "https://www.youtube.com/embed/fk33OYTGjxo?autoplay=1&loop=1&mute=1&playlist=fk33OYTGjxo"
                },
                {
                    title: "Rice Popper",
                    description: "A rice popper is a specialized machine used to create puffed rice, a light and airy snack. It works by rapidly heating rice kernels under high pressure, causing them to expand and 'pop'. This process transforms the rice into a crunchy, easily digestible form, making it a popular ingredient in cereals, snacks, and traditional dishes. The rice popper is valued for its efficiency and ability to produce a consistently high-quality product.",
                    videoSrc: "https://www.youtube.com/embed/S8r3ZgrQogI?autoplay=1&loop=1&mute=1&playlist=S8r3ZgrQogI"
                },
                {
                    title: "Air Puff Gun",
                    description: "An Air Puff Gun is a specialized tool used in the production of puffed grain snacks. It operates by rapidly heating and pressurizing grains like rice, wheat, or corn, and then releasing them into a lower pressure environment. This sudden change causes the grains to expand or 'puff', creating light, airy snacks. The Air Puff Gun is known for its precision and ability to produce uniformly puffed grains, making it essential for creating a variety of popular snack foods.",
                    imageSrc: AirPuff
                },
                {
                    title: "Blender",
                    description: "A blender is a versatile kitchen appliance used to mix, puree, or emulsify food and other substances. It consists of a blending jar with a rotating metal blade at the bottom, powered by an electric motor in the base. Commonly used for making smoothies, soups, sauces, and other blended food items, blenders are valued for their ability to create smooth, consistent textures quickly and efficiently.",
                    videoSrc: "https://www.youtube.com/embed/zlDzoKX3GLY??autoplay=1&loop=1&mute=1&playlist=zlDzoKX3GLY"
                },
                {
                    title: "Chocolate Cooling Unit",
                    description: "A Chocolate Cooling Unit is a specialized device used in the chocolate production process to solidify and set chocolate after it has been tempered and molded. This unit carefully controls the temperature and environment to ensure the chocolate cools uniformly, preventing the formation of undesirable crystals and preserving the chocolate's smooth texture and glossy appearance. It's an essential tool in achieving the perfect finish and snap in chocolate products.",
                    imageSrc: CoolingUnit
                },
                {
                    title: "Chocolate Melter",
                    description: "A Chocolate Melter is a key piece of equipment in chocolate production, designed to gently and evenly melt chocolate to a smooth, workable consistency. It carefully controls the temperature to avoid overheating, ensuring the chocolate retains its flavor and quality. This tool is essential for chocolatiers and confectionery manufacturers, allowing for precise handling and processing of chocolate for various culinary applications.",
                    imageSrc: Chocolate
                },
                {
                    title: "Pulverizer",
                    description: "A pulverizer is to grind, crush, or pulverize various materials into smaller, uniform-sized particles. Commonly used in the food industry, it efficiently processes grains, spices, and other dry ingredients into powders or fine granules. This equipment is essential for achieving consistent texture and size in food products, enhancing their quality and suitability for various culinary applications.",
                    imageSrc: Pulverizer
                },
            ]
        },
        lab: {
            items: [
                {
                    title: "Incubator",
                    description: "Our incubator is a key tool for culturing and examining microorganisms in food samples, playing a vital role in microbiological testing and food safety assurance.",
                    imageSrc: Incubator
                },
                {
                    title: "Distilled Water Maker",
                    description: "This apparatus guarantees the production of pure water, essential for creating precise and contamination-free solutions in our food analysis.",
                    imageSrc: Distilled
                },
                {
                    title: "Muffle Furnace",
                    description: "Ideal for determining the ash content in food products, our muffle furnace is indispensable for high-temperature applications in food analysis.",
                    imageSrc: Muffle
                },
                {
                    title: "Hot Air Oven",
                    description: "Sterilizing glassware and utensils, our hot air oven ensures a contamination-free environment, critical for accurate and reliable testing.",
                    imageSrc: Hot
                },
                {
                    title: "Technico Starch Test",
                    description: "Specialized in measuring starch content, this method is fundamental for our quality control processes and nutritional labeling of food products.",
                    imageSrc: Technico
                },
                {
                    title: "Dedicator",
                    description: "This equipment maintains the optimal humidity level within our lab, safeguarding our sensitive equipment and samples.",
                    imageSrc: Dedicator
                },
                {
                    title: "Hot Plate",
                    description: "versatile hot plate is crucial for conducting various experiments that require controlled and consistent heating.",
                    imageSrc: HotPlate
                },
                {
                    title: "Shelf Life Chamber",
                    description: "This chamber is vital for simulating different environmental conditions, helping us test and determine the shelf life of food products under various scenarios.",
                    imageSrc: ShelfLife
                },
                {
                    title: "Digital pH Meter",
                    description: "Digital pH meter is key for measuring the acidity or alkalinity of food products, playing a critical role in our quality control and product development.",
                    imageSrc: DigitalpH
                },
                {
                    title: "Microwave",
                    description: "Aiding in quick heating and thawing of samples, our microwave oven is also used for specific experimental cooking processes.",
                    imageSrc: Microwave
                },
                {
                    title: "Other Equipment",
                    description: "In addition to our specialized lab equipment, our food laboratory is also equipped with a variety of essential tools that are vital for our research and daily operations. This includes an efficient Induction Stove, the highly precise Weighing Machine Micron No.2, and an array of smaller, yet indispensable, equipment. From measuring instruments to mixing tools, each item plays a significant role in enhancing our capability to conduct thorough food science experiments and analysis.",
                    imageSrc: Other
                },
            ]
        }
    }

    return (
        <Layout>
            <div className="bg-gradient-to-r from-orange-100 via-orange-50 to-yellow-100 mx-auto px-6 md:px-12 py-12">
                <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
                    Our Facilities
                </h1>
                {/* Tabs */}
                <div className="mb-8">
                    <div className="flex justify-center">
                        <nav className="flex space-x-4 md:space-x-8">
                            <button
                                className={`py-2 px-6 text-lg md:text-xl font-semibold rounded-lg focus:outline-none transition ${activeTab === "production"
                                    ? "bg-primary text-white shadow-lg"
                                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                                    }`}
                                onClick={() => setActiveTab("production")}
                            >
                                Production Equipment
                            </button>
                            <button
                                className={`py-2 px-6 text-lg md:text-xl font-semibold rounded-lg focus:outline-none transition ${activeTab === "lab"
                                    ? "bg-primary text-white shadow-lg"
                                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                                    }`}
                                onClick={() => setActiveTab("lab")}
                            >
                                Lab Equipment
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Tab Content */}
                <TabContent {...tabs[activeTab]} />
            </div>
        </Layout>
    )
}

export default Facility
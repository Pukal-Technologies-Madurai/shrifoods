import React, { useState } from "react";
import Layout from "../components/Layout";

import Core1 from "../images/Pop/popped-wheat.png";
import Core2 from "../images/Pop/popped-barley.png";
import Core3 from "../images/Pop/popped-pearl-millet.png";
import Core4 from "../images/Pop/other-millets.png";
import Core5 from "../images/core/Core Filled snacks.png";

import Bar1 from "../images/core/Protein Bars.png";
import Bar2 from "../images/core/Cereal Bars.png";
import Bar3 from "../images/core/energy bar.png";
import Bar4 from "../images/core/Snack Bar.png";

import Millet1 from "../images/Millet/pearl-millet-puff.png";
import Millet2 from "../images/Millet/sorghum-puff.png";
import Millet3 from "../images/Millet/pearl-millet-puffs.png";
import Millet4 from "../images/Millet/Finger Millet-puff.png";
import Millet5 from "../images/Millet/Multi Millet Puff.png";

import Corn1 from "../images/ring/Rings Puff.png";
import Corn2 from "../images/ring/Corn Puff.png";
import Corn3 from "../images/ring/Stick Puff.png";
import Corn4 from "../images/ring/Wave Puff.png";
import Corn5 from "../images/ring/Veg Biryani Puff.png";
import Corn6 from "../images/ring/Surprise Puff.png";

const TabContent = ({ items }) => (
    <div>
        {items.map((item, index) => (
            <div key={index} className="mb-8 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    {item.videoSrc ? (
                        <iframe
                            src={item.videoSrc}
                            frameBorder="0"
                            className="w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-lg"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    ) : item.imageSrc ? (
                        <img
                            src={item.imageSrc}
                            alt={item.title}
                            className="w-full h-56 sm:h-72 md:h-96 rounded-lg shadow-lg object-cover"
                        />
                    ) : null}
                </div>
                <div className="w-full md:w-1/2 px-4">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-base sm:text-lg text-justify mb-4">
                        {item.description}
                    </p>
                    <h4 className="text-gray-700 font-medium">Flavor: {item.flavor}</h4>
                    <h4 className="text-gray-700 font-medium">Nutritional Profile: {item.nutritional}</h4>
                </div>
            </div>
        ))}
    </div>
);


const Products = () => {
    const [activeTab, setActiveTab] = useState("popped");

    const tabs = {
        popped: {
            items: [
                {
                    title: "Popped Wheat",
                    description: "Popped wheat is a delightful snack that combines a light, crunchy texture with a rich, nutty flavor. Made from whole wheat grains that are gently heated until they pop, this snack is not only delicious but also packed with fiber and essential nutrients. It's an ideal choice for those seeking a wholesome, satisfying treat that's both nutritious and flavorful",
                    flavor: "Nutty and crunchy.",
                    nutritional: "High in fiber, vitamins, and minerals like iron and magnesium.",
                    imageSrc: Core1
                },
                {
                    title: "Popped Barley",
                    description: "Experience the unique taste and texture of popped barley. This wholesome snack is created by heating whole barley grains until they burst, resulting in a light, airy crunch with a distinct earthy, nutty flavor. High in fiber and packed with nutrients, popped barley is a perfect snack for health-conscious individuals who don't want to compromise on taste or texture.",
                    flavor: "Nutty and crunchy.",
                    nutritional: "High in fiber, vitamins, and minerals like iron and magnesium.",
                    imageSrc: Core2
                },
                {
                    title: "Popped Pearl Millet (Bajra)",
                    description: "Popped Pearl Millet is a nutritious and delightful snack, offering a unique combination of a light, airy texture with a mildly sweet and earthy flavor. Made from whole pearl millet grains, known for their rich nutrients profile, these grains are carefully heated until they pop. This process not only enhances their natural flavor but also preserves their high fiber, protein, and antioxidant content. Popped pearl millet is an excellent choice for those seeking a wholesome snack that's both gluten-free and packed with health benefits, making it a perfect fit for a modern, health-conscious lifestyle",
                    flavor: "Nutty and crunchy.",
                    nutritional: "High in fiber, vitamins, and minerals like iron and magnesium.",
                    imageSrc: Core3
                },
                {
                    title: "Other All Millets",
                    description: "Popped millets is a delightful snack that combines a light, crunchy texture with a rich, nutty flavor. Made from whole grains that are gently heated until they pop, this snack is not only delicious but also packed with fiber and essential nutrients. It's an ideal choice for those seeking a wholesome, satisfying treat that's both nutritious and flavorful",
                    flavor: "Nutty and crunchy.",
                    nutritional: "High in fiber, vitamins, and minerals like iron and magnesium.",
                    imageSrc: Core4
                },
            ]
        },
        millet: {
            items: [
                {
                    title: "Pearl Millet Puff (Bajra)",
                    description: "Extruded with finesse using pearl millet flour and a blend of premium grains, these puffs redefine snacking delight. With the ability to take multiple shapes during extrusion, our Bajra Puff offers a playful and customizable experience. Immerse yourself in a world of lightness and crunch, each bite a fusion of flavor and nutrients-rich goodness.",
                    imageSrc: Millet1
                },
                {
                    title: "Sorghum Puff (Jowar)",
                    description: "Extruded with precision using premium jowar (sorghum) flour and a blend of carefully selected grains, our Jowar Puff is a delightful twist on traditional snacking. These puffs redefine the art of snacking delight, taking on various shapes during extrusion for a playful and customizable experience. Immerse yourself in a world of airy lightness and satisfying crunch, where each bite is a fusion of distinct flavors and nutrients-rich goodness. Elevate your snacking routine with our Jowar Puff, a wholesome choice that combines quality, creativity, and a burst of health in every delicious puffs",
                    imageSrc: Millet2
                },
                {
                    title: "Pearl Millet Puff (Bajra)",
                    description: "Extruded with finesse using pearl millet flour and a blend of premium grains, these puffs redefine snacking delight. With the ability to take multiple shapes during extrusion, our Bajra Puff offers a playful and customizable experience. Immerse yourself in a world of lightness and crunch, each bite a fusion of flavor and nutrients-rich goodness.",
                    imageSrc: Millet3
                },
                {
                    title: "Finger Millet Puff (Ragi)",
                    description: "Extruded with expertise using nutrients-packed ragi (finger millet) flour and a blend of premium grains, our Ragi Puffs redefine snacking excellence. Taking on various enticing shapes during extrusion, these puffs offer a playful and customizable experience for every palate. Immerse yourself in a world of satisfying lightness and crunch, where each bite is a harmonious fusion of flavors and wholesome goodness. Elevate your snacking journey with our Ragi Puffs, a delightful choice that marries quality, innovation, and health in every delicious piece. Savor the perfect balance of taste and nutritions with each uniquely shaped puff.",
                    imageSrc: Millet4
                },
                {
                    title: "Multi Millet Puff",
                    description: "Multi Millet Puffs redefine the essence of wholesome snacking. Extruded with expertise and care, these puffs showcase a symphony of textures and flavors. With the ability to take on diverse shapes during extrusion, each bite offers a playful and customizable experience. Immerse yourself in the delightful world of lightness and satisfying crunch, where the fusion of distinct millet flavors and nutrients-packed goodness creates a truly exceptional snacking adventure. Elevate your palate with our Multi Millet Puffs — a celebration of quality, diversity, and health in every delicious and uniquely shaped puff.",
                    imageSrc: Millet5
                },
            ]
        },
        corn: {
            items: [
                {
                    title: "Rings Puff",
                    description: "Delight in the playful and versatile snacking experience with our Rings Puff. Expertly crafted to perfection, these airy and crunchy puffs are a culinary marvel. Created with a blend of premium ingredients, the Round Puff takes on a circular form during extrusion, adding a touch of whimsy to your snacking routine. Immerse yourself in the lightness and satisfying crunch of each perfectly rounded bite. Versatile and customizable, these puffs offer a delightful canvas for your taste buds. Elevate your snacking moments with our Rings Puff — a symphony of shape, texture, and flavor that transforms every bite into a memorable experience.",
                    imageSrc: Core1
                },
                {
                    title: "Corn Puff",
                    description: "Golden nuggets of delight made from premium corn kernels. Expertly crafted through a meticulous process, these puffs offer a light and crispy texture, creating a snacking sensation like no other. Bursting with the natural sweetness of corn, each bite delivers a satisfying crunch and a burst of flavor. Versatile and timeless, our Corn Puffs stand as a testament to simplicity meeting excellence. Elevate your snacking moments with the pure, irresistible goodness of our Corn Puffs — a timeless treat that never goes out of style.",
                    imageSrc: Corn2
                },
                {
                    title: "Stick Puff",
                    description: "A slender and satisfying treat that redefines the art of munching. Expertly crafted with precision, these puff has a unique stick shape that enhances the snacking experience. Made from a blend of premium ingredients, each Stick Puff is a testament to quality and creativity. Immerse yourself in the crispiness and delightful crunch of these slender delights. Perfect for on-the-go munching or savoring slowly, our Stick Puff offers a versatile and customizable snacking experience. Elevate your palate with the slender joy of our Stick Puff — a snack that combines innovation, texture, and flavor in every delicious stick.",
                    imageSrc: Corn3
                },
                {
                    title: "Wave Puff",
                    description: "A delightful creation that blends artistry and flavor seamlessly. Crafted with precision, these puffs take on a wave-like form during extrusion, creating a visually appealing and uniquely textured snack. Made from a blend of premium ingredients, each Wave Puff offers a playful and satisfying crunch. Immerse yourself in the delightful curves of these waves as they tantalize your taste buds. Versatile and eye-catching, our Wave Puff is not just a snack; it's a snacking experience that combines form, texture, and flavor in perfect harmony. Elevate your snacking routine with the rhythmic joy of our Wave Puff.",
                    imageSrc: Corn4
                },
                {
                    title: "Veg Biryani Puff",
                    description: "A culinary delight that brings the essence of aromatic spices and wholesome vegetables in a delightful puff form. Expertly crafted with a medley of premium ingredients, these puffs encapsulate the rich taste of traditional biryani in every bite. Whether you savor the satisfying crunch or the burst of veggie goodness, our Veg Biryani Puff is a symphony of textures and flavors. Elevate your snacking experience with this fusion masterpiece — where the heartiness of biryani meets the convenience of a perfectly crafted puff, creating a snack that is both indulgent and unforgettable.",
                    imageSrc: Corn5
                },
                {
                    title: "Surprise Puff",
                    description: "Savor the medley of flavors with our Mixed Corn Puff — a delightful blend of golden corn goodness in every bite. Crafted with precision and care, these puffs offer a perfect balance of sweet and savory notes. Extruded with a mix of premium corn varieties, each puff delivers a harmonious blend of textures and flavors. Immerse yourself in the light and crispy crunch that defines our Mixed Corn Puff, showcasing the diversity of corn in every mouthful. Versatile and irresistible, this snack is a celebration of corn's natural sweetness and snack-worthy appeal. Elevate your snacking experience with the flavorful symphony of our Mixed Corn Puff.",
                    imageSrc: Corn6
                },
            ]
        },
        bars: {
            items: [
                {
                    title: "Protein Bars",
                    description: "Engineered for the health-conscious and fitness enthusiasts, our protein bars are a symphony of flavor and nutrition. Each bar is densely packed with high-quality proteins, essential for muscle recovery and sustained energy. They are the perfect blend of taste and health, making them an ideal choice for a post-workout snack or a nutritious treat on the go.",
                    imageSrc: Bar1
                },
                {
                    title: "Cereal Bars",
                    description: "Embrace the goodness of whole grains with our delightful cereal bars. Crafted for those hectic mornings or as a healthy snack option, these bars are a harmonious mix of crunchy grains, nuts, and fruits, lightly sweetened to perfection. They offer a convenient and tasty way to stay energized and satisfied.",
                    imageSrc: Bar2
                },
                {
                    title: "Energy Bars",
                    description: "Tailored for the active and the adventurous, our energy bars are formulated to boost stamina and vitality. Packed with a blend of energizing ingredients, these bars are your ideal companion for long workouts, outdoor activities, or as a midday pick-me-up. They are designed to fuel your body and invigorate your spirit.",
                    imageSrc: Bar3
                },
                {
                    title: "Snack Bar",
                    description: "Our snack bars are a testament to our versatility and creativity. Available in a myriad of flavors and textures, they cater to every palate and preference. Whether you're craving something sweet, savory, chewy, or crunchy, our snack bars are the perfect solution for any snacking occasion.",
                    imageSrc: Bar4
                },
            ]
        },
        core: {
            items: [
                {
                    title: "Core Filled snacks",
                    description: "core-filled snacks come in a delightful variety of shapes and sizes, each crafted to provide a unique snacking experience. From classic rounds and squares to fun and whimsical shapes like stars, hearts, or custom designs, our snacks are as enjoyable to look at as they are to eat. This variety in form makes our snacks perfect for different occasions, be it a family snack time, a special event, or a unique product line for your brand.",
                    flavor: "Nutty and crunchy.",
                    nutritional: "High in fiber, vitamins, and minerals like iron and magnesium.",
                    imageSrc: Core5
                },
            ]
        },
    }

    return (
        <Layout>
            <div className="bg-green-200 h-auto flex flex-col md:flex-row items-center justify-between px-6 py-8 md:px-12 lg:px-24">
                <div className="flex-1 mb-6 md:mb-0">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
                        Explore a World of Flavors - Unveiling a Diverse Range of Products
                    </h1>
                    <button className="bg-black text-white px-6 py-3 text-lg rounded hover:bg-gray-800">
                        Talk to us today!
                    </button>
                </div>
                <div className="flex-1 h-64 md:h-80 ">
                    <img
                        src="../static/images/112.webp"
                        alt="Product Display"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 via-orange-50 to-yellow-100 mx-auto px-6 md:px-12 lg:px-24 py-8">
                <div className="mb-6">
                    <div className="flex justify-center items-center">
                        <nav className="flex flex-wrap">
                            {["popped", "millet", "corn", "bars", "core"].map((tab) => (
                                <button
                                    key={tab}
                                    className={`mr-4 py-4 px-4 md:px-8 lg:px-16 border-b-2 font-medium text-base sm:text-lg lg:text-2xl ${activeTab === tab
                                        ? "bg-primary text-white"
                                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
                <TabContent {...tabs[activeTab]} />
            </div>
        </Layout>
    )
}

export default Products
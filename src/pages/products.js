import React, { useState } from "react";
import Layout from "../components/Layout";

import Core1 from "../images/Pop/popped-wheat.jpg";
import Core2 from "../images/Pop/popped-barley.jpg";
import Core3 from "../images/Pop/popped-pearl-millet.jpg";
import Core4 from "../images/Pop/value-added-millets.jpg";
import Core5 from "../images/core/Core Filled snacks.webp";

import Bar1 from "../images/core/Protein Bars.webp";
import Bar2 from "../images/core/Cereal Bars.webp";
import Bar3 from "../images/core/energy bar.webp";
import Bar4 from "../images/core/Snack Bar.webp";

import Millet1 from "../images/Millet/pearl-millet-puff.webp";
import Millet2 from "../images/Millet/sorghum-puff.webp";
import Millet4 from "../images/Millet/Finger Millet-puff.webp";
import Millet5 from "../images/Millet/Multi Millet Puff.webp";

import Corn1 from "../images/ring/Rings Puff.png";
import Corn2 from "../images/ring/Corn Puff.png";
import Corn3 from "../images/contract/multi-shapes.png";
import CornStick from "../images/ring/Stick Puff.png";
import Corn4 from "../images/ring/Wave Puff.png";
import Corn5 from "../images/ring/Veg Biryani Puff.png";
import Corn6 from "../images/ring/Surprise Puff.png";

const TabContent = ({ items }) => {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className="mb-8 flex flex-col md:flex-row items-start relative"
        >
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
            <img
              src={item.imageSrc}
              alt={item.title}
              className={`w-full h-auto max-h-96 bg-white rounded-lg shadow-lg ${
                [
                  Corn1,
                  Corn2,
                  Corn3,
                  Corn4,
                  Corn5,
                  Corn6,
                  Core1,
                  Core2,
                  Core3,
                  CornStick,
                ].includes(item.imageSrc)
                  ? "object-contain p-12"
                  : "object-cover"
              }`}
            />
          </div>
          <div className="w-full md:w-1/2 px-8 relative pt-8">
            <h3 className="absolute top-0 left-0 text-[20px] px-8 sm:text-[20px] font-semibold text-orange-600">
              {item.title.toUpperCase()}
            </h3>
            <p className="text-black text-base sm:text-lg text-justify leading-loose">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Products = () => {
  const [activeTab, setActiveTab] = useState("popped");

  const tabs = {
    popped: {
      items: [
        {
          title: "Popped Wheat",
          description:
            "Popped wheat is a delightful snack that combines a light, crunchy texture with a rich, nutty flavour. Made from whole wheat grains that are gently heated until they pop, this snack is not only delicious but also packed with fiber and essential nutrients. It's an ideal choice for those seeking a wholesome, satisfying treat that's both nutritious and flavour.",
          flavor: "Nutty and crunchy.",
          nutritional:
            "High in fiber, vitamins, and minerals like iron and magnesium.",
          imageSrc: Core3,
        },
        {
          title: "Popped Barley",
          description:
            "Experience the unique taste and texture of popped barley. This wholesome snack is created by heating whole barley grains until they burst, resulting in a light, airy crunch with a distinct earthy, nutty flavour. High in fiber and packed with nutrients, popped barley is a perfect snack for health-conscious individuals who don't want to compromise on taste or texture.",
          flavor: "Nutty and crunchy.",
          nutritional:
            "High in fiber, vitamins, and minerals like iron and magnesium.",
          imageSrc: Core2,
        },
        {
          title: "Popped Pearl Millet",
          description:
            "Popped Pearl Millet is a nutritious and delightful snack, offering a unique combination of a light, airy texture with a mildly sweet and earthy flavour. Made from whole pearl millet grains, known for their rich nutrients profile, these grains are carefully heated until they pop. This process not only enhances their natural flavour but also preserves their high fiber, protein, and antioxidant content. Popped pearl millet is an excellent choice for those seeking a wholesome snack that's both gluten-free and packed with health benefits, making it a perfect fit for a modern, health-conscious lifestyle.",
          flavor: "Nutty and crunchy.",
          nutritional:
            "High in fiber, vitamins, and minerals like iron and magnesium.",
          imageSrc: Core1,
        },
        {
          title: "Other Value added Millets",
          description:
            "Value added popped millets is a delightful snack that combines a light, crunchy texture with a rich, nutty flavour. Made from whole grains that are gently heated until they pop, this snack is not only delicious but also packed with fiber and essential nutrients. It's an ideal choice for those seeking a wholesome, satisfying treat that's both nutritious and flavour.",
          flavor: "Nutty and crunchy.",
          nutritional:
            "High in fiber, vitamins, and minerals like iron and magnesium.",
          imageSrc: Core4,
        },
      ],
    },
    extruded: {
      items: [
        {
          title: "Pearl Millet Puff",
          description:
            "Extruded with finesse using pearl millet flour and a blend of premium grains, these puffs redefine snacking delight. With the ability to take multiple shapes during extrusion, our Bajra Puff offers a playful and customizable experience. Immerse yourself in a world of lightness and crunch, each bite a fusion of flavour and nutrients-rich goodness.",
          imageSrc: Millet1,
        },
        {
          title: "Jowar Puff",
          description:
            "Extruded with precision using premium jowar flour and a blend of carefully selected grains, our Jowar Puff is a delightful twist on traditional snacking. These puffs redefine the art of snacking delight, taking on various shapes during extrusion for a playful and customizable experience. Immerse yourself in a world of airy lightness and satisfying crunch, where each bite is a fusion of distinct flavours and nutrients-rich goodness. Elevate your snacking routine with our Jowar Puff, a wholesome choice that combines quality, creativity, and a burst of health in every delicious puffs.",
          imageSrc: Millet2,
        },
        {
          title: "Finger Millet Puff",
          description:
            "Extruded with expertise using nutrients-packed ragi (finger millet) flour and a blend of premium grains, our Ragi Puffs redefine snacking excellence. Taking on various enticing shapes during extrusion, these puffs offer a playful and customizable experience for every palate. Immerse yourself in a world of satisfying lightness and crunch, where each bite is a harmonious fusion of flavours and wholesome goodness. Elevate your snacking journey with our Ragi Puffs, a delightful choice that marries quality, innovation, and health in every delicious piece. Savor the perfect balance of taste and nutritions with each uniquely shaped puff.",
          imageSrc: Millet4,
        },
        {
          title: "Multi Millet Puff",
          description:
            "Multi Millet Puffs redefine the essence of wholesome snacking. Extruded with expertise and care, these puffs showcase a symphony of textures and flavours. With the ability to take on diverse shapes during extrusion, each bite offers a playful and customizable experience. Immerse yourself in the delightful world of lightness and satisfying crunch, where the fusion of distinct millet flavours and nutrients-packed goodness creates a truly exceptional snacking adventure. Elevate your palate with our Multi Millet Puffs — a celebration of quality, diversity, and health in every delicious and uniquely shaped puff.",
          imageSrc: Millet5,
        },
        {
          title: "Corn Ring Puff",
          description:
            "Delight in the playful and versatile snacking experience with our Rings Puff. Expertly crafted to perfection, these airy and crunchy puffs are a culinary marvel. Created with a blend of premium ingredients, the Round Puff takes on a circular form during extrusion, adding a touch of whimsy to your snacking routine. Immerse yourself in the lightness and satisfying crunch of each perfectly rounded bite. Versatile and customizable, these puffs offer a delightful canvas for your taste buds. Elevate your snacking moments with our Rings Puff — a symphony of shape, texture, and flavour that transforms every bite into a memorable experience.",
          imageSrc: Corn1,
        },
        {
          title: "Corn Puff",
          description:
            "Golden nuggets of delight made from premium corn kernels. Expertly crafted through a meticulous process, these puffs offer a light and crispy texture, creating a snacking sensation like no other. Bursting with the natural sweetness of corn, each bite delivers a satisfying crunch and a burst of flavour. Versatile and timeless, our Corn Puffs stand as a testament to simplicity meeting excellence. Elevate your snacking moments with the pure, irresistible goodness of our Corn Puffs — a timeless treat that never goes out of style.",
          imageSrc: Corn2,
        },
        {
          title: "Corn Stick Puff",
          description:
            "A slender and satisfying treat that redefines the art of munching. Expertly crafted with precision, these puff has a unique stick shape that enhances the snacking experience. Made from a blend of premium ingredients, each Stick Puff is a testament to quality and creativity. Immerse yourself in the crispiness and delightful crunch of these slender delights. Perfect for on-the-go munching or savoring slowly, our Stick Puff offers a versatile and customizable snacking experience. Elevate your palate with the slender joy of our Stick Puff — a snack that combines innovation, texture, and flavour in every delicious stick.",
          imageSrc: CornStick,
        },
        {
          title: "Corn Wave Chips",
          description:
            "A delightful creation that blends artistry and flavour seamlessly. Crafted with precision, these puffs take on a wave-like form during extrusion, creating a visually appealing and uniquely textured snack. Made from a blend of premium ingredients, each Wave Puff offers a playful and satisfying crunch. Immerse yourself in the delightful curves of these waves as they tantalize your taste buds. Versatile and eye-catching, our Wave Puff is not just a snack; it's a snacking experience that combines form, texture, and flavour in perfect harmony. Elevate your snacking routine with the rhythmic joy of our Wave Puff.",
          imageSrc: Corn4,
        },
        {
          title: "Corn Veg Biryani Puff",
          description:
            "A culinary delight that brings the essence of aromatic spices and wholesome vegetables in a delightful puff form. Expertly crafted with a medley of premium ingredients, these puffs encapsulate the rich taste of traditional biryani in every bite. Whether you savor the satisfying crunch or the burst of veggie goodness, our Veg Biryani Puff is a symphony of textures and flavours. Elevate your snacking experience with this fusion masterpiece — where the heartiness of biryani meets the convenience of a perfectly crafted puff, creating a snack that is both indulgent and unforgettable.",
          imageSrc: Corn5,
        },
        {
          title: "Corn Multi-Shapes Puff",
          description:
            "Savor the medley of flavours with our Mixed Corn Puff — a delightful blend of golden corn goodness in every bite. Crafted with precision and care, these puffs offer a perfect balance of sweet and savory notes. Extruded with a mix of premium corn varieties, each puff delivers a harmonious blend of textures and flavours. Immerse yourself in the light and crispy crunch that defines our Mixed Corn Puff, showcasing the diversity of corn in every mouthful. Versatile and irresistible, this snack is a celebration of corn's natural sweetness and snack-worthy appeal. Elevate your snacking experience with the flavour symphony of our Mixed Corn Puff.",
          imageSrc: Corn3,
        },
      ],
    },
    bars: {
      items: [
        {
          title: "Protein Bars",
          description:
            "Engineered for the health-conscious and fitness enthusiasts, our protein bars are a symphony of flavour and nutrition. Each bar is densely packed with high-quality proteins, essential for muscle recovery and sustained energy. They are the perfect blend of taste and health, making them an ideal choice for a post-workout snack or a nutritious treat on the go.",
          imageSrc: Bar1,
        },
        {
          title: "Cereal Bars",
          description:
            "Embrace the goodness of whole grains with our delightful cereal bars. Crafted for those hectic mornings or as a healthy snack option, these bars are a harmonious mix of crunchy grains, nuts, and fruits, lightly sweetened to perfection. They offer a convenient and tasty way to stay energized and satisfied.",
          imageSrc: Bar2,
        },
        {
          title: "Energy Bars",
          description:
            "Tailored for the active and the adventurous, our energy bars are formulated to boost stamina and vitality. Packed with a blend of energizing ingredients, these bars are your ideal companion for long workouts, outdoor activities, or as a midday pick-me-up. They are designed to fuel your body and invigorate your spirit.",
          imageSrc: Bar3,
        },
        {
          title: "Snack Bar",
          description:
            "Our snack bars are a testament to our versatility and creativity. Available in a myriad of flavours and textures, they cater to every palate and preference. Whether you're craving something sweet, savory, chewy, or crunchy, our snack bars are the perfect solution for any snacking occasion.",
          imageSrc: Bar4,
        },
      ],
    },
    core: {
      items: [
        {
          title: "Core Filled snacks",
          description:
            "Core-filled snacks come in a delightful variety of shapes and sizes, each crafted to provide a unique snacking experience. From classic rounds and squares to fun and whimsical shapes like stars, hearts, or custom designs, our snacks are as enjoyable to look at as they are to eat. This variety in form makes our snacks perfect for different occasions, be it a family snack time, a special event, or a unique product line for your brand.",
          flavor: "Nutty and crunchy.",
          nutritional:
            "High in fiber, vitamins, and minerals like iron and magnesium.",
          imageSrc: Core5,
        },
      ],
      name: "Core Filled",
    },
  };

  return (
    <Layout>
      {/* <div className="w-full bg-orange-200">
                <div className="max-w-screen-xl mx-auto h-auto flex flex-col md:flex-row items-center justify-between px-6 py-8 md:px-12 lg:px-24">
                    <div className="flex-1 mb-6 md:mb-0">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 text-center md:text-left">
                            Explore a world of flavours unveiling a diverse range of products
                        </h1>
                        <div className="flex justify-center md:justify-start">
                            <button className="bg-primary text-white px-6 py-3 text-lg rounded hover:bg-orange-600">
                                Talk to us today!
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 h-64 md:h-80">
                        <img
                            src={productBack}
                            alt="Product Display"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div> */}

      <div className="w-full bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 py-8">
          <div className="mb-6">
            <div className="flex justify-center items-center">
              <nav className="flex flex-wrap">
                {["popped", "extruded", "bars", "core"].map((tab) => (
                  <button
                    key={tab}
                    className={`py-4 px-2 md:px-8 lg:px-16 border-b-2 rounded-2xl font-medium text-base sm:text-lg lg:text-2xl ${
                      activeTab === tab
                        ? "bg-orange-500 text-white"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tabs[tab].name ||
                      tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <TabContent {...tabs[activeTab]} />
        </div>
      </div>
    </Layout>
  );
};

export default Products;

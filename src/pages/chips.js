import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle, Zap, Leaf, Beaker, Shield } from "lucide-react";
import contract_1 from "../images/contract/contract_1.png"
import contract_2 from "../images/contract/contract_2.png"

const Chips = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const processSteps = [
        { title: "Sourcing Quality Ingredients", icon: Leaf, description: "We source our ingredients from trusted suppliers who share our commitment to quality and sustainability. Each ingredient is carefully selected for its nutritional value and flavor, ensuring that every bite of our bars is both satisfying and nutritious." },
        { title: "Innovative Flavors", icon: Beaker, description: "Our team of food scientists and culinary experts collaborate to create recipes that strike the perfect balance of taste and nutrition. We use a variety of natural sweeteners, such as honey and dates, to enhance flavor without compromising on health." },
        { title: "State-of-the-Art Production", icon: Zap, description: "From the moment ingredients arrive at our facilities to the final packaging stage, we maintain strict quality control protocols to ensure that our bars meet the highest standards of excellence. Our commitment to quality is unwavering, so you can trust that every bar you enjoy is of the utmost quality." },
        { title: "Rigorous Quality Control", icon: Shield, description: "From the moment ingredients arrive at our facilities to the final packaging stage, we maintain strict quality control protocols to ensure that our bars meet the highest standards of excellence. Our commitment to quality is unwavering, so you can trust that every bar you enjoy is of the utmost quality." },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is the process of snack making?",
            answer: "The process of snack making typically involves several steps: selecting ingredients, preparing them (chopping, slicing, etc.), combining ingredients according to a recipe or personal preference, cooking or assembling the snack, and finally, serving or packaging it. This process can vary greatly depending on the type of snack being made, whether it's something simple like a fruit salad or a more complex dish like nachos.",
        },
        {
            question: "What is the manufacturing process of chips?",
            answer: "The manufacturing process of chips involves several key steps. First, potatoes are cleaned and peeled. Then, they are sliced into thin, uniform slices. These slices are washed to remove excess starch. Next, they are fried at high temperatures until they become crispy. After frying, the chips are seasoned with flavors such as salt, barbecue, or sour cream and onion. Finally, the chips are packaged and sealed for distribution. Quality control measures ensure consistency and taste.",
        },
        {
            question: "What is the raw material for chips?",
            answer: "The primary raw material for making chips is potatoes. Potatoes are cleaned, peeled, and then sliced into thin, uniform slices to be fried. Other ingredients such as oil for frying and seasoning for flavoring are also used in the manufacturing process. However, potatoes are the main raw material that forms the base of most chip varieties.",
        },
        {
            question: "What are the main types of chips?",
            answer: "The main types of chips include potato chips, corn chips, tortilla chips, vegetable chips (like beetroot or kale), and grain-based chips. Each type offers unique flavors and textures.",
        },
    ];

    return (
        <React.Fragment>
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center md:px-12 lg:px-16 xl:px-20">
                    <h1 className="text-4xl text-center text-orange-600 mb-6">Why Choose Shri foods for Chip Manufacturing?</h1>
                    <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-black text-justify max-w-4xl mx-auto">
                        At Shri Foods, we stand out in the chip manufacturing industry for several reasons. First, our innovation shines through with the introduction of creative and unique flavors that cater to diverse tastes and preferences. Our commitment to quality is second to none, with rigorous quality control measures ensuring that every product meets the highest standards. Our team is comprised of highly experienced professionals dedicated to excellence in every aspect of chip manufacturing, from sourcing ingredients to final packaging. Additionally, we place a strong emphasis on sustainability, integrating eco-friendly practices into all stages of our production process. This includes using sustainable ingredients, minimizing waste, and reducing our carbon footprint. By choosing Shri Foods, you are not only getting top-quality and innovative chips but also supporting a company that prioritizes environmental responsibility.
                    </p>
                </div>

                <section className="max-w-7xl mx-auto px-4 py-12 md:px-12 lg:px-16 xl:px-20">
                    <h1 className="text-3xl md:text-4xl text-center text-orange-600 font-bold mb-12">Our Process</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                                <div className="flex items-center mb-4">
                                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                                        <step.icon className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-black">
                                        {index + 1}. {step.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-black flex-grow text-justify">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 my-12 md:px-12 lg:px-16 xl:px-20">
                    <div className="flex flex-col md:flex-row items-center justify-between">

                        <div className="md:w-1/2">
                            <h1 className="text-xl md:text-2xl lg:text-3xl text-orange-600 mb-6">
                                Snacks & chips manufacturing
                            </h1>
                            <p className="text-xs md:text-base lg:text-lg text-black mb-6 text-justify">
                                Shri Foods produces high-quality chips and snacks by sourcing premium ingredients. The process includes slicing, frying or baking, seasoning, and packaging, ensuring a crunchy texture and rich flavor. Advanced quality control measures maintain consistency and freshness. The company is committed to sustainability, using eco-friendly packaging and minimizing waste. Their diverse product range caters to various dietary preferences, including gluten-free and low-sodium options.
                            </p>
                        </div>

                        <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                            <img
                                src={contract_1}
                                alt="Sustainability Initiatives"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 my-12 md:px-12 lg:px-16 xl:px-20">
                    <div className="flex flex-col md:flex-row items-center justify-between">

                        <div className="md:w-1/2">
                            <img
                                src={contract_2}
                                alt="Sustainability Initiatives"
                                className="rounded-lg shadow-xl"
                            />
                        </div>

                        <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                            <h1 className="text-xl md:text-2xl lg:text-3xl text-orange-600 mb-6">
                                Custom Solutions
                            </h1>
                            <p className="text-xs md:text-base lg:text-lg text-black mb-6 text-justify">
                                Looking for a custom chip flavor or a private label option? Our expert team collaborates with you to develop a unique product tailored to your brand’s vision and specific requirements. Whether you're aiming for an innovative taste profile or a distinct packaging design, we ensure your product stands out in the market. Partner with us to create a snack experience that perfectly represents your brand.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-16 xl:px-20">
                    <h1 className="text-2xl md:text-4xl text-center text-orange-600 mb-8">
                        Frequently Asked Questions
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                                <button
                                    className="w-full flex justify-between items-center p-4 md:p-6 text-left text-xs md:text-base lg:text-lg"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className="font-bold">{faq.question}</span>
                                    {activeIndex === index ? (
                                        <ChevronUp className="w-6 h-6 text-orange-600" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-orange-600" />
                                    )}
                                </button>
                                <div
                                    className={`transition-max-height duration-700 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-screen' : 'max-h-0'
                                        }`}
                                >
                                    <div className="p-4 md:p-6 bg-gray-50 text-xs md:text-base lg:text-lg">
                                        <p className="text-black">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Chips
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Zap, Leaf, Beaker, Shield } from "lucide-react";
import contract_3 from "../images/contract/contract_3.png";
import contract_4 from "../images/contract/contract_4.png";

const Energybar = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is the production process of an energy bar?",
            answer: "The production process of an energy bar involves mixing ingredients like oats, nuts, fruits, and sweeteners, forming the mixture into a bar shape, and then baking or cooling it to set.",
        },
        {
            question: "What is the concept of an energy bar?",
            answer: "Energy bars are portable snacks designed to provide a quick source of energy, typically composed of carbohydrates, proteins, and fats, tailored for athletes, outdoor enthusiasts, or those needing a convenient snack.",
        },
        {
            question: "What is energy manufactured?",
            answer: "Energy is manufactured through various methods, including burning fossil fuels (coal, oil, gas), harnessing renewable sources like wind and solar power, or utilizing nuclear reactions to generate electricity.",
        },
        {
            question: "What are the raw materials in protein bars?",
            answer: "Raw materials in protein bars often include protein sources such as whey, soy, or pea protein, along with ingredients like nuts, seeds, oats, and natural sweeteners such as honey or dates.",
        },
    ];

    const processSteps = [
        { title: "Ingredient Integrity", icon: Leaf, description: "We source our ingredients from trusted suppliers who share our commitment to quality and sustainability. Each ingredient is carefully selected for its nutritional value and flavor, ensuring that every bite of our bars is both satisfying and nutritious." },
        { title: "Recipe Development", icon: Beaker, description: "Our team of food scientists and culinary experts collaborate to create recipes that strike the perfect balance of taste and nutrition. We use a variety of natural sweeteners, such as honey and dates, to enhance flavor without compromising on health." },
        { title: "Nutritional Profiling", icon: Zap, description: "From the moment ingredients arrive at our facilities to the final packaging stage, we maintain strict quality control protocols to ensure that our bars meet the highest standards of excellence. Our commitment to quality is unwavering, so you can trust that every bar you enjoy is of the utmost quality." },
        { title: "Quality Assurance", icon: Shield, description: "From the moment ingredients arrive at our facilities to the final packaging stage, we maintain strict quality control protocols to ensure that our bars meet the highest standards of excellence. Our commitment to quality is unwavering, so you can trust that every bar you enjoy is of the utmost quality." },
    ];

    return (
        <React.Fragment>
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center md:px-12 lg:px-16 xl:px-20">
                    <h1 className="text-4xl text-center text-orange-600 mb-6">Energy Bars Manufacturing</h1>
                    <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-black text-justify max-w-4xl mx-auto">
                        At Shri Foods, our mission is to redefine the energy bar experience, seamlessly blending flavour and functionality. With a commitment to excellence, our Energy Bar Manufacturing Division employs a fusion of culinary artistry and nutritional science to craft bars that transcend mere sustenance. Each bite is a symphony of taste and nourishment, meticulously formulated to fuel your daily adventures. From sourcing premium ingredients to rigorous quality control, we ensure that every bar delivers the perfect balance of taste and nutrition. Trust us to power your journey with bars that ignite your taste buds and energize your body.
                    </p>
                </div>

                <section className="max-w-7xl mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
                    <h1 className="text-3xl md:text-4xl text-center text-orange-600 font-bold mb-8">Our Approach</h1>
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
                                <p className="text-sm text-black text-justify">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 my-12 md:px-12 lg:px-16 xl:px-20">
                    <div className="flex flex-col md:flex-row items-center justify-between">

                        <div className="md:w-1/2">
                            <h1 className="text-xl md:text-2xl lg:text-3xl text-orange-600 mb-6">
                                Sustainability Initiatives
                            </h1>
                            <p className="text-xs md:text-base lg:text-lg text-black mb-6 text-justify">
                                We prioritize sustainability by minimizing our environmental impact. Continuously exploring methods to reduce waste, conserve resources, and promote sustainable farming practices, we strive for eco-consciousness at every step. Our dedication extends beyond nutrition, fostering a healthier planet through proactive measures that align with our ethos of responsible stewardship and harmonious coexistence with nature.
                            </p>
                        </div>

                        <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                            <img
                                src={contract_3}
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
                                src={contract_4}
                                alt="Sustainability Initiatives"
                                className="rounded-lg shadow-xl"
                            />
                        </div>

                        <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                            <h1 className="text-xl md:text-2xl lg:text-3xl text-orange-600 mb-6">
                                Custom Solutions
                            </h1>
                            <ul className="text-xs md:text-base lg:text-lg text-black mb-6 text-justify list-disc pl-4 space-y-2">
                                <li><strong>Private Labeling:</strong> Create your own branded energy bars tailored to your specifications.</li>
                                <li><strong>Custom Formulations:</strong> Work with our team to develop unique recipes that align with your brand's vision.</li>
                                <li><strong>Bulk Orders:</strong> Whether you need a small batch or a large production run, we've got you covered.</li>
                                <li><strong>Branding Opportunities:</strong> Elevate your brand with custom packaging and labeling options.</li>
                            </ul>
                            <button className="mt-8 bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>

                {/* <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-16 xl:px-20">
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
                </div> */}
            </div>
        </React.Fragment>
    )
}

export default Energybar
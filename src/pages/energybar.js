import React, { useState } from "react";
import Layout from "../components/Layout";
import { ChevronDown, ChevronUp, Zap, Leaf, Beaker, Shield } from "lucide-react";
import contract_3 from "../images/contract/contract_3.png"
import contract_4 from "../images/contract/contract_4.png"
import contract_5 from "../images/contract/contract_4.png"

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
        { title: "Ingredient Integrity", icon: Leaf, description: "We source our ingredients from trusted suppliers who share our commitment to quality and sustainability." },
        { title: "Recipe Development", icon: Beaker, description: "Our team of food scientists and culinary experts collaborate to create recipes that strike the perfect balance of taste and nutrition." },
        { title: "Nutritional Profiling", icon: Zap, description: "We carefully balance macronutrients and micronutrients to ensure each bar provides optimal energy and nutrition." },
        { title: "Quality Assurance", icon: Shield, description: "From ingredients to packaging, we maintain strict quality control protocols to ensure excellence in every bar." },
    ];

    return (
        <Layout>
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100">
                <div className="max-w-7xl mx-auto px-4 py-16 text-center md:px-12 lg:px-16 xl:px-20">
                    <h1 className="text-3xl font-bold mb-6 md:text-4xl lg:text-5xl text-green-600">Energy Bar Manufacturing</h1>
                    <p className="text-lg leading-relaxed mb-12 md:text-xl lg:text-2xl max-w-4xl mx-auto">
                        At Food Innovators, we redefine the energy bar experience, blending flavor and functionality. Each bite is a symphony of taste and nourishment, meticulously crafted to fuel your daily adventures.
                    </p>
                </div>

                <section className="max-w-7xl mx-auto px-4 py-16 md:px-12 lg:px-16 xl:px-20">
                    <h2 className="text-3xl font-semibold mb-12 text-center text-green-600">Our Process</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {processSteps.map((step, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                                <step.icon className="w-12 h-12 text-green-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-4">{index + 1}. {step.title}</h3>
                                <p className="text-black">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-yellow-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-16 xl:px-20">
                        <h2 className="text-3xl font-semibold mb-12 text-center text-green-600">Sustainability Initiatives</h2>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                                <img
                                    src={contract_3}
                                    alt="Sustainability Initiatives"
                                    className="rounded-lg shadow-xl"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <p className="text-lg text-black mb-6">
                                    We prioritize sustainability by minimizing our environmental impact. We continuously explore methods to reduce waste, conserve resources, and promote sustainable farming practices.
                                </p>
                                <p className="text-lg text-black">
                                    Our dedication extends beyond nutrition, fostering a healthier planet through proactive measures that align with our ethos of responsible stewardship and harmonious coexistence with nature.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-16 md:px-12 lg:px-16 xl:px-20">
                    <h2 className="text-3xl font-semibold mb-12 text-center text-green-600">Custom Solutions</h2>
                    <div className="bg-white p-8 rounded-lg shadow-xl">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="md:w-1/2 md:pr-12">
                                <h3 className="text-2xl font-semibold mb-6">Tailored to Your Needs</h3>
                                <ul className="space-y-4 text-lg text-gray-700">
                                    <li>✓ Private Labeling</li>
                                    <li>✓ Custom Formulations</li>
                                    <li>✓ Bulk Orders</li>
                                    <li>✓ Branding Opportunities</li>
                                </ul>
                                <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300">
                                    Contact Us for Custom Solutions
                                </button>
                            </div>
                            <div className="md:w-1/2 mt-8 md:mt-0">
                                <img
                                    src={contract_4}
                                    alt="Custom Energy Bar Solutions"
                                    className="rounded-lg shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-orange-100 to-yellow-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-16 xl:px-20">
                        <h2 className="text-3xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
                        <div className="max-w-3xl mx-auto">
                            {faqs.map((faq, index) => (
                                <div key={index} className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                                    <button
                                        className="w-full flex justify-between items-center p-6 text-left"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span className="text-lg font-bold">{faq.question}</span>
                                        {activeIndex === index ? (
                                            <ChevronUp className="w-6 h-6 text-green-600" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-green-600" />
                                        )}
                                    </button>
                                    {activeIndex === index && (
                                        <div className="p-6 bg-gray-50">
                                            <p className="text-black">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default Energybar
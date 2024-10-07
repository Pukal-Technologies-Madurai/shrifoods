import React, { useState } from "react";
import Layout from "../components/Layout";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import contract_1 from "../images/contract/contract_1.png"
import contract_2 from "../images/contract/contract_2.png"

const Chips = () => {
    const [activeIndex, setActiveIndex] = useState(null);

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

    const reasons = [
        "Innovative and unique flavors",
        "Rigorous quality control measures",
        "Highly experienced professional team",
        "Commitment to sustainability",
        "Eco-friendly practices in production",
    ];

    return (
        <Layout>
            <div className="bg-gradient-to-r from-orange-100 via-orange-50 to-yellow-100">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-4xl font-bold text-center mb-12">Snacks & Chips Manufacturing</h1>

                    <section className="mb-16">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <h2 className="text-3xl font-semibold mb-4">Our Process</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Food Innovators produces high-quality chips and snacks by sourcing premium ingredients. Our process ensures a crunchy texture and rich flavor, while maintaining sustainability and catering to various dietary preferences.
                                </p>
                                <img
                                    src={contract_1}
                                    alt="Snack Manufacturing Process"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="md:w-1/2 md:pl-12">
                                <div className="grid gap-6">
                                    {["Sourcing Quality Ingredients", "Innovative Flavors", "State-of-the-Art Production", "Rigorous Quality Control"].map((step, index) => (
                                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                            <h3 className="text-xl font-semibold mb-2">{index + 1}. {step}</h3>
                                            <p className="text-gray-600">
                                                Our {step.toLowerCase()} process ensures that every chip meets our high standards for taste and quality.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-8 text-center">Custom Solutions</h2>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 mb-8 md:mb-0">
                                    <img
                                        src={contract_2}
                                        alt="Custom Chip Solutions"
                                        className="rounded-lg shadow-md"
                                    />
                                </div>
                                <div className="md:w-1/2 md:pl-12">
                                    <p className="text-lg text-gray-700">
                                        Looking for a custom chip flavor or a private label option? Our expert team collaborates with you to develop a unique product tailored to your brand's vision and specific requirements. Whether you're aiming for an innovative taste profile or a distinct packaging design, we ensure your product stands out in the market.
                                    </p>
                                    <button className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition duration-300">
                                        Contact Us for Custom Solutions
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Food Innovators for Chip Manufacturing?</h2>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 mb-8 md:mb-0">
                                    <img
                                        src={contract_1}
                                        alt="Food Innovators Advantage"
                                        className="rounded-lg shadow-md"
                                    />
                                </div>
                                <div className="md:w-1/2 md:pl-12">
                                    <p className="text-lg text-gray-700 mb-6">
                                        At Food Innovators, we stand out in the chip manufacturing industry for several reasons:
                                    </p>
                                    <ul className="space-y-4">
                                        {reasons.map((reason, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                                                <span>{reason}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-6 text-lg text-gray-700">
                                        By choosing Food Innovators, you are not only getting top-quality and innovative chips but also supporting a company that prioritizes environmental responsibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="max-w-3xl mx-auto">
                            {faqs.map((faq, index) => (
                                <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                                    <button
                                        className="w-full flex justify-between items-center text-left"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span className="text-lg font-medium">{faq.question}</span>
                                        {activeIndex === index ? (
                                            <ChevronUp className="w-6 h-6 text-orange-600" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-orange-600" />
                                        )}
                                    </button>
                                    {activeIndex === index && (
                                        <p className="mt-2 text-gray-600">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </Layout>
    )
}

export default Chips
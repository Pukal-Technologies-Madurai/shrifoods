import React, { useState } from "react";
import Layout from "../components/Layout";
import { ChevronDown, ChevronUp, Zap, Leaf, Beaker, Shield } from "lucide-react";

const Readytocook = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How to manufacture ready to- cook food?",
            answer: "To manufacture ready-to-cook food, start with sourcing fresh ingredients, followed by processing, cooking, and packaging. Ensure strict hygiene standards, efficient machinery, and quality control measures. Design convenient packaging with clear instructions. Finally, distribute to retail outlets or directly to consumers.",
        },
        {
            question: "What are ready to cook products?",
            answer: "Ready-to-cook products are food items that require minimal preparation before consumption. They're designed to offer convenience to busy consumers by reducing cooking time and effort. These products often come pre-cut, pre-seasoned, or partially cooked, allowing for quick and easy meal preparation.",
        },
        {
            question: "What are examples of RTE foods?",
            answer: "Examples of ready-to-eat (RTE) foods include frozen pizza, pre-marinated meats, instant noodles, canned soups, salad kits, and microwaveable meals. These products cater to various dietary preferences and cultural tastes, offering a wide range of options for quick and convenient meal solutions.",
        },
        {
            question: "What does RTC Industries do?",
            answer: "RTC Industries specializes in the manufacturing and distribution of ready-to-cook food products. They focus on innovation, quality, and convenience, offering a diverse range of RTE options to meet consumer demands. Their products undergo rigorous testing and adhere to industry standards for freshness, taste, and nutrition.",
        },
    ];

    const processSteps = [
        { title: "Breakfast Mixes", icon: Leaf, description: "Jumpstart mornings with quick, nourishing breakfast choices that fuel your day." },
        { title: "Meal Mixes", icon: Beaker, description: "Whip up scrumptious, hassle-free meals perfect for fast-paced routines." },
        { title: "Dessert Mixes", icon: Zap, description: "Satisfy sweet cravings instantly with delectable treats requiring minimal effort." },
        { title: "Snack Mixes", icon: Shield, description: "Enjoy nutritious, tasty bites ideal for busy schedules and snacking on the move." },
        { title: "Curry Mixes", icon: Shield, description: "Immerse in the rich aroma and flavor of traditional curry dishes made effortlessly." },
    ];

    return (
        <Layout>
            <div className="bg-gradient-to-b from-yellow-50 to-white">
                <div className="max-w-7xl mx-auto px-4 py-16 text-center md:px-12 lg:px-16 xl:px-20">
                    <h1 className="text-4xl font-bold mb-6 md:text-5xl lg:text-6xl">Our Expertise</h1>
                    <p className="text-lg leading-relaxed mb-12 md:text-xl lg:text-2xl max-w-4xl mx-auto">
                        Food Innovators is India's Premier Contract Food Manufacturer, specializing in creating wholesome, healthy Ready-To-Cook, Ready-To-Mix, Ready-To-Eat, and Functional Food Products. With a large portfolio of Ready To Cook Food products available for private label manufacturing and on a contract manufacturing basis, we cater to diverse consumer needs and preferences.
                    </p>
                </div>

                <section className="bg-yellow-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-16 xl:px-20">
                        <h2 className="text-3xl font-semibold mb-12 text-center">Ready To Cook Retort Food Manufacturer</h2>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                                <img
                                    src="https://www.shrifoodsindia.com/web/image/2772-67ac0e63/Co-extruded-snacks-get-a-big-boost.webp"
                                    alt="Sustainability Initiatives"
                                    className="rounded-lg shadow-xl"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <p className="text-lg text-gray-700 mb-6">
                                    At Food Innovators, we're dedicated to providing convenient and delicious ready-to-cook products that make meal preparation a breeze. With upward trends in busier lifestyles and rising demand for convenience products, the Ready-to-cook (RTC) food market is booming.
                                </p>
                                <p className="text-lg text-gray-700">
                                    As the Indian middle class witnesses a paradigm shift in lifestyle, particularly in metropolitans, the demand for RTC food products is on the rise, especially among nuclear families and bachelors. Cultural diversities have led to a focus on launching regional RTC products, catering to diverse tastes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-yellow-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-16 xl:px-20">
                        <h2 className="text-3xl font-semibold mb-12 text-center">Customize RTC Contract Manufacturing Solutions</h2>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="md:w-1/2">
                                <p className="text-lg text-gray-700 mb-6">
                                    Your trusted partner in food production excellence, we cater to your every culinary requirement, from Ready-To-Cook delights to Ready-To-Mix marvels, and from Ready-To-Eat treats to Functional Food Products. Our array of services includes not only comprehensive Private Label Food Manufacturing but also Contract Food Manufacturing, meticulously tailored to your distinct needs and aspirations.
                                </p>
                                <p className="text-lg text-gray-700">
                                    Whether you're a burgeoning brand seeking outsourcing solutions or an enterprising chef eager to realize your gastronomic dreams, our adaptable approach ensures a seamless journey from concept to creation. Rely on Food Innovators for a fusion of quality, ingenuity, and efficiency in every delectable morsel, crafted exclusively for you.
                                </p>
                            </div>
                            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                                <img
                                    src="https://www.shrifoodsindia.com/web/image/2775-767ff4e3/IMG_0401.webp"
                                    alt="Sustainability Initiatives"
                                    className="rounded-lg shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-16 md:px-12 lg:px-16 xl:px-20">
                    <h2 className="text-3xl font-semibold mb-12 text-center">Our Process</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {processSteps.map((step, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                                <step.icon className="w-12 h-12 text-yellow-500 mb-4" />
                                <h3 className="text-xl font-semibold mb-4">{index + 1}. {step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-16 xl:px-20">
                        <h2 className="text-3xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
                        <div className="max-w-3xl mx-auto">
                            {faqs.map((faq, index) => (
                                <div key={index} className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                                    <button
                                        className="w-full flex justify-between items-center p-6 text-left"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span className="text-lg font-medium">{faq.question}</span>
                                        {activeIndex === index ? (
                                            <ChevronUp className="w-6 h-6 text-yellow-500" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-yellow-500" />
                                        )}
                                    </button>
                                    {activeIndex === index && (
                                        <div className="p-6 bg-gray-50">
                                            <p className="text-gray-600">{faq.answer}</p>
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

export default Readytocook
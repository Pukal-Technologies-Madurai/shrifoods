import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Zap,
  Leaf,
  Beaker,
  Shield,
} from "lucide-react";
import contract_1 from "../images/contract/contract_1.png";
import contract_5 from "../images/contract/contract_4.png";

const Readytocook = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How to manufacture ready to- cook food?",
      answer:
        "To manufacture ready-to-cook food, start with sourcing fresh ingredients, followed by processing, cooking, and packaging. Ensure strict hygiene standards, efficient machinery, and quality control measures. Design convenient packaging with clear instructions. Finally, distribute to retail outlets or directly to consumers.",
    },
    {
      question: "What are ready to cook products?",
      answer:
        "Ready-to-cook products are food items that require minimal preparation before consumption. They're designed to offer convenience to busy consumers by reducing cooking time and effort. These products often come pre-cut, pre-seasoned, or partially cooked, allowing for quick and easy meal preparation.",
    },
    {
      question: "What are examples of RTE foods?",
      answer:
        "Examples of ready-to-eat (RTE) foods include frozen pizza, pre-marinated meats, instant noodles, canned soups, salad kits, and microwaveable meals. These products cater to various dietary preferences and cultural tastes, offering a wide range of options for quick and convenient meal solutions.",
    },
    {
      question: "What does RTC Industries do?",
      answer:
        "RTC Industries specializes in the manufacturing and distribution of ready-to-cook food products. They focus on innovation, quality, and convenience, offering a diverse range of RTE options to meet consumer demands. Their products undergo rigorous testing and adhere to industry standards for freshness, taste, and nutrition.",
    },
  ];

  const processSteps = [
    {
      title: "Breakfast Mixes",
      icon: Leaf,
      description:
        "Jumpstart mornings with quick, nourishing breakfast choices that fuel your day.",
    },
    {
      title: "Meal Mixes",
      icon: Beaker,
      description:
        "Whip up scrumptious, hassle-free meals perfect for fast-paced routines.",
    },
    {
      title: "Dessert Mixes",
      icon: Zap,
      description:
        "Satisfy sweet cravings instantly with delectable treats requiring minimal effort.",
    },
    {
      title: "Snack Mixes",
      icon: Shield,
      description:
        "Enjoy nutritious, tasty bites ideal for busy schedules and snacking on the move.",
    },
    {
      title: "Curry Mixes",
      icon: Shield,
      description:
        "Immerse in the rich aroma and flavour of traditional curry dishes made effortlessly.",
    },
  ];

  return (
    <React.Fragment>
      <div className="bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center md:px-12 lg:px-16 xl:px-20">
          <h1 className="text-4xl text-center text-orange-600 mb-6">
            Our Expertise
          </h1>
          <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-black text-justify max-w-4xl mx-auto">
            Shri Foods is India's Premier Contract Food Manufacturer,
            specializing in creating wholesome, healthy Ready-To-Cook,
            Ready-To-Mix, Ready-To-Eat, and Functional Food Products. With a
            large portfolio of Ready To Cook Food products available for private
            label manufacturing and on a contract manufacturing basis, we cater
            to diverse consumer needs and preferences.
          </p>
        </div>

        <section className="max-w-7xl mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
          <h1 className="text-4xl text-center text-orange-600 mb-8">
            Our Solutions
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <step.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-black">
                    {index + 1}. {step.title}
                  </h3>
                </div>
                <p className="text-sm text-black text-justify">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 my-12 md:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h1 className="text-xl md:text-2xl lg:text-3xl text-orange-600 mb-6">
                Ready To Cook Retort Food Manufacturer
              </h1>
              <p className="text-xs md:text-base lg:text-lg text-black mb-6 text-justify">
                At Shri Foods, we're dedicated to providing convenient and
                delicious ready-to-cook products that make meal preparation a
                breeze. With upward trends in busier lifestyles and rising
                demand for convenience products, the Ready-to-cook (RTC) food
                market is booming. As the Indian middle class witnesses a
                paradigm shift in lifestyle, particularly in metropolitans, the
                demand for RTC food products is on the rise, especially among
                nuclear families and bachelors. Cultural diversities have led to
                a focus on launching regional RTC products, catering to diverse
                tastes.
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
                src={contract_5}
                alt="Sustainability Initiatives"
                className="rounded-lg shadow-xl"
              />
            </div>

            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <h1 className="text-xl md:text-2xl lg:text-3xl text-orange-600 mb-6">
                Customize RTC Contract Manufacturing Solutions
              </h1>
              <p className="text-xs md:text-base lg:text-lg text-black mb-6 text-justify">
                Your trusted partner in food production excellence, we cater to
                your every culinary requirement, from Ready-To-Cook delights to
                Ready-To-Mix marvels, and from Ready-To-Eat treats to Functional
                Food Products. Our array of services includes not only
                comprehensive Private Label Food Manufacturing but also Contract
                Food Manufacturing, meticulously tailored to your distinct needs
                and aspirations.
              </p>
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
  );
};

export default Readytocook;

import React, { useState } from "react";
import Layout from "../components/Layout";
import Energybar from "./energybar";
import Chips from "./chips";
import Readytocook from "./readytocook";

const Manufacturing = () => {
    const [activeTab, setActiveTab] = useState("chips");

    const renderTabContent = () => {
        switch (activeTab) {
            case "chips":
                return <Chips />;
            case "energy":
                return <Energybar />;
            case "readytocook":
                return <Readytocook />;
            default:
                return null;
        }
    };

    return (
        <Layout>
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 mx-auto px-6 md:px-12 py-12">
                <h1 className="text-2xl md:text-4xl font-extrabold text-center text-orange-600 mb-8">
                    Our Manufacturing
                </h1>

                <div className="mb-8 flex justify-center">
                    <nav className="flex space-x-4 md:space-x-8">
                        <button
                            className={`py-4 px-2 md:px-4 lg:px-8 border-b-2 rounded-2xl font-medium text-base sm:text-lg lg:text-2xl ${activeTab === "chips"
                                ? "bg-orange-500 text-white shadow-lg"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                            onClick={() => setActiveTab("chips")}
                        >
                            Extruded Snacks Manufacturing
                        </button>
                        <button
                            className={`py-4 px-2 md:px-4 lg:px-8 border-b-2 rounded-2xl font-medium text-base sm:text-lg lg:text-2xl ${activeTab === "energy"
                                ? "bg-orange-500 text-white shadow-lg"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                            onClick={() => setActiveTab("energy")}
                        >
                            Energy Bars Manufacturing
                        </button>
                        <button
                            className={`py-4 px-2 md:px-4 lg:px-8 border-b-2 rounded-2xl font-medium text-base sm:text-lg lg:text-2xl ${activeTab === "readytocook"
                                ? "bg-orange-500 text-white shadow-lg"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                            onClick={() => setActiveTab("readytocook")}
                        >
                            Ready to Cook
                        </button>
                    </nav>
                </div>

                {/* Tab Content */}
                <div>{renderTabContent()}</div>
            </div>
        </Layout>
    )
}

export default Manufacturing
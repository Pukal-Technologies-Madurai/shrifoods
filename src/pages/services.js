import React from "react"
import Layout from "../components/Layout"
import { Hexagon, Package, Settings } from "lucide-react"

const ServiceCard = ({ Icon, title, description }) => (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
        <Icon className="w-12 h-12 text-orange-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-orange-600">{title}</h3>
        <p className="text-black">{description}</p>
    </div>
)

const Services = () => {
    const services = [
        {
            icon: Hexagon,
            title: "Product Development",
            description: "Specializing in the development of innovative food products, from concept creation to commercialization."
        },
        {
            icon: Settings,
            title: "Contract Manufacturing",
            description: "Comprehensive contract manufacturing services, handling productions from small batches to large-scale manufacturing."
        },
        {
            icon: Package,
            title: "Nutritional Label and Analysis",
            description: "Providing detailed nutritional labeling and analysis, ensuring compliance with regulatory standards."
        },
        {
            icon: Package,
            title: "White Labeling",
            description: "Market high-quality food products under individual brand names, suitable for various brand identities."
        },
        {
            icon: Package,
            title: "Packaging Solutions",
            description: "Innovative and sustainable packaging solutions tailored to each product's needs and brand identity."
        },
        {
            icon: Package,
            title: "Bulk Product",
            description: "Cost-effective and reliable bulk product services for businesses requiring large quantities."
        }
    ]

    return (
        <Layout>
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-orange-600 text-center mb-12">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} Icon={service.icon} title={service.title} description={service.description} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Services
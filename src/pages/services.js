import React from 'react'
import Layout from '../components/Layout'

const Services = () => {
    return (
        <Layout>
            <div className="relative flex items-center justify-center h-screen overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/QGt178qOuZc?autoplay=1&loop=1&mute=1"
                    frameBorder="0"
                    autoplay
                    loop
                    mute
                    className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
                    allowFullScreen
                />
                <div className="relative z-10 text-center text-white p-4">
                    <p className="text-2xl md:text-4xl font-bold mb-4">Innovative Solutions for Every Culinary Challenge</p>
                    <button className="bg-primary text-white py-2 px-4 rounded hover:bg-accent transition duration-300">
                        Book your Slot!
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default Services
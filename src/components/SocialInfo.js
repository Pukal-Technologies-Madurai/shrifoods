import React from "react"
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "gatsby";

const SocialInfo = () => {
    return (
        <div className="bg-primary">
            <div className="w-full max-w-screen-xl h-[15vh] mx-auto  flex flex-col md:flex-row justify-between items-center p-10 md:p-14 shadow-lg">

                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 text-center md:text-left">
                    <p className="font-bold text-lg md:text-lg text-white">for more details</p>
                    <p className="text-3xl md:text-3xl font-semibold mt-2 text-white">Contact us</p>
                </div>

                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 text-center md:text-left">
                    <p className="font-bold text-lg md:text-xl text-white">Call us</p>
                    <Link className="text-2xl md:text-2xl mt-2 hover:underline text-white" to="tel:+91 9025316142">
                        +91 9025316142
                    </Link>
                </div>

                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 text-center md:text-left">
                    <p className="font-bold text-lg md:text-xl text-white">Send us a message</p>
                    <Link className="text-2xl md:text-2xl mt-2 hover:underline text-white" to="mailto:shrifoodsindia@gmail.com">
                        shrifoodsindia@gmail.com
                    </Link>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <p className="font-bold text-lg md:text-xl text-white">Follow us</p>
                    <div className="flex flex-row gap-6 mt-2">
                        <Facebook className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-blue-500 text-white" />
                        <Instagram className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-[#FE0185] text-white" />
                        <Twitter className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-[#1DA1F2] text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialInfo
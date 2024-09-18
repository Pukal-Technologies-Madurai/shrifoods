import React from "react"
import { Facebook, Instagram, Twitter, X } from "lucide-react";
import { Link } from "gatsby";

const SocialInfo = () => {
    return (
        <div className="bg-gradient-to-r from-primary to-white flex flex-col md:flex-row justify-between p-14 w-full mx-auto">
            <div className="flex flex-col mb-4 md:mb-0">
                <p className="font-bold">How can we help?</p>
                <p className="text-2xl">Contact us anytime</p>
            </div>

            <div className="flex flex-col mb-4 md:mb-0">
                <p className="font-bold">Call us</p>
                <Link className="text-2xl" to="tel:+91 9025316142">+91 9025316142</Link>
            </div>

            <div className="flex flex-col mb-4 md:mb-0">
                <p className="font-bold">Send us a message</p>
                <Link className="text-2xl" to="mailto:shrifoodsindia@gmail.com">shrifoodsindia@gmail.com</Link>
            </div>

            <div className="flex flex-col mb-4 md:mb-0">
                <p className="font-bold">Follow us</p>
                <div className="flex flex-row gap-4">
                    <Facebook className="w-6 h-6 cursor-pointer hover:text-blue-600" />
                    <Instagram className="w-6 h-6 cursor-pointer hover:text-pink-600" />
                    <Twitter className="w-6 h-6 cursor-pointer hover:text-blue-400" />
                </div>
            </div>
        </div>
    )
}

export default SocialInfo
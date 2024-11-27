import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "gatsby";

const SocialInfo = () => {
  return (
    <div className="bg-primary">
      <div className="w-full max-w-screen-xl h-auto mx-auto flex flex-col md:flex-row justify-between items-center py-2 md:py-4 px-4 md:px-8 lg:px-14 shadow-lg space-y-8 md:space-y-0">
        {/* Contact Us Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="font-semibold text-xs md:text-base lg:text-lg text-white mb-1">
            For more details
          </p>
          <p className="text-base md:text-xl lg:text-2xl font-medium text-white">
            Contact us
          </p>
        </div>

        {/* Call Us Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="font-semibold text-xs md:text-base lg:text-lg text-white mb-1">
            Call us
          </p>
          <Link
            className="text-base md:text-xl lg:text-2xl font-medium text-white hover:underline transition-all"
            to="tel:+91 9025316142"
          >
            +91 9025316142
          </Link>
        </div>

        {/* Email Us Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="font-semibold text-xs md:text-base lg:text-lg text-white mb-1">
            Send us a message
          </p>
          <Link
            className="text-base md:text-xl lg:text-2xl font-medium text-white hover:underline transition-all"
            to="mailto:shrifoodsindia@gmail.com"
          >
            shrifoodsindia@gmail.com
          </Link>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="font-semibold text-xs md:text-base lg:text-lg text-white mb-1">
            Follow us
          </p>
          <div className="flex flex-row gap-6 mt-2">
            <a
              href="https://www.facebook.com/ShriFoodsMadurai/"
              target="_blank"
            >
              <Facebook className="w-6 h-6 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-blue-500 text-white" />
            </a>
            <a
              href="https://www.instagram.com/shrifoodsindia/profilecard"
              target="_blank"
            >
              <Instagram className="w-6 h-6 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-pink-500 text-white" />
            </a>
            <a href="https://www.x.com/shrifoodsindia/" target="_blank">
              <Twitter className="w-6 h-6 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-blue-400 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialInfo;

import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialInfo from "./SocialInfo";

const Layout = ({ children }) => {
    return (
        <div className="">
            <Helmet>
                <title>Shri Foods India</title>
            </Helmet>
            <Navbar />
            <div className="w-full max-w-screen-xl mx-auto">
                {children}
            </div>
            <SocialInfo />
            <Footer />
        </div>
    )
}

export default Layout
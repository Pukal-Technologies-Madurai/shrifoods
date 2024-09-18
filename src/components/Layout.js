import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialInfo from "./SocialInfo";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            {children}
            <SocialInfo />
            <Footer />
        </div>
    )
}

export default Layout
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialInfo from "./SocialInfo";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Helmet>
                <title>Shri Foods India</title>
            </Helmet>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <SocialInfo />
            <Footer />
        </div>
    )
}

export default Layout
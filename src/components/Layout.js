import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialInfo from "./SocialInfo";
import Chatbot from "./Chatbot";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <meta
          name="google-site-verification"
          content="d8BOjIuImgXJ5HHfD2u9Ct1Q52xyN0qT6URgP9x7pO8"
        />
        <title>Shri Foods India</title>
      </Helmet>
      <Navbar />
      <main className="flex-grow w-full">{children}</main>
      <SocialInfo />
      <Chatbot />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;

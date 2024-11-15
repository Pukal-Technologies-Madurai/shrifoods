import React, { useState } from "react";
import Layout from "../components/Layout";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://formspree.io/f/xvgornaq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
        setStatus({
          type: "success",
          message: "Your message has been sent successfully.",
        });
      } else {
        const error = await response.json();
        setStatus({
          type: "error",
          message: error.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-orange-600 text-center mb-8">
            Contact Us
          </h1>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-black">
                For enquiries, <br />
                please provide the following details
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {status.message && (
                  <div
                    className={`p-4 rounded-md ${
                      status.type === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    <p className="whitespace-pre-line">{status.message}</p>
                  </div>
                )}
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Company"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <textarea
                  onChange={handleChange}
                  placeholder="Your message"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="4"
                  required
                ></textarea>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-600 text-white p-3 rounded-md hover:bg-orange-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-black">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="text-orange-600 mr-4" />
                    <div>
                      <p className="font-semibold">Shri Foods India</p>
                      <p>DP.NO.CS 8, SIDCO Industrial Estate,</p>
                      <p>Kappalur, Madurai,</p>
                      <p>Tamil Nadu 625008</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-orange-600 mr-4" />
                    <p>+91 90253 16142</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-orange-600 mr-4" />
                    <a
                      href="mailto:shrifoodsindia@gmail.com"
                      className="text-orange-600 font-bold hover:underline"
                    >
                      shrifoodsindia@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-4 h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.1968784425735!2d78.0299635741444!3d9.833825675873847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00d15e9b826e2b%3A0x72d8eeda445cb1f3!2sShri%20Foods!5e0!3m2!1sen!2sin!4v1728039921892!5m2!1sen!2sin"
                  frameBorder="0"
                  className="w-full h-full rounded-md"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

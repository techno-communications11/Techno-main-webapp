"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const page = () => {
  const contactMethods = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-blue-600" />,
      title: "Our Headquarters",
      info: "6464 Savoy Dr, Suite 215, Houston, TX 77036",
      link: "https://goo.gl/maps/6m2abb9adf339d56"
    },
    {
      icon: <FaPhone className="text-2xl text-purple-600" />,
      title: "Phone Number",
      info: "+1 (346) 487-7627",
      link: "tel:+13464877627"
    },
    {
      icon: <FaEnvelope className="text-2xl text-blue-600" />,
      title: "Email Address",
      info: "info@techno-communications.com",
      link: "mailto:info@techno-communications.com"
    },
    
  ];

  const socialLinks = [
    { icon: <FaFacebook size={20} />, url: "https://facebook.com" },
    { icon: <FaTwitter size={20} />, url: "https://twitter.com" },
    { icon: <FaLinkedin size={20} />, url: "https://linkedin.com" },
    { icon: <FaInstagram size={20} />, url: "https://instagram.com" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for any inquiries or visit one of our 350+ locations nationwide
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Map and Contact Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4411.685153293091!2d-95.50411327223605!3d29.715041330098032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c24eaf700001%3A0x6d2abb9adf339d56!2s6464%20Savoy%20Dr%20Suite%20215%2C%20Houston%2C%20TX%2077036!5e1!3m2!1sen!2sus!4v1746042579652!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[400px]"
            ></iframe>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mt-1">{method.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{method.title}</h3>
                  {method.link ? (
                    <a 
                      href={method.link} 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.info.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </a>
                  ) : (
                    method.info.split('\n').map((line, i) => (
                      <p key={i} className="text-gray-600">{line}</p>
                    ))
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Media Links */}
            {/* <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white p-3 rounded-full shadow-md hover:shadow-lg text-gray-700 hover:text-blue-600 transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
              <p className="mb-6">
                Have questions about our services or locations? Our team typically responds within 24 hours.
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <FaPhone className="text-blue-300" /> +1 (626) 416-3666
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-300" /> info@techno-communications.com
                </p>
              </div>
            </div>
            <div className="p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:brightness-110"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
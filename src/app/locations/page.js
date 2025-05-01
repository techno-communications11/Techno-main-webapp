"use client";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import storesData from "../../components/Stores.json";
import { IoLocationOutline } from "react-icons/io5";

const StoreLocator = () => {
  // Group stores by market
  const groupedStores = storesData.reduce((acc, store) => {
    if (!acc[store.Market]) {
      acc[store.Market] = [];
    }
    acc[store.Market].push(store);
    return acc;
  }, {});

  const [expandedMarkets, setExpandedMarkets] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Filter markets based on search term
  const filteredMarkets = Object.keys(groupedStores).filter((market) =>
    market.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleMarket = (market) => {
    setExpandedMarkets((prev) => ({
      ...prev,
      [market]: !prev[market],
    }));
  };

  const openGoogleMap = (address) => {
    if (!address) return;
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        address
      )}`,
      "_blank"
    );
  };

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="d-flex">
        <div>
            <span> <IoLocationOutline className="text-9xl text-pink-600"/></span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            METRO BY T-MOBILE STORES NEAR YOU
          </h1>

          <p className="text-gray-600 text-center mb-8">
            We are here for you. Come visit us at one of our Metro by T-Mobile
            retail locations listed below
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search markets..."
          className="block  text-gray-600 w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        {filteredMarkets.length > 0 ? (
          filteredMarkets.map((market) => (
            <div
              key={market}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Market Header */}
              <button
                onClick={() => toggleMarket(market)}
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  Stores in {market}
                </h2>
                {expandedMarkets[market] ? (
                  <FaChevronDown className="text-gray-600" />
                ) : (
                  <FaChevronRight className="text-gray-600" />
                )}
              </button>

              {/* Stores List */}
              <AnimatePresence>
                {expandedMarkets[market] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="divide-y divide-gray-200">
                      {groupedStores[market].map((store, index) => (
                        <div key={index} className="p-6">
                          <h3 className="text-lg font-medium text-gray-800 mb-2">
                            {store["Store Name"]}
                          </h3>
                          <div className="flex items-start gap-2 mb-4">
                            <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-600">
                              {store["Store Address"]}
                            </p>
                          </div>
                          <button
                            onClick={() => openGoogleMap(store["Google Map"])}
                            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                          >
                            <FaMapMarkerAlt className="text-sm" />
                            <span>View on Map</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-gray-600">
            No markets found matching &ldquo{searchTerm}&ldquo
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreLocator;

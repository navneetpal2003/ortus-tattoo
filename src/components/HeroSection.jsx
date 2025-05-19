import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <header
      className="h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-black bg-opacity-60 p-10 rounded-xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Ink Your Soul</h2>
        <p className="text-xl mb-6">Book your next masterpiece at Ortus Tattoo</p>
        <a href="#booking" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full text-white">
          Book Now
        </a>
      </motion.div>
    </header>
  );
}

export default HeroSection;

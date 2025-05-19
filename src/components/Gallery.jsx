import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/tattoo1.jpg",
  "/images/tattoo2.jpg",
  "/images/tattoo3.jpg"
];

function Gallery() {
  return (
    <section id="gallery" className="p-10 bg-gray-800 dark:bg-gray-200 dark:text-black">
      <h3 className="text-3xl font-semibold mb-6">Our Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Tattoo ${index + 1}`}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;

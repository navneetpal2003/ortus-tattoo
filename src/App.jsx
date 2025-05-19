import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-black text-white font-sans">
      <Navbar />
      <HeroSection />
      <Gallery />
      <BookingForm />
      <Footer />
    </main>
  );
}

export default App;

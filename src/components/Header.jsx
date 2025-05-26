import React from 'react';

export default function Header({ onBookClick }) {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow">
      <h1 className="text-xl font-bold">Inkwell Studio</h1>
      <nav className="space-x-4 hidden md:block">
        <a href="#" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">Artists</a>
        <a href="#portfolio" className="hover:underline">Portfolio</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <button
        onClick={onBookClick}
        className="bg-pink-300 text-black px-4 py-2 rounded hover:bg-pink-400"
      >
        Book Now
      </button>
    </header>
  );
}

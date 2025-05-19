import React, { useState, useEffect } from "react";

function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 shadow-md">
      <h1 className="text-2xl font-bold tracking-widest">Ortus Tattoo</h1>
      <ul className="flex space-x-6">
        <li><a href="#gallery" className="hover:text-red-500">Gallery</a></li>
        <li><a href="#booking" className="hover:text-red-500">Book</a></li>
        <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
      </ul>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="ml-4 px-4 py-2 bg-gray-700 text-white rounded"
      >
        Toggle {theme === "dark" ? "Light" : "Dark"}
      </button>
    </nav>
  );
}

export default Navbar;

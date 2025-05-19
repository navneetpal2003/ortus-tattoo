import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-center py-6">
      <p>Ortus Tattoo Studio | 123 Ink Street | contact@ortustattoo.com</p>
      <p className="text-sm mt-2">© {currentYear} Ortus Tattoo. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

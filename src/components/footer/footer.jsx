import React from "react";
import footer_logo from "../../assets/download.png";
import instagram_icon from "../../assets/instagram_icon.png";
import pintrest from "../../assets/pintester_icon.png";
import whatsapp from "../../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="bg-amber-200 px-6 py-8 text-center md:text-left ">
      <div className="flex flex-col items-center md:flex-row md:justify-between mb-6">
        <div className="flex  items-center gap-3 mb-4 md:mb-0">
          <img src={footer_logo} alt="Logo" className="w-12 h-12" />
          <p className="text-xl font-bold text-align">SHOPPING E-CART</p>
        </div>

        <ul className="flex flex-col md:flex-row gap-4 text-base font-medium">
          <li className="hover:text-orange-500 cursor-pointer">Company</li>
          <li className="hover:text-orange-500 cursor-pointer">Products</li>
          <li className="hover:text-orange-500 cursor-pointer">Offices</li>
          <li className="hover:text-orange-500 cursor-pointer">About</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
        </ul>
      </div>

      <div className="flex justify-center md:justify-end gap-4 mb-6">
        {[instagram_icon, pintrest, whatsapp].map((icon, index) => (
          <div
            key={index}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition"
          >
            <img src={icon} alt="social-icon" className="w-6 h-6" />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center text-center">
        <hr className="border-gray-400 w-full max-w-m mb-4" />
        <p className="text-sm text-gray-700">
          © 2024 Shopping E-Cart — All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

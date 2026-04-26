import React from "react";
import myLogo from "@/assets/my_logo.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="border-t border-gray-300 w-100">
        <a href="#hero" className="cursor-pointer">
          <img
            src={myLogo}
            alt="Logo"
            className="w-10 h-10 mx-auto mt-5 mb-3 object-contain"
          />
        </a>
      </div>
      <div className="flex items-center justify-center flex-col py-5">
        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Xyrus John. All rights reserved.
        </div>
        <div className="text-center py-3 text-sm text-gray-500">
          Made with <span className="animate-pulse">❤️</span> in Philippines
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";
import button from "../assets/images/button.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    setIsAnimating(true);
    setIsOpen(!isOpen);

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="px-3 sm:px-8 py-2 mx-auto sticky top-0 bg-[rgba(249,249,249,1)] z-50">
      <div className="flex items-center justify-between">
        <img
          src={logo}
          alt="logo"
          className="w-[120px] h-[30px] md:w-[140px] md:h-[55px] mr-2"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-5 font-sans font-medium text-[16px] text-[rgba(34,31,29,1)]">
            <a href="#" className="hover:text-blue-500">
              HOME
            </a>
            <a href="#" className="hover:text-blue-500">
              ABOUT
            </a>
            <a href="#" className="hover:text-blue-500">
              SERVICES
            </a>
            <a href="#" className="hover:text-blue-500">
              PRODUCTS
            </a>
            <a href="#" className="hover:text-blue-500">
              BLOG
            </a>
            <a href="#" className="hover:text-blue-500">
              CONTACT
            </a>
          </nav>
          <img
            src={button}
            alt="button"
            className="w-[120px] lg:w-[169px] h-[50px] lg:h-[59px] cursor-pointer"
          />
        </div>

        {/* Mobile Icon with Animation */}
        <div
          className={`md:hidden cursor-pointer ${
            isAnimating ? "animate-hamburger" : ""
          }`}
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-[rgba(249,249,249,1)] rounded-b-lg px-4 space-y-4`}
      >
        <nav className="flex flex-col gap-4 font-sans font-medium text-[rgba(34,31,29,1)]">
          <a href="#" className="hover:text-blue-500">
            HOME
          </a>
          <a href="#" className="hover:text-blue-500">
            ABOUT
          </a>
          <a href="#" className="hover:text-blue-500">
            SERVICES
          </a>
          <a href="#" className="hover:text-blue-500">
            PRODUCTS
          </a>
          <a href="#" className="hover:text-blue-500">
            BLOG
          </a>
          <a href="#" className="hover:text-blue-500">
            CONTACT
          </a>
        </nav>
        <img
          src={button}
          alt="button"
          className="w-[100px] h-auto cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;

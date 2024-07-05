import React, { useState, useEffect } from "react";
import logo from "/images/logo.svg";
import cartIcon from "/images/icon-cart.svg";
import avatar from "/images/image-avatar.png";
import Mobile from "./Mobile";
import Cart from "../Cart/Cart";

const Header = ({ cartItems, removeFromCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    };

    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsScrolled(window.scrollY > 0);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`font-primary left-0 right-0 fixed top-0 z-50 transition-colors duration-500 ${
        isScrolled && !isMobile
          ? "bg-white bg-opacity-50 backdrop-blur-sm"
          : "bg-white bg-opacity-95"
      }`}
    >
      <div className="flex container justify-between py-4">
        <div className="flex items-center gap-3 md:gap-6 lg:gap-9">
          <button className="md:hidden" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <img src={logo} alt="Logo" />
          <div className="hidden md:flex">
            <ul className="flex gap-4 text-DarkGrayishBlue">
              <li className="hover:border-b-2 hover:border-b-primary">
                <a className="hover:text-veryDarkBlue font-semibold" href="#">
                  Collections
                </a>
              </li>
              <li className="hover:border-b-2 hover:border-b-primary">
                <a className="hover:text-veryDarkBlue font-semibold" href="#">
                  Men
                </a>
              </li>
              <li className="hover:border-b-2 hover:border-b-primary">
                <a className="hover:text-veryDarkBlue font-semibold" href="#">
                  Women
                </a>
              </li>
              <li className="hover:border-b-2 hover:border-b-primary">
                <a className="hover:text-veryDarkBlue font-semibold" href="#">
                  About
                </a>
              </li>
              <li className="hover:border-b-2 hover:border-b-primary">
                <a className="hover:text-veryDarkBlue font-semibold" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8 lg:gap-10 relative">
          <div className="relative">
            <img
              className="cursor-pointer"
              src={cartIcon}
              alt="Cart"
              onClick={toggleCart}
            />
            {cartItems.length > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-600 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </div>
            )}
          </div>
          <img
            className="w-full max-w-8 md:max-w-10 cursor-pointer hover:border-2 rounded-full border-primary"
            src={avatar}
            alt="Avatar"
          />
          {isCartOpen && (
            <div className="absolute top-full right-0">
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            </div>
          )}
        </div>
      </div>
      <hr className="border border-LightGrayishBlue" />
      <Mobile isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </div>
  );
};

export default Header;

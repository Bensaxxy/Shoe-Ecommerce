// src/components/Mobile.js
import React from "react";
import close from "/images/icon-close.svg";

const Mobile = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 bg-White`}
    >
      <button className="p-4 mb-8" onClick={onClose}>
        <img src={close} />
      </button>
      <ul className=" font-bold flex flex-col gap-4 p-4 text-veryDarkBlue">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Mobile;

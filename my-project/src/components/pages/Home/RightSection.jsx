import React, { useState } from "react";
import plus from "/images/icon-plus.svg";
import minus from "/images/icon-minus.svg";
import cartIcon from "/images/icon-cart-button.svg";

const RightSection = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      const item = {
        image: "/images/image-product-1-thumbnail.jpg",
        name: "Fall Limited Edition Sneakers",
        price: 125.0,
        quantity,
      };
      addToCart(item);
      setQuantity(0); // Reset quantity after adding to cart
    }
  };

  return (
    <div className=" px-4">
      <div>
        <p className="font-bold text-DarkGrayishBlue text-sm md:text-md">
          SNEAKER COMPANY
        </p>
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-veryDarkBlue my-6">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-DarkGrayishBlue text-md md:text-[18px] leading-8 font-semibold">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex justify-between lg:flex-col items-center lg:items-start">
          <h1 className="text-3xl md:text-2xl font-bold text-veryDarkBlue my-5">
            $125.00{" "}
            <span className="bg-veryDarkBlue py-1 px-3 text-white rounded-lg text-lg">
              50%
            </span>
          </h1>
          <p className=" text-DarkGrayishBlue font-semibold">
            <del>$250.00</del>
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 my-6">
        <div className="w-full flex items-center justify-between bg-LightGrayishBlue rounded-md gap-8 py-3 px-6">
          <img
            src={minus}
            className="cursor-pointer"
            onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
          />
          <span className="font-semibold text-veryDarkBlue">{quantity}</span>
          <img
            src={plus}
            className="cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
        <button
          className="bg-primary hover:bg-opacity-90 items-center drop-shadow-xl justify-center w-full py-3  font-bold rounded-md flex gap-4 text-veryDarkBlue"
          onClick={handleAddToCart}
        >
          <img src={cartIcon} alt="Cart Icon" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default RightSection;

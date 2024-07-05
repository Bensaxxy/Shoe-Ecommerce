import React from "react";
import deleteIcon from "/images/icon-delete.svg";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="relative z-50 font-primary">
      <div className=" absolute top-10 right-8">
        <div className=" w-[300px] bg-white shadow-xl py-8 px-4 rounded-lg">
          <h1 className="font-bold mb-4">Cart</h1>
          <hr className=" absolute left-0 border-1 w-full border-GrayishBlue" />
          {cartItems.length === 0 ? (
            <p className="text-md text-GrayishBlue font-bold text-center my-10">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex gap-2 my-8 items-center">
                <img
                  className="w-12 h-12 rounded-lg"
                  src={item.image}
                  alt="Product Thumbnail"
                />
                <div className="flex-grow">
                  <p className="text-sm text-gray-600">{item.name}</p>
                  <div className="flex gap-2 items-center">
                    <p className="text-sm text-gray-600">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <img
                  className="w-4 cursor-pointer"
                  src={deleteIcon}
                  alt="Delete Icon"
                  onClick={() => removeFromCart(index)}
                />
              </div>
            ))
          )}
          {cartItems.length > 0 && (
            <button className="w-full bg-primary text-white py-2 rounded-lg font-bold hover:bg-opacity-90">
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

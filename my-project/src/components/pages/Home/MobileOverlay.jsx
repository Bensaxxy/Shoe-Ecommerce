import React, { useState } from "react";
import leftArrow from "/images/icon-previous.svg";
import rightArrow from "/images/icon-next.svg";
import mainImage1 from "/images/image-product-1.jpg";
import mainImage2 from "/images/image-product-2.jpg";
import mainImage3 from "/images/image-product-3.jpg";
import mainImage4 from "/images/image-product-4.jpg";

const images = [mainImage1, mainImage2, mainImage3, mainImage4];

const MobileOverlay = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mb-10 mt-16">
      <div className="md:hidden">
        <div className="relative flex items-center">
          <img
            className="bg-white w-10 h-10 p-3 absolute left-2 md:left-5 hover:text-primary rounded-full cursor-pointer z-10"
            src={leftArrow}
            onClick={handlePreviousClick}
            alt="Previous"
          />
          <img
            className="rounded-lg w-full object-cover cursor-pointer"
            src={images[currentImageIndex]}
            alt="Product"
          />
          <img
            className="bg-white w-10 h-10 p-3 absolute right-2 md:right-5 hover:text-primary rounded-full cursor-pointer z-10"
            src={rightArrow}
            onClick={handleNextClick}
            alt="Next"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileOverlay;

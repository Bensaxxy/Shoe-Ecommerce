import React, { useState } from "react";
import leftArrow from "/images/icon-previous.svg";
import rightArrow from "/images/icon-next.svg";
import close from "/images/icon-close.svg";

const images = [
  {
    full: "/images/image-product-1.jpg",
    thumb: "/images/image-product-1-thumbnail.jpg",
  },
  {
    full: "/images/image-product-2.jpg",
    thumb: "/images/image-product-2-thumbnail.jpg",
  },
  {
    full: "/images/image-product-3.jpg",
    thumb: "/images/image-product-3-thumbnail.jpg",
  },
  {
    full: "/images/image-product-4.jpg",
    thumb: "/images/image-product-4-thumbnail.jpg",
  },
];

const Overlay = ({ currentImage, setCurrentImage, handleClose }) => {
  const [currentIndex, setCurrentIndex] = useState(
    images.findIndex((img) => img.full === currentImage)
  );

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex].full);
  };

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex].full);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setCurrentImage(images[index].full);
  };

  return (
    <div className="fixed container h-screen inset-0  flex items-center justify-center z-50">
      <div className="relative hidden md:block ">
        <button
          className="absolute hidden md:block -top-5 z-50 -right-6 text-primary text-4xl font-bold"
          onClick={handleClose}
        >
          <img src={close} />
        </button>
        <div className="relative flex items-center">
          <img
            className="bg-white w-10 h-10 p-3 absolute left-2 md:-left-5 hover:text-primary rounded-full cursor-pointer"
            src={leftArrow}
            onClick={handlePrevious}
            alt="Previous"
          />
          <img
            className="rounded-lg w-full max-w-[60vh] object-cover cursor-pointer"
            src={images[currentIndex].full}
            alt="Main Product"
          />
          <img
            className="bg-white w-10 h-10 p-3 absolute right-2 md:-right-5 hover:text-primary rounded-full cursor-pointer"
            src={rightArrow}
            onClick={handleNext}
            alt="Next"
          />
        </div>
        <div className=" md:flex hidden gap-6 w-full max-w-[62px] items-center justify-between mt-4">
          {images.map((img, index) => (
            <img
              key={index}
              className={`rounded-lg cursor-pointer ${
                currentIndex === index ? "border-2 border-primary" : ""
              }`}
              src={img.thumb}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overlay;

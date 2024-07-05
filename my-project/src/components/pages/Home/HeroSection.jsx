import React, { useState } from "react";
import heroimg from "/images/image-product-1.jpg";
import image1 from "/images/image-product-1-thumbnail.jpg";
import image2 from "/images/image-product-2-thumbnail.jpg";
import image3 from "/images/image-product-3-thumbnail.jpg";
import image4 from "/images/image-product-4-thumbnail.jpg";
import RightSection from "./RightSection";
import Overlay from "./Overlay";
import MobileOverlay from "./MobileOverlay";

const HeroSection = ({ addToCart }) => {
  const [currentImage, setCurrentImage] = useState(heroimg);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const images = [
    { src: image1, full: heroimg },
    { src: image2, full: "/images/image-product-2.jpg" },
    { src: image3, full: "/images/image-product-3.jpg" },
    { src: image4, full: "/images/image-product-4.jpg" },
  ];

  const handleThumbnailClick = (image) => {
    setCurrentImage(image.full);
  };

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className="font-primary">
      <div className="hidden md:block container mt-28 mb-10 relative">
        <div
          className={`lg:block ${
            isOverlayVisible ? " opacity-50" : "opacity-100"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-center">
            <div className="flex flex-col items-center">
              <img
                className="rounded-lg w-full object-cover cursor-pointer"
                src={currentImage}
                alt="Product"
                onClick={toggleOverlay}
              />
              <div className="flex w-full justify-between mt-4">
                {images.map((image, index) => (
                  <img
                    key={index}
                    className={`w-full rounded-lg max-w-[100px] cursor-pointer ${
                      currentImage === image.full
                        ? "border-2 border-primary bg-gray-200"
                        : ""
                    } hover:border-2 hover:border-primary`}
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => handleThumbnailClick(image)}
                  />
                ))}
              </div>
            </div>
            <div>
              <RightSection addToCart={addToCart} />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <MobileOverlay />
        <RightSection addToCart={addToCart} />
      </div>
      {isOverlayVisible && (
        <>
          <div className="fixed inset-0 bg-black opacity-75 z-40"></div>
          <Overlay
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            handleClose={toggleOverlay}
          />
        </>
      )}
    </div>
  );
};

export default HeroSection;

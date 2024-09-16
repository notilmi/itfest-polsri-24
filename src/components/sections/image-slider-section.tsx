import React, { useState, useEffect } from 'react';

const ImageSlider: React.FC = () => {
  const images = [
    '/slider/slider1.jpg',
    '/slider/slider2.jpg',
    '/slider/slider3.jpg',
    '/slider/slider4.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8">
      {/* Tombol untuk slide sebelumnya */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 md:p-4 rounded-full focus:outline-none"
        onClick={prevSlide}
      >
        ❮
      </button>

      <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tombol untuk slide berikutnya */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 md:p-4 rounded-full focus:outline-none"
        onClick={nextSlide}
      >
        ❯
      </button>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 md:mx-2 rounded-full ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MultiCarouselProps {
  images: string[];
  slidesToShow?: number;
}

export default function MultiCarousel({ images, slidesToShow = 3 }: MultiCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % (images.length - slidesToShow + 1));
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + (images.length - slidesToShow + 1)) % (images.length - slidesToShow + 1));
  };

  return (
    <div className="relative group">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 gap-5" 
          style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}>
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-none w-[calc(100%/3-1rem)]"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        disabled={currentIndex === images.length - slidesToShow}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

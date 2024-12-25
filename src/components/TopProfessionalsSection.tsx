"use client";

import React, { useState, useEffect } from "react";
import professionalsData from "@/data/professionalsData.json";
import Image from "next/image";

const TopProfessionalsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); // Prevent rapid consecutive scrolling
  const [touchStartX, setTouchStartX] = useState(0);

  const SCROLL_DELAY = 500; // Delay in ms to prevent rapid scrolling

  // Go to the next card in the carousel
  const nextSlide = () => {
    if (isScrolling) return; // Prevent scrolling while animation completes
    setIsScrolling(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === professionalsData.length - 3 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsScrolling(false), SCROLL_DELAY); // Allow scrolling after delay
  };

  // Go to the previous card in the carousel
  const prevSlide = () => {
    if (isScrolling) return; // Prevent scrolling while animation completes
    setIsScrolling(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? professionalsData.length - 3 : prevIndex - 1
    );
    setTimeout(() => setIsScrolling(false), SCROLL_DELAY); // Allow scrolling after delay
  };

  // Automatic scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle mouse wheel scrolling
  const handleWheel = (event: React.WheelEvent) => {
    if (isScrolling) return; // Prevent rapid scrolls
    if (event.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  // Handle touch start (track initial touch position)
  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStartX(event.touches[0].clientX);
  };

  // Handle touch end (compare final position to determine direction)
  const handleTouchEnd = (event: React.TouchEvent) => {
    const touchEndX = event.changedTouches[0].clientX;
    if (touchEndX - touchStartX > 50) {
      prevSlide(); // Swipe right
    } else if (touchStartX - touchEndX > 50) {
      nextSlide(); // Swipe left
    }
  };

  return (
    <section
      className="top-professionals bg-white py-16 px-8 md:px-16"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h2 className="text-3xl font-bold text-black text-center mb-8">
        And Other Top Professionals.
      </h2>

      {/* Cards Display */}
      <div className="flex justify-center space-x-8 overflow-hidden transition-transform duration-300">
        {professionalsData.slice(currentIndex, currentIndex + 3).map((professional) => (
          <div
            key={professional.id}
            className="card bg-white p-6 rounded-2xl shadow-xl text-left w-full md:w-[380px] lg:w-[380px] xl:w-[380px] flex-shrink-0 border"
          >
            <Image
              src={professional.photo}
              alt={professional.name}
              width={350}
              height={230}
              className="object-cover rounded-2xl mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{professional.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{professional.qualification}</p>
            <p className="text-lg font-bold text-gray-600">{professional.yearsOfExperience} Years of Experience</p>
            <p className="text-lg font-bold text-gray-600">{professional.casesSolved} Cases Solved</p>
          </div>
        ))}
      </div>

      {/* Buttons for Manual Controls */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={prevSlide}
          className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default TopProfessionalsSection;

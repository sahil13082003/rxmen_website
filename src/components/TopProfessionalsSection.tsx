"use client";

import React, { useState, useEffect } from "react";
import professionalsData from "@/data/professionalsData.json";
import Image from "next/image";

const TopProfessionalsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); // Prevent rapid scrolling

  const SCROLL_DELAY = 700; // Delay between slides
  const SLIDE_WIDTH = 420; // Width of each card including margin

  // Transition to the next slide
  const nextSlide = () => {
    if (isScrolling) return; // Prevent overlapping transitions
    setIsScrolling(true);
    setCurrentIndex((prevIndex) =>
      prevIndex < professionalsData.length - 1 ? prevIndex + 1 : 0 // Loop back to start
    );
    setTimeout(() => setIsScrolling(false), SCROLL_DELAY);
  };

  // Transition to the previous slide
  const prevSlide = () => {
    if (isScrolling) return; // Prevent overlapping transitions
    setIsScrolling(true);
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : professionalsData.length - 1 // Loop to the end
    );
    setTimeout(() => setIsScrolling(false), SCROLL_DELAY);
  };

  const handleWheel = (event: React.WheelEvent) => {
    // if (isScrolling) return; // Prevent rapid scrolls
  
    // Multiply deltaX by a factor to increase scroll speed
    const scrollSpeed = 5; // Increase or decrease this value to control the speed
  
    if (event.deltaX * scrollSpeed > 0) {
      nextSlide(); // Scroll forward on right scroll
    } else if (event.deltaX * scrollSpeed < 0) {
      prevSlide(); // Scroll backward on left scroll
    }
  };
  
  
  

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="relative bg-white py-16 px-8 md:px-16 overflow-hidden">
      <h2 className="text-3xl font-bold text-black text-center mb-8">
        And Other Top Professionals.
      </h2>

      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * SLIDE_WIDTH}px)` }}
        onWheel={handleWheel} // Enable mouse wheel scrolling
      >
        {professionalsData.map((professional) => (
          <div
            key={professional.id}
            className="bg-white p-6 rounded-2xl shadow-xl text-left w-[380px] flex-shrink-0 border mx-4"
          >
            {/* Professional Image */}
            <Image
              src={professional.photo}
              alt={professional.name}
              width={350}
              height={230}
              className="object-cover rounded-2xl mx-auto mb-4"
            />

            {/* Professional Details */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {professional.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              {professional.qualification}
            </p>
            <p className="text-lg font-bold text-gray-600">
              {professional.yearsOfExperience} Years of Experience
            </p>
            <p className="text-lg font-bold text-gray-600">
              {professional.casesSolved} Cases Solved
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProfessionalsSection;

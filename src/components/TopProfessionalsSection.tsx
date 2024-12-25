"use client";

import React, { useState, useEffect } from "react";
import professionalsData from "@/data/professionalsData.json"; // Import data
import Image from 'next/image'; // Use Image component from Next.js

const TopProfessionalsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // state to track current index

  // Go to the next card in the carousel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === professionalsData.length - 3 ? 0 : prevIndex + 1
    );
  };

  // Go to the previous card in the carousel
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? professionalsData.length - 3 : prevIndex - 1
    );
  };

  // Automatic scrolling using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Automatically go to the next slide
    }, 5000); // Adjust the delay (5000ms = 5 seconds)

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="top-professionals bg-white py-16 px-8 md:px-16">
      <h2 className="text-3xl font-bold text-black text-center mb-8">
        And Other Top Professionals.
      </h2>

      {/* Cards Display */}
      <div className="flex justify-center space-x-8 overflow-hidden">
        {professionalsData.slice(currentIndex, currentIndex + 3).map((professional) => (
          <div
            key={professional.id}
            className="card bg-white p-6 rounded-2xl shadow-xl text-left w-full md:w-[380px] lg:w-[380px] xl:w-[380px] flex-shrink-0 border"
          >
            <Image
              src={professional.photo} // The path to the image
              alt={professional.name}
              width={350} // Control the image size here for responsiveness
              height={230} // Image height for the aspect ratio
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

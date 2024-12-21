// File: HeroSectionBengaluru.tsx
"use client"; // Mark this as a client component
import Image from 'next/image';

import React, { useState } from "react";
import contentBengaluru from "@/data/content_Banguluru.json"; // Import the Bengaluru-specific content

const HeroSectionBengaluru: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState(""); // State for mobile number
  const [isValid, setIsValid] = useState(false); // Initially invalid until 10 digits are entered
  const [submitted, setSubmitted] = useState(false); // To track form submission

  const handleMobileNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formattedValue = value.replace(/[^0-9]/g, ''); // Strip non-numeric characters
    setMobileNumber(formattedValue);

    // Set validity based on the length of the mobile number (10 digits)
    if (formattedValue.length === 10) {
      setIsValid(true); // Valid 10-digit input
    } else {
      setIsValid(false); // Invalid input
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    if (isValid) {
      console.log("Form Submitted! Mobile Number:", mobileNumber);
    }
  };

  return (
    <section className="hero-container flex flex-col md:flex-row items-center justify-between bg-blue-100 p-8 rounded-2xl">
      <div className="content flex-1 text-left w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          {contentBengaluru.title}
        </h1>
        <h2 className="text-lg mb-4">{contentBengaluru.subtitle}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mobile-input mb-4 flex flex-wrap items-center">
            {/* +91 block */}
            <div className="prefix flex items-center justify-center bg-gray-200 text-gray-600 text-lg px-3 py-2 rounded-l">
              +91
            </div>

            {/* Mobile number input block */}
            <input
              type="text"
              id="mobile"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              maxLength={10} // Allow up to 10 digits
              placeholder="Enter a 10-Digit Mobile No."
              className={`flex-1 min-w-0 p-3 border ${!isValid && submitted ? "border-red-500" : "border-gray-300"
                } rounded-r`}
            />
          </div>


          {/* Error message for invalid mobile number */}
          {!isValid && submitted && (
            <p className="text-red-500 text-sm">This field must have exactly 10 numbers.</p>
          )}

          <div className="terms-checkbox mb-6">
            <input type="checkbox" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-gray-700">I agree to the terms and conditions*</label>
          </div>

          <div>
            <button
              type="submit"
              className={`bg-blue-500 text-white px-6 py-2 rounded w-70 ${!isValid ? 'bg-gray-300 cursor-not-allowed' : 'hover:bg-blue-700'}`}
              disabled={!isValid} // Button is disabled until the mobile number is valid (10 digits)
            >
              {contentBengaluru.buttonText}
            </button>
          </div>
        </form>
      </div>

      <div className="image flex-1 mt-8 md:mt-0 w-full">
        <Image
          src={contentBengaluru.imageUrl}
          alt="Doctor"
          width={600} // Add appropriate width
          height={400} // Add appropriate height
          className="w-full md:w-3/4 mx-auto object-cover"
          priority // Optionally optimize loading
        />
      </div>

    </section>
  );
};

export default HeroSectionBengaluru;

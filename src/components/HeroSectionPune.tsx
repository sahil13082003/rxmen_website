// File: HeroSectionPune.tsx

"use client"; // Mark this as a client component
import Image from 'next/image';


import React, { useState } from "react";
import contentPune from "@/data/content_Pune.json"; // Import the Pune-specific content

const HeroSectionPune: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState(""); // State for mobile number
  const [isValid, setIsValid] = useState(false); // Initially set to false (button disabled by default)
  const [submitted, setSubmitted] = useState(false); // To track form submission

  const handleMobileNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formattedValue = value.replace(/[^0-9]/g, ''); // Strip non-numeric characters
    setMobileNumber(formattedValue);

    // Set validity based on length of the mobile number
    if (formattedValue.length === 10) {
      setIsValid(true); // Valid input
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
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          {contentPune.title}
        </h1>
        {/* <h2 className="text-2xl font-bold mb-4">{contentPune.subtitle}</h2> */}
        <p className="text-gray-700 mb-6">{contentPune.description}</p>

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
              disabled={!isValid} // Button is disabled until the mobile number is valid
            >
              {contentPune.buttonText}
            </button>
          </div>
        </form>
      </div>

      <div className="image flex-1 mt-8 md:mt-0 w-full">
        <Image
          src={contentPune.imageUrl}
          alt="Doctor"
          width={600} // Replace with actual dimensions
          height={400} // Replace with actual dimensions
          className="w-full md:w-3/4 mx-auto object-cover"
          priority // Optimize loading if needed
        />
      </div>

    </section>
  );
};

export default HeroSectionPune;

import React from "react";
import cardData from "@/data/rxmenBenefits.json";
import Image from 'next/image';  // Using Next.js Image component

const RxMenHelpSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title with underline */}
        <div className="text-left mb-8">
          <h2 className="text-4xl font-bold text-gray-800">
            How Does <span className="text-blue-600">RxMen</span> Help Couples
          </h2>
          <div className="w-28 h-1 bg-blue-500 mt-2"></div>
          <br />
          <div>Benefits Of RxMen Sex Therapy For Couples</div>
        </div>

        {/* Content: Cards and Image */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          {/* Left: Cards Section */}
          <div className="w-full lg:w-1/2 space-y-6 mb-8 lg:mb-0">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="flex items-start border rounded-lg shadow-md p-4 bg-gray-200"
              >
                <Image
                  src={card.image} // Source for each card image
                  alt={card.title}
                  width={48} // Adjust width as per your design
                  height={48} // Adjust height accordingly
                  className="mr-4 flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image Section */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/Images/Clip+path+group.webp"
              alt="Couples Therapy"
              width={500} // Adjust width accordingly
              height={300} // Adjust height accordingly
              className="rounded-lg shadow-lg hidden md:block"
            />
          </div>
        </div>

        {/* Centered Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition">
            TALK WITH OUR EXPERT
          </button>
        </div>
      </div>
    </section>
  );
};

export default RxMenHelpSection;

import React from "react";
import cardData from "@/data/sexologistDetails.json";

const SexologistSection: React.FC = () => {
  return (
    <section className="py-5 px-4 md:px-16">
      <div className="w-full mx-auto bg-blue-200 p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Who Is a Sexologist?
          <div className="mt-4 mx-auto w-1/4 border-t-4 border-blue-300"></div>
        </h2>

        {/* Paragraphs */}
        <div className="mb-10 text-left">
          <p className="text-gray-700 mb-4">
            A sexologist is a specialized healthcare professional who focuses
            on sexual health and related concerns, assisting individuals with
            issues like erectile dysfunction, premature ejaculation, low
            libido, and sexual pain. By offering a mix of therapy, medical
            treatments, and lifestyle changes, they work to improve both sexual
            health and overall well-being.
          </p>
          <p className="text-gray-700">
            When searching for the "best sexologist near me", it's important to
            choose a licensed professional with extensive experience in
            addressing sexual health issues. Many top sexologists adopt a
            holistic approach, addressing both the physical and emotional
            aspects of sexual challenges to ensure comprehensive care. By
            seeking the help of a qualified sexologist, you can achieve
            long-lasting improvements in your sexual health and quality of
            life.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="border rounded-lg shadow-lg p-6 bg-white h-auto"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-16 h-16 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 break-words">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SexologistSection;

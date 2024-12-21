import React from "react";
import testimonialsData from "@/data/testimonials.json"; // Adjust the path according to your project structure
import Image from "next/image";

const TestimonialsSection = () => {
  return (
    <section className="testimonials py-16 px-8 md:px-16">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Testimonials
          <div className="mt-2 mx-auto w-1/6 border-t-4 border-blue-400"></div>
        </h2>

        {/* Testimonials Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card bg-white p-6 rounded-lg shadow-lg h-[380px] relative"
            >
              {/* Circle in top-right corner */}
              <div className="absolute top-1 right-0 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center right-1">
                {/* Quote Image */}
                <Image
                  src="/Images/quote.png"
                  alt="Quote"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Profile Image */}
              <Image
                src={testimonial.profileImage}
                alt={`Profile of ${testimonial.userId}`}
                width={64} // Width for the profile image
                height={64} // Height for the profile image
                className="object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.userId}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

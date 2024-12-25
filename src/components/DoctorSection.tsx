import React from 'react';
import Image from 'next/image'; // Import the Image component
import doctorData from '@/data/doctorData.json'; // Importing the JSON data

const DoctorSection: React.FC = () => {
    const { doctor } = doctorData; // Destructuring to get data

    return (
        <section className="w-full h-auto doctor-section py-2 px-8 md:px-16 flex items-center">
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
                {/* Left Section: Image */}
                <div className="flex-1 mb-16 md:mb-0 flex-shrink-0">
                    <Image
                        src={doctor.imageUrl}
                        alt={doctor.name}
                        width={400} // Set maximum width
                        height={400} // Keep an approximate square ratio for alignment
                        className="w-full h-auto max-w-[400px] object-cover rounded-lg"
                        priority // Add priority loading for better performance
                    />
                </div>

                {/* Right Section: Text Content */}
                <div className="w-full flex-1 text-center md:text-left space-y-6">
                    <h2 className="text-4xl md:text-4xl font-bold text-black-800 mb-8">
                        {doctor.title} {/* Title centered at the top */}
                    </h2>
                    <h3 className="text-xl font-semibold text-black-600">
                        {doctor.name} {/* Using name from JSON */}
                    </h3>
                    <p className="text-sm text-black-700 mb-4">
                        {doctor.qualification} {/* Using qualification from JSON */}
                    </p>

                    <p className="text-lg text-gray-600 mb-6">
                        {doctor.description} {/* Using description from JSON */}
                    </p>

                    {/* Professional Experience Button */}
                    <button className="h-14 bg-blue-600 text-white py-4 px-6 rounded-full text-2xl font-semibold hover:bg-blue-700 transition">
                        {doctor.experience} {/* Using experience from JSON */}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DoctorSection;

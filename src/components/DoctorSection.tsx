import React from 'react';
import doctorData from '@/data/doctorData.json'; // Importing the JSON data

const DoctorSection: React.FC = () => {
    const { doctor } = doctorData; // Destructuring to get data

    return (
        <section className="doctor-section bg-blue-50 py-16 px-8 md:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
                {/* Left Section: Image */}
                <div className="flex-1 mb-8 md:mb-0 flex-shrink-0">
                    <img
                        src={doctor.imageUrl} // Using data from JSON
                        alt={doctor.name} // Using name from JSON
                        className="w-full max-w-xs md:max-w-96 h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Section: Text Content */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h2 className="text-4xl font-bold text-gray-800">
                        {doctor.title} {/* Using title from JSON */}
                    </h2>
                    <h3 className="text-xl font-semibold text-gray-600">
                        {doctor.name} {/* Using name from JSON */}
                    </h3>
                    <p className="text-sm text-gray-700 mb-4">
                        {doctor.qualification} {/* Using qualification from JSON */}
                    </p>

                    <p className="text-lg text-gray-600 mb-6">
                        {doctor.description} {/* Using description from JSON */}
                    </p>

                    {/* Professional Experience Button */}
                    <button className="h-28 bg-blue-600 text-white py-4 px-6 rounded-full text-2xl font-semibold hover:bg-blue-700 transition">
                        {doctor.experience} {/* Using experience from JSON */}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DoctorSection;

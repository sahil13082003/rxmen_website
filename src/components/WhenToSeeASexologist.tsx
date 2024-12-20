import React from "react";
import data from "@/data/when-to-see-data.json";

interface CardData {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const WhenToSeeASexologist: React.FC = () => {
    const cardsData: CardData[] = data;

    return (
        <section className="when-to-see py-16 px-8 md:px-160">
            <div className="w-full mx-auto bg-blue-200  p-8 rounded-lg shadow-lg">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-12">
                    <span className="text-blue-600">When Should</span> I See A Sexologist?
                    <div className="mt-2 mx-auto w-1/4 border-t-4 border-blue-600"></div>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cardsData.map((card) => (
                        <div
                            key={card.id}
                            className="card bg-white p-6 rounded-lg shadow-lg h-[450px] sm:h-[380px]">
                            <img
                                src={card.imageUrl}
                                alt={card.title}
                                className="w-16 h-16 object-cover rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhenToSeeASexologist;

import React from "react";

const UnderstandingSexologist: React.FC = () => {
    return (
        <section className="w-full understanding-sexologist py-5 px-8 md:px-16">
            <div className="w-full mx-auto bg-blue-200 p-8 rounded-lg shadow-lg">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-6">
                    <span className="text-blue-600">The Importance</span> of a Sexologist
                    <div className="mt-4 mx-auto w-1/4 border-t-4 border-blue-300"></div>
                </h2>

                {/* Paragraphs */}
                <p className="text-gray-700 text-base mb-6 leading-relaxed">
                    A sexologist plays a vital role in helping individuals understand and enhance their sexual health. Sexual concerns often carry emotional, psychological, and relational implications, and a sexologist is trained to address these complex issues with empathy and professionalism.
                </p>
                <p className="text-gray-700 text-base mb-6 leading-relaxed">
                    A sexologist is not just someone who diagnoses physical concerns but also helps people navigate deeper issues that affect their emotional and mental well-being. Whether you are struggling with your sexual identity, going through relationship difficulties, or experiencing physical challenges, a sexologist offers expert advice and support to tackle these concerns. With their guidance, you can receive personalized recommendations, boost your overall well-being, and strengthen your relationships.
                </p>
                <p className="text-gray-700 text-base mb-6 leading-relaxed">
                    Sexologists note that factors like retirement, caregiving, and empty nest syndrome can impact sexual dysfunction in later life. While some individuals find new fulfillment and intimacy, others may experience relationship drift and reveal long-ignored gaps.
                </p>
                <p className="text-gray-700 text-base mb-6 leading-relaxed">
                    <a
                        href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7033943/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Reference-NCBI
                    </a>
                </p>

                <p className="text-gray-700 text-base mb-6 leading-relaxed">
                    A consultation with a sexologist in Pune opens the door to discussions that might otherwise feel too sensitive or embarrassing. They provide a space where you can openly talk about sexual health concerns, without fear of judgment. Their role is to help you uncover the root causes of your challenges and provide actionable, research-backed solutions.
                </p>
            </div>
        </section>
    );
};

export default UnderstandingSexologist;

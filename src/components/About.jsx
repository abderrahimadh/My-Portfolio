import React from "react";
import AboutImage from "../assets/aboutme-image.png";


const About = () => {
    return (
        <div className="bg-black text-white py-20" id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <img
                        src={AboutImage}
                        alt="A picture representing Abderrahim ADHAOUR"
                        className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
                    />
                    <div className="flex-1">
                        <p className="text-lg mb-8">
                            I'm Abderrahim ADHAOUR, a second-year student at Mohammedia School of Engineering,
                            diving deep into the realms of Computer Science and Digitalization. Fueled by a
                            passion for DevOps and Cloud Engineering, I'm constantly honing my skills through
                            competitive programming challenges and hands-on experiences.
                        </p>
                        <div className="mt-12 flex justify-between text-center">
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">2nd</h3>
                                <p>Year in EMI</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">3+</h3>
                                <p>Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

import React from "react";

const services = [
  {
    id: 1,
    title: "Mobile App Developer",
    description: "I am a Mobile App Developer proficient in creating cross-platform\n" +
        "              mobile applications using Flutter. I leverage the power of Android\n" +
        "              Studio to develop and optimize Android-specific features, ensuring\n" +
        "              a top-notch user experience.",
  },
  {
    id: 2,
    title: "Web Developer",
    description: "As a skilled web developer, I specialize in creating dynamic and\n" +
        "              user-friendly websites that engage and captivate users. With\n" +
        "              expertise in front-end and back-end technologies, ensuring\n" +
        "              responsive designs and smooth functionality.",
  },
  {
    id: 3,
    title: "UI/UX Developer",
    description: "I am a skilled UI/UX Developer with a passion for creating\n" +
        "              visually stunning and user-friendly digital experiences. My\n" +
        "              expertise lies in using industry-standard design tools such as\n" +
        "              Figma, Photoshop, and Illustrator.",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
              <div
                  key={service.id}
                  className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
              transition-transform duration-300 hover:scale-105"
              >
                <div
                    className="text-right text-2xl font-bold text-transparent bg-clip-text
              bg-gradient-to-r from-green-600 to-blue-400"
                >
                  {service.id}
                </div>
                <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text
              bg-gradient-to-r from-green-400 to-blue-500">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-300">{service.description}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;

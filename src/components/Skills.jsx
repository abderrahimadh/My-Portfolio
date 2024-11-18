import React from "react";
import Marquee from "react-fast-marquee";

import HtmlLogo from "../assets/logos/tools/html-logo.webp";
import CssLogo from "../assets/logos/tools/css-logo.webp";
import ReactLogo from "../assets/logos/tools/react-logo.webp";
import NodeLogo from "../assets/logos/tools/node-logo.webp";
import TailwindLogo from "../assets/logos/tools/tailwind-logo.webp";
import javaLogo from "../assets/logos/tools/java.webp";
import bootstrapLogo from "../assets/logos/tools/bootstrap.webp";
import expressjsLogo from "../assets/logos/tools/expressjs.webp";
import javascriptLogo from "../assets/logos/tools/javascript.webp";
import mongoLogo from "../assets/logos/tools/mongo.webp";
import mysqlLogo from "../assets/logos/tools/mysql.webp";
import phpLogo from "../assets/logos/tools/php.webp";
import pythonLogo from "../assets/logos/tools/python.webp";
import vscodeLogo from "../assets/logos/env/vscode.webp";
import webstormLogo from "../assets/logos/env/webstorm.webp";
import intellijLogo from "../assets/logos/env/ij.webp";
import figmaLogo from "../assets/logos/env/figma.webp";
import NextjsLogo from "../assets/logos/tools/nextjs-logo.png";
import PostgresLogo from "../assets/logos/tools/postgres-logo.png";
import angularLogo from "../assets/logos/tools/angular.png";
import springbootLogo from "../assets/logos/tools/springboot.webp";
import canvaLogo from "../assets/logos/env/canva.webp";
import pcLogo from "../assets/logos/env/pc.webp";
import githubLogo from "../assets/logos/env/github.webp";
import gitLogo from "../assets/logos/env/git.webp";


const Skills = () => {
    const tools = [
        { name: "HTML", logo: HtmlLogo },
        { name: "CSS", logo: CssLogo },
        { name: "React", logo: ReactLogo },
        { name: "Node.js", logo: NodeLogo },
        { name: "Tailwind CSS", logo: TailwindLogo },
        { name: "PostgreSQL", logo: PostgresLogo },
        { name: "Nextjs", logo: NextjsLogo },
        { name: "Java", logo: javaLogo },
        { name: "Expressjs", logo: expressjsLogo },
        { name: "Bootstrap", logo: bootstrapLogo },
        { name: "Javascript", logo: javascriptLogo },
        { name: "MySQL", logo: mysqlLogo },
        { name: "Mongo", logo: mongoLogo },
        { name: "Php", logo: phpLogo },
        { name: "Python", logo: pythonLogo },
        { name: "Springboot", logo: springbootLogo },
        { name: "Angular", logo: angularLogo },
    ];
    const envs = [
        { name: "Vscode", logo: vscodeLogo },
        { name: "Webstorm", logo: webstormLogo },
        { name: "Intellij IDEA", logo: intellijLogo },
        { name: "Figma", logo: figmaLogo },
        { name: "Canva", logo: canvaLogo },
        { name: "PostgreSQL", logo: pcLogo },
        { name: "Github", logo: githubLogo },
        { name: "Git", logo: gitLogo },
    ];

    return (
        <div className="bg-black text-white py-20" id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My  Skills</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="flex-1">
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-4">Languages & Frameworks</h3>
                            <Marquee speed={100} pauseOnHover={false}>
                                <div className="flex gap-10">
                                    {tools.map((tool, index) => (
                                        <div key={index} className="flex flex-col items-center">
                                            <img
                                                src={tool.logo}
                                                alt={`${tool.name} Logo`}
                                                className="w-16 h-16 object-contain"
                                            />
                                            <p className="mt-2 text-sm">{tool.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </Marquee>
                        </div>
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-4">Tools & Environments</h3>
                            <Marquee speed={0} pauseOnHover={false}>
                                <div className="flex gap-10">
                                    {envs.map((tool, index) => (
                                        <div key={index} className="flex flex-col items-center">
                                            <img
                                                src={tool.logo}
                                                alt={`${tool.name} Logo`}
                                                className="w-16 h-16 object-contain"
                                            />
                                            <p className="mt-2 text-sm">{tool.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

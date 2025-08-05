
"use client";
import { useState, useEffect } from "react";

// RotatingPhrase component for animated changing phrases
const rotatingPhrases = [
    "what you need",
    "what you want",
    "what you deserve"
];

function RotatingPhrase() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % rotatingPhrases.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);
    return (
        <span className="absolute right-0 text-2xl mt-4 mr-5 transition-all duration-500" key={index}>
            *{rotatingPhrases[index]}
        </span>
    );
}

const services = [
    {
        label: "Mobile",
        description: "We craft secure, intuitive and beautifully designed mobile apps that bring your ideas to people’s pockets."
    },
    {
        label: "Web",
        description: "From internal tools to public platforms, we build secure, scalable, and modern web apps tailored to your workflow and brand."
    },
    {
        label: "Branding",
        description: "We shape brands that speak clearly. Distinctive, aligned, and built to connect."
    },
    {
        label: "Blockchain & Web3",
        description: "We develop decentralized apps and smart contracts with transparency and security at their core."
    }
];

export default function Services({ contactRef, setCurrentSection }) {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleIndex = (idx) => {
        setOpenIndexes((prev) =>
            prev.includes(idx)
                ? prev.filter((i) => i !== idx)
                : [...prev, idx]
        );
    };

    return (
        <div className="flex flex-col bg-black w-full relative h-full">
            <div className="flex flex-col">
                <div className="flex flex-row mt-24 gap-84 text-white sf-pro-bold text-7xl">
                    <span>Design</span>
                    <span>&</span>
                    <span>Develop*</span>
                    <RotatingPhrase />
                </div>

                <div className="w-full bg-white h-2 mt-8"></div>
                {services.map((service, idx) => (
                    <div key={service.label} className="flex flex-col mb-4 mt-8 gap-2 text-white sf-pro text-5xl">
                        <button
                            className="text-left focus:outline-none gap-2 flex items-center"
                            onClick={() => toggleIndex(idx)}
                            aria-expanded={openIndexes.includes(idx)}
                            style={{ background: "none", border: "none", padding: 0, color: "inherit", font: "inherit", cursor: "pointer" }}
                        >
                            <span className={`transition-transform duration-200 ${openIndexes.includes(idx) ? "rotate-45" : "rotate-0"}`}>+</span>
                            <span>{service.label}</span>
                        </button>
                        {openIndexes.includes(idx) && (
                            <div className="text-white text-2xl sf-pro mt-2 ml-4 transition-all duration-200">
                                {service.description}
                            </div>
                        )}
                        <div className="w-full bg-white h-1 mt-4"></div>

                    </div>
                ))}
                <span className="text-white text-2xl sf-pro transition-all duration-200 w-full text-center absolute bottom-0 mb-8">
                    Let’s build something that lasts. Have an idea, product, or process that needs transforming?
                    <span onClick={() => { contactRef.current.scrollIntoView({ behavior: "smooth" }); setCurrentSection('contact'); }} className="cursor-pointer ml-1">
                        [Let's talk].
                    </span>
                </span>

            </div>
        </div>
    );
}
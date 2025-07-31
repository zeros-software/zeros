"use client";
import { useState, useEffect } from "react";
import Menu from "@/components/Menu";
import Logo from "../../assets/zeros.png";
import Image from "next/image";

export default function Services() {
    const [whiteLogo, setWhiteLogo] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setWhiteLogo(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col bg-black">
            <Menu active="Services" />
            <div className="flex flex-col mx-auto">
                <Image
                    src={Logo}
                    alt="Logo"
                    className={`justify-center items-center flex transition-all duration-700 ${whiteLogo ? "filter brightness-0 invert" : ""
                        }`}
                />
                <div className="flex flex-row mt-12 gap-84 text-white sf-pro-bold text-7xl">
                    <span>Design</span>
                    <span>&</span>
                    <span>Develop</span>
                </div>
                <div className="w-full bg-white h-2 mt-8"></div>
                <div className="flex flex-col mb-4 mt-8 gap-10 text-white sf-pro text-5xl">
                    <span>+ Mobile</span>
                </div>
                <div className="w-full bg-white h-1 mt-4"></div>
                <div className="flex flex-col mb-4 mt-8 gap-10 text-white sf-pro text-5xl">
                    <span>+ Web</span>
                </div>
                <div className="w-full bg-white h-1 mt-4"></div>
                <div className="flex flex-col mb-4 mt-8 gap-10 text-white sf-pro text-5xl">
                    <span>+ Branding</span>
                </div>
                <div className="w-full bg-white h-1 mt-4"></div>
                <div className="flex flex-col mb-4 mt-8 gap-10 text-white sf-pro text-5xl">
                    <span>+ Blockchain</span>
                </div>
                <div className="w-full bg-white h-1 mt-4"></div>
                <div className="flex flex-col mb-4 mt-8 gap-10 text-white sf-pro text-5xl">
                    <span>+ Smart Contracts</span>
                </div>
            </div>
        </div>
    );
}
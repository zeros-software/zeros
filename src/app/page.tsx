"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../assets/zeros.png";

import Services from "../sections/Services";
import Contact from "../sections/Contact";
import NavBar from "../components/NavBar";
import WhatWeDoPointer from "../components/WhatWeDoPointer";

type Section = {
  id: string;
  ref: React.RefObject<HTMLDivElement | null>;
};

export default function Home() {
  const [currentSection, setCurrentSection] = useState("top");
  const [index, setIndex] = useState(0);
  const [navHovered, setNavHovered] = useState(false);

  const breakpointRef = useRef(null);
  const teamRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const isAutoScrolling = useRef(false);

  const sections: Section[] = useMemo(() => {
    return [
      { id: "top", ref: breakpointRef },
      { id: "team", ref: teamRef },
      { id: "services", ref: servicesRef },
      { id: "contact", ref: contactRef },
    ]
  }, []);

  const handleScroll = useCallback(
    (index: number) => {
      if (isAutoScrolling.current) {
        return;
      }
      sections[index].ref.current?.scrollIntoView({ behavior: "smooth" });
      setIndex(index);
      setCurrentSection(sections[index].id);
      isAutoScrolling.current = true;
      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 400);
    },
    [sections]
  );

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAutoScrolling.current) {
        return;
      }
      const nextSection = index + 1;
      const previousSection = index - 1;

      if (e.deltaY > 0 && nextSection < sections.length) {
        handleScroll(nextSection);
      } else if (e.deltaY < 0 && previousSection >= 0) {
        handleScroll(previousSection);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [index, sections, handleScroll]);

  return (
    <motion.div
      animate={{
        backgroundColor: currentSection !== "top" ? "#090909" : "#F6F6F7",
      }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen"
    >
      <NavBar
        navHovered={navHovered}
        setNavHovered={setNavHovered}
        currentSection={currentSection}
        handleScroll={handleScroll}
      />
      <div ref={breakpointRef} className="h-screen flex flex-col ">
        <div className="flex-grow" />
        <div className="flex flex-col gap-4 2xl:px-16 py-6 mx-auto">
          <span className="sf-pro-regular text-2xl w-full px-6 text-[#090909] md:text-4xl 2xl:px-0 lg:w-2xl 2xl:w-[650px]">
            We provide software factory services, tailoring solutions to your
            needs.
          </span>
          <Image
            src={Logo}
            alt="Zeros Logo"
            className="h-auto w-full mix-blend-exclusion px-6 2xl:px-0"
          />
        </div>
      </div>
      <div
        ref={teamRef}
        className="min-h-screen w-full flex flex-col justify-between pb-10 2xl:items-center text-white mix-blend-exclusion mt-8 "
      >
        <motion.h1
          className="text-white mix-blend-exclusion mt-20 text-4xl sm:text-5xl 2xl:mt-10 md:text-6xl lg:text-[80px] xl:text-[110px] 2xl:text-[163px] 2xl:text-center leading-tight px-4 sm:px-8 md:px-12"
          initial={{ scale: 0.8 }}
          animate={{ scale: currentSection !== "top" ? 1 : 0.8 }}
          transition={{ duration: 0.5 }}
        >
          Developing to your needs.
        </motion.h1>

        <p className="px-4 sm:px-8 md:px-12 text-white text-sf-pro-regular text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-justify">
          We are a team of developers and designers, based in Buenos Aires, Argentina, who factors software into your businesses and ideas, transforming what&apos;s in your mind to code and design.
        </p>
        <WhatWeDoPointer handleScroll={handleScroll} />
      </div>
      <div
        ref={servicesRef}
        className="min-h-screen flex flex-col px-4 sm:px-8 lg:px-16"
      >
        <Services
          handleScroll={handleScroll}
        />
      </div>
      <div
        ref={contactRef}
        className="min-h-screen w-full flex flex-col px-4 sm:px-8 lg:px-16"
      >
        <Contact />
      </div>
    </motion.div>
  );
}

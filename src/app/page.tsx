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
      <div ref={breakpointRef} className="h-screen flex flex-col">
        <div className="flex-grow" />
        <div className="flex flex-col gap-4 px-16 py-6 mx-auto">
          <span className="sf-pro-regular text-4xl w-140 text-[#090909]">
            We provide software factory services, tailoring solutions to your
            needs.
          </span>
          <Image
            src={Logo}
            alt="Zeros Logo"
            className="justify-center items-center flex mix-blend-exclusion"
          />
        </div>
      </div>
      <div
        ref={teamRef}
        style={{ height: "100vh", width: "100%" }}
        className="flex flex-col justify-between pb-10 items-center text-white mix-blend-exclusion mt-8"
      >
        <motion.span
          className="text-white mix-blend-exclusion mt-8"
          initial={{ fontSize: "130px" }}
          animate={{ fontSize: currentSection !== "top" ? "163px" : "130px" }}
          transition={{ duration: 0.5 }}
        >
          Developing to your needs.
        </motion.span>

        <span className="flex flex-col items-center px-14 text-white text-sf-pro-regular text-6xl justify-center w-full text-justify">
          We are a team of developers and designers, based in Buenos Aires,
          Argentina, who factors software into your businesses and ideas,
          transforming what&apos;s in your mind to code and design.
        </span>
        <WhatWeDoPointer handleScroll={handleScroll} />
      </div>
      {/*       <div
        ref={teamRef}
        style={{ height: "100vh", width: "100%" }}
        className="flex flex-col items-center px-14 bg-[#090909] text-white text-sf-pro-regular text-6xl justify-center"
      >
        <span className="w-full text-justify">
          We are a team of developers and designers, based in Buenos Aires,
          Argentina, who factors software into your businesses and ideas,
          transforming what&apos;s in your mind to code and design.
        </span>
      </div> */}
      <div
        ref={servicesRef}
        style={{ height: "100vh", width: "100%" }}
        className="flex flex-col px-15 bg-[#090909]"
      >
        <Services
          handleScroll={handleScroll}
        />
      </div>
      <div
        ref={contactRef}
        style={{ height: "100vh", width: "100%" }}
        className="flex flex-col px-16 bg-[#090909]"
      >
        <Contact />
      </div>
    </motion.div>
  );
}

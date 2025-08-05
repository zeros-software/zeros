"use client"
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../assets/zeros.png";

import Services from "@/components/Services";
import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";


export default function Home() {
  const breakpointRef = useRef(null);
  const lastDivRef = useRef(null);
  const teamRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const [currentSection, setCurrentSection] = useState('top');
  const isAutoScrolling = useRef(false);
  const [navHovered, setNavHovered] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('currentSection');
      if (stored && stored !== currentSection) {
        setCurrentSection(stored);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('currentSection', currentSection);
    }
  }, [currentSection]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isAutoScrolling.current) return;
      if (!breakpointRef.current || !lastDivRef.current || !teamRef.current || !servicesRef.current) return;
      if (e.deltaY > 0) {
        if (currentSection === 'top') {
          isAutoScrolling.current = true;
          lastDivRef.current.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            setCurrentSection('last');
            isAutoScrolling.current = false;
          }, 400);
        } else if (currentSection === 'last') {
          isAutoScrolling.current = true;
          teamRef.current.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            setCurrentSection('team');
            isAutoScrolling.current = false;
          }, 400);
        } else if (currentSection === 'team') {
          isAutoScrolling.current = true;
          servicesRef.current.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            setCurrentSection('services');
            isAutoScrolling.current = false;
          }, 400);
        } else if (currentSection === 'services') {
          isAutoScrolling.current = true;
          contactRef.current.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            setCurrentSection('contact');
            isAutoScrolling.current = false;
          }, 400);
        }
      }
      else if (e.deltaY < 0) {
        if (currentSection === 'team') {
          isAutoScrolling.current = true;
          lastDivRef.current.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            setCurrentSection('last');
            isAutoScrolling.current = false;
          }, 400);
        } else if (currentSection === 'last') {
          isAutoScrolling.current = true;
          window.scrollTo({ top: 0, behavior: "smooth" });
          setTimeout(() => {
            setCurrentSection('top');
            isAutoScrolling.current = false;
          }, 400);
        } else if (currentSection === 'services') {
          isAutoScrolling.current = true;
          teamRef.current.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            setCurrentSection('team');
            isAutoScrolling.current = false;
          }, 400);
        } else if (currentSection === 'contact') {
          isAutoScrolling.current = true;
          servicesRef.current.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            setCurrentSection('services');
            isAutoScrolling.current = false;
          }, 400);
        }
      };

    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSection]);

  return (
    <motion.div
      animate={{ backgroundColor: currentSection !== 'top' ? "#000" : "#fff" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen"
    >
      <NavBar
        navHovered={navHovered}
        setNavHovered={setNavHovered}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        teamRef={teamRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      <div ref={breakpointRef} className="h-screen flex flex-col">
        <div className="flex-grow" />
        <div className="flex flex-col gap-4 p-6 mx-auto">
          <span className="sf-pro-regular text-4xl w-140">
            We provide software factory services, tailoring solutions to your needs.
          </span>
          <Image
            src={Logo}
            alt="Logo"
            className="justify-center items-center flex mix-blend-difference filter brightness-0 invert"
          />
        </div>
      </div>
      <div ref={lastDivRef} style={{ height: "100vh", width: "100%" }} className="flex flex-col items-center px-4">
        <motion.span
          className="text-white mix-blend-difference mt-8"
          initial={{ fontSize: "130px" }}
          animate={{ fontSize: currentSection !== 'top' ? "167px" : "130px" }}
          transition={{ duration: 0.5 }}
        >
          Developing to your needs.
        </motion.span>
        <div className="bg-[#191919] rounded-2xl flex-grow flex w-full m-8">

        </div>
      </div>
      <div ref={teamRef} style={{ height: "100vh", width: "100%" }} className="flex flex-col items-center px-4 bg-black text-white text-sf-pro-regular text-6xl justify-center">
        <span className="w-full text-justify">
          We are a team of developers and designers, based in Buenos Aires, Argentina, who factors software into your businesses and ideas, transforming what's in your mind to code and design.
        </span>
      </div>
      <div ref={servicesRef} style={{ height: "100vh", width: "100%" }} className="flex flex-col px-5 bg-black">
        <Services contactRef={contactRef} setCurrentSection={setCurrentSection} />
      </div>
      <div ref={contactRef} style={{ height: "100vh", width: "100%" }} className="flex flex-col px-6 bg-black">
        <Contact />
      </div>


    </motion.div>
  );
}
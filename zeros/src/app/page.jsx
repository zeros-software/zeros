"use client"
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../assets/zeros.png";
import Team from "@/components/Team";

export default function Home() {
  const breakpointRef = useRef(null);
  const lastDivRef = useRef(null);
  const teamRef = useRef(null);
  const [currentSection, setCurrentSection] = useState('top');
  const isAutoScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isAutoScrolling.current) return;
      if (!breakpointRef.current || !lastDivRef.current || !teamRef.current) return;
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
        }
      }
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
      <div
        className="px-6 py-4 sf-pro font-medium text-2xl gap-10 flex items-start fixed z-10 mix-blend-difference text-white"
        onMouseEnter={() => {
          document.querySelectorAll('.nav-link').forEach(a => a.style.opacity = 1);
        }}
        onMouseLeave={() => {
          document.querySelectorAll('.nav-link').forEach(a => {
            if (a.getAttribute('href') !== "/") {
              a.style.opacity = currentSection !== 'top' ? 0 : 1;
            }
          });
        }}
      >
        <a className="nav-link" href="/">Home</a>
        <a
          className="nav-link"
          href="/about"
          style={{
            opacity: currentSection !== 'top' ? 0 : 1,
            transition: "opacity 0.5s",
          }}
        >
          About us
        </a>
        <a
          className="nav-link"
          href="/services"
          style={{
            opacity: currentSection !== 'top' ? 0 : 1,
            transition: "opacity 0.5s",
          }}
        >
          Services
        </a>
        <a
          className="nav-link"
          href="/portfolio"
          style={{
            opacity: currentSection !== 'top' ? 0 : 1,
            transition: "opacity 0.5s",
          }}
        >
          Portfolio
        </a>
        <a
          className="nav-link"
          href="/contact"
          style={{
            opacity: currentSection !== 'top' ? 0 : 1,
            transition: "opacity 0.5s",
          }}
        >
          Contact
        </a>
      </div>
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
      {/* Add more content below to enable scrolling */}
      <div ref={lastDivRef} style={{ height: "100vh", width: "100%" }} className="flex flex-col items-center px-4">
        <motion.span
          className="text-white mix-blend-difference"
          initial={{ fontSize: "130px" }}
          animate={{ fontSize: currentSection !== 'top' ? "167px" : "130px" }}
          transition={{ duration: 0.5 }}
        >
          Developing to your needs.
        </motion.span>
        <div className="bg-[#191919] rounded-2xl flex-grow flex w-full m-8">

        </div>
      </div>
      <div ref={teamRef} style={{ height: "100vh", width: "100%" }} className="flex flex-col items-center px-4 bg-red-950">
        <Team />
      </div>


    </motion.div>
  );
}
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
  const [scrolledPast, setScrolledPast] = useState(false);
  const isAutoScrolling = useRef(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (breakpointRef.current && lastDivRef.current && teamRef.current) {
        const breakpointRect = breakpointRef.current.getBoundingClientRect();
        const lastDivRect = lastDivRef.current.getBoundingClientRect();
        const teamRect = teamRef.current.getBoundingClientRect();

        // If user is in the last div section, do not auto-scroll back
        const inLastDivSection = lastDivRect.top <= window.innerHeight / 2 && lastDivRect.bottom > window.innerHeight / 2;
        const inBreakpointSection = breakpointRect.top <= window.innerHeight / 2 && breakpointRect.bottom > window.innerHeight / 2;
        const inTeamSection = teamRect.top <= window.innerHeight / 2 && teamRect.bottom > window.innerHeight / 2;

        // Down: scroll to last div when passing breakpoint, but not if already in last div section
        if (breakpointRect.top <= 0 && lastScrollY < window.scrollY && inBreakpointSection) {
          setScrolledPast(true);
          isAutoScrolling.current = true;
          lastDivRef.current.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            isAutoScrolling.current = false;
          }, 700); // Adjust timeout as needed for smooth scroll duration
        }
        // Up: scroll to top when passing last div upwards, but not if already in last div section
        else if (lastDivRect.top > 0 && lastScrollY > window.scrollY && inLastDivSection) {
          setScrolledPast(false);
          isAutoScrolling.current = true;
          window.scrollTo({ top: 0, behavior: "smooth" });
          setTimeout(() => {
            isAutoScrolling.current = false;
          }, 700);
        }
        // Down: Scroll to team section when passing it, but only if not auto-scrolling
        else if (!isAutoScrolling.current && lastDivRect.top <= 0 && lastScrollY < window.scrollY && inLastDivSection) {
          teamRef.current.scrollIntoView({ behavior: "smooth" });
        }
        // Up: Scroll to last div only if not already in team section
        else if (teamRect.top > 0 && lastScrollY > window.scrollY && inTeamSection) {
          lastDivRef.current.scrollIntoView({ behavior: "smooth" });
        }
        lastScrollY = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      animate={{ backgroundColor: scrolledPast ? "#000" : "#fff" }}
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
              a.style.opacity = scrolledPast ? 0 : 1;
            }
          });
        }}
      >
        <a className="nav-link" href="/">Home</a>
        <a
          className="nav-link"
          href="/about"
          style={{
            opacity: scrolledPast ? 0 : 1,
            transition: "opacity 0.5s",
          }}
        >
          About us
        </a>
        <a
          className="nav-link"
          href="/services"
          style={{
            opacity: scrolledPast ? 0 : 1,
            transition: "opacity 0.5s",
          }}
        >
          Services
        </a>
        <a
          className="nav-link"
          href="/portfolio"
          style={{
            opacity: scrolledPast ? 0 : 1,
            transition: "opacity 0.5s",
          }}
        >
          Portfolio
        </a>
        <a
          className="nav-link"
          href="/contact"
          style={{
            opacity: scrolledPast ? 0 : 1,
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
          animate={{ fontSize: scrolledPast ? "167px" : "130px" }}
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
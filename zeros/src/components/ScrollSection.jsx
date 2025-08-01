"use client";

import { useEffect, useRef, useState, useContext, createContext, cloneElement, forwardRef } from "react";
import { motion } from "framer-motion";

// Context to coordinate scroll sections
const ScrollSectionsContext = createContext();

// Section snap component
const ScrollSection = forwardRef(function ScrollSection({ children, onScrollState, className = "" }, ref) {
    const sectionRef = ref || useRef(null);
    const [scrolledPast, setScrolledPast] = useState(false);
    const [inView, setInView] = useState(false);

    // Intersection observer for inView state (optional, for background color)
    useEffect(() => {
        const observer = new window.IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                const isInView = entry.intersectionRatio >= 0.5;
                setInView(isInView);
                if (isInView) {
                    setScrolledPast(true);
                    if (onScrollState) onScrollState(true);
                } else {
                    setScrolledPast(false);
                    if (onScrollState) onScrollState(false);
                }
            },
            { threshold: [0.5], root: null }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
            observer.disconnect();
        };
    }, [onScrollState]);

    // Support render prop (function as children)
    const content = typeof children === 'function' ? children({ inView }) : children;

    return (
        <motion.div
            ref={sectionRef}
            animate={{ backgroundColor: scrolledPast ? "#000" : "#fff" }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col min-h-screen h-screen ${className}`}
        >
            {content}
        </motion.div>
    );
});

// Main scroll container
function ScrollSections({ children }) {
    const sectionRefs = useRef([]);
    const isAnimating = useRef(false);

    // Attach refs to children
    const childrenWithSectionRefs = Array.isArray(children)
        ? children.map((child, idx) =>
            child && typeof child === 'object' && (child.type === ScrollSection || child.type?.displayName === 'ScrollSection')
                ? cloneElement(child, { ref: el => (sectionRefs.current[idx] = el), key: child.key ?? idx })
                : child
        )
        : children;

    // Find the closest section index to current scroll
    const getClosestSectionIdx = () => {
        const scrollY = window.scrollY;
        let minDist = Infinity;
        let idx = 0;
        sectionRefs.current.forEach((ref, i) => {
            if (ref && ref.offsetTop !== undefined) {
                const dist = Math.abs(ref.offsetTop - scrollY);
                if (dist < minDist) {
                    minDist = dist;
                    idx = i;
                }
            }
        });
        return idx;
    };

    // Custom wheel handler for snap scroll
    useEffect(() => {
        const handleWheel = (e) => {
            if (isAnimating.current) {
                e.preventDefault();
                return;
            }
            const delta = e.deltaY;
            const idx = getClosestSectionIdx();
            let targetIdx = idx;
            if (delta > 0 && idx < sectionRefs.current.length - 1) {
                targetIdx = idx + 1;
            } else if (delta < 0 && idx > 0) {
                targetIdx = idx - 1;
            }
            if (targetIdx !== idx) {
                e.preventDefault();
                isAnimating.current = true;
                sectionRefs.current[targetIdx]?.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => {
                    isAnimating.current = false;
                }, 900); // Adjust duration for slower scroll
            }
        };
        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, []);

    return (
        <div style={{ height: "100vh", overflow: "auto" }}>
            {childrenWithSectionRefs}
        </div>
    );
}

export { ScrollSection, ScrollSections };

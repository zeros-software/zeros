"use client";
import { useRef, useEffect, useCallback } from "react";

/**
 * Wraps children and enables strict section snapping.
 * Expects children to be an array of section elements (e.g., ScrollSection).
 */
export default function SectionSnapContainer({ children }) {
    const containerRef = useRef(null);
    const sectionRefs = useRef([]);
    const currentIdx = useRef(0);
    const isScrolling = useRef(false);

    // Snap to section by index
    const snapToSection = useCallback((idx) => {
        if (
            idx >= 0 &&
            idx < sectionRefs.current.length &&
            sectionRefs.current[idx]
        ) {
            isScrolling.current = true;
            sectionRefs.current[idx].scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                isScrolling.current = false;
            }, 700);
            currentIdx.current = idx;
        }
    }, []);

    // Handle wheel events for snapping
    useEffect(() => {
        const onWheel = (e) => {
            if (isScrolling.current) return;
            e.preventDefault();
            if (e.deltaY > 0) {
                // Down
                snapToSection(currentIdx.current + 1);
            } else if (e.deltaY < 0) {
                // Up
                snapToSection(currentIdx.current - 1);
            }
        };
        const node = containerRef.current;
        if (node) {
            node.addEventListener("wheel", onWheel, { passive: false });
        }
        return () => {
            if (node) node.removeEventListener("wheel", onWheel);
        };
    }, [snapToSection]);

    // Prevent body scroll
    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, []);

    // On mount, snap to first section
    useEffect(() => {
        if (sectionRefs.current[0]) {
            sectionRefs.current[0].scrollIntoView({ behavior: "auto" });
            currentIdx.current = 0;
        }
    }, []);

    // Render each child in a wrapper div with a ref for snapping
    const childrenWrapped = Array.isArray(children)
        ? children.map((child, idx) => (
            <div
                key={idx}
                ref={el => { sectionRefs.current[idx] = el; }}
                style={{ height: "100vh", width: "100%" }}
            >
                {child}
            </div>
        ))
        : (
            <div ref={el => { sectionRefs.current[0] = el; }} style={{ height: "100vh", width: "100%" }}>
                {children}
            </div>
        );

    return (
        <div ref={containerRef} style={{ height: "100vh", overflow: "hidden" }}>
            {childrenWrapped}
        </div>
    );
}

import React from "react";


type NavBarProps = {
    navHovered: boolean;
    setNavHovered: (hovered: boolean) => void;
    currentSection: string;
    setCurrentSection: (section: string) => void;
    teamRef: React.RefObject<HTMLDivElement | null>;
    servicesRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
};

export default function NavBar({
    navHovered,
    setNavHovered,
    currentSection,
    setCurrentSection,
    teamRef,
    servicesRef,
    contactRef
}: NavBarProps) {
    return (
        <div
            className="px-16 py-4 sf-pro font-medium text-2xl gap-10 flex items-start fixed z-10 mix-blend-exclusion text-[#F6F6F7]"
            onMouseEnter={() => setNavHovered(true)}
            onMouseLeave={() => setNavHovered(false)}
        >
            <div
                className="nav-link"
                style={{
                    opacity: navHovered || currentSection === 'top' || currentSection === 'last' ? 1 : 0,
                    transition: "opacity 0.5s",
                    cursor: "pointer"
                }}
                onClick={e => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setCurrentSection('top');
                }}
            >
                Home
            </div>
            <div
                className="nav-link"
                style={{
                    opacity: navHovered || currentSection === 'team' ? 1 : 0,
                    transition: "opacity 0.5s",
                    cursor: "pointer"
                }}
                onClick={e => {
                    e.preventDefault();
                    if (!teamRef.current) return;
                    teamRef.current.scrollIntoView({ behavior: "smooth" });
                    setCurrentSection('team');
                }}
            >
                About us
            </div>
            <div
                className="nav-link"
                style={{
                    opacity: navHovered || currentSection === 'services' ? 1 : 0,
                    transition: "opacity 0.5s",
                    cursor: "pointer"
                }}
                onClick={e => {
                    e.preventDefault();
                    if (!servicesRef.current) return;
                    servicesRef.current.scrollIntoView({ behavior: "smooth" });
                    setCurrentSection('services');
                }}
            >
                Services
            </div>
            <div
                className="nav-link"
                style={{
                    opacity: navHovered || currentSection === 'contact' ? 1 : 0,
                    transition: "opacity 0.5s",
                    cursor: "pointer"
                }}
                onClick={e => {
                    e.preventDefault();
                    if (!contactRef.current) return;
                    contactRef.current.scrollIntoView({ behavior: "smooth" });
                    setCurrentSection('contact');
                }}
            >
                Contact
            </div>
        </div>
    );
}
import React from "react";


type NavBarProps = {
    navHovered: boolean;
    setNavHovered: (hovered: boolean) => void;
    currentSection: string;
    handleScroll: (index: number) => void
};

export default function NavBar({
    navHovered,
    setNavHovered,
    currentSection,
    handleScroll
}: NavBarProps) {
    const handleClick = (index: number) => (e: React.MouseEvent) => {
        e.preventDefault();
        handleScroll(index);
    }
    return (
        <div
            className="px-16 py-4 sf-pro font-medium text-2xl gap-10 items-start fixed z-10 mix-blend-exclusion text-[#F6F6F7] hidden sm:flex"
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
                onClick={handleClick(0)}
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
                onClick={handleClick(1)}
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
                onClick={handleClick(2)}
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
                onClick={handleClick(3)}
            >
                Contact
            </div>
        </div>
    );
}
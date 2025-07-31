import React from "react";

const menuItems = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
];

export default function Menu({ active }) {
    const activeFont = "sf-pro";
    const defaultFont = "sf-pro-light";

    return (
        <div
            className={`sticky top-0 z-50 group text-white px-6 py-4 ${defaultFont} text-2xl gap-10 flex items-start`}
            style={{ mixBlendMode: "difference" }}
        >
            {menuItems.map((item) => {
                const normalizedActive = active?.toLowerCase().replace(/\s/g, "");
                const normalizedLabel = item.label.toLowerCase().replace(/\s/g, "");
                const isActive = normalizedActive === normalizedLabel;
                return (
                    <a
                        key={item.href}
                        href={item.href}
                        className={`
                            transition-opacity duration-200
                            ${isActive
                                ? `opacity-100 pointer-events-auto ${activeFont}`
                                : `opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto ${defaultFont}`
                            }
                        `}
                    >
                        {item.label}
                    </a>
                );
            })}
        </div>
    );
}
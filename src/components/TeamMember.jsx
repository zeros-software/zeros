import React from "react";

export default function TeamMember({ name, role, links, align = "start" }) {
    const itemsAlign = align === "end" ? "items-end text-right" : "items-start text-left";
    return (
        <div className={`flex flex-col justify-center text-black sf-pro ${itemsAlign}`}>
            <span className="text-5xl mt-6">{name}</span>
            <span className="text-4xl mt-4">{role}</span>
            {links.map((link, idx) => (
                <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl underline underline-offset-5 mt-2"
                >
                    {link.label}
                </a>
            ))}
        </div>
    );
}
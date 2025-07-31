import Menu from "@/components/Menu";
import Logo from "../../assets/zeros.png";
import Image from "next/image";
import TeamMember from "@/components/TeamMember";



export default function About() {
    return (
        <div className="flex flex-col bg-white">
            <Menu active="About us" />
            <div className="flex flex-col gap-4 mx-auto">
                <Image
                    src={Logo}
                    alt="Logo"
                    className="justify-center items-center flex"
                />
                <div className="flex flex-col mt-6 gap-6">
                    <span className="sf-pro-bold text-7xl">Team</span>
                    <div className="w-full bg-black h-2"></div>
                </div>
                <div className="grid grid-cols-2 grid-rows-3 gap-8 w-full mt-8 mb-26">
                    <TeamMember
                        name="Matías Arazi"
                        role="Blockchain Developer"
                        align="start"
                        links={[
                            { label: "→ Portfolio", url: "#" },
                            { label: "→ Github", url: "#" },
                            { label: "→ LinkedIn", url: "#" },
                        ]}
                    />
                    <TeamMember
                        name="Tomás Caula"
                        role="Full Stack Developer"
                        align="end"
                        links={[
                            { label: "→ Portfolio", url: "#" },
                            { label: "→ Github", url: "#" },
                            { label: "→ LinkedIn", url: "#" },
                        ]}
                    />
                    <TeamMember
                        name="Dante Castelao"
                        role="Full Stack Developer"
                        align="start"
                        links={[
                            { label: "→ Portfolio", url: "#" },
                            { label: "→ Github", url: "#" },
                            { label: "→ LinkedIn", url: "#" },
                        ]}
                    />
                    <TeamMember
                        name="Facundo Faulin"
                        role="Project Manager"
                        align="end"
                        links={[
                            { label: "→ Portfolio", url: "#" },
                            { label: "→ Github", url: "#" },
                            { label: "→ LinkedIn", url: "#" },
                        ]}
                    />
                    <TeamMember
                        name="Matías Goyret"
                        role="UX/UI Designer"
                        align="start"
                        links={[
                            { label: "→ Portfolio", url: "#" },
                            { label: "→ Github", url: "#" },
                            { label: "→ LinkedIn", url: "#" },
                        ]}
                    />
                    <TeamMember
                        name="Lucas Grasso"
                        role="Project Manager"
                        align="end"
                        links={[
                            { label: "→ Portfolio", url: "#" },
                            { label: "→ Github", url: "#" },
                            { label: "→ LinkedIn", url: "#" },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

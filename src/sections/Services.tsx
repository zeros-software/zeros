import { useState } from "react";
import TypewriterComponent from "typewriter-effect";
import AccordionItem from "../components/AccordionItem";

function RotatingPhrase() {
  return (
    <div className="text-2xl mt-4 gap-1.5 hidden md:flex md:flex-row w-45">
      <span>
        *what you
      </span>
      <TypewriterComponent options={{
        strings: ["need", "want", "wish"],
        loop: true,
        autoStart: true,
        wrapperClassName: "inline-block text-white sf-pro-bold",
      }} />
    </div>
  );
}

const services = [
  {
    label: "Mobile",
    description: "We craft secure, intuitive and beautifully designed mobile apps that bring your ideas to people’s pockets."
  },
  {
    label: "Web",
    description: "From internal tools to public platforms, we build secure, scalable, and modern web apps tailored to your workflow and brand."
  },
  {
    label: "Branding",
    description: "We shape brands that speak clearly. Distinctive, aligned, and built to connect."
  },
  {
    label: "Blockchain & Web3",
    description: "We develop decentralized apps and smart contracts with transparency and security at their core."
  }
];

type ServicesProps = {
  handleScroll: (index: number) => void;
};

export default function Services({ handleScroll }: ServicesProps) {
  // index of the currently open accordion; null means none open
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleScroll(3);
  }

  return (
    <div className="flex flex-col w-full relative h-full">
      <div className="flex flex-col">
        <div className="flex flex-row mt-20 text-white sf-pro-bold text-4xl md:text-5xl md:justify-between xl:text-7xl">
          <span>Design</span>
          <span>&</span>
          <span>Develop<span className="hidden md:inline">*</span></span>
          <RotatingPhrase />
        </div>

        <div className="w-full bg-white h-2 mt-4 md:mt-6 xl:mt-8"></div>

        {services.map((service, idx) => (
          <AccordionItem
            key={service.label}
            label={service.label}
            description={service.description}
            open={openIndex === idx}
            onToggle={() => setOpenIndex((prev) => (prev === idx ? null : idx))}
          />
        ))}

        <span className="text-white text-xl md:text-2xl sf-pro transition-all duration-200 w-full text-center absolute bottom-0 mb-8">
          Let&apos;s build something that lasts. Have an idea, product, or process that needs transforming?
          <span
            onClick={handleClick}
            className="cursor-pointer ml-1"
          >
            [Let&apos;s talk].
          </span>
        </span>
      </div>
    </div>
  );
}
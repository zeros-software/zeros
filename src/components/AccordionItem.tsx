import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type AccordionItemProps = {
  label: string;
  description: string;
  // When provided, component becomes controlled
  open?: boolean;
  onToggle?: () => void;
};

export default function AccordionItem({
  label,
  description,
  open,
  onToggle,
}: AccordionItemProps) {
  const [internalOpen, setInternalOpen] = useState(false);

  const isOpen = open !== undefined ? open : internalOpen;
  const handleClick = () => {
    if (onToggle) return onToggle();
    setInternalOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col mt-6 xl:mt-5 2xl:mt-6 gap-2 text-white sf-pro text-3xl 2xl:text-4xl">
      <button
        onClick={handleClick}
        aria-expanded={isOpen}
        className="text-left focus:outline-none gap-2 flex items-center"
        style={{
          background: "none",
          border: "none",
          padding: 0,
          color: "inherit",
          font: "inherit",
          cursor: "pointer",
        }}
      >
        <span
          className={`transition-transform duration-200 ${isOpen ? 'rotate-45' : 'rotate-0'
            }`}
        >
          +
        </span>
        <span>{label}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden ml-4"
          >
            <p className="text-white text-xl md:text-2xl sf-pro mt-2">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full bg-white h-1 mt-4 xl:mt-2 2xl:mt-4" />
    </div>
  );
}


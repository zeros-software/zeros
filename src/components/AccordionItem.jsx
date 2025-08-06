import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccordionItem({
  label,
  description,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col mb-4 mt-6 gap-2 text-white sf-pro text-4xl">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
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
          className={`transition-transform duration-200 ${
            open ? 'rotate-45' : 'rotate-0'
          }`}
        >
          +
        </span>
        <span>{label}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35}}
            className="overflow-hidden ml-4"
          >
            <p className="text-white text-2xl sf-pro mt-2">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full bg-white h-1 mt-4" />
    </div>
  );
}


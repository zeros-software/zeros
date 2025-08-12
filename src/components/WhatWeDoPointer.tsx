import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Props = {
	handleScroll: (index: number) => void;
}

export default function WhatWeDoPointer({ handleScroll }: Props) {
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		handleScroll(2);
	}

	return (
		<div className="flex flex-col items-center space-y-1 mt-32" onClick={handleClick}>
			<motion.div
				animate={{
					y: [0, 8, 0], // up → down → up
				}}
				transition={{
					duration: 1,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="flex flex-col items-center cursor-pointer select-none"
			>
				<span className="text-lg font-semibold">What do we do</span>
				<ChevronDown className="w-6 h-6 text-[#F6F6F7]" />
			</motion.div>
		</div>
	);
}

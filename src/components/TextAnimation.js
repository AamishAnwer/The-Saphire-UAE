import { motion } from "framer-motion";

export default function TextAnimation({ text, textStyle }) {
	const sentence = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: { delay: 0.5, staggerChildren: 0.08 },
		},
	};
	const letter = {
		hidden: { opacity: 0, y: 50, filter: "blur(20px)" },
		visible: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
		},
	};

	return (
		<div className={`${textStyle}`}>
			<motion.h3
				className="load-screen--message"
				variants={sentence}
				initial="hidden"
				animate="visible"
				key={text}
			>
				{text.split("").map((char, index) => (
					<motion.span key={index} variants={letter}>
						{char}
					</motion.span>
				))}
			</motion.h3>
		</div>
	);
}

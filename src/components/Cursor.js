import { useEffect } from "react";
import useScreenSize from "@/components/Block/useScreenSize";

const Cursor = () => {
	useEffect(() => {
		const cursorDot = document.querySelector(".cursor-dot");
		const cursorOutline = document.querySelector(".cursor-outline");

		const handleMouseMove = (e) => {
			const posX = e.clientX;
			const posY = e.clientY;
			cursorDot.setAttribute("style", `top: ${posY}px; left: ${posX}px;`);
			cursorOutline.setAttribute("style", `top: ${posY}px; left: ${posX}px;`);
			cursorOutline.animate(
				{
					left: `${posX}px`,
					top: `${posY}px`,
				},
				{ duration: 500, fill: "forwards" }
			);
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div>
			<div className="cursor-dot"></div>
			<div className="cursor-outline"></div>
		</div>
	);
};

export default Cursor;

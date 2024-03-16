import React from "react";
import { Element } from "react-scroll";

const ScrollAnimation = ({ children, className, duration = 800 }) => {
	return (
		<Element name="scrollElement" className={className} duration={duration}>
			{children}
		</Element>
	);
};

export default ScrollAnimation;

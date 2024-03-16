import React from "react";

import Image from "next/image";

export default function WhoWeAre() {
	// const [carOffset, setCarOffset] = useState(100); // Start 100% to the right

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const scrollY = window.scrollY;
	// 		const windowHeight = window.innerHeight;

	// 		// Adjust these values as needed
	// 		const startScroll = 100; // Where the car starts moving
	// 		const centerScroll = windowHeight; // Scroll position where the car should be centered
	// 		const endScroll = 1300; // Where the car stops moving

	// 		if (scrollY < startScroll) {
	// 			setCarOffset(100); // Off-screen to the right
	// 		} else if (scrollY > endScroll) {
	// 			setCarOffset(-100); // Off-screen to the left
	// 		} else {
	// 			// Calculate the car's offset based on scroll position
	// 			const scrollRange = endScroll - startScroll;
	// 			const scrollProgress = (scrollY - startScroll) / scrollRange;
	// 			// Adjust the formula so that the car is centered at centerScroll
	// 			const carTranslate =
	// 				((centerScroll - startScroll) / scrollRange - scrollProgress) * 100;
	// 			setCarOffset(carTranslate);
	// 		}
	// 	};

	// 	window.addEventListener("scroll", handleScroll);

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	// const carImageStyle = {
	// 	transform: `translateX(${carOffset}%)`,
	// 	transition: "transform 0.5s ease-out",
	// };

	return (
		<section className="relative bg-black pb-2 text-white overflow-hidden">
			<div className="circle-gradient"></div>

			<div className="mx-auto p-5 md:p-12 relative">
				<h1 className="max-md:text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-4 lg:mb-6 text-center">
					WHO WE ARE ?
				</h1>
				<p className="text-center text-base font-thin md:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-6 max-w-7xl mx-auto">
					In the rapidly evolving world of technology, 3D printing has emerged
					as a game-changer across various industries. Its impact on
					architecture, engineering, medicine, and manufacturing has been
					nothing short of revolutionary. In the heart of innovation, Ultratec3d
					stands as a leading 3D printing service provider, offering
					cutting-edge solutions to clients in Dubai and Saudi Arabia. With a
					commitment to excellence and a passion for pushing the boundaries of
					possibilities, Ultratec3d continues to redefine the future of 3D
					printing in the region.
				</p>

				<Image
					height={0}
					width={0}
					sizes="100vw"
					src="/whoWeare.jpeg"
					alt="A sleek blue and red racing car from the Abu Dhabi Autonomous Racing League"
					// style={carImageStyle}
					className="mx-auto w-full h-full rounded-2xl"
				/>

				
			</div>
		</section>
	);
}

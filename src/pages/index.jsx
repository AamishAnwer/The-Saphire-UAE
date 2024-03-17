import Hero from "@/components/hero";

import Head from "next/head";

import { useEffect, useState } from "react";
import HeroTwo from "../components/heroTwo";
import heroThree from "../components/heroThree";
import BodyCard from "../components/bodyCard";
import HomeGrid from "../components/home/grid";

import TextImage from "../components/textImage";

export default function Home() {
	const [randomText, setRandomText] = useState("");
	const multipleTexts = [
		"The Best 3D Printing and Engineering Services in UAE and Saudi Arabia",
		"Over 10 years of Engineering experience",
		"Your one Stop Shop for Innovation and creativity",
		"3D scanning and Reverse Engineering",
		"Interiors decorative sculptures and signages",
		"Automation integration",
		"Precise spare parts production",
		"3D Printing of High Performance material",
		"In-house Painting and Chroming",
	];

	useEffect(() => {
		// Function to set random text at intervals
		const setRandomTextAtInterval = () => {
			const randomText =
				multipleTexts[Math.floor(Math.random() * multipleTexts.length)];
			setRandomText(randomText);
		};

		// Set random text initially
		setRandomTextAtInterval();

		// Set random text at intervals (e.g., every 2000 milliseconds or 2 seconds)
		const intervalId = setInterval(setRandomTextAtInterval, 8000);

		// Clean up the interval to avoid memory leaks
		return () => clearInterval(intervalId);
	}, []); // Empty dependency array means this effect runs once after the initial render

	return (
		<>
			<Head>
				<title>
					3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec
				</title>
				<meta
					name="description"
					content="Ultratec 3D, the premier 3D printing company in Dubai, provides high-quality 3D printing services and solutions to meet your diverse needs. Contact us now!"
				/>
			</Head>
			<section className="w-full">
				<Hero
					type={"video"}
					src={"https://d33609liqwio9r.cloudfront.net/intro.m4v"}
					heroText={randomText}
					isshowSubHeading={true}
				/>

				{/* <BackgroundGradientAnimation /> */}
				<HeroTwo />
				<HomeGrid />
				<TextImage />
			</section>
		</>
	);
}

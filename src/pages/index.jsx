import Hero from "@/components/hero";
import WhoWeAre from "@/components/whoWeAre";
import Gradient from "@/components/gradient";
import OurServices from "@/components/ourServices";
import UltratecFourD from "@/components/ultratecFourD";
import Head from "next/head";
import Testimonials from "@/components/testimonials";
import Client from "@/components/Client";
import OurTechnologies from "@/components/ourTechnologies";
import { useEffect, useState } from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
// import HeroTwo from "../components/heroTwo";

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
				{/* <HeroTwo /> */}
				<BackgroundGradientAnimation />
				<WhoWeAre />
				<Gradient className={"bg-gradient-to-b from-black to-[#2060AD]"} />
				<OurServices />
				<Gradient
					className={"bg-gradient-to-b from-[#1259b09f] to-[#2060AD] "}
				/>

				<Gradient className={"bg-gradient-to-b from-[#2060AD] to-white "} />
				<OurTechnologies />
				<Client />
				<Gradient className={"bg-gradient-to-b from-white to-[#2060AD] "} />
				<Testimonials />
				<UltratecFourD />
			</section>
		</>
	);
}

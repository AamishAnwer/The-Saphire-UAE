import Hero from "@/components/hero";
import Head from "next/head";
import HeroTwo from "../components/heroTwo";
import HomeGrid from "../components/home/grid";
import TextImage from "../components/textImage";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
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
					isshowSubHeading={true}
				/>

				<HeroTwo />
				<HomeGrid />
				<TextImage />
				<About />
				<Footer />
			</section>
		</>
	);
}

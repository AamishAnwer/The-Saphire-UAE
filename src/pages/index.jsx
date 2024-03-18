import Hero from "@/components/hero";
import Head from "next/head";
import HeroTwo from "../components/heroTwo";
import GridImage from "../components/gridImage";
import TextImage from "../components/textImage";
import About from "../components/About";
import Footer from "../components/Footer";
// import Grid from "../components/home/grid";
import GetInTouch from "../components/getInTouch";

export default function Home() {
	return (
		<>
			<Head>
				<title>The Sapphire</title>
				<meta
					name="description"
					content=""
				/>
			</Head>
			<section className="w-full">
				<Hero
					type={"video"}
					src={"https://d33609liqwio9r.cloudfront.net/intro.m4v"}
					isshowSubHeading={true}
				/>

				<HeroTwo />
				{/* <Grid /> */}
				<TextImage />
				<GridImage />
				<About />
				<GetInTouch />
				<Footer />
			</section>
		</>
	);
}

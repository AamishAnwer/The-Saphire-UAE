import Hero from "@/components/hero";
import Head from "next/head";
import Gradient from "@/components/gradient";
import Banner from "@/components/projects/banner";
import ThreeDPrinting from "../../components/resources/ThreeDPrinting";
import ResourcesNavbar from "./navbar";
export default function Resource() {
	return (
		<>
			<Head>
				<title>Resources</title>
			</Head>
			<section className="w-full">
				<Hero
					type={"img"}
					src={"/resources/hero.png"}
					heroText={"3D Printing Technologies"}
					className={"max-md:hidden"}
				/>
				<div className="md:hidden uppercase w-full h-72 md:h-96 bg-black text-white text-4xl md:text-6xl font-bold flex items-center justify-center relative overflow-hidden">
					<div className="circle-gradient-six"></div>
					<span className="z-50 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center w-full">
						3D Printing Technologies
					</span>
				</div>
				<ResourcesNavbar />
				<ThreeDPrinting />
				<Gradient className={"bg-gradient-to-b from-black to-white"} />
				<Banner />
			</section>
		</>
	);
}

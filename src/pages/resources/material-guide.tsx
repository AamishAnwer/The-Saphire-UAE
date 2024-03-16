import Hero from "@/components/hero";
import Head from "next/head";
import ResourceCarousel1 from "@/components/resources/resourceCarousel1";
import ResourceCarousel2 from "@/components/resources/resourceCarousel2";
import ResourceCarousel3 from "@/components/resources/resourceCarousel3";
import ResourceCarousel4 from "@/components/resources/resourceCarousel4";
import ResourceCarousel5 from "@/components/resources/resourceCarousel5";
import Gradient from "@/components/gradient";
import Banner from "@/components/projects/banner";
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
					heroText={"Material Guide"}
					className="max-md:hidden"
				/>
				<div className="md:hidden uppercase w-full h-72 md:h-96 bg-black text-white text-4xl md:text-6xl font-bold flex items-center justify-center relative overflow-hidden">
					<div className="circle-gradient-six"></div>

					<span className="z-50 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center w-full">Material Guide</span>
				</div>
				<ResourcesNavbar />

				<ResourceCarousel1 />
				<Gradient className={"bg-gradient-to-b from-black to-white"} />
				<ResourceCarousel2 />
				<ResourceCarousel3 />
				<Gradient className={"bg-gradient-to-b from-white to-[#2060AD]"} />
				<ResourceCarousel4 />
				<Gradient className={"bg-gradient-to-b from-[#2060AD] to-white"} />
				<ResourceCarousel5 />
				<Gradient className={"bg-gradient-to-t from-[#09305f] to-white"} />
				<Banner />
			</section>
		</>
	);
}

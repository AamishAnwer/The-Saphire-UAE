
import Head from "next/head";
import Featured from "@/components/projects/featured";
import Project from "@/components/projects/project";
import ThreeDscanning from "@/components/projects/threeDscanning";
import Architectural from "@/components/projects/architectural";
import Characters from "@/components/projects/characters";
import Decorations from "@/components/projects/decorations";
import ProductDevelopment from "@/components/projects/productDevelopment";
import DisplayModule from "@/components/projects/displayModule";
import Styrofoam from "@/components/projects/styrofoam";
import Trophy from "@/components/projects/trophy";
import Banner from "@/components/projects/banner";

export default function Projects() {

	return (
		<>
			<Head>
				<title>Projects</title>
				<meta
					name="description"
					content="Ultratec 3D, the premier 3D printing company in Dubai, provides high-quality 3D printing services and solutions to meet your diverse needs. Contact us now!"
				/>
			</Head>
			<section className="w-full bg-gradient-to-b from-[#2571CD] to-[#02060B]">
				<div className="pt-16"></div>
				<Featured />
				<Project />
				<ThreeDscanning />
				<Architectural />
				<Characters />
				<Decorations />


				{/*  */}
				<DisplayModule />
				{/*  */}
				<ProductDevelopment />
				<Styrofoam />
				<Trophy />

				<Banner />
			</section>
		</>
	);
}

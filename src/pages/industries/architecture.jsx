import Hero from "@/components/hero";
import Navbar from "@/components/industriesNav/navbar";
import Main from "@/components/industriesNav/architectureNav/main";
import Body from "@/components/industriesNav/architectureNav/body";
import Banner from "@/components/projects/banner";

export default function Architecture() {
	return (
		<section className="w-full">
			<Hero
				type={"img"}
				src={
					"https://d33609liqwio9r.cloudfront.net/2024-02-24T04%3A20%3A29.338Z-Architecture_bg.png"
				}
				heroText={"Architecture"}
				className="max-md:hidden"
			/>
			<div className="md:hidden uppercase w-full h-72 md:h-96 bg-black text-white text-4xl md:text-6xl font-bold flex items-center justify-center relative overflow-hidden">
				<div className="circle-gradient-six"></div>
				<span className="z-50 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center w-full">
					Architecture
				</span>
			</div>
			<div className="bg-black relative">
				<Navbar activeIndex={1} />
				<Main />
			</div>

			<Body />
			<Banner />
		</section>
	);
}

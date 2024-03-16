import Hero from "@/components/hero";
import Navbar from "@/components/industriesNav/navbar";
import Main from "@/components/industriesNav/interiorsNav/main";
import Body from "@/components/industriesNav/interiorsNav/body";
import Banner from "@/components/projects/banner";

export default function Interior() {
	return (
		<section className="w-full">
			<Hero
				className="max-md:hidden"
				type={"img"}
				src={
					"https://d33609liqwio9r.cloudfront.net/2024-02-24T16%3A57%3A38.336Z-Interior%20and%20arts_bg-min.png"
				}
				heroText={"Interior"}
			/>
			<div className="md:hidden uppercase w-full h-72 md:h-96 bg-black text-white text-4xl md:text-6xl font-bold flex items-center justify-center relative overflow-hidden">
				<div className="circle-gradient-six"></div>

				<span className="z-50 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center w-full">
					Interior
				</span>
			</div>
			<div className="bg-black relative">
				<Navbar activeIndex={5} />
				<Main />
			</div>
			<Body />
			<Banner />
		</section>
	);
}

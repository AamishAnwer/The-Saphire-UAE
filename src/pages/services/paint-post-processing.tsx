import Hero from "@/components/hero";
import Navbar from "@/components/services/navbar";
import Main from "@/components/services/paintPostProcessing/main";
import Body from "@/components/services/paintPostProcessing/body";
import Gradient from "@/components/gradient";
import Banner from "@/components/projects/banner";

export default function AdditiveManufacuring() {
	return (
		<section className="w-full">
			<Hero
				type={"img"}
				src={"/Banner-image.png"}
				heroText={"Paint & Post Processing"}
				className={"max-md:hidden"}
			/>
			<div className="md:hidden uppercase w-full h-72 md:h-96 bg-black text-white text-4xl md:text-6xl font-bold flex items-center justify-center relative overflow-hidden">
				<div className="circle-gradient-six"></div>
				<span className="z-50 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center w-full">Paint & Post Processing</span>
			</div>
			<div className="bg-black relative">
				<Navbar />
				<Main />
			</div>
			<Gradient className={"bg-gradient-to-b from-black to-white"} />
			<Body />
			<Gradient className={"bg-gradient-to-t from-[#09305f] to-white"} />
			<Banner />
		</section>
	);
}

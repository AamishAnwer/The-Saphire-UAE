import Image from "next/image";
import Link from "next/link";

const UltratecFourD = () => {
	const ultratec4dintro =
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T09:34:33.109Z-4dintro.m4v";

	return (
		<>
			<section className="p-10 z-10 relative bg-gradient-to-b from-[#2060AD] to-[#000000]">
				<div className="text-center">
					<h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-medium mb-5 relative my-5">
						<span className="text-white">OUR SISTER COMPANY </span>

						<span className="text-3xl md:text-5xl font-extrabold tracking-wide text-slate-50">
							ULTRATEC 4D
						</span>

						<span className="text-white"> EVENT TECHNOLOGY</span>
					</h1>

					<div className="flex justify-center mb-5">
						<Link href="https://ultratec4d.ae/">
							<span className="flex gap-x-2 quote-btn justify-center items-center rounded-full bg-[#2060AD] hover:bg-blue-800 transition-all w-[155px] h-[44px] cursor-pointer ring-4 ring-white">
								<span className="text-white">Visit Website</span>
								<Image
									width={20}
									height={20}
									src="/arrow-circle-right3@2x.png"
									alt="3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec"
								/>
							</span>
						</Link>
					</div>
				</div>
				<div className="relative flex flex-col items-center max-h-screen">
					<div className="relative">
						<video muted autoPlay loop className="max-h-screen rounded-lg z-20">
							<source src={ultratec4dintro} type="video/mp4" />
							Your browser does not support the video tag.
						</video>

						<div className="absolute rounded-2xl backdrop-blur-lg self-end right-4 top-2">
							<Image
								src={"/4DLogo.png"}
								alt="ultratec 4d logo"
								sizes="100vw"
								width={220}
								height={220}
							/>
						</div>
					</div>
				</div>
			</section>
			<div className="circle-gradient-two opacity-50 "></div>
		</>
	);
};

export default UltratecFourD;

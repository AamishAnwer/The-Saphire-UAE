import Image from "next/image";
import Link from "next/link";

export default function Main() {
	const style = "text-white text-lg";
	return (
		<>
			<section className="relative bg-gradient-to-b from-black to-[#0d2d54] flex flex-col lg:flex-row gap-x-5 xl:gap-x-16 px-4 lg:px-14 py-10 md:py-16 lg:py-24">
				<div className="flex flex-col justify-center">
					<h1 className="text-left text-3xl md:text-5xl max-lg:mt-8 max-lg:text-center text-white">
						Mechanical Application & 3D Printing
					</h1>
					<p className={"lg:mt-4 mt-2 " + style}>
						The emergence of 3D Printing Technology has been impactfull across
						various industries including the field of mechanics.In this field ,
						3D printing is used for prototyping and end manufucturing stage for
						mechanical parts that forms a system,the parts includes friction
						devices such as clutches and brakes,linkages such as hinges and
						joints and structural components like brackets & ducts.
					</p>

					<div className="w-full flex max-lg:justify-center">
						<Link
							href={"/enquiry/#"}
							className="w-40 mt-5 h-[44px] max-lg:mb-4 bg-[#2060AD] px-4 rounded-full flex gap-x-4 items-center justify-between  transition-all"
						>
							<span className="text-white">Get a Quote</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="white"
							>
								<mask
									id="mask0_1161_1882"
									maskUnits="userSpaceOnUse"
									x="0"
									y="0"
									width="24"
									height="24"
								>
									<rect width="24" height="24" fill="white" />
								</mask>
								<g mask="url(#mask0_1161_1882)">
									<path
										d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
										fill="white"
									/>
								</g>
							</svg>
						</Link>
					</div>
				</div>
				<Image
					src={
						"https://res.cloudinary.com/dcugtsmvl/image/upload/q_auto:eco/v1706262429/01_pfv38y.png"
					}
					alt="mechanical"
					width={0}
					height={0}
					sizes="100vw"
					className=" h-[387px] w-full max-lg:h-fit lg:max-w-[42.2%] rounded-xl object-cover"
				/>
			</section>
			<section className="z-50 relative bg-gradient-to-t from-black to-[#0d2d54] text-white flex flex-col lg:flex-row gap-x-5 xl:gap-x-16 px-4 lg:px-14 py-10 md:py-16 lg:py-24">
				<Image
					src={
						"https://res.cloudinary.com/dcugtsmvl/image/upload/q_auto:eco/v1706262428/02_kntdtx.png"
					}
					alt="mechanical"
					width={20}
					height={20}
					sizes="100vw"
					className=" h-[487px] w-full max-lg:h-fit lg:max-w-[42.2%] rounded-xl  object-contain"
				/>
				<div className="flex flex-col gap-5">
					<h1 className="text-left text-5xl max-lg:mt-8 max-lg:text-center text-white">
						Benefits of 3D Printing for Mechanical Application?
					</h1>

					<ul className={"lg:mt-4 mt-2 flex flex-col gap-y-5 " + style}>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={50}
								height={20}
							/>
							Allows for design freedom and complexity through Topology
							optimization, which enhances the efficiency of aspects such as
							weight, strength, and production costs
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={50}
								height={20}
							/>
							Eliminates lengthy assembly process such as welding as it allows
							printing interconnected parts into one 3D printed part
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={50}
								height={20}
							/>
							High pace of time to get to the market because 3D printing allows
							easy making, testing, and re-iterating designs
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={50}
								height={20}
							/>
							3D printing is a great production process for creating many
							mechanical parts in batches that can be printed at one go
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={50}
								height={20}
							/>
							3D Printing offers wide varieties of material such as plastic,
							metal, resins and more depending on the technical and structural
							requirement for the mechanical part
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

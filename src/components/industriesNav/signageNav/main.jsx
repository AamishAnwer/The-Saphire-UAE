import Image from "next/image";
import Link from "next/link";

export default function Main() {
	const style = "text-white text-lg";
	return (
		<>
			<section className="relative bg-gradient-to-b from-black to-[#0d2d54] flex flex-col lg:flex-row gap-x-5 xl:gap-x-16 px-4 lg:px-14 py-10 md:py-16 lg:py-24">
				<div className="flex flex-col justify-center">
					<h1 className="text-left text-5xl max-lg:mt-8 max-lg:text-center text-white">
						Signage & 3D Printing
					</h1>

					<p className={"lg:mt-4 mt-2 " + style}>
						3D printing is revolutionising marketing and advertisement industry
						with super sized objects that can be 3d printed in large format for
						retail , display, staging and events purposes . Fabrication of
						objects of any scale regardless of the complexity is easily enabled
						by 3D printers. Morover, in Signage and retail industry 3D printed
						object has a cleaner and aesthetically eye pleasing .
					</p>

					<div className="w-full flex max-lg:justify-center">
						<Link
							href={"/enquiry/"}
							className="w-40 mt-5 h-[44px] bg-[#2060AD] px-4 rounded-full flex gap-x-4 items-center justify-between  transition-all"
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
						"https://d33609liqwio9r.cloudfront.net/2024-02-24T15%3A14%3A25.523Z-1-min.png"
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
						"https://d33609liqwio9r.cloudfront.net/2024-02-24T15%3A24%3A07.225Z-2-min.png"
					}
					alt="mechanical"
					width={70}
					height={20}
					sizes="100vw"
					className=" h-[487px] w-full max-lg:h-fit lg:max-w-[42.2%] rounded-xl  object-contain"
				/>

				<div className="flex flex-col">
					<h1 className="text-left text-5xl max-lg:mt-8 max-lg:text-center text-white">
						Benefits of 3D Printing for Signage?
					</h1>

					<ul className={"lg:mt-4 mt-2 flex flex-col gap-y-5 " + style}>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={80}
								height={20}
								className="mx-1"
							/>
							3D printed object are stronger and lighter as the loads on the
							object passes throught it with minimal disruption as the infill on
							the inside manages the load and spread it evenly throughout the
							printed object and hence eliminate concetrated stress points that
							leads to breakage and weakness.
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={70}
								height={20}
								className="mx-1"
							/>
							Normally signage and retail objects required to be glued or
							mecahnically joined together but with 3d printing this process is
							cut down as the whole object can be printed at one go hence
							facilitating the manufucturing process and save time .
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={70}
								height={10}
								className="mx-1"
							/>
							Practical funtionality is one of the benefits of 3D priniting in
							this particular industry for instance a printed object can be used
							in various sales and visualization puposes such as hand-held
							gadgets, toys, newly designed point of purchase displays.
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={60}
								height={20}
								className="mx-1 "
							/>
							Easy expression of many details that can be replicated at any
							scale .
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

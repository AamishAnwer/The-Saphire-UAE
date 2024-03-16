import Image from "next/image";
import Link from "next/link";

export default function Main() {
	const style = "text-white text-lg";
	return (
		<>
			<section className="relative bg-gradient-to-b from-black to-[#0d2d54] flex flex-col lg:flex-row gap-x-5 xl:gap-x-16 px-4 lg:px-14 py-10 md:py-16 lg:py-24">
				<div className="flex flex-col justify-center">
					<h1 className="text-left text-3xl md:text-5xl max-lg:mt-8 max-lg:text-center text-white">
						Architectural Model Making In Dubai UAE
					</h1>

					<p className={"lg:mt-4 mt-2 " + style}>
						At Ultrtec, we redefine precision in architectural model making in
						Dubai UAE. Our cutting-edge technology, coupled with expertise,
						ensures unparalleled quality. With a focus on detail, our 3D
						printing capabilities set us apart. Discover how Ultrtec delivers
						architectural model making in Dubai like no other. Elevate your
						designs with us
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
						"https://d33609liqwio9r.cloudfront.net/2024-02-24T06%3A05%3A55.442Z-1.png"
					}
					alt="architecture in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
					width={0}
					height={0}
					sizes="100vw"
					className=" h-[387px] w-full max-lg:h-fit lg:max-w-[42.2%] rounded-xl object-cover"
				/>
			</section>

			<section className="z-50 relative bg-gradient-to-t from-black to-[#0d2d54] text-white flex flex-col lg:flex-row gap-x-5 xl:gap-x-16 px-4 lg:px-14 py-10 md:py-16 lg:py-24">
				<Image
					src={
						"https://d33609liqwio9r.cloudfront.net/2024-02-24T05%3A58%3A07.675Z-2.png"
					}
					alt="mechanical in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
					width={30}
					height={30}
					sizes="100vw"
					className=" h-[480px] w-full max-lg:h-fit lg:max-w-[42.2%] rounded-xl  object-contain"
				/>

				<div className="flex flex-col">
					<h1 className="text-left text-5xl max-lg:mt-8 max-lg:text-center text-white">
						Benefits of 3D Printing for Architects?
					</h1>

					<ul className={"lg:mt-4 mt-2 flex flex-col gap-y-5 " + style}>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={50}
								height={20}
							/>
							3D Printing is very cost efficient because architect and design
							and fabricate Highly detailed 3D architectural models
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={50}
								height={20}
							/>
							3D printing allows for faster production of architectural model
							and quick concept test and iterations hence shortening the time
							between design and creation phases.
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={50}
								height={20}
							/>
							Translating a sketch to 3d model snd a direct production of the
							model with extreme ease makes 3d Printing technology adoption easy
							, user friendly and smooth
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={50}
								height={20}
							/>
							Scale is not a limitation for 3d printing , it can print any
							project scale such as developments, citiscape and commercial
							builidng ,home interiors .
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={50}
								height={20}
							/>
							3D printing havs varriety of material to suit designs structural
							requirement and its high precision enable complex model designed
							to be printed
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

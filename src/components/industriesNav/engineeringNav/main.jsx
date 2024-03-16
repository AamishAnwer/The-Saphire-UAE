import Image from "next/image";
import Link from "next/link";

export default function Main() {
	const style = "text-white text-lg";
	return (
		<>
			<section className="relative bg-gradient-to-b from-black to-[#0d2d54] flex flex-col lg:flex-row gap-x-5 xl:gap-x-16 px-4 lg:px-14 py-10 md:py-16 lg:py-24">
				<div className="flex flex-col justify-center">
					<h1 className="text-left text-5xl max-lg:mt-8 max-lg:text-center text-white">
						Engineering & 3D Printing
					</h1>

					<p className={"lg:mt-4 mt-2 " + style}>
						Prototypes for engineers are really crucial and 3D prinitng
						technologies has been widely adopted as it is an easy and efficient
						way to make prototypes even those with complex internal structure
						and geometries , hence enable a great way to adress problems and
						formulate solution on site . 3D Printer can shrink the timeframe of
						the project development from month to days and also enables the
						fabrication of prototypes and end-user parts hence deliver project
						on a tight deadine and budget.
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
						"https://d33609liqwio9r.cloudfront.net/2024-02-24T16%3A32%3A29.919Z-01-min.png"
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
						"https://d33609liqwio9r.cloudfront.net/2024-02-24T16%3A35%3A20.446Z-02-min.png"
					}
					alt="mechanical"
					width={70}
					height={20}
					sizes="100vw"
					className=" h-[487px] w-full max-lg:h-fit lg:max-w-[42.2%] rounded-xl  object-contain"
				/>

				<div className="flex flex-col">
					<h1 className="text-left text-5xl max-lg:mt-8 max-lg:text-center text-white">
						Benefits of 3D Printing for Engineers?
					</h1>

					<ul className={"lg:mt-4 mt-2 flex flex-col gap-y-5  " + style}>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={80}
								height={20}
							/>
							3D printing increase flexibility and aid in product test phase
							because traditional methods the design and testing phase are very
							expensive and time consuming especially when producing small parts
							for small bore motorcycles.
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={80}
								height={20}
							/>
							Rather than investing on fully outsourced fabracation which is
							expensive and time-consuming , 3D printing offers a cheap and
							quick way to test concepts and formulate project parametres.
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={80}
								height={20}
							/>
							3D printers create whole parts on site replacing tiny joinery
							pieces such as metal parts which are heavy, as the the 3d prints
							are lighter and strong as well.
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
								sizes="100vw"
								width={80}
								height={20}
							/>
							Low -volume production of complex parts is enabled by 3D printing
							technology.
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

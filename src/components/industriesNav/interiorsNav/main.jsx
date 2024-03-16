import Image from "next/image";
import Link from "next/link";

export default function Main() {
	const style = "text-white text-lg";
	return (
		<>
			<section className="relative bg-gradient-to-b from-black to-[#0d2d54] flex flex-col lg:flex-row gap-x-5 xl:gap-x-16 px-4 lg:px-14 py-10 md:py-16 lg:py-24">
				<div className="flex flex-col justify-center">
					<h1 className="text-left text-5xl max-lg:mt-8 max-lg:text-center text-white">
						Interior , Art & 3D Printing
					</h1>

					<p className={"lg:mt-4 mt-2 " + style}>
						Interior design is very challenging field as it require a budget ,
						time management and more .3D printing open door to create complex
						furnishingsas well as detailed parts very quickly. Smaller scale
						decorative items can be easily prototyped and without becoming
						costly with the materials or human labor. currently some designer
						offer customer to choodse designs from a a catalog which numerous
						ready-to-print designs and finishes hence, enables mass
						customization .The 3D printed furnishings can be from recyclable
						materials rather than shipped.Today Prices ranges from $500 to
						$1,500, similar to current costs.
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
					src={"/interior/in1.jpg"}
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
						"https://d33609liqwio9r.cloudfront.net/2024-02-24T16%3A57%3A38.320Z-2-min.png"
					}
					alt="mechanical"
					width={100}
					height={20}
					sizes="100vw"
					className=" h-[487px] w-full max-lg:h-fit lg:max-w-[42.2%] rounded-xl  object-contain"
				/>
				<div className="flex flex-col">
					<h1 className="text-left text-4xl max-lg:mt-8 max-lg:text-center text-white">
						Benefits of 3D Printing for Designers anmd sculptors?
					</h1>

					<ul className={"lg:mt-4 mt-2 flex flex-col gap-y-5 " + style}>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="bullet"
								sizes="100vw"
								width={80}
								height={20}
							/>
							Replication is part of some artworks creative expression and
							replication can be tedious and prone to errors and kinks therefore
							3D printers enable artists overcome this hardship and focus on the
							bigger vision.
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="bullet"
								sizes="100vw"
								width={80}
								height={20}
							/>
							3D printing give way to infinite possibilities of ideas making
							artists empowered and able to capture their imagination with this
							technology.
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="bullet"
								sizes="100vw"
								width={80}
								height={20}
							/>
							It control intellectula property infringment ,hence keep the
							confidentiality with the printed design , hence no third party can
							claim the innovation behind a specific interior design piece since
							it printed in-house.
						</li>
						<li className="flex">
							<Image
								src={"/points.png"}
								alt="bullet"
								sizes="100vw"
								width={80}
								height={20}
							/>
							Reduce cost such as material. labour and machine costs hence runs
							business effeciently.
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
	return (
		<section className="z-10 relative w-full p-3 px-5 lg:p-10 lg:px-20 bg-gradient-to-t from-black to- to-[#0d2d54]">
			<div className="relative flex justify-center items-center ">
				<Image
					src={"/FooterBanner.png"}
					sizes="100vw"
					width={0}
					height={0}
					className="w-full h-fit max-h-[444px] object-cover object-bottom rounded-3xl"
				/>
				<div className="absolute left-5 lg:left-10 max-lg:pr-5">
					<h1 className="max-w-3xl text-sm md:text-2xl lg:text-3xl text-left text-zinc-800 mb-3 font-medium">
						Talk to our experts today and let us serve you with the best 3D
						Printing solutions in UAE.
					</h1>
					<Link
						href={"/enquiry"}
						className="w-36 lg:w-40 h-11 px-4 rounded-full bg-blue-600 flex gap-x-1 md:gap-x-4 items-center justify-between hover:w-44 transition-all"
					>
						<span className="text-white text-base max-lg:text-xs">
							Get a Quote
						</span>
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
		</section>
	);
}

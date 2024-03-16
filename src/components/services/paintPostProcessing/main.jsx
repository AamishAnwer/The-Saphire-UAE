import Image from "next/image";
import Link from "next/link";

export default function Main() {
	const style = "text-white text-lg";
	return (
		<section className="z-50 relative text-white flex flex-col lg:flex-row gap-x-5 xl:gap-x-16 px-4 lg:px-14 py-10 md:py-16 lg:py-24">
			<Image
				src={"/img.png"}
				alt="additive manufacturing"
				width={0}
				height={0}
				sizes="100vw"
				className=" h-[387px] min-[387px] w-full max-lg:h-fit lg:max-w-[42.2%] rounded-xl object-cover"
			/>
			<div>
				<h1 className="text-left text-5xl max-lg:mt-8 max-lg:text-center text-white">
					Our Painting techniques compliments our high quality finished
					products.
				</h1>

				<p className={"lg:mt-4 mt-2 " + style}>
					To get to the goal set for the final look , of the fabricated item
					whether 3D printed or Laser cut items we employ various post
					processing techniques to match the digital 3d model with the physical
					model .hence we use techniques such as colour laser engraving , sand
					blasting , spray painting and UV printing design.
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
		</section>
	);
}

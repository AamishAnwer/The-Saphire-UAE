import Image from "next/image";
import Link from "next/link";

export default function Main() {
	const style = "text-white text-lg";
	return (
		<section className="z-50 relative text-white flex flex-col lg:flex-row gap-x-5 xl:gap-x-16 px-4 lg:px-14 py-10 md:py-16 lg:py-24">
			<Image
				src={"/3d/img.png"}
				alt="additive manufacturing in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
				width={0}
				height={0}
				sizes="100vw"
				className=" h-[387px] min-h-[387px] w-full max-lg:h-fit lg:max-w-[42.2%] rounded-xl object-cover"
			/>
			<div>
				<h1 className="text-left text-5xl max-lg:mt-8 max-lg:text-center text-white">
					Elevate Your Projects with Ultratec’s Superior 3D Design Services{" "}
				</h1>

				<p className={"lg:mt-4 mt-2 " + style}>
					At Ultratec, we redefine the boundaries of creativity with our
					unmatched 3D design services. With a team of seasoned professionals,
					we bring a level of expertise that sets us apart. Our commitment to
					excellence shines through in every project, making us the preferred
					choice for those seeking extraordinary 3D designs.
					<br />
					Ultratec’s tailored solutions cater to a wide array of industries,
					from architectural marvels to intricate product prototypes. Our
					seamless integration ensures that your vision is not only realized but
					exceeds expectations. We value your time and investment, and that’s
					why we prioritize clear communication and punctual delivery.
					<br />
					What sets Ultratec apart is our unwavering dedication to staying at
					the forefront of technology. By employing state-of-the-art software
					and hardware, we create 3D designs that are not just accurate, but
					also visually stunning.
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

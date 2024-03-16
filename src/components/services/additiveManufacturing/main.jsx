import Image from "next/image";
import Link from "next/link";

export default function Main() {
	const style = "text-white text-lg";
	return (
		<section className="z-50 relative text-white flex flex-col lg:flex-row gap-x-5 xl:gap-x-16 px-4 lg:px-14 py-10 md:py-16 lg:py-24">
			<Image
				src={"/services/additiveManufacturing/main.png"}
				alt="additive manufacturing in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
				width={0}
				height={0}
				sizes="100vw"
				className=" h-[627px] min-[627px] w-full max-lg:h-fit lg:max-w-[42.2%] rounded-xl object-cover"
			/>
			<div>
				<h1 className="text-left text-5xl max-lg:mt-8 max-lg:text-center text-white">
					We Will turn your ideas into reality
				</h1>
				<p className={"lg:mt-4 mt-2 " + style}>
					Unlock the limitless potential of Additive Manufacturing, often
					referred to as 3D Printing, with Ultratec's unmatched expertise. We
					are your go-to destination for cutting-edge Additive Manufacturing
					solutions that redefine industry standards. Our advanced technology
					and dedicated team ensure that your projects are executed flawlessly,
					from concept to creation. Whether you require rapid prototyping,
					intricate component production, or customized designs, Ultratec leads
					the way. Experience the advantages of Additive Manufacturing - reduced
					production costs, shorter lead times, and unparalleled design freedom.
					Trust Ultratec to provide you with a superior service that maximizes
					the potential of Additive Manufacturing. Let's bring your vision to
					life, together.
				</p>
				<p className={"lg:mt-2 mt-1 " + style}>
					Experience the advantages of Additive Manufacturing - reduced
					production costs, shorter lead times, and unparalleled design freedom.
					Trust Ultratec to provide you with a superior service that maximizes
					the potential of Additive Manufacturing. Let's bring your vision to
					life, together.
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

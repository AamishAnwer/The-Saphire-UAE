import { useEffect, useState } from "react";
import Image from "next/image";
import TextAnimation from "@/components/TextAnimation";
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaLinkedin,
	FaYoutubeSquare,
} from "react-icons/fa";

export default function Hero({
	type,
	src,
	heroText,
	poster = null,
	isshowSubHeading = false,
	className,
}) {
	const [showNumbers, setShowNumbers] = useState(false);
	const style = `w-full max-h-screen max-lg:min-h-screen object-center object-cover brightness-[65%]`;

	const handleMouseEnter = () => setShowNumbers(true);
	const handleMouseLeave = () => setShowNumbers(false);
	return (
		<section className={"w-full relative z-50 " + className}>
			{type == "img" ? (
				<Image
					src={src}
					className={style}
					sizes="100vw"
					style={{
						minHeight: "90vh",
					}}
					width={0}
					height={0}
				/>
			) : (
				<video
					autoPlay
					loop
					muted
					playsInline
					className={style}
					poster={poster}
				>
					<source src={src} type="video/mp4" />
				</video>
			)}

			<div className=" text-[32px] text-white mx-auto text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-2/3 md:w-1/2 lg:w-3/5 xl:w-3/5">
				<div>
					<br />
					{isshowSubHeading ? (
						<TextAnimation
							textStyle={"text-xl md:text-4xl "}
							text={heroText}
						></TextAnimation>
					) : (
						<TextAnimation
							textStyle={"text-xl md:text-4xl "}
							text={heroText}
						></TextAnimation>
					)}
				</div>
			</div>

			<div
				className={`flex max-md:w-full hover:text-blue-600 justify-center md:flex-col gap-y-2 gap-x-2 absolute top-3/4 md:top-1/2 md:right-8 transform md:-translate-x-1/2 md:-translate-y-1/2`}
			>
				<a
					href="https://www.youtube.com/channel/UCS5PGsjgPWPmw-LuXmHxFgw"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaYoutubeSquare className="hover:cursor-pointer text-3xl text-white social-icon hover:bg-white hover:text-blue-800 border-2 border-transparent hover:rounded-md" />
				</a>

				<a
					href="https://www.instagram.com/ultratec3d_printing/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaInstagramSquare className="hover:cursor-pointer text-3xl text-white social-icon hover:bg-white hover:text-blue-800 border-2 border-transparent hover:rounded-md" />
				</a>

				<a
					href="https://www.linkedin.com/company/ultratec-3d-printing"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin className="hover:cursor-pointer text-3xl text-white social-icon hover:bg-white hover:text-blue-800 border-2 border-transparent hover:rounded-md" />
				</a>

				<a
					href="https://facebook.com/Ultratec3DPrinting"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFacebookSquare className="hover:cursor-pointer text-3xl text-white social-icon hover:bg-white hover:text-blue-800 border-2 border-transparent hover:rounded-md" />
				</a>

				<div
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className="relative"
				>
					<img
						className="hover:cursor-pointer social-icon hover:border-blue-600 border-2 border-transparent hover:rounded-md"
						alt={
							"3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec Contact Ultratec"
						}
						src="/phone.svg"
					/>
					{showNumbers && (
						<div className="absolute -translate-x-full left-0 -top-10 md:top-1/2 -translate-y-1/2 bg-slate-700 text-white bg-opacity-30 p-2 rounded-lg shadow-lg">
							<div className="text-center hover:text-blue-500">
								<a href="tel:+971543401240">+971543401240</a>
							</div>
							<div className="text-center hover:text-blue-500">
								<a href="tel:+971503463286">+971503463286</a>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

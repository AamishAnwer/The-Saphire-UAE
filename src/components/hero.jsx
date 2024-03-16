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
					<source
						src="https://res.cloudinary.com/dcpte972l/video/upload/v1710583676/SAPPHIRE_LAUNCH_16X9_EN_tvca1l.mp4"
						type="video/mp4"
					/>
				</video>
			)}

			{/* <div className=" text-[32px] text-white mx-auto text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-2/3 md:w-1/2 lg:w-3/5 xl:w-3/5">
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
			</div> */}
		</section>
	);
}

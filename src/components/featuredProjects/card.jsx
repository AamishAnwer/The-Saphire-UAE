import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import styles from "./card.module.css";
export default function FeaturedProjectsCard({
	src,
	setOpen,
	onVideoOpen,
	isHide = false,
	setIsVideoOpen,
	title,
	subtitle,
}) {
	return (
		<div
			className={`relative w-322 h-334 rounded-10 overflow-hidden ${
				isHide ? "cursor-pointer" : ""
			}`}
			onClick={setOpen}
		>
			<Image
				src={src}
				alt="3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec"
				width={322}
				height={334}
				className="rounded-lg object-contain"
			/>

			{!isHide && (
				<div
					className={`overlay absolute inset-0 flex flex-col justify-center items-center hover:rounded-lg opacity-0 hover:opacity-100 ${styles.cardcontent}`}
					onClick={onVideoOpen}
				>
					<p
						className={`text-white text-xl text-center font-light py-4  ${styles.text}`}
					>
						{title}
					</p>
					<FaCirclePlay
						className={`text-6xl text-white transition-opacity duration-300 ${styles.icon}`}
						onClick={setIsVideoOpen}
					/>

					<p
						className={`text-white text-xs text-center font-light py-4  ${styles.text}`}
					>
						{subtitle}
					</p>
					<div
						className={`border-t-2 border-white mb-4 w-28 ${styles.opptext}`}
					></div>
					<button
						className={` ${styles.opptext} text-mini flex flex-row text-whitesmoke  text-left justify-center border rounded-full px-4 items-center`}
					>
						Read More
						<img
							className="w-4 h-4 ml-2"
							alt="3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec"
							src="/arrow-circle-right@2x.png"
						/>
					</button>
				</div>
			)}
		</div>
	);
}

import Image from "next/image";
import Link from "next/link";

export default function OurTechnologiesCard({ src, title, description, href }) {
	return (
		<div
			className={
				"relative bg-gray-100 hover:bg-[rgb(238,239,240)] transition-all rounded-xl p-8 flex flex-col gap-y-4 w-[416px] h-[319px]"
			}
		>
			<div className="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					className="absolute top-6 right-6 w-fit flex justify-end"
				>
					<circle cx="6" cy="6" r="6" fill="#D2D2D2" />
				</svg>

				<Image
					width={67}
					height={73}
					src={src}
					alt={description}
					className="object-contain mx-auto  max-w-[67px] max-h-[73px]"
				/>
			
			</div>
			<h1 className="text-center text-3xl">{title}</h1>
			<p className="line-clamp-2">{description}</p>
			<Link
				href={href}
				className="flex gap-x-2 quote-btn justify-center items-center mx-auto icon-hover-3d rounded-full bg-[#2060AD] hover:bg-blue-800 transition-all w-[155px] h-[44px]"
			>
				<span className="text-white ">Read More</span>
				<Image
					width={0}
					height={0}
					sizes="100vw"
					className="w-5 h-5"
					src={"/arrow-circle-right3@2x.png"}
					alt="arrow"
				/>
			</Link>
		</div>
	);
}

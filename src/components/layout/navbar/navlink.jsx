import { useState } from "react";
import Link from "next/link";


export default function NavLink({
	href = null,
	imagesLength = 0,
	children,
	content,
	onClick,
}) {
	const imagesArray = new Array(imagesLength).fill(0);
	const [open, setOpen] = useState(false);
	const [play, setPlay] = useState(Array(imagesLength).fill(false));
	function onMouseEnter(index) {
		setPlay((prev) => [
			...prev.slice(0, index),
			true,
			...prev.slice(index + 1),
		]);
	}
	function onMouseLeave(index) {
		setPlay((prev) => [
			...prev.slice(0, index),
			false,
			...prev.slice(index + 1),
		]);
	}
	return (
		<div
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			className="flex"
		>
			<Link
				href={href}
				className="text-center hover:text-yellow-600 transition-all transform slide-in-left relative"
			>
				<p className="hover:cursor-pointer text-center max-lg:text-lg max-md:font-medium" onClick={onClick}>{children}</p>
			</Link>
			<div
				className={`rounded-sm items-center flex justify-center h-40 absolute w-full max-w-[1600px] left-0 top-[40px] text-white ${
					imagesLength && open ? "block" : "hidden"
				}`}
			>
				<div className="bg-slate-700 bg-opacity-30 border border-yellow-500 backdrop-blur-sm w-fit px-12 rounded-md py-4 flex justify-center items-center gap-x-8">
					{content &&
						content?.length > 0 &&
						content.map((data, index) => {
							return (
								<Link
									className="flex flex-col items-center"
									key={index}
									href={data?.href ? data?.href : "#"}
									onMouseEnter={() => onMouseEnter(index)}
									onMouseLeave={() => onMouseLeave(index)}
								>
									{data?.svgContent(play, index)}
									{/* <Image
										width={0}
										height={0}
										sizes="100vw"
										style={{
											color: "red",
										}}
										className="hover:cursor-pointer  w-[90px] h-[73px] pb-4"
										src={`/navbar/${children.toLowerCase()}/${index + 1}.svg`}
										// src={`/navbar/${children.toLowerCase()}/${index + 1}${
										// 	play[index] ? "_hover.png" : ".png"
										// }`}
									/> */}
									<span
										className={`${
											play[index] ? "text-white" : "text-white"
										} text-xs mt-[2px]`}
									>
										{content[index].title}
									</span>
								</Link>
							);
						})}
				</div>
			</div>
		</div>
	);
}

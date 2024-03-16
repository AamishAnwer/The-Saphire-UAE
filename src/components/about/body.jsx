import Image from "next/image";

export default function AboutBody({ src, title, desc, imageToLeft }) {
	return (
		<div
			className={`w-full h-auto flex flex-col md:flex-row justify-center my-10 text-white ${
				imageToLeft ? "md:flex-row-reverse" : "md:flex-row"
			}`}
		>
			<div
				className={`w-full md:w-1/2 flex flex-col ${
					imageToLeft ? "items-start" : "items-center md:items-end"
				} justify-center gap-y-5 px-10`}
			>
				<h1
					className={`text-4xl text-center ${
						imageToLeft ? "md:text-left" : "md:text-right"
					} font-medium capitalize mt-2 w-full`}
				>
					{title}
				</h1>
				<p
					className={`max-w-[520px] ${
						imageToLeft ? "md:text-left" : "md:text-right"
					} text-center mb-2`}
				>
					{" "}
					{desc}
				</p>
			</div>
			<div className={`w-full md:w-1/2 ${imageToLeft ? "order-1" : "order-2"}`}>
				<Image
					src={src}
					alt={title}
					layout="responsive"
					width={683}
					height={400}
					className="object-cover w-full h-full rounded-lg"
				/>
			</div>
		</div>
	);
}

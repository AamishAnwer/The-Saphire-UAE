import Image from "next/image";

export default function BodyCard({ src, title, text, imageToRight }) {
	return (
		<div className="text-white flex flex-col  lg:flex-row gap-x-5 xl:gap-x-16 px-4 lg:px-14 py-10 md:py-16 lg:py-24">
			<Image
				src={src}
				alt="additive manufacturing card image"
				width={100}
				height={100}
				sizes="100vw"
				className="h-[462px] w-full max-lg:h-fit lg:min-w-[35%] min-w-[20%] rounded-xl object-cover shrink"
			/>
			<div className={`${imageToRight && "lg:-order-1"}`}>
			
			<h1 className="text-left text-3xl md:text-5xl max-lg:mt-8 max-lg:text-center font-medium underline  underline-offset-8  decoration-2 ">
					{title}
				</h1>
				<p className="lg:mt-8 mt-3 md:text-2xl lg:max-h-[562px] overflow-auto">
					{text}
				</p>

			</div>
		</div>
		
	);
}

export default function HomeBodyCard({ src, src2, title, text, imageToRight }) {
	return (
		<section className="w-full h-auto flex max-h-screen text-white">
			<img
				src={src}
				alt={title}
				className={`w-3/5 object-cover ${imageToRight && "order-1"}`}
			/>
			<div className="relative w-full p-8 flex items-center justify-center">
				<img
					src={src2}
					alt={title}
					className="w-full object-cover h-full rounded-sm brightness-75"
				/>
				<div className="absolute flex flex-col gap-y-4 text-center p-24">
					<span className="text-2xl font-bold bg-black/50 rounded-sm">
						{title}
					</span>
					<span className="italic text-sm bg-black/30 rounded-sm">{text}</span>
				</div>
			</div>
		</section>
	);
}

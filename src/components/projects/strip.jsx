export default function Strip({ text }) {
	return (
		<div className="w-full h-fit mt-16 relative flex justify-center items-center">
			<h1 className="absolute text-white text-center text-xl md:text-[44px] capitalize font-medium underline">
				{text}
			</h1>
		</div>
	);
}

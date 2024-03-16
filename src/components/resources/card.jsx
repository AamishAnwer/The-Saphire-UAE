export default function Card2({ svg, text }) {
	return (
		<>
			<div className="bg-[#0074FF] grow min-w-80 p-10 rounded-xl flex flex-col gap-y-6">
				{svg}
				<div className="border-t border-dashed border-white h-0"></div>
				<h2 className="text-white text-3xl">{text}</h2>
			</div>
		</>
	);
}

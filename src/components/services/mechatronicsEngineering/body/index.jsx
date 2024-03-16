import BodyCard from "./card";
const data = [
	{
		src: "/bg.png",
		title: "MECHATRONICS DESIGN",
		text: "We provide mechatronic design by integrating design of mechanical system and its embedded control sytem .Hence the system that we design is composed of mechanical parts, electrical devices, electronics component , sensors ,hardware and its operated and conrolled by a software.",
		imageToRight: false,
	},
	{
		src: "/bg2.png",
		title: "ELECTRICAL CIRCUIT",
		text: "To expand our service for you we also provide eletrical circuit PCB design consisting of interconnected electrical components thats produce current for our livened 3D models",
		imageToRight: true,
	},
	{
		src: "/bg3.png",
		title: "AUTOMATION",
		text: "Ultratec has wide range of advance technologies that require less intervention that shorten the time of getting your finished product with the highest quality.",
		imageToRight: false,
	},
	{
		src: "/bg4.png",
		title: "EMBEDDED SYSTEMS WITH PROGRAMMING",
		text: "To automate our 3D models with embedded sytems, we use programming platforms with microcontrollers",
		imageToRight: true,
	},
];
export default function Body() {
	return (
		<section className="w-full">
			<h1 className="text-left text-5xl max-lg:mt-8 max-lg:text-center text-white">
				HOW WE DEVELOP YOUR PRODUCT
			</h1>
			{data.map((e, index) => (
				<BodyCard
					key={index}
					src={e.src}
					title={e.title}
					text={e.text}
					imageToRight={e.imageToRight}
				/>
			))}
		</section>
	);
}

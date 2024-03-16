import BodyCard from "./card";
const data = [
	{
		src: "/arcylic/img7.png",
		title: "ACRYLIC LASER CUTTING",
		text: "We produce clean cuts of acrylic sheets with our advance equipments with less amount of time .The laser cutting process involves precise.crisp and polished edges cuts on specified size as well and engravings for signage, display and other illuminated advertisements.",
		imageToRight: false,
	},
	{
		src: "/arcylic/img8.png",
		title: "ARCHITECTURE",
		text: "Produce great acrylic 3D model of your projects with us , we ensure high quality and polished 3D model of your site and builidng designs",
		imageToRight: true,
	},
	{
		src: "/arcylic/img9.png",
		title: "SIGNANGE",
		text: "We produce both , non illuminated and illuminated form of advertisement with acrylic fabrication related technologies such lettering for signage, point of sales displays and more.",
		imageToRight: false,
	},
];
export default function Body() {
	return (
		<section className="w-full">
			{/* <h1 className="text-left text-5xl max-lg:mt-8 max-lg:text-center text-white">
				HOW WE DEVELOP YOUR PRODUCT
			</h1> */}
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

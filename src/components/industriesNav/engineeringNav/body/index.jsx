import BodyCard from "./card";
const data = [
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T16%3A37%3A50.558Z-3-min.png",
		title: "Electrical Engineering",
		text: `3D printing was adopted by electrical engineers at a very earlier stage of its technological development by printing electrical parts and currently it has advance and can even print with both conductive and non-conductive materials. with the recent material innovation , the conductive materials include not just metals, new plastics have been developed that are conductive which, opens up wider range of possibilities to utilize 3D printing to the development of electrical systems and electronics.`,
		imageToRight: false,
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T16%3A37%3A50.563Z-4-min.png",
		title: "Aerospace Engineering",
		text: `The Aerospace and Defence industry employs 3d printer for itts ability to create parts that are stronger and lighter compared to traditional methods of manufucturing. A&D was as well an early adopter of the technologyb since from the 1989 and continues to further its advancement for instance the Aerospace & Defense industries contributed approximately 16% of 3D Printing’s in 2015.`,
		imageToRight: true,
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T16%3A37%3A50.574Z-5-min.png",
		title: "Mechatronics Engineering",
		text: `Mechanical 3D printing allows the production of a batch of parts that are traditionally made of many components . 3D printing reduce assemblies and welding steps, therefore making the manufacturing process easier and faster.`,
		imageToRight: false,
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T16%3A37%3A50.649Z-6-min.png",
		title: "Chemical Engineering",
		text: `3D printing, or additive manufacturing, has made its way into many fields with its sustainable advantages for instance it can be applied in traditional chemical engineering process by developing internals for process plant equipment, and also in emerging areas such as bioengineering projects such as tissue scaffolding.`,
		imageToRight: true,
	},
];
export default function Body() {
	return (
		<section className="w-full bg-gradient-to-b from-black to-[#0d2d54] text-white">
			<h1 className="text-5xl font-bold underline underline-offset-8 decoration-2">
				3D Printing Application in Architecture
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

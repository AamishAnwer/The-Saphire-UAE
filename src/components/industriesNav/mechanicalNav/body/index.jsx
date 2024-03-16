import BodyCard from "./card";
const data = [
	{
		src: "/industry/c1.jpg",
		title: "Aeronautics",
		text: `In the field of Aeronautics , 3D printing is can be used to produce different functional parts such as a jet fuel nozzle tip and more,therefore it very fruitful due to its topology optimization of mechanical parts and also it decrease the amount of pieces to be printed for a single functional part .For intance GE Aviation , a geneal electrics company which focuses on jet engine production printes almost 30000 parts ,which pose great benefit from not oly parts that were strong with 25% of weight reduced but also facilitated the assemly system ,which reduce the number of pices that makes up the printed part to 20.`,
		imageToRight: false,
	},
	{
		src: "/industry/c2.png",
		title: "Transport",
		text: `3D Printed mechanic application extend to Railway design for instance networks cush as the German Mobility Goes Additive ,fotered the adoption of 3D printing in differnet industries ,they worked with Hamburg’s metro operator to make 3D printed operational and safe component to use for the vehicles .They 3D Printed mechanics like brakes and hence expaniding the application of 3D printing in the transport vehicles realms.`,
		imageToRight: true,
	},
	{
		src: "/industry/c3.png",
		title: "Drones",
		text: `Drone Manufuctures use intergrated system that uses mechanical and electrinic systems,hence 3D printing opened up the ease s developing stages for their products for intance UVify , a racing frone manufuturing company uses 3D printing technology for prototyping different iterated versiong of the drone to achieve balance and test performance , aerodynamics of the design .`,
		imageToRight: false,
	},
	{
		src: "/industry/c4.png",
		title: "MASS CUSTOMIZATION",
		text: `Making custom made products can be difficult, take time and be expensive… But by using 3D printing, it is easier! Creating adapted products is really the key in some sectors. That is why since a few years we can see a clear development of medical 3D printing, for example. But it is also true in fashion. Making adapted devices adapted to patients or customer is a real advantage.`,
		imageToRight: true,
	},
];
export default function Body() {
	return (
		<section className="w-full bg-gradient-to-b from-black to-[#0d2d54] text-white">
			<h1 className="text-5xl font-bold underline underline-offset-8 decoration-2">
				3D Printing Application in Mechanical Engineering
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

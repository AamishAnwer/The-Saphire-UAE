import BodyCard from "./card";
const data = [
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T06%3A17%3A01.086Z-4.png",
		title: "Concept Models",
		text: `In any architectural project there is a concept stage which envisions the idea of an architect and the client .Before the rise of 3d printers Before , hand made model were used to test ideas and visualize them by tracing blueprints drawing, and it was very challenging because it required energy and skills.moroever iterating and testing complex geometrical design concepts was daunting .3D printing ease up this process very much beacause it can print at one go a complex , highly detailed and accurate model with variety of material available depending on the presentation end-goal of the CAD Model.With 3D Printing Architects can sell their unique idea to clients as the client would quicly understand the bigger vision about the building concept and make iteration of ideas in a faster and less costly way.`,
		imageToRight: false,
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T06%3A17%3A01.086Z-4.png",
		title: "Interior Design",
		text: `Interior design has adopted the use of 3D printers to increase effeciency od the design interms, of creativity, cost, and time . 3D printing enables the creation of complex furnishings and detailed design parts at a much faster way . Morover , 3D prinitng had made it easier form smaller decorative items to be prototyped quickly withought using expensive materials or intensive handy work . Currently fabricators and designers have begun to bring customers to choose from a catalog of ready-to-print designs and finishes. The customer can be customized without additional costs or delivery delays. 3D printing offers customers a wider variety whereby they can freely choose without compromising the time and delivery period. `,
		imageToRight: true,
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T06%3A22%3A42.943Z-5.png",
		title: "Construction",
		text: `Construction of a building over the year posed a difficulty, time consuming, a lot of man labour, and very unsustainable contributing to karge carbin footprint on earth. 3D printing has revolutionized the notion of constructing a building it has made it possible to build a structure out of sustainable materials in few days and with less cost ,For instance a San Francisco company, Apis Cor, has 3D printed a house from the base foundation to roof using a mobile 3D printer .Plumbing and Fixtures such as windows, wiring and plumbing are installed by humans.Currently the more technologoical advancement is being developing for more advanced printers that can print inter-story floors and roofs, horizontal walls and foundation reinforcement.`,
		imageToRight: false,
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T06%3A24%3A34.515Z-6.png",
		title: "Beyond Earth",
		text: `Space companies such as NASA and other institutions are formulating new ways to utilize 3D printing technology to build habitable structures on outer space such as mars. For instance NASA proposed an idea to send a team of robots to the destination in outer space ,years long before humans arrive and robot team would consist of a rover/collector that mines and delivers raw materials; a filament plant that converts raw materials to fillament , a material for use by the printer; and the mobile printer which converts the filament into habitable buildings.hence, it the need to transport tons of builiding material and tools on the long road to outer space is no longer required anmd with the continuous advancement of AI and robotics human supervisors are not going to be required as the robotic team would do all the chores, such as construct houses, build labs and storage facilities.`,
		imageToRight: true,
	},
];
export default function Body() {
	return (
		<section className="w-full bg-gradient-to-b from-black to-[#0d2d54] text-white">
			<h1 className="text-5xl font-bold underline underline-offset-8 decoration-2">
				3D Printing Application in Signages
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

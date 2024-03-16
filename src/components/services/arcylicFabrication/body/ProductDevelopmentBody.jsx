import BodyCard from "./card";
const data = [
	{
		src: "/services/additiveManufacturing/1.png",
		title: "SAVE TIME",
		text: `Additive manufacturing with Ultratec revolutionizes production processes, drastically reducing time constraints. Firstly, its high-speed printing capabilities allow for rapid prototyping and iterative design, eliminating lengthy traditional molding setups. Additionally, Ultratec's advanced materials enable direct fabrication of end-use parts, bypassing the need for secondary machining or assembly. Its precise layer-by-layer deposition ensures minimal material wastage, saving both resources and time spent on post-processing. Moreover, Ultratec's intuitive software seamlessly converts CAD models into printable files, streamlining the pre-production phase. By harnessing Ultratec's cutting-edge technology, businesses can expedite product development cycles and meet market demands with unparalleled efficiency. Embrace the future of manufacturing and reclaim invaluable time with Ultratec.`,
		imageToRight: false,
	},
	{
		src: "/services/additiveManufacturing/2.png",
		title: "MANUFACTURE COMPLEX DESIGN",
		text: `Reach a freedom level you never reached in your project. 3D printing is a perfect solution if you need to print complex designs, that are impossible to create using a traditional manufacturing techniques. Indeed, printing your object in one part offers new possibilities.<br />In designing everything from bridges to skyscrapers, engineers have long sought to minimize weight while maximizing strength. With additive manufacturing, designers realize the dream of utilizing organic structures to greatly reduce the weight of objects.`,
		imageToRight: true,
	},
	{
		src: "/services/additiveManufacturing/3.png",
		title: "OPIMIZE YOUR SUPPLY CHAIN",
		text: `Leveraging Ultratec's additive manufacturing capabilities is a game-changer for supply chain optimization. Firstly, it enables on-demand production, eliminating the need for large inventories and reducing carrying costs. Ultratec's agile production process allows for rapid response to changing market demands, ensuring products reach customers faster. By producing components locally, transportation delays and expenses are minimized. Moreover, with Ultratec's ability to create complex geometries and lightweight structures, material usage is optimized, reducing waste. The technology also facilitates the creation of customized, tailored solutions for specific supply chain challenges. Embrace Ultratec to revolutionize your supply chain, enhancing efficiency and competitiveness.`,
		imageToRight: false,
	},
	{
		src: "/services/additiveManufacturing/4.png",
		title: "MASS CUSTOMIZATION",
		text: `Making custom made products can be difficult, take time and be expensive… But by using 3D printing, it is easier! Creating adapted products is really the key in some sectors. That is why since a few years we can see a clear development of medical 3D printing, for example. But it is also true in fashion. Making adapted devices adapted to patients or customer is a real advantage.`,
		imageToRight: true,
	},
];
export default function ProductDevelopmentBody() {
	return (
		<section className="w-full">
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

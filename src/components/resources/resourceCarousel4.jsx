import ResourceGrid from "./grid";
const data = [
	{
		src: "/resources/card4/1.png",
		title: "PAPER",
		desc: `thick card-stock paper works well with laser cutters. A creative project to try with paper is custom cards with a laser-cut center scene. These are beautiful and make great gifts.`,
	},
	{
		src: "/resources/card4/2.png",
		title: "WOOD",
		desc: `Wood is common for use in a laser cutter to cut out pieces to assemble, engrave gifts and carve out intricate patterns in a piece of wood. Plywood and MDF (medium-density fiberboard) are commonly used since they're cheaper.`,
	},
	{
		src: "/resources/card4/3.png",
		title: "ACRYLIC+PLASTIC",
		desc: `Plastic and acrylic materials are ideal for creating signs, jewelry, ornaments, wall art and more. Plexiglass, especially colored plexiglass, is a popular acrylic.`,
	},
	{
		src: "/resources/card4/4.png",
		title: "FOAM",
		desc: `Foam is a flexible material that can be used to manufacture more comfortable, safer and lighter products that can be customized and it is made from highly flexible polymer materials such as TPU or PA 11.`,
	},
	{
		src: "/resources/card4/5.png",
		title: "LEATHER",
		desc: `is a durable and flexible material created by tanning animal rawhide and skins.cattle hide is an example of the most common raw material used. It can be produced at manufacturing scales ranging from artisan to modern industrial scale.`,
	},
	{
		src: "/resources/card4/6.png",
		title: "CARDBOARD",
		desc: `Corrugated cardboard is a stiff, strong, and light-weight material made up of three layers of brown kraft paper.`,
	},
	{
		src: "/resources/card4/7.png",
		title: "CORK",
		desc: `Cork is an impermeable buoyant material, the phellem layer of bark tissue that is harvested for commercial use primarily from Quercus suber (the cork oak).`,
	},
];
export default function ResourceCarousel4() {
	return (
		<section className="w-full p-5 sm:p-10 bg-[#2060AD]">
			<h1 className="text-white text-center text-4xl mb-12 font-medium">
				Laser Engraving Material Guide
			</h1>
			<ResourceGrid data={data} textColor="white" />
		</section>
	);
}

import ResourceGrid from "./grid";
const data = [
	{
		src: "/resources/card3/1.png",
		title: "Polyamide 12 (PA 12)",
		desc: `Nylon plastic (PA) is a synthetic thermoplastic polymer . It’s a versatile, durable, flexible, Good mechanical properties, Good chemical resistance Matte, rough surface material alternative of other materials like silk, rubber, and latex.`,
	},
	{
		src: "/resources/card3/2.png",
		title: "Polyamide 11(PA 11)",
		desc: `Nylon 11 or Polyamide 11 (PA 11) is a polyamide, bioplastic and a member of the nylon family of polymers produced by the polymerization of 11-aminoundecanoic acid.it has Fully isotropic behaviour with High elasticity.`,
	},
	{
		src: "/resources/card3/3.png",
		title: "Aluminium filled-Nylon",
		desc: `Aluminum filled composite polyamide produces strong, stiff parts with a grey metallic appearance.It is commonly use in Jigs and fixtures like tools and trays used for manufacture of electronics.`,
	},
	{
		src: "/resources/card3/4.png",
		title: "Glass Filled Nylon",
		desc: `Nylon plastic (PA) is a synthetic thermoplastic polymer . It’s a versatile, durable, flexible, Good mechanical properties, Good chemical resistance Matte, rough surface material alternative of other materials like silk, rubber, and latex.`,
	},
	{
		src: "/resources/card3/5.png",
		title: "Carbon-fiber filled nylon",
		desc: `THO filaments use tiny fibers that are infused into a base material to improve the properties of that material.There are some filaments bought with carbon fiber fill eg PLA, PETG, Nylon, ABS, and Polycarbonate. The fibers are extremely strong and filament to increase in strength and stiffness.`,
	},
];
export default function ResourceCarousel3() {
	return (
		<div className="p-5 sm:p-10">
			<ResourceGrid data={data} textColor="black" />;
		</div>
	);
}

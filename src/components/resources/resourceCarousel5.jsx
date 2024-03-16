import ResourceGrid from "./grid";
const data = [
	{
		src: "/resources/card5/1.png",
		title: "STANDARD RESIN",
		desc: `is a high-detail resin that produces parts with a smooth, injection mold-like surface finish. It is brittle and used for non-functional parts.`,
	},
	{
		src: "/resources/card5/2.png",
		title: "CLEAR RESIN",
		desc: `Clear Resin is a semi-clear resin great for fluidics and moldmaking, optics, lighting, and any parts requiring translucency or showcasing internal features. The standard post-processing includes sanding support nibs, which results in semi-clear parts.`,
	},
	{
		src: "/resources/card5/3.png",
		title: "TOUGH RESIN 2000",
		desc: `Tough Resin 2000 balances strength and compliance, making it the ideal choice for prototyping strong, functional parts and assemblies that will undergo brief periods of stress or strain.`,
	},
	{
		src: "/resources/card5/4.png",
		title: "CASTABLE RESIN",
		desc: `Castable Wax Resin offers high strength and stiffness, making it highly capable of printing ultrafine filigree jewelry. The high green strength ensures excellent shape retention for thin patterns such as wire filigree.`,
	},
	{
		src: "/resources/card5/5.png",
		title: "HIGH TEMPERATURE RESIN",
		desc: `High Temp Resin offers a heat deflection temperature (HDT) of 238 °C @ 0.45 MPa, the highest among Formlabs resins. Use it to print detailed, precise prototypes with high temperature resistance.`,
	},
	{
		src: "/resources/card5/6.png",
		title: "DENTAL RESIN",
		desc: `Tough Resin 2000 balances strength and compliance, making it the ideal choice for prototyping strong, functional parts and assemblies that will undergo brief periods of stress or strain.`,
	},
];
export default function ResourceCarousel5() {
	return (
		<section className="w-full p-5 sm:p-10">
			<h1 className="text-black text-center text-4xl mb-12 font-medium">
				SLA Printer Material Guide
			</h1>
			<ResourceGrid data={data} textColor="black" />
		</section>
	);
}

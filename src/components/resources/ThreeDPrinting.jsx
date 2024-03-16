import ResourceGrid from "./grid";
const data = [
	{
		src: "/services/3d/services_fdm_printing_img.png",
		title: "Fdm Printing",
		href: "#",
		desc: "Fused deposition modelling (FDM), or fused filament fabrication (FFF), is a popularly used type of 3D printing. This typical additive manufacturing technique turns a 3D design into a physical model by extruding thermoplastic filaments through a heated nozzle which in turn melts the material and deposit the plastic layer by layer to a build platform.FDM use filaments, which comes in a variety of colours as well as different properties such as ABS (Acrylonitrile Butadiene Styrene), PLA (Polylactic Acid)etc.",
	},
	{
		src: "/services/3d/services_sla_printing_img.jpg",
		title: "Sla Printing",
		desc: `SLA (stereolithography) 3D printer is a type of additive manufacturing whereby it utilises laser technology to cure liquid resin into hardened plastic or simply be the process known as photopolymerization.SLA 3D printers a great for their capability to produce high-accuracy, isotropic, and watertight prototypes as well as end-user parts using resin as a material, resulting in a desired smooth features and surface finish.SLA resins offer optical, mechanical, and thermal properties that are similar to the standard thermoplastics used in the field of engineering and industrial. For detailed prototypes with smooth surfaces such as moulds, patterns and functional parts, SLA produces excellent results.SLA machine applies in many industries such from engineering and product design to manufacturing, dentistry, jewellery, model making, and education.`,
	},
	{
		src: "/services/3d/services_laser_cutting.png",
		title: "Laser Cutting & Engraving",
		desc: `Laser cutting machine is a tool used in industries such as engineering, signage and advertising, architecture and more for precision cutting and designing projects. The laser cutting machine functions by emitting a high powered laser beam to perform a clean cut and also does engraving of a specific design on materials such as glass, steel, paper, plastic or wood.`,
	},
	{
		src: "/services/3d/services_color_jet2.png",
		title: "COLOUR JET 3D PRINTING",
		desc: "ColorJet Printing (CJP) is a 3D printing technology that involves two major components, the core and the binder.CJP machine works using the roller the core material is spread in thin layers over a built platform followed by another process whereby a colour binder is jetted from the inkjet print head at each spread layer and then the next step is the build platform lowers with every subsequent layer which is spread and printed, resulting in a full-colour three-dimensional model.",
	},
	{
		src: "/services/3d/services_sls_printing.png",
		title: "SLS Printing",
		desc: "SLS (Selective Laser Sintering) 3D printing is a technology the utilises a high-powered laser to fuse and merge powdered plastic material into a 3D design shape. SLS as an additive manufacturing technology is known to produce parts that are finely detailed, strong, durable, heat resistant, and flexible simultaneously compared to SLA or FDM as they are usually too brittle, too elastic, and not detailed enough when heated.",
	},
	{
		src: "/services/3d/services_mp_mjf_printing.png",
		title: "SLS Printing",
		desc: "Multi Jet Fusion is an express way to produce functional nylon prototypes and end-user production parts.Printing with MJF results into exhibiting high quality surface finishes ,fine resolution with a consistent mechanical properties when compared to SLS Printing .",
	},
];
export default function ThreeDPrinting() {
	return (
		<div className="p-5 sm:p-10 flex flex-col items-center relative bg-black">
			<ResourceGrid data={data} textColor={"white"} />
		</div>
	);
}

import ResourceGrid from "./grid";
const data = [
	{
		src: "/resources/card1/1.png",
		title: "TPE or TPU",
		desc: "Flexible filaments, commonly referred to as TPE or TPU, are known for their elasticity allowing the material to easily stretch and bend",
	},
	{
		src: "/resources/card1/2.png",
		title: "PLA",
		desc: `FlPLA is the go-to material for most users due to its ease-of-use, dimensional accuracy, and low cost.`,
	},
	{
		src: "/resources/card1/3.png",
		title: "Wood Filled",
		desc: `Wood filaments consists mainly of PLA based material with cork, wood dust. which give wooden look to the printed model.`,
	},
	{
		src: "/resources/card1/4.png",
		title: "HIPS",
		desc: `HIPS is a lightweight material used as support structure for ABS models.`,
	},
	{
		src: "/resources/card1/5.png",
		title: "ABS",
		desc: `ABS is great tough and durable printed materials which can resist high tempratures.`,
	},
	{
		src: "/resources/card1/6.png",
		title: "PETG",
		desc: `This material is charecterized by smooth surface finish and is waterproof with easy printability.`,
	},
	{
		src: "/resources/card1/7.png",
		title: "NYLON",
		desc: `Nylon fillament is known to have tough and semi-flexible material with high impact and abrasion resistance. its great for printing durable parts.`,
	},
	{
		src: "/resources/card1/8.png",
		title: "CARBON FIBRE",
		desc: `This material contain short fibers that are infused into a PLA or ABS based material to add strength and stiffness.`,
	},
	{
		src: "/resources/card1/9.png",
		title: "ASA",
		desc: `ASA is an alternative to ABS and is suitable for outdoor applications because of its high UV, temperature, and impact resistance.`,
	},
	{
		src: "/resources/card1/10.png",
		title: "POLYCARBONATE",
		desc: `Polycarbonate has high heat and impact resistance with great strength and durability. hence very suitable for tough environments.`,
	},
	{
		src: "/resources/card1/11.png",
		title: "Polypropylene",
		desc: `Polypropylene is known to have high-cycle, low strength applications because of its fatigue resistance, semi-flexible, and lightweight characteristics.`,
	},
	{
		src: "/resources/card1/12.png",
		title: "Metal Filled",
		desc: `this material is a composition a fine metal powder with a base material, giving the model a unique metallic finish and added weight.`,
	},
	{
		src: "/resources/card1/13.png",
		title: "PVA",
		desc: `PVA is has a tendency to be dissolved in water and hence it is commonly as a support material for complex prints.`,
	},
	{
		src: "/resources/card1/14.png",
		title: "SANDSTONE",
		desc: `Sandstone filaments is a is a brick filament that have a smooth and rough finish to your 3D printed parts. The material consist of fine chalk powder to produce a stone-like color and texture.`,
	},
	{
		src: "/resources/card1/15.png",
		title: "MAGNETIC IRON",
		desc: `magnetic iron PLA filament is made of PLA material infused with a powdered iron and has magnetic properties hence,the iron particles that give the 3D parts a grainy gunmetal type finish.`,
	},
	{
		src: "/resources/card1/16.png",
		title: "CONDUCTIVE",
		desc: `Flexible filaments, commonly referred to as TPE or TPU, are known for their elasticity allowing the material to easily stretch and bend.`,
	},
	{
		src: "/resources/card1/17.png",
		title: "PETT",
		desc: `PETT also known as T-Glase filament is food-friendly and also the filament material is non-biodegradable and recyclable material.`,
	},
];
export default function ResourceCarousel1() {
	return (
		<div className="p-5 sm:p-10 flex flex-col items-center relative bg-black">
			<div className="circle-gradient-four"></div>
			<h1
			className="text-white text-center mb-8 z-50 text-4xl font-medium"
			>
				FDM Printer Material Guide
			</h1>
			<ResourceGrid data={data} textColor={'white'} />
		</div>
	);
}

import BodyCard from "./card";
const data = [
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T16%3A09%3A41.566Z-3-min.png",
		title: "Soft Signage",
		text: `Frames which hosts the soft signage which is a digital textile print made out of fabric graphic , can now be 3D prinited as al the material that used traditional such as aluminum, wood, acrylic, and steel can be used as filaments for 3d printers hence making it an efficient fabrication of these frames . After 3D printing the frame can even be enhanced with a lighting finish.`,
		imageToRight: false,
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T16%3A07%3A29.291Z-4-min.png",
		title: "Light Design",
		text: `Complex to simple Lamp designs for lights can be printed entirely with a cleaner , crisp finish ,for instance Tractus3D printers in combination with the 3D printing software Simplify3D light designers can print a hollow object in order to fit the light bulb without any complications.`,
		imageToRight: true,
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T16%3A11%3A53.520Z-5-min.png",
		title: "Point of Purchase Display",
		text: `Point-of-purchase stands such as exhibition kiosks and displays can be 3d printed to be used in retail and with the flexibility that come with variety of material the 3d priniting can offer , the industry can be as much creative as possible.`,
		imageToRight: false,
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T16%3A12%3A35.258Z-6-min.png",
		title: "Branding with Channel Letter",
		text: `Channel letters are normally realy useful for exterior signage in public and commercial building and its very usefull in attracting customers to an interior space or exhibition stand .3D printing can easily print the channel letter easily in metal or plastic fillaments as well as allows internally illumination to light up the advertisement or logos.hence with large format printers they can be printed numerously and also save time and costs that otherwise would double if traditional methods are used.`,
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

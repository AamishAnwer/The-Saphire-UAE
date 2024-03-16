import BodyCard from "./card";
const data = [
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T16%3A57%3A38.336Z-Interior%20and%20arts_bg-min.png",
		title: "Interior Structures",
		text: `3D printing ability to produce complex design opened creativity for interior structures that are functional and that draws inspiration from nature and designers can now quickly and visually design element of the sorrounding .Therefore this technology advances the profession to creat new and challenging design ideas by experimentation and and produce it after visualizing it on CAD Software.`,
		imageToRight: false,
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T16%3A57%3A38.329Z-3-min.png",
		title: "Furniture",
		text: `One part of the furniture business that has traditionally required significant time and financial investment is the design process. Prototypes have to be made, models tested and pieces reworked to reach a final product. 3D printing streamlines, simplifies and reduces the cost of designing furniture. Being able to create lightweight furniture prototypes quickly and inexpensively with 3D printing enables designers to test their creations more thoroughly and maximize the beneficial features in the finished product.`,
		imageToRight: true,
	},
	{
		title: "Lighting",
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T16%3A57%3A38.416Z-4-min.png",
		text: `Like the Industries utilizing the 3D printing technology ,the lighting industry has now started to employ the technology as this method enables prototypes and custom component manufacturing tool.In the coming year it shall advance and revolutionize how lighting products are made, including innovation, product development, inventory reduction and customization,With the technology speed it allows delivery of parts in just few days ,its flexibility enable easy iterations and tests.its cost efficiency eliminates the use of many tool and more.`,
		imageToRight: false,
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T16%3A57%3A38.476Z-5-min.png",

		title: "Sculpture",
		text: `The art of sculpting takes years to master as its a 3D type of forms but with the advancement Of 3D printing it makes the artist realize their concepts by just sketching and designing them from computer and immediately produce them in a matter of few hours or days,unlike before an artists had to solve any issues before sculpting the art piece but 3D printing had made it easier to iterate and produce it again .Furthermore 3D printers requires little space to function unlike tradition sculpting which requires large space for production.`,
		imageToRight: true,
	},
];
export default function Body() {
	return (
		<section className="w-full bg-gradient-to-b from-black to-[#0d2d54] text-white">
			<h1 className="text-5xl font-bold underline underline-offset-8 decoration-2">
				3D Printing Application in Interior & Art
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

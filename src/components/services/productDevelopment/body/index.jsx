import BodyCard from "./card";
const data = [
	{
		src: "/section3.png",
		title: "1. PRODUCT CONCEPT DESIGN",
		text: "Concept design is the first part of any new product development project. It will give you the initial big picture of all the different stages of the development process and shows us what problems the product will solve, how it will solve them, and what it will feel like. It can be said that the very soul of innovation lies in the concept study when we consider all sweeping ideas and various possibilities.",
		imageToRight: false,
	},
	{
		src: "/section4.png",
		title: "2. PRODUCT RAPID PROTOTYPING",
		text: `When we create a prototype, it’s the first time you get to hold an actual working device in your hands. The prototype is something you can show to investors and other stakeholders. The main purpose of the prototype is to help you make decision concerning the product development and allow you to see possible improvement and changes you wish to make to the product.`,
		imageToRight: true,
	},
	{
		src: "/section5.png",
		title: "3. GO-TO-MARKET",
		text: `We help you engage with manufacturers and manage the device lifecycle. For ease of operations, we can manage the manufacturing and logistics as a service. At the end of this phase, you’re on the market and ready to start ringing the cash register!`,
		imageToRight: false,
	},
];
export default function Body() {
	return (
		<section className="w-full">
			<h1 className="text-left text-5xl max-lg:mt-8 max-lg:text-center text-white">
				HOW WE DEVELOP YOUR PRODUCT
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

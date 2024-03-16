import BodyCard from "./card";
const data = [
	{
		src: "/paint/img1.png",
		title: "COLOUR LASER ENGRAVING",
		text: "We offer colour laser engraving , which is a process of adding colour to an object that is being marked. This enable us to offer you versatile, alluring and expandable possibbilities to realise your vision for your 3d designs. Our Laser engraving service is possible for all type materials from plastic to metal.",
		imageToRight: false,
	},
	{
		src: "/paint/img2.png",
		title: "SAND BLASTING",
		text: `To create smoother and even texture for our fabricated models, we use sand blasting techniques which use the abrasive properties of sand which makes the models with less physical imperfection and flaws. This process ensure high quality painting on the finished product`,
		imageToRight: true,
	},
	{
		src: "/paint/img3.png",
		title: "SPRAY PAINTING",
		text: "Our 3D models have a prestine finished look with an aid of our spray painiting techniques, The spray paint comes in variety of colours and finishes and go very well with plastic.Morover its give the 3D printed models coverage ,a smooth flat surface and deep colour gradient ,ready for a detailed paint process.",
		imageToRight: false,
	},
	{
		src: "/paint/img4.png",
		title: "UV PRINTING",
		text: "Along with our great 3D printing services, we also introduce to you UV printing , a printing process that uses ultraviolet curing technology . This prinitng method , prints directly on uncoated surface of any materials as it uses ultraviolet light to dry ink as it is printed",
		imageToRight: true,
	},
	{
		src: "/paint/img5.png",
		title: "ARTISTIC HAND PAINTING",
		text: "We produce intricate details in the 3D model that matches the digital model with our great professional experience on hand painting. From highly ornamented models to character design, we guarantee an absolute realization of your vision.",
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

import BodyCard from "./card";
const data = [
	{
		src: "/3d/setion3-bg.png",
		title: "3D MODELING",
		text: "Our professional designers’ team are fully capable to work in your available reference part or pictures to produce a 3D Digital representation model of it.",
		imageToRight: false,
	},
	{
		src: "/3d/setion4-bg.png",
		title: "3D ASSEMBLY DESIGN",
		text: "Ultratec stands as the undisputed leader in 3D assembly design services, redefining the boundaries of creativity and precision. Our seasoned professionals bring a level of expertise that sets us apart. With a keen eye for detail, Ultratec ensures that every component fits seamlessly, resulting in flawless assemblies that meet the highest industry standards. Our tailored solutions cater to a diverse array of industries, from intricate product prototypes to large-scale industrial machinery. Ultratec’s commitment to excellence is evident in every project, ensuring that your vision not only becomes a reality but exceeds expectations.",
		imageToRight: true,
	},
	{
		src: "/3d/setion5-bg.png",
		title: "3D DIGITAL SCULPTING",
		text: "Imagine a 3D printed bust of yourself, your beloved pet or just anything else you can imagine. Our in-house 3D sculpting service using the most advance software’s can create literally any imaginable shape.",
		imageToRight: false,
	},
	{
		src: "/3d/setion6-bg.png",
		title: "3D SCANNING",
		text: "The process of reverse engineering using traditional methods such as callipers can be a long, tedious process and often uses a lot of guess work. The use of 3D scan data has brought this process into the 21st Century and now capture of 100% of parts is possible. Ultratec 3D utilises the most advance 3D scanning hardware to offer a reverse engineering service for virtually any component whether it be big, small, detailed or highly accurate.		",
		imageToRight: true,
	},
	{
		src: "/3d/setion7-bg.png",
		title: "3D FILES REPAIR AND CONVERSION",
		text: "Ultratec leads the industry in 3D files repair and conversion, offering unmatched expertise and precision. Our seasoned professionals excel in revitalizing damaged or incompatible 3D designs, ensuring seamless integration into your projects. With Ultratec’s tailored solutions, we address a wide spectrum of industries, from intricate product prototypes to large-scale industrial machinery. Our commitment to excellence is evident in every project, guaranteeing that your vision not only comes to life but surpasses expectations. We value your time and investment, emphasizing clear communication and punctual delivery. What truly sets Ultratec apart is our unwavering dedication to cutting-edge technology. By leveraging state-of-the-art software and hardware, we perform 3D files repair and conversion with unparalleled accuracy and efficiency.	",
		imageToRight: false,
	},
	{
		src: "/3d/setion8-bg.png",
		title: " Engineering 3D Simulation",
		text: "Ultratec sets the gold standard in Engineering 3D Simulation, surpassing all expectations with unmatched expertise. Our seasoned professionals bring a level of precision and innovation that distinguishes us in the industry. Through advanced 3D design and simulation, Ultratec optimizes product performance and functionality.Our tailored solutions cater to diverse industries, from aerospace to automotive, ensuring seamless integration of 3D printing technology for rapid prototyping.",
		imageToRight: true,
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

import BodyCard from "./card";
const data = [
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-25T05:03:43.886Z-3.png",
		title: "3D Printed F1 car in Exibition",
		text: `Opting for a 3D-printed autonomous F1 car for your exhibition
		provides several advantages over bringing a real car. The replica offers 
	   precision engineering, ensuring detailed accuracy without the logistical 
	   challenges of transporting and displaying a full-sized vehicle. The 
	   lightweight design facilitates easier handling and display, and rapid 
	   prototyping allows for quick iterations and modifications to showcase
		the latest technological advancements. Moreover, a 3D-printed replica 
	   offers a cost-effective and customizable solution, allowing you to 
	   highlight specific features and innovations without the complexities 
	   associated with a real car. This approach not only simplifies logistics 
	   but also ensures an impactful and visually stunning presentation at 
	   your exhibition`,
		imageToRight: false,
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T06%3A54%3A08.236Z-4.png",
		title: "Display Models",
		text: `The latest applications of 3D printing technology in display models have 
		revolutionized design processes. With its capacity for rapid prototyping, 
		customization, and handling complex geometries, 3D printing enables 
		designers to iterate quickly and create visually stunning, detailed models. 
		The ability to incorporate multiple materials and colors adds a layer of realism, 
		while functional prototypes, especially in the medical field, showcase the 
		technology's versatility. 3D printing is also integral in producing educational 
		tools, interactive displays, and cost-effective scale models, contributing to 
		enhanced learning experiences and streamlined manufacturing processes. 
		As the technology continues to evolve, its impact on display model creation 
		remains pivotal across various industries.
		`,
		imageToRight: true,
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-25T05%3A07%3A37.038Z-5.png",
		title: "Industrial Models",
		text: `Technology plays a pivotal role in the development of industrial 
		models, with Computer-Aided Design (CAD) software serving as 
		a cornerstone for intricate 3D modeling. The integration of 
		simulation tools in the digital design phase enables virtual 
		testing, reducing the need for physical prototypes. Technologies 
		like 3D prinƟng revolutionize prototyping, allowing for swift
		 iteration and minimizing production lead times. Augmented 
		and Virtual Reality enhance visualization and collaboration, 
		while IoT technologies and Digital Twins provide real-time data 
		for monitoring and optimizing industrial systems. Automation, 
		including CNC machining and robotics, further streamlines production 
		processes, ensuring precision and efficiency in the creation of 
		sophisticated industrial models.
		`,
		imageToRight: false,
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T06%3A57%3A22.997Z-6.png",
		title: "Technology",
		text: `In the technology industry, 3D printing has become a transformative tool across 
		various applications. Engineers use 3D printing to rapidly prototype intricate 
		components, enabling swift iteration in product development. The technology 
		facilitates the creation of complex geometries and customized designs, enhancing 
		the efficiency of manufacturing processes. Technology companies leverage 
		3D printing for producing functional prototypes, allowing for thorough testing of 
		product features. Additionally, in the production of electronic components, 
		3D printing contributes to the fabrication of intricate structures, supporting 
		innovation in the design and manufacturing of advanced technology products.`,
		imageToRight: true,
	},
];
export default function Body() {
	return (
		<section className="w-full bg-gradient-to-b from-black to-[#0d2d54] text-white">
			<h1 className="text-5xl font-bold underline underline-offset-8 decoration-2">
				3D Printing Application in Events, Stand and Exibition
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

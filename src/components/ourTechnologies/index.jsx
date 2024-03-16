import OurTechnologiesCard from "./card";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React from "react";
export default function OurTechnologies() {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true, // Trigger the animation only once
	});
	const [refTitle, inViewTitle] = useInView({
		triggerOnce: true,
	});

	const [refDescription, inViewDescription] = useInView({
		triggerOnce: true,
	});

	const [refCards, inViewCards] = useInView({
		triggerOnce: true,
	});
	// Define the animation
	const animation = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	const leftToRightAnimation = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0 },
	};

	const rightToLeftAnimation = {
		hidden: { opacity: 0, x: 100 },
		visible: { opacity: 1, x: 0 },
	};

	// Trigger the animation when the component comes into view
	React.useEffect(() => {
		if (inViewTitle) controls.start("visible");
	}, [controls, inViewTitle]);

	React.useEffect(() => {
		if (inViewDescription) controls.start("visible");
	}, [controls, inViewDescription]);

	React.useEffect(() => {
		if (inViewCards) controls.start("visible");
	}, [controls, inViewCards]);

	return (
		<section className="w-full p-12 flex flex-col items-center gap-y-8">
			<div className="flex flex-col items-center gap-y-3">
				<motion.h1
					ref={refTitle}
					animate={controls}
					initial="hidden"
					variants={animation}
					transition={{ duration: 0.2 }}
					className="text-4xl mt-6 font-medium"
				>
					OUR TECHNOLOGIES
				</motion.h1>
				<motion.p
					ref={refDescription}
					animate={controls}
					initial="hidden"
					variants={animation}
					transition={{ duration: 0.4 }}
					className="max-w-[985px] w-full text-center"
				>
					Ultratec3d specializes in architectural model making, allowing
					architects and real estate developers to bring their visions to life.
					Our 3D printing technology accurately reproduces every detail,
					enabling clients to showcase their designs with exceptional realism.
				</motion.p>
			</div>
			<div className="w-fit grid place-items-center gap-12 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
				<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={leftToRightAnimation}
					transition={{ duration: 1 }}
				>
					<OurTechnologiesCard
						src={"/technology/1.png"}
						title={"FDM Printing"}
						description={`Fused Deposition Modelling (FDM) is a 3D pricing technology that builds objects layer by layer by extruding thermoplastic material through a heated nozzle. Advantages of FDM printing include cost-effectiveness, ease of use, and the ability to create complex geometries. It is widely used for rapid prototyping and manufacturing functional parts in various industries`}
						href={"/fdm"}
					/>
				</motion.div>
				<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={animation}
					transition={{ duration: 0.5 }}
				>
					<OurTechnologiesCard
						src={"/technology/2.png"}
						title={"SLA Printing"}
						description={`Stereolithography (SLA) is a 3D printing technology that uses a liquid resin cured by ultraviolet (UV) light to build objects layer by layer. SLA offers high precision, smooth surface finishes, and is suitable for producing detailed and intricate parts. It is commonly utilized in applications such as prototyping, jewellery making, and dental modelling due to its ability to create highly accurate and intricate structures.`}
						href={"/sls"}
					/>
				</motion.div>
				<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={rightToLeftAnimation}
					transition={{ duration: 1 }}
				>
					<OurTechnologiesCard
						src={"/technology/3.png"}
						title={"SLS Printing"}
						description={`Selective Laser Sintering (SLS) is a 3D printing technology that uses a laser to sinter (fuse) powdered material, typically nylon or other polymers, layer by layer, to create threedimensional objects. Unlike other techniques, SLS does not require support structures during printing, as the unsintered powder acts as a natural support. This technology is known for its ability to produce complex and durable parts with high strength and heat resistance, making it suitable for functional prototypes and end-use production in various industries, including aerospace and automotive.`}
						href={"/sla"}
					/>
				</motion.div>
				<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={leftToRightAnimation}
					transition={{ duration: 1 }}
				>
					<OurTechnologiesCard
						src={"/technology/4.png"}
						title={"Color Jet 3D Printing"}
						description={`Color Jet 3D printing, often associated with technologies like HP Multi Jet Fusion, utilizes a powdered material, typically polymers, and selectively applies a liquid binder and colored agents layer by layer to create full-color objects. It allows for the simultaneous incorporation of multiple colors in a single print job, resulting in visually appealing and vibrant 3D printed models. This technology is widely used in applications requiring intricate and colorful prototypes, architectural models, and customized consumer products.`}
						href={"/cj3d"}
					/>
				</motion.div>
				<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={animation}
					transition={{ duration: 0.6 }}
				>
					<OurTechnologiesCard
						src={"/technology/5.png"}
						title={"Laser Engraving"}
						description={`Laser engraving is a technique that uses a focused laser beam to etch, mark, or cut materials such as wood, metal, glass, or plastic. The laser removes or alters the surface layer of the material to create precise and detailed designs, text, or paƩerns. This process is commonly employed in various industries, including signage, jewelry, and electronics, for its precision, speed, and versatility in producing intricate and permanent markings on a wide range of materials.`}
						href={"/le"}
					/>
				</motion.div>
				<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={rightToLeftAnimation}
					transition={{ duration: 1 }}
				>
					<OurTechnologiesCard
						src={"/technology/6.png"}
						title={"Hp MJF"}
						description={`HP Multi Jet Fusion (MJF) is a 3D printing technology developed by HewleƩ-Packard (HP). In MJF, a powdered material, typically a nylon-based polymer, is selectively fused using thermal energy and a liquid agent. The process involves both fusing and detailing agents, allowing for precise control over the properties of each printed layer. HP MJF is known for its ability to produce functional prototypes and end-use parts with high speed, accuracy, and the capability to integrate multimaterial and full-color capabilities in certain models. It is widely used in industries such as manufacturing, automotive, and aerospace for rapid prototyping and production applications.`}
						href={"/hp"}
					/>
				</motion.div>
			</div>
		</section>
	);
}

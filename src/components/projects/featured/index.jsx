import Strip from "../strip";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import React, { useState } from "react";
import "react-modal-video/scss/modal-video.scss";
import "yet-another-react-lightbox/plugins/counter.css";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import useScreenSize from "@/components/Block/useScreenSize";

const projectsData = [
	{
		margin: "ml-16 currlyline",
		title: "F1 CAR GITEX 2023",
		description:
			"Project Details: The 3D-printed Formula 1 car boasts an exceptionally realistic appearance, high quality finishing paintwork and the use of premium-quality materials. Technology Used: FDM | Size: 5M X 2 M Materials: ABS",
		curled: "/featured/curled1.svg",
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T09:25:54.452Z-1.png",
		href: "#",
		videoUrl: "https://d33609liqwio9r.cloudfront.net/formula.mp4",
	},
	{
		margin: "currlyline",
		title: "AT.MOSPHERE RESTAURANT SIGNAGES",
		description: `Project Details: Atmosphere restaurant renovation with artistic signages including treasure scenes & functional rotating plants gear system - Burj Khalifah -Level 122 . Technology Used: SLA, SLS, FDM Materials: Resin, Gold plated, real diamonds.`,
		curled: "/featured/curled2.svg",
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T09:25:54.413Z-2.png",
		href: "#",
		videoUrl: "https://d33609liqwio9r.cloudfront.net/Atmosphere.mp4",
	},
	{
		margin: "mr-36 currlyline",
		title: "VERONI DESIGN",
		description: `Project Details: This stunning piece of ceiling art was 
		meticulously designed and brought to life through Ultratec 3D.
		 We're delighted to share that this bespoke creation has 
		found its new home in the heart of France,
		adding a touch of avant-garde elegance 
		to our client's space.
		Finish: gold Plated | Size: 3M X 3M 
		Materials: ABS `,
		curled: "/featured/curled3.svg",
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T09:25:54.337Z-3.png",
		href: "#",
		/*  */
		/*  */
		/*  */
		/*  */
		/*  */
		videoUrl: "",
		/*  */
		/*  */
		/*  */
		/*  */
	},
	{
		margin: "mr-40 currlyline",
		title: "Al THURAYA / KSA - CITYSCAPE",
		description: `Project Details: A prototype of Alma City has been constructed 
		using 3D-printed miniature architectural structures 
		displayed on an LED screen, which is utilized for navigation and 
		showcasing graphics.
		
		Technology Used: SLA, 3D Model Highlighting, 3D Render Video and
		 Tablet Application to Selected 
		Districts | 4M X 1.5 M 
		Materials: Clear Resin`,
		curled: "/featured/curled4.svg",
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T09:25:54.326Z-4.png",
		href: "#",
		videoUrl: "https://d33609liqwio9r.cloudfront.net/Althurya.mp4",
	},
	{
		margin: "currlyline",
		title: "INDUSTRIAL COMPRESSOR SCALED MODEL",
		description: `Project Details: A 3D-printed Industrial compressor 
		module is meticulously crafted, featuring intricate 
		component displays and a superior level of finishing 
		quality. Also, supplying the lights and the stand. 
		Technology Used: SLS
		Materials: Nylon PA12`,
		curled: "/featured/curled5.svg",
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T09:25:54.317Z-5.png",
		href: "#",
		videoUrl: "https://d33609liqwio9r.cloudfront.net/KaeserKompressoren.mp4",
	},
	{
		margin: "currlyline",
		title: "WELBORE WATER JET CLEAN UP MODEL",
		description: `Project Details: Product Development and production of a 
		Demonstration model for a wellbore water jet clean-up product 
		that have been developed by Odfjell Technology. 
		we have Done Engineering
		Design from scratch, Analysis, prototyping,
		Automation integration,
		testing, and fabrication.`,
		curled: "/featured/curled6.svg",
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T09:25:54.306Z-6.png",
		href: "#",
		videoUrl:
			"https://d33609liqwio9r.cloudfront.net/valvecleaningmachine1withexplanation.mp4",
	},
	{
		margin: "mr-40 currlyline",
		title: "HIGH PRESSURE COMPRESSOR",
		description: `Project Details: We performed full functional realistic
		reverse engineering for the actual block and 3d printed
		the mechanical assembly in life-size with
		lights and motion integration.
	 Technology Used: SLS | Size: 80 CM
	 Materials: NYLON PA12`,
		curled: "/featured/curled7.svg",
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T09:25:54.302Z-7.png",
		href: "#",
		videoUrl: "https://d33609liqwio9r.cloudfront.net/Compressor.mp4",
	},
];

export default function Featured() {
	const [isVideoOpen, setIsVideoOpen] = useState(false);
	const [currentVideoUrl, setCurrentVideoUrl] = useState("");

	const openVideoModal = (videoUrl) => {
		setCurrentVideoUrl(videoUrl);
		setIsVideoOpen(true);
	};

	return (
		<section>
			<Strip text={"FEATURED PROJECTS"} className="mt-20" />
			<div className="w-full p-7 px-4 md:px-24">
				<div className="w-full flex flex-col gap-y-1 items-center justify-center">
					<div className="w-7 h-7 bg-white"></div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="18"
						viewBox="0 0 28 18"
						fill="none"
					>
						<path
							d="M2.19277 1.5L8.0261 16.5H19.9739L25.8072 1.5H2.19277Z"
							stroke="white"
							strokeWidth="3"
						/>
					</svg>
					{projectsData.map((project, index) => (
						<Cascade
							key={index}
							margin={project.margin}
							imageToRight={index % 2 !== 0}
							curled={project.curled}
							src={project.src}
							title={project.title}
							desc={project.description}
							href={project.href}
							openVideoModal={() => openVideoModal(project.videoUrl)} // Pass videoUrl to openVideoModal function
						/>
					))}
				</div>
			</div>
			<ModalVideo
				channel="custom"
				url={currentVideoUrl}
				isOpen={isVideoOpen}
				onClose={() => setIsVideoOpen(false)}
			/>
		</section>
	);
}

function Cascade({
	margin,
	imageToRight,
	curled,
	src,
	title,
	desc,
	href,
	openVideoModal, // Use openVideoModal function prop
}) {
	const isMobile = useScreenSize();
	return (
		<div className="w-full flex flex-col justify-center items-center">
			{!isMobile ? (
				<img
					src={"/projects" + curled}
					className={margin}
					alt={"curled lines"}
				/>
			) : null}
			<div className="w-full flex flex-col md:flex-row my-8 md:my-0 ">
				<div
					className={`flex justify-center relative ${
						imageToRight && !isMobile ? "order-1" : null
					}`}
					onClick={openVideoModal} // Call the openVideoModal function when clicked
				>
					<Image
						sizes="100vw"
						width={0}
						height={0}
						className={`max-w-[678px] w-full h-[493px] ring-4 ring-white rounded-xl z-50 object-cover`}
						src={src}
						alt={desc}
					/>
					<div className="circle-gradient-three"></div>
				</div>
				<div className="flex flex-col gap-y-6 p-2 md:p-8 pb-0">
					<h1 className="text-left max-w-[520px] text-white text-2xl font-medium">
						{title}
					</h1>
					<div className="h-1 w-24 bg-white"></div>
					<p className="max-w-[520px] text-white text-lg">{desc}</p>
					<div className="w-full flex md:justify-start justify-center">
						<Link
							onClick={openVideoModal} // Call the openVideoModal function when clicked
							href={href}
							className="w-40 h-[44px] mb-4 px-4 rounded-full bg-white flex gap-x-4 items-center justify-between hover:w-44 transition-all"
						>
							<span>Read More</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<mask
									id="mask0_1161_1882"
									maskUnits="userSpaceOnUse"
									x="0"
									y="0"
									width="24"
									height="24"
								>
									<rect width="24" height="24" fill="#D9D9D9" />
								</mask>
								<g mask="url(#mask0_1161_1882)">
									<path
										d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
										fill="#2060AD"
									/>
								</g>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

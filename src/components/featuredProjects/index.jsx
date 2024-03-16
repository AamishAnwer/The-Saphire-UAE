import FeaturedProjectsCard from "./card";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import "yet-another-react-lightbox/plugins/counter.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function FeaturedProjects() {
	const [open, setOpen] = useState(false);
	const [slidesUrl, setSlidesUrl] = useState([{}]);
	const [isVideoOpen, setIsVideoOpen] = useState(false);
	const [currentVideoUrl, setCurrentVideoUrl] = useState("");
	const handleVideoOpen = (videoUrl) => {
		setCurrentVideoUrl(videoUrl);
		setIsVideoOpen(true);
	};
	const urls = [
		[],
		[],
		[
			{
				src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A06%3A12.377Z-1.jpg",
			},
			{
				src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A09%3A14.881Z-2.jpg",
			},
			{
				src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A09%3A46.195Z-3.jpg",
			},
			{
				src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A10%3A10.440Z-4.jpg",
			},
			{
				src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A10%3A33.168Z-5.jpg",
			},
			{
				src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A10%3A53.645Z-6.jfif",
			},
		],
		[],
		[],
		[],
		[
			{
				src: "https://res.cloudinary.com/dcpte972l/image/upload/v1706723712/IMG_3261_mzw6tv.jpg",
			},
			{
				src: "https://res.cloudinary.com/dcpte972l/image/upload/v1706723711/IMG_3259_ptlzi4.jpg",
			},
			{
				src: "https://res.cloudinary.com/dcpte972l/image/upload/v1706723711/IMG_3257_ycvm1x.jpg",
			},
			{
				src: "https://res.cloudinary.com/dcpte972l/image/upload/v1706723709/IMG_3256_lxr9hv.jpg",
			},
		],
		[],
	];
	const setUrls = (index) => {
		setSlidesUrl(urls[index]);
	};
	return (
		<section className="w-full flex flex-col items-center gap-y-8 bg-[#2060AD] text-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20">
			<div className="text-center">
				<h1 className="text-2xl underline sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
					FEATURED PROJECTS
				</h1>
			</div>

			<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
				<FeaturedProjectsCard
					src={"/FeaturedProjects/1-min.png"}
					onVideoOpen={() =>
						handleVideoOpen("https://d33609liqwio9r.cloudfront.net/formula.mp4")
					}
					title={"FORMULA 1 CAR - LIFE SIZE I GITE"}
					subtitle={
						"The 3d-printed Formula 1 car boasts an exceptionally realistic appearance, high quality finishing paintwork and the use of premium-quality materials."
					}
				/>
				<FeaturedProjectsCard
					src={"/FeaturedProjects/2-min.png"}
					onVideoOpen={() =>
						handleVideoOpen(
							"https://d33609liqwio9r.cloudfront.net/Atmosphere.mp4"
						)
					}
					title={"AT.MOSPHERE RESTUARANT SIGNAGES"}
					subtitle={
						"Atmosphere restaurant renovation with artistic signages including treasure scenes & functional rotatingplants gear system - Burj Khalifa - Level 122"
					}
				/>
				<FeaturedProjectsCard
					src={"/FeaturedProjects/3-min.png"}
					isHide={true}
					setOpen={() => {
						setUrls(2);
						setOpen(!open);
					}}
					title={"VORONI CEILING ART"}
					subtitle={
						"This stunning piece of ceiling art was meticulously designed and brought to life through Ultratec 3D. We're delighted to share that this bespoke creation has found its new home in the heart of France, adding a touch of avant-garde elegance to our client's space."
					}
				/>
				<FeaturedProjectsCard
					src={"/FeaturedProjects/4-min.png"}
					onVideoOpen={() =>
						handleVideoOpen(
							"https://d33609liqwio9r.cloudfront.net/Althurya.mp4"
						)
					}
					title={"AL THURAYA / KSA - CITYSCAPE"}
					subtitle={
						"A prototype of Alma City has been constructed using 3D-printed miniature architectural structures displayed on an LED screen, Wchich is utilized for navigation and showcasing graphics."
					}
				/>
				<FeaturedProjectsCard
					src={"/FeaturedProjects/5-min.png"}
					onVideoOpen={() =>
						handleVideoOpen(
							"https://d33609liqwio9r.cloudfront.net/KaeserKompressoren.mp4"
						)
					}
					title={"INDUSTRIAL COMPRESSOR PACKAGE SCALED MODEL ADIPEC"}
					subtitle={
						"A 3D-printed Industrial compressor module is meticulously crafted, featuring Intricate component displays and a superior level of finishing quality. Also, supplying the lights and the stand."
					}
				/>
				<FeaturedProjectsCard
					src={"/FeaturedProjects/6-min.png"}
					onVideoOpen={() =>
						handleVideoOpen(
							"https://d33609liqwio9r.cloudfront.net/valvecleaningmachine1withexplanation.mp4"
						)
					}
					title={"DEMONSTRATION MODEL OF WELBORE WATER JET CLEAN UP"}
					subtitle={
						"Product Development and production of a Demonstration model for a wellbore water jet clean-up product that..."
					}
				/>
				<FeaturedProjectsCard
					src={"/FeaturedProjects/7-min.png"}
					setOpen={() => {
						setUrls(6);
						setOpen(!open);
					}}
					isHide={true}
					title={"DEMONSTRATION MODEL OF WELBORE WATER JET CLEAN UP"}
					subtitle={
						"Product Development and production of a Demonstration model for a wellbore water jet clean-up product that..."
					}
				/>

				<FeaturedProjectsCard
					src={"/FeaturedProjects/8-min.png"}
					onVideoOpen={() =>
						handleVideoOpen(
							"https://d33609liqwio9r.cloudfront.net/Compressor.mp4"
						)
					}
					title={"HIGH PRESSURE COMPRESSOR I ADIPEC"}
					subtitle={
						"We performed full functional realistic reverse engineering for the actuall block and 3d printed the mechanical assembly in life-size with lights and motion integration."
					}
				/>
			</div>

			<div className="flex justify-center mb-5 mt-5">
				<Link
					href={"/projects"}
					className="flex justify-between items-center rounded-full bg-white hover:bg-smoke  border-2 border-blue-100 transition-all px-10 py-2 cursor-pointer"
				>
					<span className="text-[#2060AD] uppercase">More Projects</span>
					<span>
						<FaArrowRight className="text-[#2060AD] ml-4 " />
					</span>
				</Link>
			</div>
			<Lightbox
				open={open}
				plugins={[Counter, Fullscreen, Thumbnails]}
				close={() => setOpen(false)}
				slides={slidesUrl}
			/>
			<ModalVideo
				channel="custom"
				url={currentVideoUrl}
				isOpen={isVideoOpen}
				onClose={() => setIsVideoOpen(false)}
			/>
		</section>
	);
}

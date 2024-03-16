import Image from "next/image";
import Strip from "../strip";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { useState } from "react";
const projects = [
	{ title: "3D Scanning", Iid: "3DScanning", src: "/projects/project/1.png" },
	{
		title: "Architectural",
		Iid: "Architectural",
		src: "/projects/project/2.png",
	},
	{ title: "Characters", Iid: "Characters", src: "/projects/project/3.png" },
	{
		title: "Decorations",
		Iid: "Decorations",
		src: "/projects/project/4.png",
	},
	{
		title: "Display Models",
		Iid: "DisplayModels",
		src: "/projects/project/5.png",
	},
	{
		title: "Product Development",
		Iid: "ProductDevelopment",
		src: "/projects/project/6.png",
	},
	{ title: "Styrofoam", Iid: "Styrofoam", src: "/projects/project/7.png" },
	{ title: "Trophy", Iid: "Trophy", src: "/projects/project/8.png" },
];

export default function Project() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<section>
			<Strip text={"PROJECTS"} />
			<div className="w-full pt-16 pb-16 flex justify-center items-center">
				<div className="w-fit gap-y-4 grid grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4">
					{projects.map((project, index) => (
						<a key={index} href={`#${project.Iid}`}>
							<div className="flex flex-col items-center">
								<Image width={238} height={175} src={project.src} />
								<span className="text-white text-center text-2xl">
									{project.title}
								</span>
							</div>
						</a>
					))}
				</div>
			</div>

			{/* <Lightbox
				plugins={[Counter, Fullscreen, Thumbnails]}
				open={isOpen}
				close={() => setIsOpen(false)}
				slides={projects}
			/> */}
		</section>
	);
}

import React, { useState } from "react";
import Strip from "../strip";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Grid from "../grid";

const imageData = [
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A37%3A40.959Z-PM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A37%3A40.959Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A37%3A40.963Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A37%3A40.969Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A37%3A40.975Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A37%3A40.986Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A37%3A40.996Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A37%3A41.002Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A37%3A41.008Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A37%3A41.016Z-PM.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A37%3A50.199Z-PM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A37%3A50.199Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A37%3A50.202Z-PM.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A39%3A30.828Z-DSC09312.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A39%3A30.828Z-DSC09312.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A39%3A30.833Z-F1%20Car%201.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A39%3A30.909Z-F1%20Car%202.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A39%3A30.941Z-F1%20Car%204.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A39%3A30.949Z-F1%20Car%204444.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A39%3A30.983Z-F1%20Car.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A39%3A30.988Z-F1%20edited%20car%20.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A39%3A41.645Z-PM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A39%3A41.645Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A39%3A41.647Z-PM.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A31.851Z-1.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A31.851Z-1.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A31.855Z-2.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A31.864Z-3.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A31.871Z-CLOSEUP%20WITH%20note.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A31.877Z-Compressor%201.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A31.883Z-Compressor%202.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A31.888Z-Intro%20without%20text.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A31.897Z-Kaeser%202.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A31.903Z-Kaeser%20Compressor%20Stand.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A31.909Z-keaser%203.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A31.915Z-Keaser%205.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A31.920Z-Keaser%206.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A31.927Z-SEPARATE%20SECTIONS%20HIGHLIGHT.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A39.436Z-PM%20%2811%29.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A39.436Z-PM%20%2811%29.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A39.438Z-PM%20%2812%29.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A39.445Z-PM%20%2813%29.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A39.451Z-PM%20%2814%29.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A40%3A39.451Z-PM%20%2815%29.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A41%3A14.851Z-PM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A41%3A14.851Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A41%3A14.853Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A41%3A14.859Z-Screenshot%202023-12-12%20131332.png",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A41%3A27.774Z-2.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A41%3A27.774Z-2.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A04.118Z-AM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A04.118Z-AM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A04.121Z-AM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A04.127Z-AM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A04.133Z-AM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A04.139Z-AM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A04.144Z-AM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A04.150Z-AM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A04.156Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A04.161Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A04.167Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A04.174Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A04.179Z-PM.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A16.878Z-1%20main%20image.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A16.878Z-1%20main%20image.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A16.881Z-2.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A16.888Z-54325.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A16.889Z-455214.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A16.897Z-545453.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A16.903Z-240558854_988382161736878_2243606534652796200_n.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A16.908Z-Q%20C.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A16.912Z-WhatsApp%20Image%202021-11-25%20at%2016.21.18%20%281%29.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A16.917Z-WhatsApp%20Image%202021-11-25%20at%2016.21.18%20%282%29.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A16.922Z-WhatsApp%20Image%202021-11-25%20at%2016.21.18%20%283%29.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A16.928Z-WhatsApp%20Image%202021-11-25%20at%2016.21.18%20%284%29.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A16.928Z-WhatsApp%20Image%202021-11-25%20at%2016.21.18%20%285%29.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A42%3A16.938Z-WhatsApp%20Image%202021-11-25%20at%2016.21.18.jpeg",
		],
	},

	// Add more image data as needed
];

export default function ThreeDScanning() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const selectedImageData = imageData[selectedIndex];

	return (
		<section id="DisplayModels">
			<Strip text={"DISPLAY MODELS"} />

			<Grid
				data={imageData}
				setIsOpen={setIsOpen}
				setSelectedIndex={setSelectedIndex}
			/>

			<Lightbox
				plugins={[Counter, Fullscreen, Thumbnails]}
				open={isOpen}
				close={() => setIsOpen(false)}
				slides={selectedImageData.related.map((url) => ({ src: url }))}
				startIndex={0}
			/>
		</section>
	);
}

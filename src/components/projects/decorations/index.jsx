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
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A25%3A37.166Z-1.jpeg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A25%3A37.166Z-1.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A25%3A37.168Z-2.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A25%3A37.177Z-3.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A25%3A37.189Z-4.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A25%3A37.202Z-IMG_20220330_105454.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A25%3A37.213Z-IMG_20220330_105514.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A25%3A37.311Z-PM.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A27%3A45.411Z-PM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A27%3A45.411Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A27%3A45.417Z-PM.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A29%3A14.914Z-ain.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A29%3A14.914Z-ain.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A29%3A14.927Z-all%20letters.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A29%3A14.943Z-kaf.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A29%3A14.950Z-lam.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A29%3A14.958Z-lam2.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A29%3A14.974Z-taa%20marbota.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A29%3A14.982Z-taa.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A29%3A15.046Z-yaa.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A30%3A26.399Z-1.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A30%3A26.399Z-1.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A30%3A26.402Z-2.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A30%3A26.410Z-3.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A30%3A26.419Z-4.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A30%3A26.430Z-5.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A30%3A26.436Z-6.jfif",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A33%3A05.249Z-atmosphier%20%281%29.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A33%3A05.249Z-atmosphier%20%281%29.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A33%3A05.254Z-atmosphier+%281%29.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A33%3A05.474Z-atmosphier+%282%29.JPG",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A33%3A05.735Z-atmosphier+%283%29.JPG",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A33%3A05.853Z-atmosphier+%2814%29.JPG",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A33%3A06.062Z-atmosphier+%2815%29.JPG",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A33%3A06.253Z-atmosphier+%2816%29.JPG",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A33%3A06.492Z-atmosphier+%2817%29.JPG",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A34%3A25.100Z-IMG-20240116-WA0004.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A34%3A25.100Z-IMG-20240116-WA0004.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A34%3A25.102Z-IMG-20240116-WA0005.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A34%3A25.108Z-IMG-20240116-WA0006.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A34%3A25.113Z-IMG-20240116-WA0007.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A35%3A53.791Z-coral1.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A35%3A53.791Z-coral1.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A35%3A53.795Z-coral2.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A35%3A53.807Z-coral2.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A35%3A53.821Z-coral3.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A35%3A53.829Z-IMG_20211012_144042.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A35%3A53.844Z-IMG_20211012_144047.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A35%3A53.957Z-IMG_20211012_144059.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A35%3A54.007Z-IMG_20211012_144104.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A37%3A11.968Z-Photo%2015-02-2022%2C%201%2007%2002%20PM%20%281%29.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A37%3A11.968Z-Photo%2015-02-2022%2C%201%2007%2002%20PM%20%281%29.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A37%3A11.982Z-Photo%2015-02-2022%2C%201%2007%2002%20PM%20%282%29.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A37%3A11.983Z-Photo%2015-02-2022%2C%201%2007%2002%20PM%20%283%29.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A37%3A11.984Z-Photo%2015-02-2022%2C%201%2007%2002%20PM%20%284%29.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A37%3A11.995Z-Photo%2015-02-2022%2C%201%2007%2002%20PM%20%285%29.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A37%3A12.000Z-Photo%2015-02-2022%2C%201%2007%2002%20PM.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A38%3A53.726Z-PM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A38%3A53.726Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A38%3A53.731Z-PM.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A40%3A19.728Z-PM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A40%3A19.728Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A40%3A19.737Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A40%3A19.847Z-PM.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A41%3A15.894Z-Screenshot_114.png",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A41%3A15.894Z-Screenshot_114.png",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A43%3A08.168Z-AM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A43%3A08.168Z-AM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A43%3A08.176Z-AM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A43%3A08.190Z-AM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A43%3A08.285Z-AM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A43%3A08.324Z-AM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A43%3A08.335Z-AM.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A44%3A19.273Z-picasso%201.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A44%3A19.273Z-picasso%201.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A52%3A39.544Z-PM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A52%3A39.544Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A52%3A39.550Z-PM.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A45%3A09.256Z-Column1.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A45%3A09.256Z-Column1.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A47%3A46.479Z-PM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A47%3A46.479Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A47%3A46.482Z-PM.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A50%3A29.297Z-PM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A50%3A29.297Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A50%3A29.300Z-PM.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A51%3A27.335Z-Photo%2015-02-2022%2C%201%2007%2002%20PM%20%287%29.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A51%3A27.335Z-Photo%2015-02-2022%2C%201%2007%2002%20PM%20%287%29.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A51%3A27.341Z-PM%20%281%29.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A51%3A27.357Z-PM.jpg",
		],
	},

	// Add more image data as needed
];

export default function ThreeDScanning() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const selectedImageData = imageData[selectedIndex];

	return (
		<section id="Decorations">
			<Strip text={"DECORATIONS"} />

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

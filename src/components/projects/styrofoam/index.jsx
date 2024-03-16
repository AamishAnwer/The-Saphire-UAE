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
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T08%3A55%3A45.544Z-Photo%2011-03-2023%2C%205%2015%2038%E2%80%AFPM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T08%3A55%3A45.544Z-Photo%2011-03-2023%2C%205%2015%2038%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T08%3A55%3A45.545Z-Photo%2011-03-2023%2C%205%2015%2041%E2%80%AFPM%20%281%29.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T08%3A55%3A45.551Z-Photo%2011-03-2023%2C%205%2015%2041%E2%80%AFPM.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T08%3A57%3A13.356Z-Screenshot%202023-12-12%20133743.png",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T08%3A57%3A13.356Z-Screenshot%202023-12-12%20133743.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T08%3A57%3A13.357Z-styro-peacock.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T08%3A57%3A13.364Z-swan-styrofoam.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T08:57:39.778Z-Screenshot%202023-12-12%20133722.png",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T08:57:39.778Z-Screenshot%202023-12-12%20133722.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T08:57:39.780Z-Screenshot%202023-12-12%20133736.png",
		],
	},
	// Add more image data as needed
];

export default function ThreeDScanning() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const selectedImageData = imageData[selectedIndex];

	return (
		<section id="Styrofoam">
			<Strip text={"STYROFOAM"} />

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

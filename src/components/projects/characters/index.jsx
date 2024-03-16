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
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A57%3A26.674Z-1.png",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A57%3A26.674Z-1.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A57%3A26.677Z-2.png",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A00%3A13.730Z-5.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A00%3A13.730Z-5.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A00%3A13.733Z-IMG_20220517_130033.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A00%3A13.743Z-IMG_20220517_130045.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A00%3A13.752Z-IMG_20220517_130108.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A00%3A13.760Z-IMG_20220517_130132.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A00%3A13.837Z-IMG_20220517_130154.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A00%3A13.895Z-Screenshot%202022-05-17%20132701.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:32:15.946Z-3-min.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:32:15.946Z-3-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:32:15.949Z-IMG_4802-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:32:15.957Z-IMG_4803-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:32:15.962Z-IMG_4804-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:32:15.968Z-IMG_4805-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:32:15.974Z-IMG_4806-min.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:32:50.572Z-Photo%2029-11-2021,%204%2032%2034%20PM%20(1)-min.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:32:50.572Z-Photo%2029-11-2021,%204%2032%2034%20PM%20(1)-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:32:50.576Z-Photo%2029-11-2021,%204%2032%2034%20PM-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:32:50.588Z-Photo%2030-11-2021,%2012%2025%2008%20PM%20(1)-min.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:33:42.161Z-Deadpool-removebg-min.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:33:42.161Z-Deadpool-removebg-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:33:42.163Z-IMG_3256.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:33:42.171Z-IMG_3257.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:33:42.181Z-IMG_3259.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:33:42.189Z-IMG_3261.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:34:18.624Z-Photo%2019-01-2024,%2012%2022%2047%E2%80%AFPM%20(1)-min.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:34:18.624Z-Photo%2019-01-2024,%2012%2022%2047%E2%80%AFPM%20(1)-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:34:18.626Z-Photo%2019-01-2024,%2012%2022%2047%E2%80%AFPM%20(3)-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:34:18.632Z-Photo%2019-01-2024,%2012%2022%2047%E2%80%AFPM%20(4)-min.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:34:57.951Z-HULK-min.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:34:57.951Z-HULK-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:34:57.960Z-Photo%2022-05-2021,%205%2013%2021%E2%80%AFPM-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:34:57.968Z-Photo%2022-05-2021,%205%2014%2058%E2%80%AFPM-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:34:57.980Z-Photo%2022-05-2021,%205%2015%2001%E2%80%AFPM-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:34:58.041Z-Photo%2022-05-2021,%205%2016%2019%E2%80%AFPM-min.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:35:41.248Z-Photo%2020-12-2021,%2011%2021%2004%E2%80%AFAM-min.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:35:41.248Z-Photo%2020-12-2021,%2011%2021%2004%E2%80%AFAM-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:35:41.251Z-Photo%2020-12-2021,%2011%2021%2009%E2%80%AFAM-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:35:41.258Z-Photo%2020-12-2021,%2011%2021%2018%E2%80%AFAM-min.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:36:18.199Z-khi-min.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:36:18.199Z-khi-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:36:18.202Z-ll-min.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:36:58.683Z-Photo%2019-01-2024,%2012%2047%2009%E2%80%AFPM%20(1)-min.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:36:58.683Z-Photo%2019-01-2024,%2012%2047%2009%E2%80%AFPM%20(1)-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:36:58.685Z-Photo%2019-01-2024,%2012%2047%2009%E2%80%AFPM%20(2)-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:36:58.691Z-Photo%2019-01-2024,%2012%2047%2009%E2%80%AFPM-min.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:37:33.511Z-1-min.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:37:33.511Z-1-min.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:38:48.190Z-Photo%2016-12-2021,%2012%2006%2006%E2%80%AFPM-min.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:38:48.190Z-Photo%2016-12-2021,%2012%2006%2006%E2%80%AFPM-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:38:48.192Z-Photo%2016-12-2021,%2012%2008%2019%E2%80%AFPM-min.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:38:48.201Z-Photo%2019-01-2024,%208%2025%2030%E2%80%AFPM%20(1)-min.jpg",
		],
	},

	// Add more image data as needed
];

export default function ThreeDScanning() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const selectedImageData = imageData[selectedIndex];

	return (
		<section id="Characters">
			<Strip text={"CHARACTERS"} />

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

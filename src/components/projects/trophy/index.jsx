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
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A19%3A33.523Z-Photo%2030-11-2023%2C%2012%2047%2059%E2%80%AFPM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A19%3A33.523Z-Photo%2030-11-2023%2C%2012%2047%2059%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A20%3A18.195Z-Photo%2030-11-2023%2C%2012%2048%2015%E2%80%AFPM.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A21%3A19.833Z-Photo%2016-01-2024%2C%201%2046%2057%E2%80%AFPM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A21%3A19.833Z-Photo%2016-01-2024%2C%201%2046%2057%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A21%3A19.836Z-Photo%2016-01-2024%2C%201%2047%2004%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A21%3A19.845Z-Photo%2016-06-2023%2C%203%2045%2004%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A21%3A19.851Z-Photo%2016-06-2023%2C%203%2053%2024%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A22%3A55.124Z-Photo%2016-06-2023%2C%203%2053%2033%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A22%3A55.129Z-Photo%2016-06-2023%2C%203%2054%2057%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A22%3A55.139Z-Photo%2016-06-2023%2C%203%2055%2000%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A22%3A55.145Z-Photo%2016-06-2023%2C%203%2055%2020%E2%80%AFPM.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A24%3A05.990Z-3D%20ENGRAVING.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A24%3A05.990Z-3D%20ENGRAVING.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A24%3A49.845Z-Photo%2001-11-2022%2C%2011%2050%2043%E2%80%AFAM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A24%3A49.845Z-Photo%2001-11-2022%2C%2011%2050%2043%E2%80%AFAM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A24%3A49.848Z-Photo%2001-11-2022%2C%2012%2000%2010%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A24%3A49.855Z-Photo%2001-11-2022%2C%2012%2000%2031%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A24%3A49.869Z-Photo%2001-11-2022%2C%2012%2001%2035%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A24%3A49.876Z-Photo%2001-11-2022%2C%2012%2001%2046%E2%80%AFPM.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A25%3A45.096Z-1.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A25%3A45.096Z-1.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A25%3A45.096Z-2.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A25%3A45.104Z-3.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A25%3A45.110Z-4.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A26%3A20.872Z-IMG_20220706_141131.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A26%3A20.872Z-IMG_20220706_141131.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A26%3A20.875Z-IMG_20220706_141139.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A26%3A20.882Z-IMG_20220706_141206.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A26%3A20.888Z-IMG_20220706_141211.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A26%3A20.899Z-IMG_20220706_141253.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A27%3A09.625Z-dome%201.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A27%3A09.625Z-dome%201.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A27%3A09.627Z-dome2.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A27%3A09.633Z-dome3.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A27%3A42.085Z-Photo%2013-03-2023%2C%203%2053%2029%E2%80%AFPM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A27%3A42.085Z-Photo%2013-03-2023%2C%203%2053%2029%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A27%3A42.087Z-Photo%2013-03-2023%2C%203%2053%2040%E2%80%AFPM.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A28%3A57.959Z-3c7a72f6-50b0-4888-8304-3fe23f12546a.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A28%3A57.959Z-3c7a72f6-50b0-4888-8304-3fe23f12546a.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A28%3A57.961Z-7a804fb1-2713-47e7-9bc4-301d7e769e43.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A28%3A57.967Z-b08faac2-abc8-4bac-8687-75568b01085e.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A28%3A57.972Z-Photo%2019-01-2024%2C%2012%2033%2023%E2%80%AFPM%20%281%29.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A28%3A57.980Z-Photo%2019-01-2024%2C%2012%2033%2023%E2%80%AFPM%20%282%29.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A28%3A57.986Z-Photo%2019-01-2024%2C%2012%2033%2023%E2%80%AFPM.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A31%3A07.351Z-Photo%2009-09-2022%2C%203%2007%2052%E2%80%AFPM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A31%3A07.351Z-Photo%2009-09-2022%2C%203%2007%2052%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A31%3A07.354Z-Photo%2009-09-2022%2C%203%2012%2025%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A31%3A07.361Z-Photo%2009-09-2022%2C%203%2017%2011%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A31%3A07.368Z-Screenshot%202023-12-12%20153845.png",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A53%3A24.032Z-Photo%2025-12-2023%2C%203%2008%2011%E2%80%AFPM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A53%3A24.032Z-Photo%2025-12-2023%2C%203%2008%2011%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A53%3A24.035Z-Photo%2025-12-2023%2C%203%2010%2058%E2%80%AFPM%20%281%29.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A53%3A24.041Z-Photo%2025-12-2023%2C%203%2010%2058%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A53%3A24.048Z-Photo%2025-12-2023%2C%203%2011%2027%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A53%3A24.054Z-Photo%2025-12-2023%2C%203%2013%2055%E2%80%AFPM.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A54%3A03.784Z-Photo%2028-09-2022%2C%207%2054%2043%E2%80%AFPM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A54%3A03.784Z-Photo%2028-09-2022%2C%207%2054%2043%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A54%3A03.788Z-Photo%2028-09-2022%2C%207%2054%2050%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A54%3A03.795Z-Photo%2028-09-2022%2C%207%2055%2002%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A54%3A03.804Z-Photo%2028-09-2022%2C%207%2055%2016%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A54%3A03.812Z-Photo%2028-09-2022%2C%207%2055%2029%E2%80%AFPM.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A54%3A43.714Z-Photo%2030-11-2023%2C%2012%2039%2046%E2%80%AFPM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A54%3A43.714Z-Photo%2030-11-2023%2C%2012%2039%2046%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A54%3A43.717Z-Photo%2030-11-2023%2C%2012%2042%2009%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A54%3A43.726Z-Photo%2030-11-2023%2C%2012%2042%2030%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A54%3A43.732Z-Photo%2030-11-2023%2C%2012%2042%2046%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A54%3A43.739Z-Photo%2030-11-2023%2C%2012%2042%2050%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A54%3A43.747Z-Photo%2030-11-2023%2C%2012%2043%2002%E2%80%AFPM.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A55%3A26.067Z-1.png",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A55%3A26.067Z-1.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A55%3A26.068Z-Photo%2004-10-2022%2C%2010%2042%2013%E2%80%AFAM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A55%3A26.076Z-Photo%2004-10-2022%2C%2010%2042%2053%E2%80%AFAM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A55%3A26.084Z-Photo%2006-10-2022%2C%204%2032%2036%E2%80%AFPM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T07%3A55%3A26.090Z-Photo%2006-10-2022%2C%204%2032%2049%E2%80%AFPM.jpg",
		],
	},
];

export default function ThreeDScanning() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const selectedImageData = imageData[selectedIndex];

	return (
		<section id="Trophy">
			<Strip text={"TROPHY"} />

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

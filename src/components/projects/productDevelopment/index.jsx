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
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.149Z-3D_scanned_lidenclosure_with_arm.25.png",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.149Z-3D_scanned_lidenclosure_with_arm.25.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.155Z-3D_scanned_lidenclosure_with_arm.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.173Z-Deformation.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.249Z-Full_view_01_white.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.284Z-fully_closed_rendersamples.34%20copy.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.321Z-fully_closed_rendersamples.41%20copy.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.329Z-Partially_close_01_white.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.340Z-Screenshot_73.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.347Z-Screenshot_74.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.359Z-Screenshot_75.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.368Z-Screenshot_77.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.426Z-section_01_white.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.507Z-Strain.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.520Z-Strain1.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.525Z-Stress.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A24%3A31.531Z-Stress1.png",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A27%3A15.173Z-PM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A27%3A15.173Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A27%3A15.180Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A27%3A15.194Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A27%3A15.241Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A27%3A15.317Z-PM.jpg",
		],
	},
	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A27%3A58.552Z-Jet+Engine.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A27%3A58.552Z-Jet+Engine.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A27%3A58.609Z-Photo+28-11-2021%2C+5+58+12+PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A27%3A58.672Z-Photo%2028-11-2021%2C%205%2059%2005%20PM.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A28%3A47.723Z-Caps.jpeg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A28%3A47.723Z-Caps.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A28%3A47.725Z-IMG_20211206_154228.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A28%3A47.735Z-M22%20Bolt.png",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A28%3A47.743Z-Photo%2012-01-2022%2C%201%2004%2055%20PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A28%3A47.751Z-Photo%2012-01-2022%2C%201%2005%2003%20PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A28%3A47.761Z-Photo+24-11-2021%2C+5+55+08+PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A28%3A47.891Z-Photo+28-11-2021%2C+5+53+46+PM.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.518Z-1.jpeg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.518Z-1.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.520Z-2.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.526Z-3.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.532Z-4.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.536Z-5.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.541Z-6.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.547Z-7.jpeg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.552Z-8.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.560Z-9.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.572Z-10.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.602Z-11.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.667Z-12.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.699Z-13.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.734Z-14.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.746Z-15.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.750Z-16.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.751Z-17.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.759Z-18.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.766Z-19.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.773Z-20.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.778Z-21.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.782Z-22.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.783Z-23.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.791Z-24.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.795Z-25.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.796Z-26.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.804Z-Photo+19-11-2021%2C+3+58+54+PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A29%3A50.989Z-Photo+30-11-2021%2C+12+25+38+PM.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A30%3A18.155Z-gear%20box.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A30%3A18.155Z-gear%20box.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A30%3A18.157Z-mechanical%20device.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A30%3A18.158Z-mwchanical%20device.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A30%3A18.168Z-Photo+28-11-2021%2C+10+53+20+AM.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A30%3A33.855Z-PM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A30%3A33.855Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A30%3A33.861Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A30%3A33.875Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A30%3A33.953Z-Photo%209.PNG",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A31%3A08.196Z-IMG-20220423-WA0014.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A31%3A08.196Z-IMG-20220423-WA0014.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A31%3A08.198Z-IMG-20220423-WA0024.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A31%3A08.203Z-IMG-20220423-WA0025.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A31%3A08.209Z-IMG-20220423-WA0026.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A32%3A07.693Z-Photo%2015-01-2022%2C%201%2011%2008%20PM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A32%3A07.693Z-Photo%2015-01-2022%2C%201%2011%2008%20PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A32%3A07.703Z-Photo%2015-01-2022%2C%201%2011%2020%20PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A32%3A07.815Z-Photo%2015-01-2022%2C%201%2011%2030%20PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A32%3A07.866Z-Photo+15-01-2022%2C+7+01+59+PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A32%3A08.004Z-Photo+15-01-2022%2C+7+26+04+PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A32%3A08.175Z-Photo+15-01-2022%2C+7+28+34+PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A32%3A08.281Z-Photo+15-01-2022%2C+7+28+38+PM.jpg",
		],
	},

	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A32%3A51.370Z-PM.jpg",
		related: [
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A32%3A51.370Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A32%3A51.379Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A32%3A51.397Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A32%3A51.505Z-PM.jpg",
			"https://d33609liqwio9r.cloudfront.net/2024-02-24T18%3A32%3A51.560Z-PM.jpg",
		],
	},
];

export default function ThreeDScanning() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const selectedImageData = imageData[selectedIndex];

	return (
		<section id="ProductDevelopment">
			<Strip text={"PRODUCT DEVEELOPEMENT"} />

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

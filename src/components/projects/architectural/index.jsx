import React, { useState } from "react";
import Strip from "../strip";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Grid from '../grid'; 

const imageData = [



	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:17:50.699Z-1-min.png",
		related: [
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:17:50.699Z-1-min.png",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:17:50.702Z-3-min.PNG",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:17:50.709Z-4-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:17:50.714Z-5-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:17:50.719Z-6-min.PNG",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:17:50.725Z-7-min.PNG",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:17:50.731Z-8-min.PNG",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:17:50.736Z-11-min.png",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:17:50.743Z-12-min.PNG",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:17:50.755Z-13-min.PNG"
        ],
	  },





	{
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:18:34.213Z-1-min.png",
		related:[
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:18:34.213Z-1-min.png",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:18:34.216Z-2-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:18:34.224Z-3-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:18:34.234Z-4-min.jpg"
        ],
	  },

	  {
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:19:17.816Z-1-min.jpg",
		related: [
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:19:17.816Z-1-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:19:17.820Z-Photo%2018-08-2022,%201%2014%2013%E2%80%AFPM-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:19:17.828Z-Photo%2018-08-2022,%201%2023%2032%E2%80%AFPM-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:19:17.840Z-Photo%2018-08-2022,%201%2023%2051%E2%80%AFPM-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:19:17.870Z-Photo%2018-08-2022,%201%2024%2003%E2%80%AFPM-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:19:17.913Z-Photo%2018-08-2022,%201%2024%2040%E2%80%AFPM-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:19:17.950Z-Photo%2019-01-2024,%2012%2022%2047%E2%80%AFPM%20(1)-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:19:17.968Z-Photo%2019-01-2024,%2012%2022%2047%E2%80%AFPM%20(2)%20(1)-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:19:18.000Z-Photo%2019-01-2024,%2012%2022%2047%E2%80%AFPM%20(2)-min.jpg"
        ],
	  },

  {
    src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:00.686Z-1-min.jpg",
    related:  [
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:00.686Z-1-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:00.701Z-2-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:00.713Z-3-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:00.720Z-4-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:00.728Z-5-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:00.737Z-6-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:00.757Z-7-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:00.772Z-8-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:00.781Z-9-min.jpg"
	],
  },
  {
    src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:19:52.167Z-9-min.jpg",
    related:[
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:19:52.167Z-9-min.jpg"
	],
  },
  
  {
    src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:45.378Z-1-min.jpg",
    related: [
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:45.378Z-1-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:45.381Z-2-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:45.388Z-3-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:45.394Z-4-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:45.401Z-5-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:45.408Z-6-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:45.415Z-7-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:23:45.423Z-8-min.jpg"
	],
  },
  {
    src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:24:35.210Z-IMG_20211014_054110-min.jpg",
    related:[
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:24:35.210Z-IMG_20211014_054110-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:24:35.214Z-Tabadul-min.jpg",
		"https://d33609liqwio9r.cloudfront.net/2024-02-24T10:24:35.222Z-unnamed%20(3)-min.jpg"
	],
  },
//   {
//     src: "https://res.cloudinary.com/dcxnmagjx/image/upload/v1706781983/Tabadul_h1lw3l.jpg",
//     related: [
//       "https://res.cloudinary.com/dcxnmagjx/image/upload/v1706781983/Tabadul_h1lw3l.jpg",
//       "https://res.cloudinary.com/dcxnmagjx/image/upload/v1706781984/unnamed_3_skzabt.jpg",
//       "https://res.cloudinary.com/dcxnmagjx/image/upload/v1706781986/IMG_20211014_054110_q3arqs.jpg",
 
    
//     ],
//   },
 

  // Add more image data as needed
];

export default function ThreeDScanning() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImageData = imageData[selectedIndex];

  return (
	<section id="Architectural">
	<Strip text={'Architectural'} />
	
	<Grid data={imageData} setIsOpen={setIsOpen} setSelectedIndex={setSelectedIndex} />

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

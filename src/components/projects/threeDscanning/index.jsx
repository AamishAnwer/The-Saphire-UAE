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
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T09:15:59.864Z-1-min.jpg",
		related: [
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T09:15:59.864Z-1-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T09:15:59.866Z-Photo%2005-06-2021,%203%2014%2020%E2%80%AFPM-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T09:15:59.875Z-Photo%2005-06-2021,%203%2035%2059%E2%80%AFPM-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T09:15:59.921Z-Photo%2005-06-2021,%203%2036%2030%E2%80%AFPM-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T09:15:59.994Z-Photo%2005-06-2021,%203%2036%2059%E2%80%AFPM-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T09:16:00.031Z-Photo%2005-06-2021,%204%2033%2055%E2%80%AFPM-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T09:16:00.044Z-Photo%2005-06-2021,%204%2035%2058%E2%80%AFPM-min.jpg",
            "https://d33609liqwio9r.cloudfront.net/2024-02-24T09:16:00.060Z-Photo%2019-01-2024,%2012%2022%2047%E2%80%AFPM%20(10)-min.jpg"
        ],
	  },

	  {
		src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:14:09.155Z-1-min.png",
		related: [
      "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:14:09.155Z-1-min.png",
      "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:14:09.159Z-g%20(2)-min.png",
      "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:14:09.167Z-g%20(3)-min.png",
      "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:14:09.173Z-g%20(4)-min.png",
      "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:14:09.178Z-g%20(5)-min.png",
      "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:14:09.183Z-g%20(6)-min.png"
  ],
	  },

  {
    src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:14:49.202Z-m%20(1)-min.png",
    related:  [
      "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:14:49.202Z-m%20(1)-min.png",
      "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:14:49.203Z-m%20(2)-min.png",
      "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:14:49.211Z-m%20(3)-min.png",
      "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:14:49.215Z-m%20(4)-min.png"
  ],
  },
  
  {
    src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:15:25.378Z-Photo%2026-12-2023,%2012%2015%2012%E2%80%AFPM-min.jpg",
    related: [
      "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:15:25.378Z-Photo%2026-12-2023,%2012%2015%2012%E2%80%AFPM-min.jpg",
      "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:15:25.381Z-s2-min.png",
      "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:15:25.388Z-s-min.jpg"
  ],
  },
  {
    src: "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:15:54.720Z-1-min.png",
    related:  [
      "https://d33609liqwio9r.cloudfront.net/2024-02-24T10:15:54.720Z-1-min.png"
  ],
  },

  // Add more image data as needed
];

export default function ThreeDScanning() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImageData = imageData[selectedIndex];

  return (
	<section id="3DScanning">
	<Strip text={'3D SCANNING'} />
	
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

// import React from "react";

// const HeroTwo = () => {
// 	return (
// 		<div className=" relative flex justify-center items-center ">
// 			<img
// 				className=" h-screen md:h-auto object-cover"
// 				src="https://res.cloudinary.com/dcpte972l/image/upload/v1710619649/SAFA_park_aerial_rexl3m.jpg"
// 				alt=""
// 			/>
// 			<div className=" absolute bottom-0 w-full h-[40rem] bg-gradient-to-t from-yellow-500 to-yellow-500/0 from-30%"></div>
// 			<img
// 				className=" absolute h-36 w-36 bottom-64"
// 				src="https://res.cloudinary.com/dcpte972l/image/upload/v1710584735/logotwow-removebg-preview_jmxvtc.png"
// 				alt=""
// 			/>
// 			<span className=" absolute md:top-96 text-white luxury tracking-widest text-2xl md:text-6xl">
// 				LUXURY LIVING COMES TO LIGHT
// 			</span>
// 			<img
// 				className=" absolute top-16 w-72"
// 				src=" https://v.fastcdn.co/u/a43967b2/63800434-0-damac-logo-white.svg"
// 				alt=""
// 			/>
// 			<div className=" absolute flex flex-col items-center font-['High_Tower_Text'] tracking-[8px] text-white  bottom-32">
// 				{/* <span className=" text-xl">The</span>
// 				<span className=" text-4xl">SAPPHIRE</span>
// 				<span className=" text-xl">SHEIKH ZAYED ROAD</span> */}
// 				<div className="flex items-end w-full">
// 					<hr className="flex-grow  border-white" />
// 					<span className="px-1 flex items-end text-2xl">THE</span>
// 					<hr className="flex-grow  border-white" />
// 				</div>
// 				<span className=" text-7xl mb-3">SAPPHIRE</span>
// 				<span className=" text-lg ">SHEIKH ZAYED ROAD</span>
// 			</div>
// 		</div>
// 	);
// };

// export default HeroTwo;

// import React from "react";

// const HeroTwo = () => {
// 	return (
// 		<div className=" relative flex justify-center items-center ">
// 			<img
// 				className=" h-screen md:h-auto object-cover"
// 				src="https://res.cloudinary.com/dcpte972l/image/upload/v1710619649/SAFA_park_aerial_rexl3m.jpg"
// 				alt=""
// 			/>
// 			<div className=" absolute bottom-0 w-full h-[40rem] bg-gradient-to-t from-yellow-500 to-yellow-500/0 from-30%"></div>
// 			<img
// 				className=" absolute h-36 w-36 bottom-64"
// 				src="https://res.cloudinary.com/dcpte972l/image/upload/v1710584735/logotwow-removebg-preview_jmxvtc.png"
// 				alt=""
// 			/>
// 			<span className=" absolute md:top-96 text-white luxury tracking-widest text-2xl md:text-6xl">
// 				LUXURY LIVING COMES TO LIGHT
// 			</span>
// 			<img
// 				className=" absolute top-16 w-72"
// 				src=" https://v.fastcdn.co/u/a43967b2/63800434-0-damac-logo-white.svg"
// 				alt=""
// 			/>
// 			<div className=" absolute flex flex-col items-center font-['High_Tower_Text'] tracking-[8px] text-white  bottom-32">
// 				<div className="flex items-end w-full">
// 					<hr className="flex-grow  border-white" />
// 					<span className="px-1 flex items-end text-2xl">THE</span>
// 					<hr className="flex-grow  border-white" />
// 				</div>
// 				<span className=" text-7xl mb-3">SAPPHIRE</span>
// 				<span className=" text-lg ">SHEIKH ZAYED ROAD</span>
// 			</div>
// 		</div>
// 	);
// };

// export default HeroTwo;

"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

const AnimatedPinDemo = ({ title, description, image }) => {
	return (
		<div className="h-[25rem] w-full flex items-center justify-center  ">
			<PinContainer
				title="/ui.aceternity.com"
				href="https://twitter.com/mannupaaji"
			>
				<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
					<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-xl text-center text-slate-100">
						{title}
					</h3>
					<div className="text-base !m-0 !p-0 font-normal text-center">
						<span className="text-slate-100  text-xl ">{description}</span>
					</div>
					<div className="flex  flex-1 w-full rounded-lg mt-4">
						<Image src={image} width={400} height={200} alt="bb" />
					</div>
				</div>
			</PinContainer>
		</div>
	);
};

// // Card component
// const Card = ({ title, description, image }) => {
//   return (
//     <div className="flex flex-col items-center justify-center p-4">
//       <img src={image} alt={title} className="h-32 w-32 mb-2" />
//       <h2 className="text-white text-lg font-semibold mb-1">{title}</h2>
//       <p className="text-white text-sm text-center">{description}</p>
//     </div>
//   );
// };

// GridCard component
const GridCard = () => {
	const animatedPinDemo = [
		{
			title: "Card 1",
			description: "Description for card 1",
			image:
				"https://res.cloudinary.com/dcpte972l/image/upload/v1710619649/SAFA_park_aerial_rexl3m.jpg",
		},
		{
			title: "Card 2",
			description: "Description for card 2",
			image:
				"https://res.cloudinary.com/dcpte972l/image/upload/v1710619649/SAFA_park_aerial_rexl3m.jpg",
		},
		{
			title: "Card 3",
			description: "Description for card 1",
			image:
				"https://res.cloudinary.com/dcpte972l/image/upload/v1710619649/SAFA_park_aerial_rexl3m.jpg",
		},
		{
			title: "Card 4",
			description: "Description for card 2",
			image:
				"https://res.cloudinary.com/dcpte972l/image/upload/v1710619649/SAFA_park_aerial_rexl3m.jpg",
		},
		{
			title: "Card 5",
			description: "Description for card 1",
			image:
				"https://res.cloudinary.com/dcpte972l/image/upload/v1710619649/SAFA_park_aerial_rexl3m.jpg",
		},
		{
			title: "Card 6",
			description: "Description for card 2",
			image:
				"https://res.cloudinary.com/dcpte972l/image/upload/v1710619649/SAFA_park_aerial_rexl3m.jpg",
		},
		{
			title: "Card 7",
			description: "Description for card 1",
			image:
				"https://res.cloudinary.com/dcpte972l/image/upload/v1710619649/SAFA_park_aerial_rexl3m.jpg",
		},
		{
			title: "Card 8",
			description: "Description for card 2",
			image:
				"https://res.cloudinary.com/dcpte972l/image/upload/v1710619649/SAFA_park_aerial_rexl3m.jpg",
		},
		// Add more card data here...
	];

	return (
		<div className="absolute  inset-0 flex justify-center items-center">
			<div className="grid grid-cols-4  gap-0">
				{animatedPinDemo.map((card, index) => (
					<AnimatedPinDemo key={index} {...card} />
				))}
			</div>
		</div>
	);
};

// Main HeroTwo component
const HeroTwo = () => {
	return (
		<div className="relative  flex justify-center items-center">
			<img
				className="h-screen md:h-auto object-cover"
				src="https://res.cloudinary.com/dcpte972l/image/upload/v1710619649/SAFA_park_aerial_rexl3m.jpg"
				alt=""
			/>
			{/* Transparent grid card */}
			<GridCard />
			<div className="absolute bottom-0 w-full h-[40rem] bg-gradient-to-t from-yellow-500 to-yellow-500/0 from-30%"></div>
			<img
				className="absolute h-36 w-36 bottom-64"
				src="https://res.cloudinary.com/dcpte972l/image/upload/v1710584735/logotwow-removebg-preview_jmxvtc.png"
				alt=""
			/>
			<span className="absolute md:top-96 text-white luxury tracking-widest text-2xl md:text-6xl">
				LUXURY LIVING COMES TO LIGHT
			</span>
			<img
				className="absolute top-16 w-72"
				src=" https://v.fastcdn.co/u/a43967b2/63800434-0-damac-logo-white.svg"
				alt=""
			/>
			<div className="absolute flex flex-col items-center font-['High_Tower_Text'] tracking-[8px] text-white  bottom-32">
				<div className="flex items-end w-full">
					<hr className="flex-grow border-white" />
					<span className="px-1 flex items-end text-2xl">THE</span>
					<hr className="flex-grow border-white" />
				</div>
				<span className="text-7xl mb-3">SAPPHIRE</span>
				<span className="text-lg ">SHEIKH ZAYED ROAD</span>
			</div>
		</div>
	);
};

export default HeroTwo;

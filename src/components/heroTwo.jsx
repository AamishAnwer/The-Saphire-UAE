"use client";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

const AnimatedPinDemo = ({ title, description, image }) => {
	return (
		<div className="h-[20rem] w-full flex items-center justify-center ">
			<PinContainer title="The Sapphire" href="">
				<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[17rem] h-[17rem] ">
					<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-xl text-center text-slate-100">
						{title}
					</h3>
					<div className="text-base !m-0 !p-0 font-normal text-center">
						<span className="text-slate-100  text-xl ">{description}</span>
					</div>
					<div className="flex  flex-1 w-full rounded-lg  mt-4 ">
						<Image src={image} width={400} height={200} alt="bb" />
					</div>
				</div>
			</PinContainer>
		</div>
	);
};

// GridCard component
const GridCard = () => {
	const animatedPinDemo = [
		{
			title: "Luxury Apartments",
			description: "",
			image:
				"https://res.cloudinary.com/dcpte972l/image/upload/v1710737714/04.Master_Bed_Room_daygjb.jpg",
		},

		{
			title: "Spa",
			description: "",
			image:
				"https://res.cloudinary.com/dcpte972l/image/upload/v1710738191/Screenshot_2024-03-18_090240_xnsvsq.png",
		},
		{
			title: "24/7 Gym Access",
			description: "",
			image:
				"https://res.cloudinary.com/dcpte972l/image/upload/v1710737722/7_ty53at.jpg",
		},
		{
			title: "Penthouse Horizon View",
			description: "",
			image:
				"https://res.cloudinary.com/dcpte972l/image/upload/v1710737719/02.Stair_View_nsed37.jpg",
		},
		{
			title: "Canary Garden",
			description: "",
			image:
				"https://res.cloudinary.com/dcpte972l/image/upload/v1710738713/Screenshot_2024-03-18_091054_inakmi.png",
		},
		{
			title: "Luxury Lobbies",
			description: "",
			image:
				"https://res.cloudinary.com/dcpte972l/image/upload/v1710737723/Screenshot_2024-03-18_085230_zei1ny.png",
		},

		// Add more card data here...
	];

	return (
		<div className="absolute inset-0 flex justify-center items-center top-0">
			<div className="grid grid-cols-3 gap-0 p-5 bg-opacity-20 bg-white backdrop-blur-sm absolute top-96">
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
		<div className="relative  flex justify-center items-center ">
			<img
				className="h-screen md:h-auto object-cover brightness-75"
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
			<span className="absolute md:top-72 text-white luxury tracking-widest text-2xl md:text-6xl">
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

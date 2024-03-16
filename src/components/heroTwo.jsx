import React from "react";

const HeroTwo = () => {
	return (
		<div className=" relative flex justify-center items-center ">
			<img
				className=" h-screen md:h-auto object-cover"
				src="https://res.cloudinary.com/dcpte972l/image/upload/v1710619649/SAFA_park_aerial_rexl3m.jpg"
				alt=""
			/>
			<div className=" absolute bottom-0 w-full h-[40rem] bg-gradient-to-t from-yellow-500 to-yellow-500/0 from-30%"></div>
			<img
				className=" absolute h-36 w-36 bottom-64"
				src="https://res.cloudinary.com/dcpte972l/image/upload/v1710584735/logotwow-removebg-preview_jmxvtc.png"
				alt=""
			/>
			<span className=" absolute md:top-96 text-white luxury tracking-widest text-2xl md:text-6xl">
				LUXURY LIVING COMES TO LIGHT
			</span>
			<img
				className=" absolute top-16 w-72"
				src=" https://v.fastcdn.co/u/a43967b2/63800434-0-damac-logo-white.svg"
				alt=""
			/>
			<div className=" absolute flex flex-col items-center font-['High_Tower_Text'] tracking-[8px] text-white  bottom-32">
				{/* <span className=" text-xl">The</span>
				<span className=" text-4xl">SAPPHIRE</span>
				<span className=" text-xl">SHEIKH ZAYED ROAD</span> */}
				<div className="flex items-end w-full">
					<hr className="flex-grow  border-white" />
					<span className="px-1 flex items-end text-2xl">THE</span>
					<hr className="flex-grow  border-white" />
				</div>
				<span className=" text-7xl mb-3">SAPPHIRE</span>
				<span className=" text-lg ">SHEIKH ZAYED ROAD</span>
			</div>
		</div>
	);
};

export default HeroTwo;

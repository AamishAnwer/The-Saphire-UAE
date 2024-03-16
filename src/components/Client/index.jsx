import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Clients() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 7000,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: "linear",
		pauseOnHover: false,
		arrows: false,
	};

	const [yearsExperience, setYearsExperience] = useState(0);
	const [partsPrinted, setPartsPrinted] = useState(0);
	const [printers, setPrinters] = useState(0);
	const [team, setTeam] = useState(0);
	const [country, setCountry] = useState(0);
	const [startAnimation, setStartAnimation] = useState(false);
	const numbersSectionRef = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setStartAnimation(true);
					observer.disconnect(); // Optional: Stop observing after it's visible
				}
			},
			{ threshold: 0.1 } // Trigger when 10% of the element is visible
		);

		if (numbersSectionRef.current) {
			observer.observe(numbersSectionRef.current);
		}

		return () => {
			if (numbersSectionRef.current) {
				observer.unobserve(numbersSectionRef.current);
			}
		};
	}, []);

	useEffect(() => {
		if (!startAnimation) return;

		const targets = {
			yearsExperience: 10,
			partsPrinted: 17000,
			printers: 60,
			team: 30,
			country: 25,
		};
		const increments = {
			yearsExperience: 0.1,
			partsPrinted: 170,
			printers: 0.6,
			team: 0.3,
			country: 0.25,
		};

		const updateFunctions = {
			yearsExperience: setYearsExperience,
			partsPrinted: setPartsPrinted,
			printers: setPrinters,
			team: setTeam,
			country: setCountry,
		};

		const timers = Object.keys(targets).map((key) => {
			return setInterval(() => {
				updateFunctions[key]((prevValue) => {
					if (prevValue + increments[key] >= targets[key]) {
						clearInterval(timers[key]);
						return targets[key];
					}
					return prevValue + increments[key];
				});
			}, 20);
		});

		return () => timers.forEach((timer) => clearInterval(timer));
	}, [startAnimation]);

	return (
		<>
			<h1 className="max-md:text-center text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-6 font-medium">
				Acheivements
			</h1>

			<span className="relative flex justify-center">
				<div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-l from-transparent via-blue-500 to-transparent opacity-75"></div>
			</span>

			<div
				ref={numbersSectionRef}
				className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
			>
				<div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-3 sm:gap-12 lg:grid-cols-5">
					<div>
						<div className="mx-auto flex  items-center justify-center ">
							<img
								className="h-12 w-9 text-gray-700"
								src="./about4.png"
								alt="3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec"
							/>
						</div>
						<h3 className="mt-4 text-4xl font-semibold text-black">
							+{Math.ceil(yearsExperience)}
						</h3>
						<p className="text-xl text-blue-600">Years Experience</p>
					</div>
					<div>
						<div className="mx-auto flex items-center justify-center ">
							<img
								className="h-12 w-12 text-gray-700"
								src="./about6.png"
								alt="3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec"
							/>
						</div>
						<h3 className="mt-4 text-4xl font-semibold text-black">
							+{Math.ceil(partsPrinted)}
						</h3>
						<p className="text-xl text-blue-600">Parts Printed</p>
					</div>

					<div>
						<div className="mx-auto flex items-center justify-center  ">
							<img
								className="h-12 w-12 text-gray-700"
								src="./about5.png"
								alt="3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec"
							/>
						</div>
						<h3 className="mt-4 text-4xl font-semibold text-black">
							+{Math.ceil(printers)}
						</h3>
						<p className="text-xl text-blue-600">Printers</p>
					</div>
					<div>
						<div className="mx-auto flex  items-center justify-center ">
							<img
								className="h-12 w-12 text-gray-700"
								src="./about3.png"
								alt="3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec"
							/>
						</div>
						<h3 className="mt-4 text-4xl font-semibold text-black">
							+{Math.ceil(team)}
						</h3>
						<p className="text-xl text-blue-600">Team</p>
					</div>
					<div>
						<div className="mx-auto flex  items-center justify-center ">
							<img
								className="h-12 w-12 text-gray-700"
								src="./about2.png"
								alt="3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec"
							/>
						</div>
						<h3 className="mt-4 text-4xl font-semibold text-black">
							+{Math.ceil(country)}
						</h3>
						<p className="text-xl text-blue-600">Country</p>
					</div>
				</div>
			</div>
			<span className="relative flex justify-center lg:mt-10">
				<div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-75"></div>
			</span>
			<div className="bg-white my-10">
				<div className="text-center ">
					<h1 className="max-md:text-center text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-6 font-medium py-10">
						Clients
					</h1>
					<Slider {...settings}>
						{/* Original */}
						<div>
							<Image
								// height={200}
								// width={300}
								width={0}
								height={0}
								sizes="100vw"
								className="object-contain w-[200px] h-[90px]"
								src="/clients/1.png"
								alt="UltraTec 3d client in Dubai"
							/>
						</div>
						<div>
							<Image
								width={0}
								height={0}
								sizes="100vw"
								className="object-contain w-[100px] h-[90px]"
								src="/clients/2.png"
								alt="UltraTec 3d client in Dubai"
							/>
						</div>
						<div>
							<Image
								width={0}
								height={0}
								sizes="100vw"
								className=" object-contain w-[280px] h-[90px]"
								src="/clients/3.png"
								alt="UltraTec 3d client in Dubai"
							/>
						</div>
						<div>
							<Image
								width={0}
								height={0}
								sizes="100vw"
								className=" object-contain w-[250px] h-[90px]"
								src="/clients/4.png"
								alt="UltraTec 3d client in Dubai"
							/>
						</div>
						{/* Copy  of original */}
						<div>
							<Image
								width={0}
								height={0}
								sizes="100vw"
								className=" object-contain w-[250px] h-[90px]"
								src="/clients/5.png"
								alt="UltraTec 3d client in Dubai"
							/>
						</div>
						<div>
							<Image
								width={0}
								height={0}
								sizes="100vw"
								className="object-contain w-[300px] h-[90px]"
								src="/clients/6.png"
								alt="UltraTec 3d client in Dubai"
							/>
						</div>

						<div>
							<Image
								width={0}
								height={0}
								sizes="100vw"
								className="object-contain w-[200px] h-[90px]"
								src="/clients/7.png"
								alt="UltraTec 3d client in Dubai"
							/>
						</div>

						<div>
							<Image
								width={0}
								height={0}
								sizes="100vw"
								className="object-contain w-[200px] h-[90px]"
								src="/clients/8.png"
								alt="UltraTec 3d client in Dubai"
							/>
						</div>

						<div>
							<Image
								width={0}
								height={0}
								sizes="100vw"
								className="object-contain w-[200px] h-[90px]"
								src="/clients/9.png"
								alt="UltraTec 3d client in Dubai"
							/>
						</div>

						<div>
							<Image
								width={0}
								height={0}
								sizes="100vw"
								className="object-contain w-[200px] h-[90px]"
								src="/clients/10.png"
								alt="UltraTec 3d client in Dubai"
							/>
						</div>

						<div>
							<Image
								width={0}
								height={0}
								sizes="100vw"
								className="object-contain w-[200px] h-[90px]"
								src="/clients/11.png"
								alt="UltraTec 3d client in Dubai"
							/>
						</div>
					</Slider>
				</div>
			</div>
		</>
	);
}

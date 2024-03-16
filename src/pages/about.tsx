import React, { useState, useEffect, useRef } from "react";
import Hero from "@/components/hero";
import Head from "next/head";
import AboutBody from "@/components/about/body";
import Component from "@/components/about/component";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/projects/banner";
import Gradient from "@/components/gradient";

export default function about() {
	const numbersSectionRef = useRef(null);
	const [yearsExperience, setYearsExperience] = useState(0);
	const [partsPrinted, setPartsPrinted] = useState(0);
	const [printers, setPrinters] = useState(0);
	const [team, setTeam] = useState(0);
	const [country, setCountry] = useState(0);

	type CounterKey =
		| "yearsExperience"
		| "partsPrinted"
		| "printers"
		| "team"
		| "country";
	// Function to start counters
	const startCounters = () => {
		const targets: Record<CounterKey, number> = {
			yearsExperience: 10,
			partsPrinted: 17000,
			printers: 60,
			team: 30,
			country: 25,
		};
		const increments: Record<CounterKey, number> = {
			yearsExperience: 0.1,
			partsPrinted: 170,
			printers: 0.6,
			team: 0.3,
			country: 0.25,
		};

		const updateFunctions: Record<
			CounterKey,
			React.Dispatch<React.SetStateAction<number>>
		> = {
			yearsExperience: setYearsExperience,
			partsPrinted: setPartsPrinted,
			printers: setPrinters,
			team: setTeam,
			country: setCountry,
		};

		const timerIDs: Record<CounterKey, NodeJS.Timeout> = {} as Record<
			CounterKey,
			NodeJS.Timeout
		>;

		Object.keys(targets).forEach((key) => {
			const counterKey = key as CounterKey;
			timerIDs[counterKey] = setInterval(() => {
				updateFunctions[counterKey]((prevValue) => {
					if (prevValue + increments[counterKey] >= targets[counterKey]) {
						clearInterval(timerIDs[counterKey]);
						return targets[counterKey];
					}
					return prevValue + increments[counterKey];
				});
			}, 20);
		});
	};

	// Intersection Observer to trigger counters on scroll into view
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						startCounters(); // Start counters when the section is visible
						// Optionally: Unobserve the section after animation starts
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 } // Trigger when 10% of the section is in view
		);

		if (numbersSectionRef.current) {
			observer.observe(numbersSectionRef.current);
		}

		// Cleanup observer on component unmount
		return () => observer.disconnect();
	}, []);
	return (
		<>
			<Head>
				<title>About</title>
				<meta
					name="description"
					content="Ultratec 3D, the premier 3D printing company in Dubai, provides high-quality 3D printing services and solutions to meet your diverse needs. Contact us now!"
				/>
			</Head>
			<section className="w-full bg-gradient-to-t from-[#1c1c1c] to-[#000000]">
				<Hero
					type="img"
					src={"/about_us_Cover.png"}
					heroText={`Ultratec`}
					className={""}
				/>

				<div className="py-10 px-2 md:px-20">
					<h1 className="max-md:text-center text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-6  ">
						OUR STORY
					</h1>
					<p className="text-balance text-center text-white p-2 ">
						At Ultratec, our story is a narrative of shared beginnings and a
						relentless pursuit of innovation. United by a common passion for
						pushing the boundaries of technology, we were once classmates
						studying Mechatronics Engineering, moved to UAE working in
						Engineering industry for few years and then embarked on a
						transformative journey. In 2019, with a vision to redefine the
						landscape of 3D printing and engineering services, we founded
						Ultratec. Our modest start, equipped with only two printers in a
						compact office space, was a testament to our shared determination
						and belief in our capabilities.
					</p>
					<br />
					<br />
					<p className="   text-balance text-center text-white p-2">
						Today, we proudly stand as a beacon of excellence, providing the
						best 3D printing and engineering services across the UAE and KSA.
						Our story is a testament to the power of collaboration, passion, and
						the unwavering commitment to delivering top-notch solutions to our
						clients.
					</p>

					<div className="flex justify-center items-center gap-2 md:gap-20 mt-8 xl:my-16 mb-10">
						<div className="perspective">
							<img
								className="mx-auto object-contain w-72 h-72 rounded-full hover:scale-110 transition-all"
								src="/profile_2.png"
								alt="Mr Arafeh Co-Founder & CEO Ultratec"
							/>

							<div className="text-center">
								<h1 className="m-4 text-2xl font-semibold capitalize text-[#D8DBDE] group-hover:text-[#D8DBDE]">
									Mr Arafeh
								</h1>
								<p className="m-4 text-sm  capitalize text-[#D8DBDE] group-hover:text-[#D8DBDE]">
									Co-Founder & CEO
								</p>
							</div>
						</div>
						<div>
							<img
								className="mx-auto object-contain w-72 h-72 rounded-full hover:scale-110 transition-all"
								src="/profile_1.png"
								alt="Mr Dweik Co-Founder & CEO Ultratec"
							/>
							<div className="text-center">
								<h1 className="m-4 text-2xl font-semibold capitalize text-[#D8DBDE] group-hover:text-[#D8DBDE]">
									Mr Dweik
								</h1>
								<p className="m-4 text-sm  capitalize text-[#D8DBDE] group-hover:text-[#D8DBDE]">
									Co-Founder & CEO
								</p>
							</div>
						</div>
					</div>

					<h1 className="max-md:text-center text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-6  ">
						WHAT WE DO?
					</h1>
					<p className="text-balance text-center text-white p-2 ">
						Ultratec 3D leads in 3D printing innovation, facilitating scalable
						product creation globally. Their advanced technology platform
						integrates seamlessly with a global network of digital manufacturing
						and material partners. Specializing in tailored 3D printing
						solutions, they redefine possibilities across diverse applications.
						As pioneers in additive manufacturing, Ultratec 3D stands as a
						proven leader, pushing the boundaries of creativity and precision.
						Join them on the forefront of this transformative journey in 3D
						printing.
						<br />
						Ultratec 3D pioneers scalable 3D printing solutions, combining
						cutting-edge technology with a global network of partners.
						Specializing in customized applications, they redefine possibilities
						in additive manufacturing. Join them at the forefront, where
						innovation meets precision.
					</p>
					<br />
				</div>
				<section className="overflow-hidden">
					<h1 className="max-md:text-center text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-6  ">
						Our range of services including:
					</h1>
					<div className="mx-auto flex flex-wrap items-center lg:w-4/5">
						<img
							alt="3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec"
							className="rounded object-cover lg:w-1/2"
							src="https://d33609liqwio9r.cloudfront.net/2024-02-24T09:51:57.526Z-Ourrangeofservices.png"
						/>

						<div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
							<div className="flex border-b">
								<div className="p-4">
									<img
										className="mx-auto object-cover w-16 h-16 image-hover-effect"
										src="/addictive.png"
										alt="services/additive-manufacturing"
									/>
								</div>
								<div className="pl-4 flex justify-start pt-9 lg:w-3/4">
									<Link href={"services/additive-manufacturing/"}>
										<p className="text-left text-white lg:text-lg">
											Additive Manufacturing
										</p>
									</Link>
								</div>
							</div>

							<div className="flex border-b">
								<div className="p-4">
									<img
										className="mx-auto object-cover w-16 h-16 image-hover-effect"
										src="/3D_Printer.png"
										alt="3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec"
									/>
								</div>
								<div className=" pl-4 flex text-center justify-center pt-9 ">
									<Link href={"/services/3d-design-3d-scanning/"}>
										<p className="text-white">3D Design & 3D Scanning</p>
									</Link>
								</div>
							</div>
							<div className="flex border-b">
								<div className=" p-4">
									<img
										className="mx-auto object-cover w-16 h-16 image-hover-effect"
										src="/acrylic.png"
										alt="3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec"
									/>
								</div>
								<div className=" pl-4 flex text-center justify-center pt-9 ">
									<Link href={"/services/acrylic-fabrication/"}>
										<p className="text-white">Acrylic Fabrication </p>
									</Link>
								</div>
							</div>
							<div className="flex border-b">
								<div className=" p-4">
									<img
										className="mx-auto object-cover w-16 h-16 image-hover-effect"
										src="/product-develop.png"
										alt="3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec"
									/>
								</div>
								<div className=" pl-4 flex text-center justify-center pt-9 ">
									<Link href={"/services/product-development/"}>
										<p className="text-white">Product development</p>
									</Link>
								</div>
							</div>
							<div className="flex border-b">
								<div className=" p-4">
									<img
										className="mx-auto object-cover w-16 h-16 image-hover-effect"
										src="/engineering.png"
										alt="engineering in Dubai | Avail 3D Printing Service in Dubai With Ultratec"
									/>
								</div>
								<div className=" pl-4 flex text-center justify-center pt-9 ">
									<Link href={"/services/mechatronics-engineering/"}>
										<p className="text-white">Mechantronics Engineering</p>
									</Link>
								</div>
							</div>
							<div className="flex border-b">
								<div className=" p-4">
									<img
										className="mx-auto object-cover w-16 h-16 image-hover-effect"
										src="/paint.png"
										alt=" Avail 3D Printing Service in Dubai With Ultratec"
									/>
								</div>
								<div className=" pl-4 flex text-center justify-center pt-9 ">
									<Link href={"/services/paint-post-processing/"}>
										<p className="text-white">Paint and Post processing</p>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				<h1 className="mt-12 max-md:text-center text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-6  ">
					Acheivements
				</h1>

				<span className="relative flex justify-center">
					<div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-l from-transparent via-blue-500 to-transparent opacity-75"></div>
				</span>

				<div
					ref={numbersSectionRef}
					className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
				>
					<div className="mt-12 grid grid-cols-2 md:grid-cols-1 self-center gap-y-8 text-center sm:grid-cols-3 sm:gap-12 lg:grid-cols-5">
						<div>
							<div className="mx-auto flex  items-center justify-center ">
								<img
									className="h-12 w-9 text-gray-700"
									src="/about4.png"
									alt="Avail 3D Printing Service in Dubai With Ultratec"
								/>
							</div>
							<h3 className="mt-4 text-4xl font-semibold text-white">
								+{Math.ceil(yearsExperience)}
							</h3>
							<p className="text-xl text-blue-600 font-semibold">
								Years Experience
							</p>
						</div>
						<div>
							<div className="mx-auto flex items-center justify-center ">
								<img
									className="h-12 w-12 text-gray-700"
									src="/about6.png"
									alt="Parts"
								/>
							</div>
							<h3 className="mt-4 text-4xl font-semibold text-white">
								+{Math.ceil(partsPrinted)}
							</h3>
							<p className="text-xl text-blue-600 font-semibold">
								Parts Printed
							</p>
						</div>

						<div>
							<div className="mx-auto flex items-center justify-center  ">
								<img
									className="h-12 w-12 text-gray-700"
									src="/about5.png"
									alt=" Avail 3D Printing Service in Dubai With Ultratec"
								/>
							</div>
							<h3 className="mt-4 text-4xl font-semibold text-white">
								+{Math.ceil(printers)}
							</h3>
							<p className="text-xl text-blue-600 font-semibold">Printers</p>
						</div>
						<div>
							<div className="mx-auto flex  items-center justify-center ">
								<img
									className="h-12 w-12 text-gray-700"
									src="/about3.png"
									alt="Team"
								/>
							</div>
							<h3 className="mt-4 text-4xl font-semibold text-white">
								+{Math.ceil(team)}
							</h3>
							<p className="text-xl text-blue-600 font-semibold">Team</p>
						</div>
						<div>
							<div className="mx-auto flex  items-center justify-center ">
								<img
									className="h-12 w-12 text-gray-700"
									src="/about2.png"
									alt="Team"
								/>
							</div>
							<h3 className="mt-4 text-4xl font-semibold text-white">
								+{Math.ceil(country)}
							</h3>
							<p className="text-xl text-blue-600 font-semibold">Country</p>
						</div>
					</div>
				</div>
				<span className="relative flex justify-center lg:mt-10">
					<div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-75"></div>
				</span>
				{/*  */}
				<AboutBody
					src={
						"https://d33609liqwio9r.cloudfront.net/2024-02-24T09:51:57.528Z-Ourvision.jpg"
					}
					imageToLeft={false}
					title={"OUR VISION"}
					desc={
						"To be the leader provider of the 3D Printing and Engineering solutions in UAE, with proven value to our customers."
					}
				/>
				<AboutBody
					src={
						"https://d33609liqwio9r.cloudfront.net/2024-02-24T09:51:57.534Z-OurMission.jpg"
					}
					imageToLeft={true}
					title={"Our Mission"}
					desc={`To provide the highest quality services and solutions for 3D printing and Engineering technology; geared towards all the industries in the market by using the latest technology, best materials, most qualified human resources and the most efficient fabrication techniques.`}
				/>
				{/*  */}
				<Component />
				<div className="flex flex-col items-center gap-y-7 text-white">
					<h1 className="text-2xl md:text-5xl font-medium text-center">
						OUR SISTER COMPANY
					</h1>
					<div className="w-full md:w-96 h-24 md:h-auto rounded-3xl border border-white flex justify-center items-center">
						<Image
							src={"/4DLogo.png"}
							width={100}
							height={100}
							alt="Sister company ultratec4d"
							className="w-auto h-auto"
						/>
					</div>
					<a
						href={"https://ultratec4d.ae/"}
						target="_blank"
						rel="noopener noreferrer"
						className="w-full md:w-36 h-11 px-4 m-5 rounded-full bg-blue-600 flex items-center justify-center hover:w-40 transition-all"
					>
						<span className="text-white text-base max-lg:text-xs">
							Visit Site
						</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="white"
						>
							<mask
								id="mask0_1161_1882"
								maskUnits="userSpaceOnUse"
								x="0"
								y="0"
								width="24"
								height="24"
							>
								<rect width="24" height="24" fill="white" />
							</mask>
							<g mask="url(#mask0_1161_1882)">
								<path
									d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
									fill="white"
								/>
							</g>
						</svg>
					</a>
				</div>

				<Gradient className={"bg-gradient-to-b from-[#1c1c1c] to-[#0d2d54]"} />
				<Banner />
			</section>
		</>
	);
}

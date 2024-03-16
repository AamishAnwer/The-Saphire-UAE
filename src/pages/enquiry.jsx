"use client";

import Hero from "@/components/Enquiry/Hero";
import Quote from "@/components/Enquiry/Quote";
import Form from "@/components/Enquiry/Form";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
	return (
		<section className="w-full">
			<Head>
				<title>
					3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec
				</title>
				<meta
					name="description"
					content="Ultratec 3D, the premier 3D printing company in Dubai, provides high-quality 3D printing services and solutions to meet your diverse needs. Contact us now!"
				/>
			</Head>

			<Hero />
			<Form />
			<Quote />
			<div className=" z-10 relative   bg-gradient-to-t from-[#2571CD] to-[#02060B] text-white px-10 md:px-60 py-14">
				<h1 className="max-md:text-center text-xl md:text-2xl z-10 relative  text-center mb-4 lg:mb-6 font-medium">
					WE WILL ANSWER ALL YOUR QUESTIONS AT ANY TIME
				</h1>
				<p className="mt-0.5 text-sm font-medium  text-center relative px-2 md:px-20 z-10 ">
					You can rely on Ultretec 3D team to get your request done at best
					quality Your enquiries will be answered in less than 24 hours.
				</p>
			</div>
			<div className=" bg-gradient-to-b from-[#2571CD] to-[#02060B]  text-white px-8 justify-between py-14 flex w-full flex-1 flex-col md:flex-row">
				<h1 className="max-md:text-center text-2xl md:text-4xl z-10  font-medium text-white text-center uppercase mb-4 md:mb-0">
					We are here to support you at any time
				</h1>
				<Link
					href={"#"}
					className="flex   justify-between items-center rounded-xl bg-[#2060AD] hover:bg-blue-600 transition-all px-20 h-[52px] cursor-pointer"
				>
					<span className="text-white">Contact Us</span>
					<span>
						<FaArrowRight className="text-white ml-4" />
					</span>
				</Link>
			</div>
		</section>
	);
}

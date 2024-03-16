import Head from "next/head";
import Hero from "@/components/hero";

import ResourcesNavbar from "./navbar";

export default function Newsletter() {
	const blogPosts = [
		{
			title: "The Power of 3D Product Design: Transforming Ideas into Reality",
			date: "June 25, 2023",
			description:
				"In today’s rapidly evolving market, product design plays a crucial role in capturing consumer attention and driving business success. With advancements in technology, the realm of product design has witnessed a paradigm shift, and 3D product design has emerged as a game-changer. This blog explores…",
			imageUrl:
				"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A16%3A10.374Z-Rectangle%20148.png",
			readMoreLink: "/blog/1",
		},
		{
			title: "The Power of 3D Product Design: Transforming Ideas into Reality",
			date: "June 25, 2023",
			description:
				"In today’s rapidly evolving market, product design plays a crucial role in capturing consumer attention and driving business success. With advancements in technology, the realm of product design has witnessed a paradigm shift, and 3D product design has emerged as a game-changer. This blog explores…",
			imageUrl:
				"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A18%3A47.870Z-Rectangle%20149.png",
			readMoreLink: "/blog/1",
		},
		{
			title: "The Power of 3D Product Design: Transforming Ideas into Reality",
			date: "June 25, 2023",
			description:
				"In today’s rapidly evolving market, product design plays a crucial role in capturing consumer attention and driving business success. With advancements in technology, the realm of product design has witnessed a paradigm shift, and 3D product design has emerged as a game-changer. This blog explores…",
			imageUrl:
				"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A18%3A47.868Z-Rectangle%20150.png",
			readMoreLink: "/blog/1",
		},
	];
	return (
		<>
			<Head>
				<title>Newsletter</title>
				<meta
					name="description"
					content="Ultratec 3D, the premier 3D printing company in Dubai, provides high-quality 3D printing services and solutions to meet your diverse needs. Contact us now!"
				/>
			</Head>
			<section className="z-10 relative w-full bg-gradient-to-b from-[#2571CD] to-[#02060B]">
				<Hero
					type="img"
					src={"/servive-top-bg.png"}
					heroText={`Newsletter`}
					className={"max-md:hidden"}
				/>
				<div className="md:hidden uppercase w-full h-72 md:h-96 bg-black text-white text-4xl md:text-6xl font-bold flex items-center justify-center relative overflow-hidden">
					<div className="circle-gradient-six"></div>
					<span className="z-50 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center w-full">
						Newsletter
					</span>
				</div>
				<ResourcesNavbar />

				<div className="bg-black p-8 grid  gap-8">
					{blogPosts.map((post, index) => (
						<BlogCard key={index} {...post} />
					))}
				</div>
			</section>
		</>
	);
}

function BlogCard({ title, date, description, imageUrl, readMoreLink }) {
	return (
		<div className="w-full mx-auto  bg-white rounded-lg overflow-hidden shadow-lg">
			<div className="relative flex items-center">
				<img
					src={imageUrl}
					alt="3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec"
					className="w-full h-[28rem] object-cover rounded"
				/>
				<div className="p-6 absolute bg-blue-200/70 m-10 rounded text-black">
					<h2 className="text-2xl font-normal">{title}</h2>
					<p className="text-sm mb-2">{date}</p>
					<p className="mb-4 mt-16">{description}</p>
				</div>
			</div>
		</div>
	);
}

import Head from "next/head";
import Hero from "@/components/hero";

import BlogCard from "@/components/Block/BlogCard";
import ResourcesNavbar from "./navbar";

export default function Blogs() {
	const blogPosts = [
		{
			title: "The Power of 3D Product Design: Transforming Ideas into Reality",
			date: "June 25, 2023",
			description:
				"In today’s rapidly evolving market, product design plays a crucial role in capturing consumer attention and driving business success. With advancements in technology, the realm of product design has witnessed a paradigm shift, and 3D product design has emerged as a game-changer. This blog explores…",
			imageUrl:
				"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A16%3A10.374Z-Rectangle%20148.png",
			readMoreLink: "/blog/",
		},
		{
			title: "The Power of 3D Product Design: Transforming Ideas into Reality",
			date: "June 25, 2023",
			description:
				"In today’s rapidly evolving market, product design plays a crucial role in capturing consumer attention and driving business success. With advancements in technology, the realm of product design has witnessed a paradigm shift, and 3D product design has emerged as a game-changer. This blog explores…",
			imageUrl:
				"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A18%3A47.870Z-Rectangle%20149.png",
			readMoreLink: "/blog",
		},
		{
			title: "The Power of 3D Product Design: Transforming Ideas into Reality",
			date: "June 25, 2023",
			description:
				"In today’s rapidly evolving market, product design plays a crucial role in capturing consumer attention and driving business success. With advancements in technology, the realm of product design has witnessed a paradigm shift, and 3D product design has emerged as a game-changer. This blog explores…",
			imageUrl:
				"https://d33609liqwio9r.cloudfront.net/2024-02-24T17%3A18%3A47.868Z-Rectangle%20150.png",
			readMoreLink: "/blog",
		},
	];
	return (
		<>
			<Head>
				<title>Blogs</title>
				<meta
					name="description"
					content="Ultratec 3D, the premier 3D printing company in Dubai, provides high-quality 3D printing services and solutions to meet your diverse needs. Contact us now!"
				/>
			</Head>
			<section className="z-10 relative w-full bg-gradient-to-b from-[#2571CD] to-[#02060B]">
				<Hero
					type="img"
					src={"/blogs.png"}
					heroText={`Blogs`}
					className={"max-md:hidden"}
				/>
				<div className="md:hidden uppercase w-full h-72 md:h-96 bg-black text-white text-4xl md:text-6xl font-bold flex items-center justify-center relative overflow-hidden">
					<div className="circle-gradient-six"></div>
					<span className="z-50 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center w-full">
						Blogs
					</span>
				</div>
				<ResourcesNavbar />

				<div className="bg-white px-16 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{blogPosts.map((post, index) => (
						<BlogCard key={index} {...post} />
					))}
				</div>
			</section>
		</>
	);
}

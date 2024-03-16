import React from "react";
import Slider from "react-slick";
import BorderedStarIcon from "./borderedStarIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Testimonials() {
	const cards = [
		{
			id: 1,
			title: "Malesh Ponnusamy",
			role: "",
			imageUrl: "/testimonial-1.png",

			description:
				"The solution provided by Ultratec for a tight job was very interesting. They delivered as per the schedule with out any delys. They were innovative and proactive in coming up with a solution and to make the project possible. Overall, a great team to work with ! Malesh Ponnusamy, David and William Adcertising. ",
		},
		{
			id: 2,
			title: "Alan Alfaro",
			role: "",
			imageUrl: "/testimonial-2.png",
			description:
				"Quality and good service. The teamm really did an amazing job and met our expected output with efficiency in delivery and quality. I definitely recommend them in all your 3D printing project. Kudos to the team!",
		},
		{
			id: 3,
			title: "Glitch",
			role: "",
			imageUrl: "/testimonial-3.png",
			description:
				"It was a gerat opportunity and a successful experience to deal with your company With such capabilities and a specialized team. I wish everyone continued excellence and sussesss always forward",
		},
		{
			id: 4,
			title: "nonr jamoul",
			role: "",
			imageUrl: "/testimonial-3.png",
			description:
				"Great job, the result was exactly what I wanted, and treatment was very, very elegant and with great cooperation from you. Thank you to Professor Hassan for his patience. All the best to you for your wonderful services ",
		},
		{
			id: 5,
			title: "Kim Cabatuando",
			role: "",
			imageUrl: "/testimonial-1.png",

			description:
				"Staff is very professional and patient. They're very responsive as well. And of course, their work is impeccable.  ",
		},
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
			<section className="bg-[#2060AD]">
				<div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
					<h1 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 text-white">
						What our customers say
					</h1>

					<Slider {...settings}>
						{cards.map((card) => (
							<div key={card.id} className="p-4">
								<blockquote className="rounded-lg text-white bg-[#2060AD] border border-white  p-6 shadow-sm sm:p-8 h-full flex flex-col justify-between">
									<div>
										<div className="flex items-center justify-end gap-4">
											<Image
												width={0}
												height={0}
												sizes="100vw"
												alt="Avail 3D Printing Service in Dubai With Ultratec"
												src={"/testimonial.png"}
												className="h-8 w-8 rounded-full object-cover  icon-hover-3d"
											/>
										</div>
										<div className="flex items-center gap-4 mt-4">
											<Image
												width={0}
												height={0}
												sizes="100vw"
												alt={card.title}
												src={card.imageUrl}
												className="h-16 w-16 rounded-full object-cover"
											/>
											<div>
												<p className="mt-0.5 text-lg font-medium text-white">
													{card.title}
												</p>
												<p className="mt-0.5 text-sm font-medium text-white">
													{card.role}
												</p>
											</div>
										</div>
										<p className="mt-4 text-white  line-clamp-5">
											{card.description}
										</p>
									</div>
									<div className="mt-4">
										<div className="flex">
											<BorderedStarIcon />
											<BorderedStarIcon />
											<BorderedStarIcon />
											<BorderedStarIcon />
											<BorderedStarIcon />
										</div>
										<a
											href="https://www.google.com/maps/place/Ultratec+3D+Printing/@24.9709003,55.1935869,17.03z/data=!4m8!3m7!1s0x3e5f69148ab1e1d1:0x6aaa2a67a3bf52c7!8m2!3d24.9708809!4d55.1935451!9m1!1b1!16s%2Fg%2F11mv524thl?entry=ttu"
											className="text-white  transition-all mx-1"
										>
											Read more
										</a>
									</div>
								</blockquote>
							</div>
						))}
					</Slider>
				</div>
			</section>
		</>
	);
}

import Image from "next/image";
import Link from "next/link";

export default function Main() {
	const style = "text-white text-lg";
	return (
		<section className="z-50 relative text-white flex flex-col lg:flex-row gap-x-5 xl:gap-x-16 px-4 lg:px-14 py-10 md:py-16 lg:py-24">
			<Image
				src={"/section2-right-2.png"}
				alt="additive manufacturing in dubai"
				width={0}
				height={0}
				sizes="100vw"
				className=" h-[387px] min-[387px] w-full max-lg:h-fit lg:max-w-[42.2%] rounded-xl object-cover"
			/>
			<div>
				<h1 className="text-left text-5xl max-lg:mt-8 max-lg:text-center text-white">
					Product Development In Ultratec3D: Where Creativity and Innovation
					Come to Life{" "}
				</h1>

				<span className={"lg:mt-4 mt-2 " + style}>
					In the fast-paced world of technology and innovation, companies like
					Ultratec3D are at the forefront of revolutionizing product
					development. Based in the vibrant city of Dubai, Ultratec3D is a
					beacon of creativity and innovation, where every day brings new
					possibilities and solutions to life.
					<br />
					<p className="my-4">
						<strong>Ultratec3D: A Hub of Creativity and Innovation</strong>
					</p>
					Ultratec3D is more than just a company; it’s a hub where creativity
					and innovation converge. Nestled in the heart of Dubai, a city known
					for its forward-thinking approach, Ultratec3D harnesses the spirit of
					the city to drive product development to new heights. This company
					believes that every idea has the potential to shape the future, and
					they are committed to turning those ideas into reality.
					<p className="my-4">
						<strong>Product Development in Dubai</strong>
					</p>
					Dubai, with its visionary leadership and commitment to technological
					advancement, is the perfect backdrop for Ultratec3D’s product
					development endeavors. The city’s cutting-edge infrastructure, access
					to a diverse talent pool, and a thriving business ecosystem make it an
					ideal place for innovation to flourish. Ultratec3D leverages these
					advantages to create products that not only meet but exceed global
					standards.
					<p className="my-4">
						<strong>Product Design Excellence</strong>
					</p>
					At the core of Ultratec3D’s success lies its dedication to product
					design excellence. The company employs a team of highly skilled and
					creative designers who are passionate about pushing the boundaries of
					what’s possible. They understand that aesthetics, functionality, and
					user experience are integral components of any successful product.
					Ultratec3D’s designers strive to strike the perfect balance between
					form and function, resulting in products that are not only visually
					stunning but also highly practical.
					<p className="my-4">
						<strong>Innovation That Redefines Industries</strong>
					</p>
					Ultratec3D’s commitment to innovation goes beyond conventional
					boundaries. They are constantly exploring new technologies, materials,
					and methodologies to redefine industries. Whether it’s in healthcare,
					aerospace, consumer electronics, or any other sector, Ultratec3D’s
					products aim to solve complex problems and improve lives. Their
					relentless pursuit of innovation has earned them a reputation as a
					game-changer in the world of product development.
					<p className="my-4">
						<strong>Collaboration and Ideation</strong>
					</p>
					Ultratec3D understands that the best ideas often emerge from
					collaboration and ideation. They actively engage with clients,
					partners, and industry experts to brainstorm and refine concepts. This
					collaborative approach ensures that every product they develop is not
					just a solution but a reflection of collective wisdom and expertise.
					<p className="my-4">
						<strong>Sustainable Product Development</strong>
					</p>
					In an era of heightened environmental awareness, Ultratec3D is
					committed to sustainable product development. They believe that
					innovation should not come at the cost of the planet. Their products
					are designed with sustainability in mind, incorporating eco-friendly
					materials and energy-efficient processes wherever possible. In
					Ultratec3D, product development in Dubai finds its zenith. It’s a
					place where creativity knows no bounds, and innovation is a way of
					life. With a dedication to product design excellence, a passion for
					pushing the limits, and a commitment to sustainability, Ultratec3D is
					shaping the future one product at a time. As the world evolves,
					Ultratec3D stands as a testament to what can be achieved when
					creativity and innovation are brought to life every single day.
				</span>

				<div className="w-full flex max-lg:justify-center">
					<Link
						href={"/enquiry/"}
						className="w-40 mt-5 h-[44px] bg-[#2060AD] px-4 rounded-full flex gap-x-4 items-center justify-between  transition-all"
					>
						<span className="text-white">Get a Quote</span>
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
					</Link>
				</div>
			</div>
		</section>
	);
}

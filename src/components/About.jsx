import React from "react";

const About = () => {
	return (
		<div>
			<section>
				<div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
						<div className="relative z-10 lg:py-16">
							<div className="relative h-64 sm:h-80 lg:h-full">
								<img
									alt=""
									src="https://res.cloudinary.com/dcpte972l/image/upload/v1710665863/canel_w7lh4h.jpg"
									className="absolute inset-0 h-full w-full object-cover rounded-lg"
								/>
							</div>
						</div>

						<div className="relative flex items-center bg-gray-100">
							<span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

							<div className="p-8 sm:p-16 lg:p-24">
								<h2 className="text-2xl font-bold sm:text-3xl">About Us</h2>

								<p className="mt-4 text-gray-600">
									DAMAC Properties has been at the forefront of the Middle
									East’s luxury real estate market since 2002, delivering
									award-winning residential, commercial and leisure properties
									across the region and around the world, including the UAE,
									Saudi Arabia, Qatar, Jordan, Lebanon, Iraq, Maldives, Canada,
									United States and United Kingdom. Since then, the company has
									delivered approximately 46,000 homes, with a development
									portfolio of more than 33,000 at various stages of planning
									and progress.
									<br />
									DAMAC has also supported the vision of Sheikh Mohammed to
									train one million Arab coders in creating an empowered society
									through learning and skills development, an initiative that
									successfully wrapped up in May 2022
								</p>

								<a
									href="#"
									className="mt-8 inline-block rounded border border-yellow-600 bg-yellow-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-yellow-600 focus:outline-none focus:ring active:text-yellow-500"
								>
									Get in Touch
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;

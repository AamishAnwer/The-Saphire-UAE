import React from "react";

export default function Sls() {
	return (
		<div className="pt-40 bg-gradient-to-r from-black to-[#2060AD] ">
			<section className="overflow-hidden bg-gradient-to-r from-black to-[#2060AD] sm:grid sm:grid-cols-2">
				<div className="p-12 md:p-16 lg:px-20 lg:py-32">
					<div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
						<h2 className="text-3xl font-bold text-gray-100 md:text-4xl">
							SLA printing
						</h2>

						<p className="hidden text-xl text-gray-200 md:mt-6 md:block">
							Stereolithography (SLA) is a 3D printing technology that uses a
							liquid resin cured by ultraviolet (UV) light to build objects
							layer by layer. SLA offers high precision, smooth surface
							finishes, and is suitable for producing detailed and intricate
							parts. It is commonly utilized in applications such as
							prototyping, jewellery making, and dental modelling due to its
							ability to create highly accurate and intricate structures.
						</p>

						<div className="mt-6 md:mt-10">
							<a
								href="/blogs"
								className="inline-block rounded bg-blue-500 px-14 py-4 text-lg font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring focus:ring-yellow-400"
							>
								Blogs
							</a>
						</div>
					</div>
				</div>
				<div className=" rounded-lg p-10">
					<img
						alt="ultratec 3d printing dubai"
						src="https://d33609liqwio9r.cloudfront.net/2024-02-25T05%3A17%3A35.981Z-sla.gif"
						className=" rounded-lg object-cover sm:h-full"
					/>
				</div>
			</section>
		</div>
	);
}

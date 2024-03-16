import React from "react";

export default function Hp() {
	return (
		<div className="pt-40 bg-gradient-to-r from-black to-[#2060AD] ">
			<section className="overflow-hidden bg-gradient-to-r from-black to-[#2060AD] sm:grid sm:grid-cols-2">
				<div className="p-12 md:p-16 lg:px-20 lg:py-32">
					<div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
						<h2 className="text-3xl font-bold text-gray-100 md:text-4xl">
							HP Multi Jet Fusion
						</h2>

						<p className="hidden text-xl text-gray-200 md:mt-6 md:block">
							HP Multi Jet Fusion (MJF) is a 3D printing technology developed,
							or cut materials such as wood, metal, glass, or plastic. The laser
							removes or alters the surface layer of the material to create
							precise and detailed designs, text, or patterns. This process is
							commonly employed in various industries, including signage,
							jewelry, and electronics, for its precision, speed, and
							versatility in producing intricate and permanent markings on a
							wide range of materials.
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
						src="https://d33609liqwio9r.cloudfront.net/2024-02-25T05%3A33%3A04.015Z-ezgif.com-gif-maker.gif"
						className=" rounded-lg object-cover sm:h-full"
					/>
				</div>
			</section>
		</div>
	);
}

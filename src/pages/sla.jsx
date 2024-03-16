import React from "react";

export default function Sla() {
	return (
		<div className="pt-40 bg-gradient-to-r from-black to-[#2060AD] ">
			<section className="overflow-hidden bg-gradient-to-r from-black to-[#2060AD] sm:grid sm:grid-cols-2">
				<div className="p-12 md:p-16 lg:px-20 lg:py-32">
					<div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
						<h2 className="text-3xl font-bold text-gray-100 md:text-4xl">
							SLS printing
						</h2>

						<p className="hidden text-xl text-gray-200 md:mt-6 md:block">
							Selective Laser Sintering (SLS) is a 3D printing technology that
							uses a laser to sinter (fuse) powdered material, typically nylon
							or other polymers, layer by layer, to create three dimensional
							objects. Unlike other techniques, SLS does not require support
							structures during printing, as the unsintered powder acts as a
							natural support. This technology is known for its ability to
							produce complex and durable parts with high strength and heat
							resistance, making it suitable for functional prototypes and
							end-use production in various industries, including aerospace and
							automotive.
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
						src="https://d33609liqwio9r.cloudfront.net/2024-02-25T05%3A19%3A19.704Z-SLS-Process.gif"
						className=" rounded-lg object-cover sm:h-full"
					/>
				</div>
			</section>
		</div>
	);
}

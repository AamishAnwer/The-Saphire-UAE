import React from "react";

export default function Fdm() {
	return (
		<div className="pt-40 bg-gradient-to-r from-black to-[#2060AD] ">
			<section className="overflow-hidden bg-gradient-to-r from-black to-[#2060AD] sm:grid sm:grid-cols-2">
				<div className="p-12 md:p-16 lg:px-20 lg:py-32">
					<div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
						<h2 className="text-3xl font-bold text-gray-100 md:text-4xl">
							FDM Printing
						</h2>

						<p className="hidden text-xl text-gray-200 md:mt-6 md:block">
							Fused Deposition Modelling (FDM) is a 3D printing technology that
							builds objects layer by layer by extruding thermoplastic material
							through a heated nozzle. Advantages of FDM printing include
							cost-effectiveness, ease of use, and the ability to create complex
							geometries. It is widely used for rapid prototyping and
							manufacturing functional parts in various industries.
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
						src="https://d33609liqwio9r.cloudfront.net/2024-02-25T05%3A12%3A36.133Z-3d-printing.gif"
						className=" rounded-lg object-cover sm:h-full "
					/>
				</div>
			</section>
		</div>
	);
}

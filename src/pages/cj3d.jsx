import React from "react";

export default function Cjd() {
	return (
		<div className="pt-40 bg-gradient-to-r from-black to-[#2060AD] ">
			<section className="overflow-hidden bg-gradient-to-r from-black to-[#2060AD] sm:grid sm:grid-cols-2">
				<div className="p-12 md:p-16 lg:px-20 lg:py-32">
					<div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
						<h2 className="text-3xl font-bold text-gray-100 md:text-4xl">
							Color jet 3D printing
						</h2>

						<p className="hidden text-xl text-gray-200 md:mt-6 md:block">
							Color Jet 3D printing, often associated with technologies like HP
							Multi Jet Fusion, utilizes a powdered material, typically
							polymers, and selectively applies a liquid binder and colored
							agents layer by layer to create full-color objects. It allows for
							the simultaneous incorporation of multiple colors in a single
							print job, resulting in visually appealing and vibrant 3D printed
							models. This technology is widely used in applications requiring
							intricate and colorful prototypes, architectural models, and
							customized consumer products.
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
						src="https://d33609liqwio9r.cloudfront.net/2024-02-25T05%3A28%3A48.222Z-mimaki-full-color-3d-printing-process.gif"
						className=" rounded-lg object-cover sm:h-full"
					/>
				</div>
			</section>
		</div>
	);
}

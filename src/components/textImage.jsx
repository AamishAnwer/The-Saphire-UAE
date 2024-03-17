const TextImage = () => {
	return (
		<section className="relative py-72 bg-white">
			<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
				<div className="sm:max-w-lg">
					<h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Exquisite views are on the horizon
					</h1>
					<p className="mt-4 text-xl text-gray-500">
						Wake up inspired every day to breathtaking views of Dubai icons,
						Such as safa park, Dubai canal, Burj Khalifa, And Burj Al Arab,
						Right outside your window.
					</p>
				</div>
				<div>
					<div className="mt-10">
						<div
							aria-hidden="true"
							className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
						>
							<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
								<div className="flex items-center space-x-6 lg:space-x-8">
									<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
										<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
											<img
												src="https://res.cloudinary.com/dcpte972l/image/upload/v1710665863/canel_w7lh4h.jpg"
												className="h-full w-full object-cover object-center"
											/>
										</div>
										<div className="h-64 w-44 overflow-hidden rounded-lg">
											<img
												src="https://res.cloudinary.com/dcpte972l/image/upload/v1710665835/city_night_moygz9.jpg"
												alt=""
												className="h-full w-full object-cover object-center"
											/>
										</div>
									</div>
									<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
										<div className="h-64 w-44 overflow-hidden rounded-lg">
											<img
												src="https://res.cloudinary.com/dcpte972l/image/upload/v1710665869/park_to_sea_2_e9an2n.jpg"
												alt=""
												className="h-full w-full object-cover object-center"
											/>
										</div>
										<div className="h-64 w-44 overflow-hidden rounded-lg">
											<img
												src="https://res.cloudinary.com/dcpte972l/image/upload/v1710665870/terrace_update_1_dync0c.jpg"
												alt=""
												className="h-full w-full object-cover object-center"
											/>
										</div>
										<div className="h-64 w-44 overflow-hidden rounded-lg">
											<img
												src="https://res.cloudinary.com/dcpte972l/image/upload/v1710666343/Screenshot_2024-03-17_130518_qzisjd.png"
												alt=""
												className="h-full w-full object-cover object-center"
											/>
										</div>
									</div>
									<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
										<div className="h-64 w-44 overflow-hidden rounded-lg">
											<img
												src="https://res.cloudinary.com/dcpte972l/image/upload/v1710665871/tower_early_evening_vrrgwz.jpg"
												alt=""
												className="h-full w-full object-cover object-center"
											/>
										</div>
										<div className="h-64 w-44 overflow-hidden rounded-lg">
											<img
												src="https://res.cloudinary.com/dcpte972l/image/upload/v1710665855/safa_park_View_riojww.jpg"
												alt=""
												className="h-full w-full object-cover object-center"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<a
							href="#"
							className="inline-block rounded-md border border-transparent bg-yellow-600 py-3 px-8 text-center font-medium text-white hover:bg-yellow-700"
						>
							Download Broucher
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TextImage;

import React from "react";

const GetInTouch = () => {
	return (
		<div>
			<div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-6xl">
				<div
					className="hidden bg-cover lg:block lg:w-1/2"
					style={{
						backgroundImage:
							"url('https://res.cloudinary.com/dcpte972l/image/upload/v1710665863/canel_w7lh4h.jpg')",
					}}
				></div>

				<div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
					<div className="flex justify-center mx-auto">
						<img
							className="w-auto h-7 sm:h-8"
							src="https://res.cloudinary.com/dcpte972l/image/upload/v1710584735/logotwow-removebg-preview_jmxvtc.png"
							alt=""
						/>
					</div>

					<p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
						Get In Touch
					</p>

					<div className="mt-4">
						<label
							className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
							htmlFor="LoggingEmailAddress"
						>
							Name
						</label>
						<input
							id="LoggingEmailAddress"
							className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
							type="email"
						/>
					</div>

					<div className="mt-4">
						<label
							className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
							htmlFor="LoggingEmailAddress"
						>
							Email Address
						</label>
						<input
							id="LoggingEmailAddress"
							className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
							type="email"
						/>
					</div>
					<div className="mt-4">
						<label
							className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
							htmlFor="LoggingEmailAddress"
						>
							Mobile Number
						</label>
						<input
							id="number"
							className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
							type="text"
						/>
					</div>
					<div className="mt-4">
						<label
							className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
							htmlFor="LoggingEmailAddress"
						>
							Your Message
						</label>
						<input
							id="number"
							className="block w-full px-4 py-6 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
							type="message"
						/>
					</div>

					<div className="mt-6">
						<button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetInTouch;

export const Contact = ({ title = "Contact Us" }) => {
	return (
		<div className=" rounded-md">
			<h2 className="font-bold w-full  text-yellow-500 text-[32px] mb-8 text-center ">
				{title}
			</h2>
			<form className="grid grid-cols-2">
				<input
					type="text"
					name="firstname"
					id=""
					placeholder="First Name"
					className="mx-4 my-2 text-yellow-500 placeholder:text-yellow-500 py-4 px-2 bg-transparent border-b-4 border-b-yellow-500 focus:border-2 hover:border-2 transition-all ease-in-out"
				/>
				<input
					type="text"
					name="lastname"
					id=""
					placeholder="Last Name"
					className="mx-4 my-2 text-yellow-500 placeholder:text-yellow-500 py-4 px-2 bg-transparent border-b-4 border-b-yellow-500 focus:border-2 hover:border-2 transition-all ease-in-out"
				/>
				<input
					type="text"
					name="firstname"
					id=""
					placeholder="Email"
					className="mx-4 my-2 text-yellow-500 placeholder:text-yellow-500 py-4 px-2 bg-transparent border-b-4 border-b-yellow-500 focus:border-2 hover:border-2 transition-all ease-in-out"
				/>
				<input
					type="text"
					name="lastname"
					id=""
					placeholder="Phone"
					className="mx-4 my-2 text-yellow-500 placeholder:text-yellow-500 py-4 bg-transparent border-b-4 border-b-yellow-500 focus:border-2 hover:border-2 transition-all ease-in-out"
				/>
				<input
					type="text"
					name="lastname"
					id=""
					placeholder="Message"
					className="mx-4 my-2 col-span-2 text-yellow-500 placeholder:text-yellow-500 py-4 px-2  bg-transparent border-b-4 border-b-yellow-500 min-h-28 focus:border-2 hover:border-2 transition-all ease-in-out"
				/>
				<div className=" col-span-2  flex justify-end mx-4 mt-4">
					<a
						className="group relative inline-block overflow-hidden border border-yellow-500 px-8 py-3 focus:outline-none focus:ring"
						href="#"
					>
						<span className="absolute inset-x-0 bottom-0 h-[2px] bg-yellow-500 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

						<span className="relative text-sm font-medium text-yellow-500 transition-colors group-hover:text-[#262626]">
							Submit
						</span>
					</a>
				</div>
			</form>
		</div>
	);
};

export default Contact;

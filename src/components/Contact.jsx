export const Contact = ({ title = "Contact Us" }) => {
	return (
		<div className="rounded-md">
			<h2 className="font-bold w-full text-[32px] mb-8 text-center ">
				{title}
			</h2>
			<form className="grid grid-cols-2 gap-4">
				<input
					type="text"
					name="firstname"
					id=""
					placeholder="First Name"
					className="p-4 bg-transparent border border-zinc-600 hover:border-b-yellow-500 focus:border-b-yellow-500 outline-none transition-all ease-in-out"
				/>
				<input
					type="text"
					name="lastname"
					id=""
					placeholder="Last Name"
					className="p-4 bg-transparent border border-zinc-600 hover:border-b-yellow-500 focus:border-b-yellow-500 outline-none transition-all ease-in-out"
				/>
				<input
					type="text"
					name="firstname"
					id=""
					placeholder="Email"
					className="p-4 bg-transparent border border-zinc-600 hover:border-b-yellow-500 focus:border-b-yellow-500 outline-none transition-all ease-in-out"
				/>
				<input
					type="text"
					name="lastname"
					id=""
					placeholder="Phone"
					className="p-4 bg-transparent border border-zinc-600 hover:border-b-yellow-500 focus:border-b-yellow-500 outline-none transition-all ease-in-out"
				/>
				<textarea
					type="text"
					name="lastname"
					id=""
					placeholder="Message"
					className="p-4 col-span-2 bg-transparent border border-zinc-600 hover:border-b-yellow-500 focus:border-b-yellow-500 outline-none transition-all ease-in-out"
				/>
				<div className="col-span-2  flex justify-end mx-4 mt-4">
					<a
						className="group relative inline-block overflow-hidden border border-yellow-500 px-8 py-3 focus:outline-none focus:ring"
						href="#"
					>
						<span className="absolute inset-x-0 bottom-0 h-[2px] bg-yellow-500 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

						<span className="relative text-sm font-medium transition-colors group-hover:text-white">
							Submit
						</span>
					</a>
				</div>
			</form>
		</div>
	);
};

export default Contact;

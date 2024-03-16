export default function BurgerMenu({ isOpen }) {
	return (
		<div
			className={`flex flex-col space-y-1.5 justify-center items-center ${
				isOpen ? "open" : ""
			}`}
		>
			<span
				className={`block h-0.5 w-8 bg-white transition duration-300 ease-in-out ${
					isOpen ? "rotate-45 translate-y-2 shadow-xl" : "shadow"
				}`}
			></span>
			<span
				className={`block h-0.5 w-8 bg-white transition duration-300 ease-in-out ${
					isOpen ? "opacity-0" : "shadow"
				}`}
			></span>
			<span
				className={`block h-0.5 w-8 bg-white transition duration-300 ease-in-out ${
					isOpen ? "-rotate-45 -translate-y-2 shadow-xl" : "shadow"
				}`}
			></span>
		</div>
	);
}

import Link from "next/link";

export default function Submenu({ menu, open, closeMenu }) {
	return (
		<div
			className={`${
				!open && "hidden"
			} flex flex-col items-center gap-y-px  px-4 rounded`}
		>
			{menu.map((item, index) => (
				<Link
					className="hover:text-blue-600 transition-all mt-2 font-thin font-mono bg-gray-900/10 px-2 w-full text-center text-base"
					key={index}
					href={item.href}
					onClick={closeMenu}
				>
					{item.title}
				</Link>
			))}
		</div>
	);
}

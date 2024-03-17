import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "../Modal";

export default function Navbar() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<>
			<nav className="text-white fixed top-0 left-0 right-0 z-[51] w-full flex items-center justify-between px-10 h-20">
				<Link href="/">
					<p className="flex items-center rounded-sm">
						<Image
							width={80}
							height={80}
							src="https://res.cloudinary.com/dcpte972l/image/upload/v1710584735/logotwow-removebg-preview_jmxvtc.png"
							alt="company logo "
						/>
					</p>
				</Link>

				<div className="flex gap-x-6 xl:gap-x-12 items-center ">
					<button
						className="rounded-3xl w-32 h-11 mx-auto bg-[#d49d3e] hover:bg-yellow-600 transition-all tada"
						onClick={openModal}
					>
						<p>Contact Us</p>
					</button>
				</div>
			</nav>
			<Modal isOpen={isModalOpen} onClose={closeModal} />
		</>
	);
}

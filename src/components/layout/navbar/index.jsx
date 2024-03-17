import NavLink from "./navlink";
import BurgerMenu from "./burgerMenu";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "../../Modal";

export default function Navbar() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);

	const closeModal = () => setIsModalOpen(false);

	const [hasScrolled, setHasScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const closeMenu = () =>
		setTimeout(() => {
			setIsOpen(false);
		}, 800);
	const [open, setOpen] = useState(false);

	const navbarClasses = `navbar text-white fixed top-0 left-0 right-0 z-[51] w-full flex items-center justify-between px-10 ${
		hasScrolled ? "navbar-scrolled" : ""
	}`;

	const toggleMenu = () => setIsOpen(!isOpen);

	const handleScroll = () => setHasScrolled(window.scrollY > 0);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<nav className={navbarClasses}>
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

				<div className="hidden lg:flex gap-x-6 xl:gap-x-12 items-center ">
					<NavLink href="/">Home</NavLink>

					<NavLink href="/projects">Projects</NavLink>
					<NavLink href="/about">About Us</NavLink>

					<button
						className="rounded-3xl w-32 h-11 mx-auto bg-[#d49d3e] hover:bg-yellow-600 transition-all tada"
						onClick={openModal}
					>
						<p>Contact Us</p>
					</button>
				</div>

				<button
					className="lg:hidden z-50 focus:outline-none focus:ring focus:border-blue-300"
					onClick={toggleMenu}
				>
					<BurgerMenu isOpen={isOpen} />
				</button>

				<div
					className={`absolute top-0 left-0 w-full min-h-screen bg-black/40 backdrop-blur-md transition-all ease-in-out duration-300 ${
						isOpen ? "flex" : "hidden"
					} lg:hidden shadow-xl flex-col justify-center`}
				>
					<div className="w-full flex flex-col gap-y-4 items-center">
						<NavLink href="/" onClick={closeMenu}>
							Home
						</NavLink>

						<div className="flex items-center">
							<NavLink href="/services" onClick={closeMenu}>
								Services
							</NavLink>
							{!open[0] ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 ml-2"
									onClick={() => setOpen([true, false, false])}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m19.5 8.25-7.5 7.5-7.5-7.5"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 ml-2"
									onClick={() => setOpen([false, false, false])}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m4.5 15.75 7.5-7.5 7.5 7.5"
									/>
								</svg>
							)}
						</div>

						<div className="flex items-center">
							<NavLink href="/industries/mechanical" onClick={closeMenu}>
								Industries
							</NavLink>
							{!open[1] ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 ml-2"
									onClick={() => setOpen([false, true, false])}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m19.5 8.25-7.5 7.5-7.5-7.5"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 ml-2"
									onClick={() => setOpen([false, false, false])}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m4.5 15.75 7.5-7.5 7.5 7.5"
									/>
								</svg>
							)}
						</div>

						<div className="flex items-center">
							<NavLink href="/resources" onClick={closeMenu}>
								Resources
							</NavLink>
							{!open[2] ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 ml-2"
									onClick={() => setOpen([false, false, true])}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m19.5 8.25-7.5 7.5-7.5-7.5"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 ml-2"
									onClick={() => setOpen([false, false, false])}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m4.5 15.75 7.5-7.5 7.5 7.5"
									/>
								</svg>
							)}
						</div>

						<div className="flex animate__animated animate__tada">
							<button className="rounded-3xl w-32 h-11 mx-auto mt-16 bg-[#d49d3e] hover:bg-yellow-600 transition-all">
								<Link href="/enquiry" onClick={closeMenu}>
									<p>Get a Quote</p>
								</Link>
							</button>
						</div>
					</div>
				</div>
			</nav>
			<Modal isOpen={isModalOpen} onClose={closeModal} />
		</>
	);
}

// components/Modal.js
import { useState } from "react";
import Quote from "./Contact";
import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose }) => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log(formData);
		// Reset form after submission
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			message: "",
		});
		// Close modal
		onClose();
	};
	const handleModalContentClick = (event) => {
		event.stopPropagation();
	};

	return (
		<>
			{isOpen && (
				<section
					onClick={onClose}
					className="cursor-pointer fixed w-full h-full z-[51] flex items-center justify-center backdrop-blur-[5px] bg-black/50"
				>
					<motion.div
						className="modal-content border border-zinc-600 relative bg-black text-white  p-10 rounded-lg cursor-default"
						onClick={handleModalContentClick}
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						<button
							onClick={onClose}
							className="absolute text-2xl top-3 right-3"
						>
							X
						</button>
						<Quote />
					</motion.div>
				</section>
			)}
		</>
	);
};

export default Modal;

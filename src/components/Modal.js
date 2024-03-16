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
		// Prevent the click event from propagating to the overlay
		event.stopPropagation();
	};

	return (
		<>
			<div className=" rounded-lg bg-transparent">
				{isOpen && (
					<motion.div
						className="modal-overlay  "
						style={{
							display: isOpen ? "flex" : "none",

							justifyContent: "center", // Center the modal content horizontally
							alignItems: "center", // Center the modal content vertically
							width: "100vw", // Cover the full viewport width
							height: "100vh", // Cover the full viewport height
						}}
						onClick={onClose}
						initial={{ opacity: 0, translateY: 1200 }}
						animate={{ opacity: 1, translateY: 0 }}
						transition={{ duration: 1 }}
						exit={{ opacity: 0, translateY: 1200 }}
					>
						<motion.div
							className="modal-content border-2 relative" // Ensure this parent div is positioned relatively
							onClick={handleModalContentClick}
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1 }}
							style={{
								backgroundColor: "transparent", // Ensure the form box has no background
							}}
						>
							<button
								onClick={onClose}
								className="modal-close-btn text-yellow-500 text-2xl  absolute top-3 right-3"
							>
								X
							</button>
							{/* Close button */}
							<Quote title={"Contact Us"} />
						</motion.div>
					</motion.div>
				)}
			</div>
		</>
	);
};

export default Modal;

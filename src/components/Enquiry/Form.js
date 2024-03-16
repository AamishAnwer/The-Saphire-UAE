"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import CustomInput from "@/components/Block/CustomInput";
import CustomUpload from "@/components/Block/CustomUpload";
import { FaArrowRight } from "react-icons/fa";
import { storage } from "@/components/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [messages, setMessages] = useState("");
	const [loading, setLoading] = useState(false);
	const [file, setFile] = useState(null); // State to hold the file
	const [fileObj, setFileObj] = useState(null);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const handleFileChange = async (selectedFile) => {
		const storageRef = ref(storage, selectedFile.name);

		try {
			await uploadBytes(storageRef, selectedFile);

			const url = await getDownloadURL(storageRef);

			setFile(url);

			console.log("File uploaded. Download URL:", url);
		} catch (error) {
			console.error("File upload error:", error.message);
		}
	};

	const sendEmail = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);

			const response = await axios.post(
				"https://homeservice.ashadnasim.com/api/v1/helper/send/mail",
				{
					name,
					email,
					phoneNumber,
					messages,
					file,
				}
			);

			toast("Request successful!");
			console.log(response.data);
			setName("");
			setEmail("");
			setPhoneNumber("");
			setMessages("");
			setFile(null);
			setIsFormSubmitted(true);
		} catch (error) {
			toast("Request failed!");
			console.error(error);
		} finally {
			setLoading(false);
		}
	};
	return (
		<section className="w-full relative">
			{isFormSubmitted ? (
				<>
					<h1 className="max-md:text-center text-2xl md:text-4xl text-blue-800 text-center mb-4 lg:mb-6 mt-24 font-medium">
						Your enquiry is submitted successfully
					</h1>
					<p className="mt-0.5 text-sm font-medium text-blue-500 text-center">
						If you want you can submit another enquiry
					</p>
				</>
			) : (
				<>
					<h1 className="max-md:text-center text-2xl md:text-4xl  text-center mb-4 lg:mb-6 mt-24 font-medium">
						Submit Your Enquiry Now{" "}
					</h1>
					<p className="mt-0.5 text-sm font-medium text-black text-center">
						Our dedicated team will be in contact with you shortly.
					</p>
				</>
			)}

			<form onSubmit={sendEmail} className="max-w-screen-lg mx-auto ">
				<div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 mt-6 mb-8 mx-12">
					<div className="md:col-span-1 gap-2 flex flex-col md:flex-row justify-between">
						<CustomInput
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder={"Name*"}
							className="w-full md:w-48"
						/>
						<CustomInput
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder={"Email*"}
							className="w-full md:w-48"
							type={"email"}
						/>
					</div>
					<div className="md:col-span-2">
						<div className="w-full md:w-1/2 pr-0 md:pr-3">
							<CustomInput
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
								placeholder={"Phone*"}
							/>
						</div>
					</div>
					<div className="md:col-span-2 aspect-w-1 aspect-h-1 border:rounded-sm border-black">
						<textarea
							className="w-full border-black text-black h-full resize-none border-2 rounded-md p-4"
							value={messages}
							onChange={(e) => setMessages(e.target.value)}
							placeholder="Text Messages"
							style={{
								minHeight: 210,
							}}
						/>
					</div>
					<div className="md:col-span-2 flex flex-col md:flex-row justify-center items-start py-3">
						<CustomUpload
							onChange={handleFileChange}
							placeholder={"Enter Name*"}
							setFileObj={setFileObj}
						/>
						<button
							disabled={loading}
							type="submit"
							className="flex justify-center md:w-auto w-full  mt-4 md:m-0 items-center rounded-md bg-[#0088d6] hover:bg-blue-600 transition-all px-8 md:px-20 py-6 md:py-8 h-[52px] cursor-pointer"
						>
							<span className="text-white">Submit</span>
							<FaArrowRight className="text-white ml-4" />
						</button>
					</div>
				</div>
			</form>
		</section>
	);
};

export default Form;

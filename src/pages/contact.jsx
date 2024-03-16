// "use client";
// import Head from "next/head";
// import {
// 	FaArrowRight,
// 	FaFacebookSquare,
// 	FaInstagramSquare,
// 	FaLinkedinIn,
// 	FaYoutubeSquare,
// } from "react-icons/fa";
// import { MdCall } from "react-icons/md";
// import { TbMapPinPlus } from "react-icons/tb";
// import { IoMdMail } from "react-icons/io";
// import CustomInput from "@/components/Block/CustomInput";

// import Image from "next/image";
// import { useRef, useState } from "react";
// import axios from "axios";

// import { toast } from "react-hot-toast";
// export default function Home() {
// 	const style = `w-full max-h-screen max-lg:min-h-screen object-center object-cover absolute top-0 left-0 right-0 -z-10`;
// 	const [name, setName] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [phoneNumber, setPhoneNumber] = useState("");
// 	const [messages, setMessages] = useState("");
// 	const form = useRef();
// 	const [loading, setLoading] = useState(false);
// 	const [isSubmitted, setIsSubmitted] = useState(false);

// 	const sendEmail = async (e) => {
// 		e.preventDefault();
// 		try {
// 			setLoading(true);
// 			const response = await axios.post(
// 				"https://homeservice.ashadnasim.com/api/v1/helper/send/mail",
// 				{
// 					name,
// 					email,
// 					phoneNumber,
// 					messages,
// 				}
// 			);
// 			// Handle successful response
// 			toast("Request successful!");
// 			console.log(response.data);
// 			setName("");
// 			setEmail("");
// 			setPhoneNumber("");
// 			setMessages("");
// 			setIsSubmitted(true);
// 		} catch (error) {
// 			// Handle error
// 			toast("Request failed!");
// 			console.error(error);
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	return (
// 		<div className="w-full">
// 			<Head>
// 				<title>
// 					3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec
// 				</title>
// 				<meta
// 					name="description"
// 					content="Ultratec 3D, the premier 3D printing company in Dubai, provides high-quality 3D printing services and solutions to meet your diverse needs. Contact us now!"
// 				/>
// 			</Head>
// 			<div className="min-w-full h-28 z-40 absolute top-0 left-0 right-0 bg-gradient-to-b from-[#0000009f] to-[#00000005] bg-opacity-90" />
// 			<Image
// 				src={"/enquiry/bgc-2.png"}
// 				className={style}
// 				sizes="100vw"
// 				width={0}
// 				height={0}
// 			/>

// 			<form
// 				ref={form}
// 				onSubmit={sendEmail}
// 				className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-36 px-4 sm:px-20 pb-36"
// 			>
// 				<div className="col-span-1 ">
// 					{isSubmitted ? (
// 						<>
// 							<h1 className="max-md:text-center text-2xl md:text-4xl text-blue-800 text-center mb-4 lg:mb-6 mt-24 font-medium">
// 								Your enquiry is submitted successfully
// 							</h1>
// 							<p className="mt-0.5 text-sm font-medium text-blue-500 text-center">
// 								If you want you can submit another enquiry
// 							</p>
// 						</>
// 					) : (
// 						<h1 className="max-md:text-center text-2xl md:text-4xl text-center mb-4 lg:mb-6 ">
// 							Get in touch with us{" "}
// 						</h1>
// 					)}

// 					<div className="mt-4">
// 						<CustomInput
// 							value={name}
// 							onChange={(e) => setName(e.target.value)}
// 							placeholder={"Enter Name*"}
// 							name="user_name"
// 						/>
// 					</div>

// 					<div className="mt-4">
// 						<CustomInput
// 							value={email}
// 							onChange={(e) => setEmail(e.target.value)}
// 							placeholder={"Enter Email*"}
// 							name="user_email"
// 						/>
// 					</div>

// 					<div className="mt-4">
// 						<CustomInput
// 							value={phoneNumber}
// 							onChange={(e) => setPhoneNumber(e.target.value)}
// 							placeholder={"Enter Phone*"}
// 							name="user_phone"
// 						/>
// 					</div>

// 					<div className="mt-4">
// 						<CustomInput
// 							value={messages}
// 							onChange={(e) => setMessages(e.target.value)}
// 							placeholder={"Text Messages"}
// 							name="user_message"
// 						/>
// 					</div>

// 					<div className="flex justify-center mb-5 mt-5">
// 						<button
// 							disabled={loading}
// 							type="submit"
// 							className="flex justify-between items-center rounded-full bg-[#2060AD] hover:bg-blue-800 transition-all px-20 h-[44px] cursor-pointer"
// 						>
// 							<span className="text-white">Submit</span>
// 							<span>
// 								<FaArrowRight className="text-white ml-4" />
// 							</span>
// 						</button>
// 					</div>
// 				</div>

// 				<div className="col-span-1    mt-12">
// 					<div className="flex flex-col justify-center items-start ml-0 md:ml-8">
// 						<h2 className="font-bold text-black text-[24px] mb-4">
// 							Stay Connected{" "}
// 						</h2>
// 						<ul className="font-normal text-black text-[16px] text-center">
// 							<li className="flex flex-row hover:animate-pulse items-center mb-2">
// 								<IoMdMail className="text-blue-500 hover:text-blue-700 mr-3" />
// 								<a href="mailto:info@ultratec3d.ae" className="text-black">
// 									info@ultratec3d.ae
// 								</a>
// 							</li>
// 							<li className="flex flex-row hover:animate-pulse items-center mb-2">
// 								<MdCall className="text-blue-500 hover:text-blue-700 mr-3" />
// 								<a href="tel:+971543401240" className="text-black">
// 									+971 543 40 1240
// 								</a>
// 							</li>
// 							<li className="flex flex-row hover:animate-pulse items-center mb-2">
// 								<MdCall className="text-blue-500 hover:text-blue-700 mr-3" />
// 								<a href="tel:+971503463286" className="text-black">
// 									+971 503 46 3286
// 								</a>
// 							</li>
// 							<li className="flex flex-row hover:animate-pulse items-start mb-2">
// 								<TbMapPinPlus className="text-blue-500 hover:text-blue-700 mr-3 text-xl" />
// 								<a href="#" className="text-black text-left">
// 									W3 | B10 | Makaseb Compound | Dubai Investment Park 2 | Dubai
// 									| UAE
// 								</a>
// 							</li>
// 						</ul>

// 						<div className="font-normal text-black text-[16px] mt-4 flex items-start flex-col">
// 							<span className="mr-3 text-4xl uppercase">Follow us</span>
// 							<div className="flex mt-4">
// 								<a
// 									href="https://www.youtube.com/channel/UCS5PGsjgPWPmw-LuXmHxFgw"
// 									className="text-blue-500 hover:text-blue-700 mr-3 text-4xl icon-hover-3d"
// 								>
// 									<FaYoutubeSquare />
// 								</a>
// 								<a
// 									href="https://facebook.com/Ultratec3DPrinting"
// 									className="text-blue-500 hover:text-blue-700 mr-3 text-4xl icon-hover-3d"
// 								>
// 									<FaFacebookSquare />
// 								</a>
// 								<a
// 									href="https://www.instagram.com/ultratec3d_printing/"
// 									className="text-blue-500 hover:text-blue-700 mr-3 text-4xl icon-hover-3d"
// 								>
// 									<FaInstagramSquare />
// 								</a>
// 								<a
// 									href="https://www.linkedin.com/company/ultratec-3d-printing"
// 									className="text-blue-500 hover:text-blue-700 mr-3 text-4xl icon-hover-3d"
// 								>
// 									<FaLinkedinIn />
// 								</a>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</form>

// 			<div className="rounded-md z-10 relative overflow-hidden min-w-full h-96 sm:h-72 md:h-80 lg:h-96">
// 				<iframe
// 					width="100%"
// 					height="100%"
// 					title="Google Maps"
// 					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3616.8598979509566!2d55.1935451!3d24.9708809!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69148ab1e1d1%3A0x6aaa2a67a3bf52c7!2sUltratec%203D%20Printing!5e0!3m2!1sen!2sin!4v1707724787320!5m2!1sen!2sin"
// 					allowFullScreen={true}
// 					loading="lazy"
// 				></iframe>
// 			</div>
// 		</div>
// 	);
// }

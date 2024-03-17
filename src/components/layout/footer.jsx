// import Link from "next/link";
// import Image from "next/image";
// import { MdCall } from "react-icons/md";
// import { IoMdMail } from "react-icons/io";
// import {
// 	FaFacebookSquare,
// 	FaInstagramSquare,
// 	FaLinkedinIn,
// 	FaYoutubeSquare,
// } from "react-icons/fa";

// export default function Footer() {
// 	return (
// 		<footer className="footer relative bg-gradient-to-b from-[#02060B] to-[#02060B]  z-10 text-white">
// 			<div className="circle-gradient-two opacity-50 -z-10"></div>
// 			<div
// 				className="container  py-8 mx-auto px-4 sm:px-6 lg:px-8"
// 				data-aos="fade-up"
// 			>
// 				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// 					{/* Logo and About */}
// 					<div className="flex items-center justify-center border-b border-gray-600 sm:border-b-0 sm:border-r">
// 						<div className="text-center">
// 							<Link className="hover:underline" href="/">
// 								<Image
// 									alt={"Avail 3D Printing Service in Dubai With Ultratec"}
// 									src="/logo_footer.svg"
// 									height={200}
// 									width={200}
// 									className="sm:h-48 sm:w-48 image-hover-effect cursor-pointer rounded-sm"
// 								/>
// 							</Link>

// 							<p className="text-sm sm:text-base  mt-4 mb-4">
// 								Creativity and Quality matters
// 							</p>
// 						</div>
// 					</div>

// 					{/* Contact Information */}
// 					<div className="md:col-span-1 lg:col-span-1">
// 						<div className="flex flex-col justify-center items-center md:items-start ml-0 md:ml-8">
// 							<h2 className="font-bold  text-[24px] mb-4 text-center md:text-start">
// 								Contact Us
// 							</h2>
// 							<ul className="font-normal  text-[16px] text-center">
// 								<li className="flex flex-row hover:underline  items-center mb-2">
// 									<MdCall className=" mr-3 " />
// 									<a href="tel:+971543401240">+971 543 40 1240</a>{" "}
// 								</li>
// 								<li className="flex flex-row hover:underline  items-center mb-2">
// 									<MdCall className=" mr-3" />
// 									<a href="tel:+971503463286">+971 503 46 3286</a>{" "}
// 								</li>
// 								<li className="flex flex-row hover:underline items-center">
// 									<IoMdMail className=" mr-3" />
// 									<a href="mailto:info@ultratec3d.ae">
// 										info@ultratec3d.ae
// 									</a>{" "}
// 								</li>
// 							</ul>
// 							<div className="font-normal  text-[16px] mt-4 flex items-center">
// 								<span className="mr-3">Follow us :</span>
// 								<a
// 									href="https://www.youtube.com/channel/UCS5PGsjgPWPmw-LuXmHxFgw"
// 									className=" mr-3 text-2xl icon-hover-3d"
// 								>
// 									<FaYoutubeSquare />
// 								</a>
// 								<a
// 									href="https://facebook.com/Ultratec3DPrinting"
// 									className=" mr-3 text-2xl icon-hover-3d"
// 								>
// 									<FaFacebookSquare />
// 								</a>
// 								<a
// 									href="https://www.instagram.com/ultratec3d_printing/"
// 									className=" mr-3 text-2xl icon-hover-3d"
// 								>
// 									<FaInstagramSquare />
// 								</a>
// 								<a
// 									href="https://www.linkedin.com/company/ultratec-3d-printing"
// 									className=" mr-3 text-2xl icon-hover-3d"
// 								>
// 									<FaLinkedinIn />
// 								</a>
// 							</div>
// 						</div>
// 					</div>

// 					{/* Quick Links */}
// 					<div className="md:col-span-1 lg:col-span-1">
// 						<div className="flex flex-col">
// 							<h3 className="font-bold text-[24px] mb-4 text-center md:text-start">
// 								Quick Links
// 							</h3>
// 							<ul className="font-normal text-[16px] ">
// 								<li className="flex flex-row items-center mb-2 justify-center md:justify-start">
// 									<a className="hover:underline" href="/about">
// 										About Us
// 									</a>
// 								</li>
// 								<li className="flex flex-row items-center mb-2 justify-center md:justify-start">
// 									<a className="hover:underline" href="#">
// 										Careers
// 									</a>
// 								</li>
// 								<li className="flex flex-row items-center mb-2 justify-center md:justify-start">
// 									<a className="hover:underline" href="#">
// 										FAQs
// 									</a>
// 								</li>
// 								<li className="flex flex-row items-center mb-2 justify-center md:justify-start">
// 									<a className="hover:underline" href="/resources">
// 										Resources
// 									</a>
// 								</li>
// 								<li className="flex flex-row items-center mb-2 justify-center md:justify-start">
// 									<a className="hover:underline" href="/enquiry">
// 										Request a Quote
// 									</a>
// 								</li>
// 								<li className="flex flex-row items-center mb-2 justify-center md:justify-start">
// 									<a className="hover:underline" href="/projects">
// 										Projects
// 									</a>
// 								</li>
// 								<li className="flex flex-row items-center mb-2 justify-center md:justify-start">
// 									<a className="hover:underline" href="/services">
// 										Services
// 									</a>
// 								</li>
// 								<li className="flex flex-row items-center mb-2 justify-center md:justify-start">
// 									<a className="hover:underline" href="#">
// 										Industries
// 									</a>
// 								</li>
// 								<li className="flex flex-row items-center mb-2 justify-center md:justify-start">
// 									<a className="hover:underline" href="/blogs">
// 										Blogs
// 									</a>
// 								</li>
// 								<li className="flex flex-row items-center justify-center md:justify-start">
// 									<a className="hover:underline" href="#">
// 										Sitemap
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>

// 					{/* Address */}
// 					<div className="md:col-span-1 lg:col-span-1">
// 						<div className="flex flex-col">
// 							<h3 className="font-bold  text-[24px] mb-4 text-center md:text-start">
// 								Address
// 							</h3>
// 							<div className="rounded-md overflow-hidden mb-4">
// 								<iframe
// 									width="100%"
// 									height="100%"
// 									title="Google Maps"
// 									src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3616.8598979509566!2d55.1935451!3d24.9708809!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69148ab1e1d1%3A0x6aaa2a67a3bf52c7!2sUltratec%203D%20Printing!5e0!3m2!1sen!2sin!4v1707724787320!5m2!1sen!2sin"
// 									allowFullScreen={true}
// 									loading="lazy"
// 								></iframe>
// 							</div>

// 							<span className="font-normal  text-[16px] text-center">
// 								W3 | B10 | Makaseb Compound | Dubai Investment Park 2 | Dubai |
// 								UAE
// 							</span>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			<div className=" font-normal  text-[16px] text-center py-8 whitespace-nowrap border-t mx-20 border-solid border-gray-600">
// 				copyright@{new Date().getFullYear()} Ultratec 3D Printing
// 			</div>
// 		</footer>
// 	);
// }

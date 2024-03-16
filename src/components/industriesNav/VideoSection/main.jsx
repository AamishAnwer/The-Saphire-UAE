import React, { useState } from "react";
import useScreenSize from "@/components/Block/useScreenSize";
const UltratecFourD = () => {
	const isMobile = useScreenSize();
	const [isVideoModalOpen, setVideoModalOpen] = useState(false);

	const cloudinaryVideoUrl =
		"https://res.cloudinary.com/dcpte972l/video/upload/v1703927085/Website4D_Technology_gejxke.mp4";

	return (
		<div>
			<div className="text-center mt-20 mb-20 text-white">
				<h1 className="text-3xl  md:text-6xl uppercase  font-normal font-lemon-milk mb-5">
					Mechanical Application & 3D Printing{" "}
				</h1>
				<p className="text-sm   px-2 md:px-40  font-normal font-lemon-milk mb-10 md:mb-20">
					The emergence of 3D Printing Technology has been impactfull across
					various industries including the field of mechanics.In this field , 3D
					printing is used for prototyping and end manufucturing stage for
					mechanical parts that forms a system,the parts includes friction
					devices such as clutches and brakes,linkages such as hinges and joints
					and structural components like brackets & ducts.{" "}
				</p>
				{/* <div className="flex justify-center mb-5">
					<Link href="#">
						<span className="flex gap-x-2 quote-btn justify-center items-center rounded-full bg-[#2060AD] hover:bg-blue-800 transition-all w-[155px] h-[44px] cursor-pointer">
							<span className="text-white">Visit Website</span>
							<Image
								width={20}
								height={20}
								src="/arrow-circle-right3@2x.png"
								alt="arrow image"
							/>
						</span>
					</Link>
				</div> */}
			</div>

			{/* {isVideoModalOpen ? ( */}
			<div
				className={{
					width: "100%",
					height: isMobile ? "40vh" : "80vh",
				}}
			>
				<video muted autoPlay loop>
					<source src={cloudinaryVideoUrl} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>

			{/* ) : (
				<div
					className="flex justify-center cursor-pointer overflow-hidden"
					onClick={() => setVideoModalOpen(true)}
				>
					<Image
						className="rounded-xl"
						src="/hero.png"
						height={100}
						width={1200}
						alt="Ultratec 4D"
					/>
				</div>
			)} */}
		</div>
	);
};

export default UltratecFourD;

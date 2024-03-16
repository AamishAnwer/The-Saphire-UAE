import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import useScreenSize from "@/components/Block/useScreenSize";

const Support = () => {
	const isMobile = useScreenSize();

	const _buyOnWhatsApp = async () => {
		const message = `Hello! I'm reaching out from the website's chat feature. I have an inquiry.`;
		window.open(`https://wa.me/+971543401240?text=${encodeURI(message)}`);
	};
	return (
		<div onClick={_buyOnWhatsApp} className="fixed left-4 bottom-4 z-50">
			{/* {isMobile ? (
				<img
					src={"/whatsapp_mobile.png"}
					className="block bg-gray-100"
					style={{
						height: 50,
					}}
				/>
			) : ( */}

			<Tooltip id="my-tooltip" />

			<img
				src={"/whatsapp.png"}
				alt="contact best 3d printer in dubai in whatsapp"
				data-tooltip-id="my-tooltip"
				data-tooltip-content="Send your Query on Whatsapp"
				className="block  w-12 h-12 hover:cursor-pointer animate__animated animate__heartBeat   whatsapp-animation "
				style={{
					height: 50,
				}}
			/>
			{/* )} */}
		</div>
	);
};

export default Support;

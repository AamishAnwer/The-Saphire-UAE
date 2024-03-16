export default function BorderedStarIcon({
	size = 24,
	fillColor = "#2060AD",
	borderColor = "white",
	borderWidth = 1.3,
}) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 2.47222L13.5758 7.69389H19.0417L14.7329 10.9372L16.3087 16.1589L12 12.9156L7.69125 16.1589L9.26708 10.9372L4.95833 7.69389H10.4242L12 2.47222Z"
				fill={fillColor}
				stroke={borderColor}
				strokeWidth={borderWidth}
			/>
		</svg>
	);
}

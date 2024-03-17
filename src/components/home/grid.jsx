import HomeBodyCard from "./card";

const data = [
	{
		src: "https://res.cloudinary.com/dcpte972l/image/upload/v1710624834/roof_view_pgsird.jpg",
		src2: "https://res.cloudinary.com/dcpte972l/image/upload/v1710624830/roof_azgcxy.jpg",
		title: "EXQUISITE VIEWS ARE ON THE HORIZON",
		text: `WAKE UP INSPIRED EVERY DAY TO BREATHTAKING VIEWS OF DUBAI ICONS, SUCH AS SAFA PARK, DUBAI CANAL, BURJ KHALIFA, AND BURJ AL ARAB, RIGHT OUTSIDE YOUR WINDOW`,
	},
	{
		src: "https://res.cloudinary.com/dcpte972l/image/upload/v1710624834/roof_view_pgsird.jpg",
		src2: "https://res.cloudinary.com/dcpte972l/image/upload/v1710624830/roof_azgcxy.jpg",
		title: "EXCEPTIONAL LIVING COMES TO LIGHT",
		text: `ENTER THE LOBBY, WHERE A LUMINOUS RING CROWNS THE SPACE, AND THE INTERPLAY OF LIGHT AND SHADOWS ORCHESTRATES A PLAYFUL DANCE, WITH A SUITE OF SUBTLE TONES SETTING THE STAGE FOR A LIFE THAT TRULY SHINES.`,
	},
];
export default function HomeGrid() {
	return (
		<section className="w-full h-auto flex flex-col items-center">
			{data.map((e, index) => (
				<HomeBodyCard
					key={index}
					src={e.src}
					src2={e.src2}
					title={e.title}
					text={e.text}
					imageToRight={index % 2 != 0}
				/>
			))}
		</section>
	);
}

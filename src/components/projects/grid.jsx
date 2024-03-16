import Image from "next/image";

export default function Grid({ data, setIsOpen = () => {}, setSelectedIndex }) {
	return (
		<div className="w-full h-fit md:p-7 mt-16">
			<div className="w-full place-items-center grid px-1 md:px-4 lg:px-10 gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{data.map((item, index) => (
					<div
						key={index}
						className="overflow-hidden border rounded cursor-pointer h-64 w-full flex justify-center items-center  border-blue-50"
						onClick={() => {
							setIsOpen(true);
							setSelectedIndex(index);
						}}
					>
						<Image
							src={item.src}
							alt={`Image ${index}`}
							width={0}
							height={0}
							sizes="100vw"
							className="object-cover h-full w-full hover:scale-110 transition-all"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

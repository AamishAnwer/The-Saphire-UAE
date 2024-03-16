import ServicesCard from "./card";
export default function OurServices() {
	return (
		<section className="w-full flex flex-col items-center gap-y-8 bg-gradient-to-b pt-20 pb-20 from-[#2060AD] to-[#1259b09f] text-white">
			<div className="text-center">
				<h1 className="text-3xl md:text-4xl underline lg:text-5xl text-white font-medium mb-2">
					OUR SERVICES
				</h1>
				{/* <p className="text-white text-sm md:text-base max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
					In publishing and graphic design, Lorem ipsum is a placeholder text
					commonly used to demonstrate the visual form of a document or a
					typeface.
				</p> */}
			</div>

			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-16 mx-2">
				<ServicesCard
					key={1}
					src={"/ourservice/1.png"}
					alt={"Avail 3D Printing Service in Dubai With Ultratec"}
					title={"Additive Manufacturing"}
					description={
						"We will turn your ideas into reality. While traditional manufacturing methods limit how rapidly"
					}
					href={"/services/additive-manufacturing"}
				/>
				<ServicesCard
					key={2}
					src={"/ourservice/2.png"}
					alt={"Avail 3D Printing Service in Dubai With Ultratec"}
					title={"Product Development"}
					description={
						"We design and create innovative products that consumer’s value."
					}
					href={"/services/product-development"}
				/>
				<ServicesCard
					key={3}
					src={"/ourservice/3.png"}
					alt={"Avail 3D Printing Service in Dubai With Ultratec"}
					title={"Mechatronics Engineering"}
					description={
						"We bring 3D Printed objects to life with integration of mechatronics engineering."
					}
					href={"/services/mechatronics-engineering"}
				/>
				<ServicesCard
					key={4}
					src={"/ourservice/4.png"}
					alt={"Avail 3D Printing Service in Dubai With Ultratec"}
					title={"Paint & Post Processing"}
					description={
						"We strive to produce the exact design products with our paint & processing techniques."
					}
					href={"/services/paint-post-processing"}
				/>
				<ServicesCard
					key={5}
					src={"/ourservice/5.png"}
					alt={"Avail 3D Printing Service in Dubai With Ultratec"}
					title={"3D Design & 3D Scanning"}
					description={
						"Ultratec can provide complete design and scan solutions, from concept through production."
					}
					href={"/services/3d-design-3d-scanning"}
				/>
				<ServicesCard
					key={6}
					src={"/arcylic/home.png"}
					alt={"Avail 3D Printing Service in Dubai With Ultratec"}
					title={"Acrylic Fabrication"}
					description={
						"We produce desired acrylic fabricated products fresh from your design ideas."
					}
					href={"/services/acrylic-fabrication"}
				/>
			</div>
		</section>
	);
}

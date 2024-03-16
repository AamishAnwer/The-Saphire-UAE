import Head from "next/head";
import Banner from "@/components/projects/banner";
import Image from "next/image";
import Hero from "@/components/hero";

export default function Industries() {
	return (
		<>
			<Head>
				<title>Industries</title>
				<meta
					name="description"
					content="Ultratec 3D, the premier 3D printing company in Dubai, provides high-quality 3D printing services and solutions to meet your diverse needs. Contact us now!"
				/>
			</Head>
			<section className="w-full bg-gradient-to-b from-[#2571CD] to-[#02060B]">
				<Hero
					className={"max-md:hidden"}
					type="img"
					src={"/industries.png"}
					heroText={`Industries`}
				/>
				<div className="md:hidden w-full h-72 md:h-96 bg-black text-white text-4xl md:text-6xl font-bold flex items-center justify-center relative overflow-hidden">
					<div className="circle-gradient-six"></div>

					<span className="z-50 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center w-full">
						INDUSTRIES
					</span>
				</div>

				<p className="text-xl text-white mt-20  px-2 md:px-60 text-center   font-light font-lemon-milk pb-20">
					The emergence of 3D Printing Technology has been impactfull across
					various industries including the field of mechanics.In this field , 3D
					printing is used for prototyping and end manufucturing stage for
					mechanical parts that forms a system,the parts includes friction
					devices such as clutches and brakes,linkages such as hinges and joints
					and structural components like brackets & ducts.
				</p>
			</section>
			<section className="w-full bg-gradient-to-b from-[#000] to-[#000000] px-4 md:px-10 py-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="md:col-span-1">
						<Image
							src="/industry/industry_1.png"
							alt="ultratec 3d printing dubai"
							width={500}
							height={500}
							className="w-full h-auto md:h-full object-cover"
						/>
					</div>
					<div className="md:col-span-1">
						<Image
							src="/industry/industry_2.png"
							alt="ultratec 3d printing dubai"
							width={500}
							height={500}
							className="w-full h-auto md:h-full object-cover"
						/>
					</div>
					<div className="md:col-span-2">
						<Image
							src="/industry/industry_3.png"
							alt="ultratec 3d printing dubai"
							layout="responsive"
							width={1920}
							height={500}
							className="w-full h-48 md:h-500 object-cover"
						/>
					</div>
				</div>
			</section>
			<div className="w-full bg-gradient-to-b h-52 from-[#000000] to-[#00000004] -mb-0"></div>
			<Banner />
		</>
	);
}

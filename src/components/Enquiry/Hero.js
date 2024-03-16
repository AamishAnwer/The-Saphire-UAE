import React from "react";
import Image from "next/image";

const Hero = () => {
	const style = `w-full  max-h-screen max-lg:min-h-screen object-center object-cover absolute top-0 left-0 right-0 -z-10`;

	return (
		<section className="w-full relative">
			<div className="min-w-full  h-28 z-40 absolute top-0 left-0 right-0 bg-gradient-to-b from-[#0000009f] to-[#00000005] bg-opacity-90" />
			<Image
				src={"https://res.cloudinary.com/dcxnmagjx/image/upload/v1704873350/bgc-2_rbnpc7.png"}
				className={style}
				sizes="100vw"
				width={0}
				height={0}
			/>

			<div className="flex items-start justify-center ">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-12">
					<div className="md:col-span-1 flex justify-center items-center">
						{/* <Image
							src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1704873402/model_1_ogbvpm.png"
							alt="Image 1"
							width={402}
							height={501}
							objectFit="contain"
							className="rounded-md object-contain w-full h-full "
						/> */}
					</div>

					<div className="md:col-span-1 flex justify-center items-center">
						{/* <Image
							src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1704873404/model_2_fpkdkb.png"
							alt="Image 2"
							width={402}
							height={501}
							objectFit="contain"
							className="rounded-md object-contain w-full h-full "
						/> */}
					</div>

					<div className="md:col-span-1 flex justify-center items-center">
						{/* <Image
							src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1704873406/model_3_eiykhn.png"
							alt="Image 3"
							width={402}
							height={200}
							objectFit="scale-down"
							className="rounded-md h-[400px] w-full"
						/> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

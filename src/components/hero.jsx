import Image from "next/image";

export default function Hero({ type, src, poster = null, className }) {
	const style = `w-full max-h-screen max-lg:min-h-screen object-center object-cover brightness-[65%]`;

	return (
		<section className={"w-full relative z-50 " + className}>
			{type == "img" ? (
				<Image
					src={src}
					className={style}
					sizes="100vw"
					style={{
						minHeight: "90vh",
					}}
					width={0}
					height={0}
				/>
			) : (
				<video
					autoPlay
					loop
					muted
					playsInline
					className={style}
					poster={poster}
				>
					<source
						src="https://res.cloudinary.com/dcpte972l/video/upload/v1710583676/SAPPHIRE_LAUNCH_16X9_EN_tvca1l.mp4"
						type="video/mp4"
					/>
				</video>
			)}
		</section>
	);
}

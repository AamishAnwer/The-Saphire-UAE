import Image from "next/image";
import Link from "next/link";

export default function ServicesCard({ src, alt, title, description, href }) {
	return (
		<>
			<Link href={href} className="w-full hover:underline transition-all">
				<div className="clip border-black border rounded-xl cursor-pointer group overflow-hidden relative w-full sm:w-[416px] h-[463px]">
					<div className="bg-zinc-700 w-full h-[242px] group-hover:h-full transition-all duration-700 ease-in-out">
						<Image
							width={0}
							height={0}
							sizes="100vw"
							src={src}
							alt={alt}
							className="object-cover h-full w-full group-hover:brightness-75 group-hover:animate-[animate-brightness_alternate_0.7s] transition-all duration-700"
						/>
					</div>
					<div className="absolute top-0 flex flex-col justify-end gap-y-3 group-hover:gap-y-7 h-full p-10 group-hover:text-white transition-all duration-700 ease-in-out">
						<h2 className="text-2xl font-medium group-hover:text-3xl">
							{title}
						</h2>
						<p className="line-clamp-2 group-hover:line-clamp-none">
							{description}
						</p>
						Read more
					</div>
				</div>
			</Link>
		</>
	);
}

import Image from "next/image";

export default function ResourcesGrid({
	data = [{ src: "", desc: "", title: "" }],
	textColor,
}) {
	return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
    {data.map((e, index) => {
        return (
            <div key={index} className="w-full">
                <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                        src={e.src}
                        alt={e.desc}
                        width={456}
                        height={300}
                        className="w-full h-60 object-contain rounded-lg hover:scale-110 transition-all duration-200"
                    />
                </div>
                <div className="p-4">
                    <h1 className="text-lg font-medium text-gray-800 mb-2">
                        {e.title}
                    </h1>
                    <p className="text-sm text-gray-600">{e.desc}</p>
                </div>
            </div>
        );
    })}
</div>

	);
}

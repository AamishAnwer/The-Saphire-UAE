import Link from "next/link";
export default function NotFound404() {
	return (
		<div className="grid h-screen place-content-center bg-gray-800 px-4">
			<div className="text-center">
				<h1 className="text-9xl font-black text-red-700">404</h1>

				<p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Uh-oh!
				</p>

				<p className="mt-4 text-gray-500">We can't find that page.</p>

				<Link
					href="/"
					className="mt-6 inline-block rounded bg-[#2060AD] px-5 py-3 text-sm font-medium text-white hover:bg-[#588cc4] focus:outline-none focus:ring"
				>
					Go Back Home
				</Link>
			</div>
		</div>
	);
}

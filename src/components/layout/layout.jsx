import Navbar from "./navbar";

export default function Layout({ children }) {
	return (
		<section className="w-full min-h-screen h-auto flex justify-center">
			<main className="w-full relative">
				<Navbar />
				{children}
			</main>
		</section>
	);
}

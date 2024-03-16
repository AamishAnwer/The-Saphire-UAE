import Navbar from "./navbar";
import Footer from "./footer";
import Support from "@/components/Support";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Layout({ children }) {
	return (
		<section className="w-full min-h-screen h-auto flex justify-center">
			<main className="w-full relative">
				<GoogleTagManager gtmId="G-PX98FHVLJH" />
				<Navbar />
				{children}
				{/* <Footer />
				<Support /> */}
			</main>
		</section>
	);
}

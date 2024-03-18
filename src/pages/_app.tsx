import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import type { AppProps } from "next/app";
import "animate.css";
import { Red_Hat_Display } from "next/font/google";
import Head from "next/head";
const font = Red_Hat_Display({
	subsets: ["latin"],
	weight: ["300", "400", "500", "500", "600", "700", "800", "900"],
	display: "auto",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={font.className}>
			<Head>
				<title>The Sapphire</title>
				<meta
					name="title"
					content=""
				/>
				<meta
					name="description"
					content=""
				/>
				{/* <meta property="og:type" content="website" /> */}
				{/* <meta property="og:url" content="https://https://ultratec3d.ae/" /> */}
				{/* <meta
					property="og:title"
					content="Welcome to the leading 3D printing services provider in Dubai. We offer high-quality 3D printing and scanning services near you. Contact us for expert 3D print solutions."
				/>
				<meta
					property="og:description"
					content="3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec"
				/> */}
				{/* <meta property="og:image" content="https://ultratec3d.ae/logo.png" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://https://ultratec3d.ae/" />
				<meta
					property="twitter:title"
					content="Welcome to the leading 3D printing services provider in Dubai. We offer high-quality 3D printing and scanning services near you. Contact us for expert 3D print solutions."
				/>
				<meta
					property="twitter:description"
					content="3D Printing Dubai | Avail 3D Printing Service in Dubai With Ultratec"
				/> */}
				{/* <meta
					property="twitter:image"
					content="https://ultratec3d.ae/logo.png"
				/>
				<meta
					name="keywords"
					content="3D Printing Dubai, 3d printing service, 3d printing near me, 3D Scanning services, 3d print service, 3D Printing company"
				/> */}
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}

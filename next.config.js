/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				pathname: "**",
			},
		],
	},
};

module.exports = nextConfig;

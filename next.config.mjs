import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	async redirects() {
		return [
			// Basic redirect
			{
				source: "/",
				destination: "/home",
				permanent: true,
			},
		]
	},
}

const withMDX = createMDX({
	// Add markdown plugins here, as desired
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [],
	},
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)

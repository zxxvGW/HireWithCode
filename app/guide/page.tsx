"use client"
import { useRouter } from "next/navigation"
import GuideMdx from "./guide.mdx"
import { Button } from "@/components/ui/button"

const Guide = () => {
	const router = useRouter()
	const handleAgreechallenge = () => {
		router.push("/agree")
	}

	return (
		<div className="prose ">
			<GuideMdx />
			<div>
				<Button onClick={handleAgreechallenge}>接受挑战</Button>
			</div>
		</div>
	)
}

export default Guide

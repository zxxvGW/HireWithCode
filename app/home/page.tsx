"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

const Home = () => {
	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push("/guide", { scroll: false })
		}, 2000)
	}, [])

	return (
		<section className="flex items-center w-full">
			<Image src={"/logo.png"} alt="logo" width={32} height={32} />
			<h1 className="text-3xl font-bold">
				欢迎来到「流转」线上面试环节，期待你的加入！
			</h1>
		</section>
	)
}

export default Home

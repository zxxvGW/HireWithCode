"use server"
import { prisma } from "@/lib/prisma"

interface valuesType {
	email: string
	githubid: string
}
const createUser = async (values: valuesType) => {
	const { email, githubid } = values

	const existUser = await prisma.user.findFirst({
		where: {
			email: email,
		},
	})

	if (existUser) {
		throw Error("当前邮箱已存在！")
	}
	const user = await prisma.user.create({
		data: {
			email,
			githubid,
			repoUrl: "",
			onlineUrl: "",
			done: false,
		},
	})
	return user
}

export default createUser

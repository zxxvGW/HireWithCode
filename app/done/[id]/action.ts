"use server"
import { prisma } from "@/lib/prisma"

interface valuesType {
	id: string
	onlineUrl: string
	repoUrl: string
}
const updateUser = async (values: valuesType) => {
	const { id, onlineUrl, repoUrl } = values

	const user = await prisma.user.update({
		where: { id: +id },
		data: {
			onlineUrl,
			repoUrl,
			done: true,
		},
	})

	return user
}

export default updateUser

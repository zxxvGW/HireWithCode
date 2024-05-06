"use client"
import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import updateUser from "./action"
import { useState } from "react"

const FormSchema = z.object({
	repoUrl: z.string().url({
		message: "无效的格式",
	}),
	onlineUrl: z.string().url({
		message: "无效的格式",
	}),
})

export type FormSchemaType = z.infer<typeof FormSchema>

const Done = ({ params }: { params: { id: string } }) => {
	const [done, setDone] = useState(false)

	const form = useForm<FormSchemaType>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			repoUrl: "",
			onlineUrl: "",
		},
	})

	async function onSubmit(values: FormSchemaType) {
		try {
			const user = await updateUser({ ...values, id: params.id })
			setDone(true)
		} catch (error) {}
	}

	return !done ? (
		<div className="flex justify-center pointer-events-auto relative z-10 p-16 rounded-lg bg-white border ">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="p-[20px] w-[420px]"
				>
					<div className="flex justify-center my-[20px]">
						<h1 className="text-2xl font-bold text-[#6960EC]">挑战自己</h1>
					</div>
					<FormField
						control={form.control}
						name="repoUrl"
						render={({ field }) => (
							<FormItem>
								<FormLabel>仓库地址</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="onlineUrl"
						render={({ field }) => (
							<FormItem className="mt-[20px]">
								<FormLabel>在线体验地址</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex justify-between mt-[20px]">
						<Button size="lg" className="w-full" type="submit">
							完成挑战
						</Button>
					</div>
				</form>
			</Form>
		</div>
	) : (
		<p className="text-green-500 text-3xl">已提交</p>
	)
}
export default Done

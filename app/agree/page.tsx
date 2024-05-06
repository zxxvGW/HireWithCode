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
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import * as z from "zod"

const FormSchema = z.object({
	email: z.string().email({
		message: "无效的邮箱格式",
	}),
	githubid: z.string().min(1, {
		message: "不能为空",
	}),
})

export type FormSchemaType = z.infer<typeof FormSchema>

const Agree = () => {
	const router = useRouter()

	const form = useForm<FormSchemaType>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			githubid: "",
		},
	})

	async function onSubmit(values: FormSchemaType) {
		console.log(values)
		router.push("/done")
	}

	return (
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
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>邮箱</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="githubid"
						render={({ field }) => (
							<FormItem className="mt-[20px]">
								<FormLabel>Github ID</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex justify-between mt-[20px]">
						<Button size="lg" className="w-full" type="submit">
							接受挑战
						</Button>
					</div>
				</form>
			</Form>
		</div>
	)
}
export default Agree

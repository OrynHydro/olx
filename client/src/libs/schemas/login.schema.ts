import { z } from 'zod'

export const loginSchema = z.object({
	email: z
		.string()
		.email({
			message: 'Це не схоже на електронну пошту',
		})
		.min(1, {
			message: 'Не забудьте ввести електронну пошту',
		}),
	password: z.string().min(6, {
		message: 'Ви впевнені, що це правильний пароль? Він надто короткий.',
	}),
})

export type TLoginSchema = z.infer<typeof loginSchema>

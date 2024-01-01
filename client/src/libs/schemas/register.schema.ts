import { z } from 'zod'

export const registerSchema = z.object({
	email: z
		.string()
		.email({
			message: 'Це не схоже на електронну пошту',
		})
		.min(1, {
			message: 'Не забудьте ввести електронну пошту',
		}),
	password: z.string().min(8, {
		message: 'Пароль повинен мати мінімум 8 символів',
	}),
	verification: z
		.string()
		.length(6, {
			message: 'Код підтвердження повинен містити 6 символів',
		})
		.optional(),
})

export type TRegisterSchema = z.infer<typeof registerSchema>

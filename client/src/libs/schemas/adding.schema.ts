import { LocationData } from '@/helpers/location.data'
import { z } from 'zod'

export const addingSchema = z.object({
	title: z
		.string({
			required_error:
				'Заголовок відіграє важливу роль, не забудьте додати його',
		})
		.min(16, {
			message: 'У заголовку має бути не менше 16 символів',
		})
		.max(70, {
			message: 'У заголовку може бути не більше 70 символів',
		}),
	category: z.object({
		value: z.string(),
		label: z.string(),
		data: z.string(),
	}),
	search: z
		.object({
			value: z.string(),
			label: z.string(),
			data: z.string(),
		})
		.optional(),
	photo: z.array(z.string()).min(1, {
		message: 'Додайте хоча б одне фото',
	}),
	desc: z
		.string()
		.min(40, {
			message: 'Опис повинен бути не коротшим за 40 знаків',
		})
		.max(9000, {
			message: 'Опис повинен бути не довшим за 9000 знаків',
		}),
	price: z
		.number({
			invalid_type_error:
				'Будь ласка, вкажіть ціну. Зверніть увагу, що вказувати нереальні ціни або умови заборонено.',
		})
		.optional(),
	sellerType: z.enum(['private', 'business']),
	condition: z.enum(['utilized', 'new']),
	autoRenewal: z.boolean(),
	location: z
		.object({
			label: z.string(),
			value: z.number(),
		})
		.refine(
			value => {
				if (typeof value === 'object') {
					const location = value.label
					return LocationData.map(
						item => `${item.city}, ${item.region}`
					).includes(location)
				}
			},
			{
				message: `Будь ласка, вкажіть місце знаходження`,
			}
		)
		.transform(value => value.label),
	sellerName: z
		.string()
		.min(1, {
			message: "Будь ласка, вкажіть ім'я контактної особи",
		})
		.max(100, {
			message: "Ім'я контактної особи не повинно містити більше 100 символів",
		}),
	sellerEmail: z
		.string()
		.email({
			message: 'Це не схоже на електронну пошту',
		})
		.optional(),
	sellerPhone: z.string().refine(
		value => {
			const phoneNumberRegex = /^\+380\d{9}$/
			return phoneNumberRegex.test(value)
		},
		{
			message:
				'Будь ласка, введіть коректний номер телефону у форматі: +380ХХХХХХХХХ.',
		}
	),
})

export type TAddingSchema = z.infer<typeof addingSchema>

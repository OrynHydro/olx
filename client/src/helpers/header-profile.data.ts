import { IHeaderProfile } from '../interfaces/header-profile.interface'

export const HeaderProfileData: IHeaderProfile[] = [
	{
		type: 'title',
		text: 'Ваш профіль',
	},
	{
		type: 'text',
		text: 'Оголошення',
		link: '/',
	},
	{
		type: 'text',
		text: 'Повідомлення',
		link: '/answers',
	},
	{
		type: 'text',
		text: 'Платежі та рахунок OLX',
		link: '/history',
	},
	{
		type: 'text',
		text: 'Шукаю роботу',
		link: '/job-search',
	},
	{
		type: 'text',
		text: 'Налаштування',
		link: '/settings',
	},
	{
		type: 'text',
		text: 'OLX доставка',
		link: '/safedealorders',
	},
	{
		type: 'title',
		text: 'Обрані:',
	},
	{
		type: 'counter',
		text: 'Оголошення',
		link: '/observed',
	},
	{
		type: 'counter',
		text: 'Пошуки',
		link: '/observed/search',
	},
	{
		type: 'button',
		text: 'Вийти',
	},
]

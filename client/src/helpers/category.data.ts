import { ICategory } from '@/interfaces/category.interface'

export const categoriesData: ICategory[] = [
	{
		title: 'Допомога',
		img: '/images/category/aid.png',
		color: '#f2f3f5',
		link: '/help',
		subcategories: [
			{
				title: 'Потрібна допомога',
				link: '/need-help',
			},
			{
				title: 'Пропоную допомогу',
				link: 'offer-help',
			},
		],
	},
	{
		title: 'Дитячий світ',
		img: '/images/category/children.png',
		color: '#3a77ff',
		link: '/children_world',
		subcategories: [
			{
				title: 'Дитячі коляски',
				link: '/strollers',
			},
			{
				title: 'Дитячі меблі',
				link: '/furniture',
			},
			{
				title: 'Інші дитячі товари',
				link: '/other',
			},
			{
				title: 'Дитячі автокрісла',
				link: '/car-seats',
			},
			{
				title: 'Дитячий одяг',
				link: '/clothing',
			},
			{
				title: 'Дитяче взуття',
				link: '/shoes',
			},
			{
				title: 'Іграшки',
				link: '/toys',
			},
			{
				title: 'Годування',
				link: '/feeding',
			},
			{
				title: 'Товари для школярів',
				link: '/school-supplies',
			},
			{
				title: 'Дитячий транспорт',
				link: '/transport',
			},
		],
	},
	{
		title: 'Авто',
		img: '/images/category/auto.png',
		color: '#ff5636',
		link: '/transport',
		subcategories: [
			{
				title: 'Легкові автомобілі',
				link: '/cars',
			},
			{
				title: 'Мото',
				link: '/motorcycles',
			},
			{
				title: 'Інший транспорт',
				link: '/other',
			},
			{
				title: 'Вантажні автомобілі',
				link: '/trucks',
			},
			{
				title: 'Автобуси',
				link: '/buses',
			},
			{
				title: 'Водний транспорт',
				link: '/water-transport',
			},
			{
				title: 'Причепи / будинки на колесах',
				link: '/trailers',
			},
			{
				title: 'Спецтехніка',
				link: '/special-equipment',
			},
			{
				title: 'Сільгосптехніка',
				link: '/agricultural-equipment',
			},
			{
				title: 'Автомобілі з Польщі',
				link: '/polish-cars',
			},
			{
				title: 'Вантажівки та спецтехніка з Польщі',
				link: '/polish-trucks',
			},
		],
	},
	{
		title: 'Запчастини для транспорту',
		img: '/images/category/parts.png',
		color: '#fff6d9',
		link: '/parts',
		subcategories: [
			{
				title: 'Шини, диски і колеса',
				link: '/tires_wheels',
			},
			{
				title: 'Запчастини для іншої техніки',
				link: '/other',
			},
			{
				title: 'Мотозапчастини',
				link: '/motorcycle-parts',
			},
			{
				title: 'Мотоекіпірування',
				link: '/motorcycle-gear',
			},
			{
				title: 'Мотоаксесуари',
				link: '/motorcycle-accessories',
			},
			{
				title: 'Аксесуари для авто',
				link: '/car-accessories',
			},
			{
				title: 'Автозвук та мультимедіа',
				link: '/car-audio',
			},
			{
				title: 'GPS-навігатори / відеореєстратори',
				link: '/gps_dashcams',
			},
			{
				title: 'Транспорт на запчастини / авторозбірки',
				link: '/parts_transport',
			},
			{
				title: 'Автозапчастини',
				link: '/car-parts',
			},
			{
				title: 'Мастила та автохімія',
				link: '/oils_chemicals',
			},
		],
	},
	{
		title: 'Робота',
		img: '/images/category/work.png',
		link: '/work',
		color: '#ceddff',
		subcategories: [
			{
				title: 'Медицина / фармацевтика',
				link: '/medicine_pharmaceuticals',
			},
			{
				title: 'Часткова зайнятість',
				link: '/part-time',
			},
			{
				title: 'Краса / фітнес / спорт',
				link: '/beauty_fitness_sports',
			},
			{
				title: 'Логістика / Склад / Доставка',
				link: '/logistics_warehouse_delivery',
			},
			{
				title: 'Освіта / переклад',
				link: '/education_translation',
			},
			{
				title: 'Виробництво / робітничі спеціальності',
				link: '/production_blue-collar-jobs',
			},
			{
				title: 'Роздрібна торгівля / продажі / закупки',
				link: '/retail_sales_purchasing',
			},
			{
				title: 'Реклама / дизайн / PR',
				link: '/advertising_design_pr',
			},
			{
				title: "IT / комп'ютери",
				link: '/it_computers',
			},
			{
				title: 'Будівництво / облицювальні роботи',
				link: '/construction_finishing_works',
			},
			{
				title: 'Інші сфери занять',
				link: '/other',
			},
			{
				title: 'Охорона / безпека',
				link: '/security_safety',
			},
			{
				title: 'Культура / мистецтво / розваги',
				link: '/culture_art_entertainment',
			},
			{
				title: 'Клінінг / Домашній персонал',
				link: '/cleaning_domestic',
			},
			{
				title: 'Нерухомість',
				link: '/real-estate',
			},
			{
				title: "Початок кар'єри / Студенти",
				link: '/career-start_students',
			},
			{
				title: 'Адміністративний персонал / HR / Секретаріат',
				link: '/administrative_hr_secretarial',
			},
			{
				title: 'Банки / фінанси / страхування / юриспруденція',
				link: '/banking_finance_insurance_law',
			},
			{
				title: 'Колл-центри / Телекомунікації',
				link: '/call-centers_telecommunications',
			},
			{
				title: 'Сільське і лісове господарство / агробізнес',
				link: '/agriculture-forestry_agribusiness',
			},
			{
				title: 'Робота за кордоном',
				link: '/work-abroad',
			},
			{
				title: 'Бухгалтерія',
				link: '/accounting',
			},
			{
				title: 'Готельно-ресторанний бізнес / Туризм',
				link: '/hotel-restaurant-business_tourism',
			},
			{
				title: 'СТО / автомийки',
				link: '/auto-service_car-washes',
			},
			{
				title: 'Служба в Силах оборони',
				link: '/military-service',
			},
		],
	},
]

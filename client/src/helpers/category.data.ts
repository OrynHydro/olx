import { ICategory } from '@/interfaces/category.interface'

export const categoriesData: ICategory[] = [
	{
		title: 'Допомога',
		img: 'category/help.png',
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
		img: 'category/children.png',
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
		img: 'category/auto.png',
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
		img: 'category/parts.png',
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
		img: 'category/work.png',
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
			{
				title: 'Робота швачкою',
				link: '/seamstress',
			},
		],
	},
	{
		title: 'Тварини',
		img: 'category/pets.png',
		color: '#c8f8f6',
		link: '/animals',
		subcategories: [
			{
				title: 'Собаки',
				link: '/dogs',
			},
			{
				title: 'Коти',
				link: '/cats',
			},
			{
				title: 'Інші тварини',
				link: '/other',
			},
			{
				title: 'Зоотовари',
				link: '/pet-supplies',
			},
			{
				title: 'Бюро знахідок',
				link: '/lost-and-found',
			},
			{
				title: "В'язка",
				link: '/breeding',
			},
			{
				title: 'Пташки',
				link: '/birds',
			},
			{
				title: 'Гризуни',
				link: '/rodents',
			},
			{
				title: 'Рептилії',
				link: '/reptiles',
			},
			{
				title: 'Акваріумістика',
				link: '/aquariums',
			},
			{
				title: 'Сільгосп тварини',
				link: '/farm-animals',
			},
			{
				title: "Безкоштовно (тварини і в'язка)",
				link: '/free-animals-breeding',
			},
		],
	},
	{
		title: 'Дім і сад',
		link: '/household',
		img: 'category/household.png',
		color: '#ffd6c9',
		subcategories: [
			{
				title: 'Кімнатні рослини',
				link: '/indoor-plants',
			},
			{
				title: 'Меблі',
				link: '/furniture',
			},
			{
				title: "Предмети інтер'єру",
				link: '/interior-items',
			},
			{
				title: 'Інші товари для дому',
				link: '/other',
			},
			{
				title: 'Продукти харчування / напої',
				link: '/food_beverages',
			},
			{
				title: 'Господарський інвентар / побутова хімія',
				link: '/household-inventory_chemicals',
			},
			{
				title: 'Садовий інвентар',
				link: '/garden-inventory',
			},
			{
				title: 'Канцтовари / витратні матеріали',
				link: '/stationery_consumables',
			},
			{
				title: 'Будівництво / ремонт',
				link: '/construction_repair',
			},
			{
				title: 'Інструменти',
				link: '/tools',
			},
			{
				title: 'Посуд / кухонне приладдя',
				link: '/dishes_kitchenware',
			},
			{
				title: 'Сад / город',
				link: '/garden',
			},
		],
	},
	{
		title: 'Електроніка',
		link: '/electronics',
		img: 'category/electronic.png',
		color: '#ffce32',
		subcategories: [
			{
				title: "Комп'ютери та комплектуючі",
				link: '/computers_components',
			},
			{
				title: 'Телефони та аксесуари',
				link: '/phones_accessories',
			},
			{
				title: 'Ігри та ігрові приставки',
				link: '/games_gaming-consoles',
			},
			{
				title: 'Техніка для кухні',
				link: '/kitchen-appliances',
			},
			{
				title: 'Техніка для дому',
				link: '/home-appliances',
			},
			{
				title: 'Індивідуальний догляд',
				link: '/personal-care',
			},
			{
				title: 'Кліматичне обладнання',
				link: '/climate-equipment',
			},
			{
				title: 'Аксесуари й комплектуючі',
				link: '/accessories_components',
			},
			{
				title: 'Аудіотехніка',
				link: '/audio-equipment',
			},
			{
				title: 'Тв / відеотехніка',
				link: '/tv_video-equipment',
			},
			{
				title: 'Фото / відео',
				link: '/photo_video',
			},
			{
				title: 'Інша електроніка',
				link: '/other',
			},
			{
				title: 'Ноутбуки та аксесуари',
				link: '/laptops_accessories',
			},
			{
				title: 'Планшети / ел. книги та аксесуари',
				link: '/tablets_ebooks_accessories',
			},
			{
				title: 'Ремонт та обслуговування техніки',
				link: '/electronics_repair-maintenance',
			},
		],
	},
	{
		title: 'Бізнес та послуги',
		link: '/services',
		color: '#ceddff',
		img: 'category/services.png',
		subcategories: [
			{
				title: 'Продаж бізнесу',
				link: '/business-for-sale',
			},
			{
				title: 'Продаж обладнання для бізнесу',
				link: '/business-equipment-for-sale',
			},
			{
				title: 'Авто / мото послуги',
				link: '/auto_moto',
			},
			{
				title: 'Інші послуги',
				link: '/other',
			},
			{
				title: 'Будівництво та ремонт',
				link: '/construction_repair',
			},
			{
				title: 'Туризм / іміграція',
				link: '/tourism_immigration',
			},
			{
				title: 'Перевезення та послуги спецтехніки',
				link: '/transportation-special-equipment',
			},
			{
				title: "Краса / здоров'я",
				link: '/beauty_health',
			},
			{
				title: 'Послуги для тварин',
				link: '/services-for-animals',
			},
			{
				title: 'Фото та відеозйомка',
				link: '/photo-video',
			},
			{
				title: 'Послуги освіти та спорту',
				link: '/education-sports',
			},
			{
				title: 'Догляд за дітьми та літніми людьми',
				link: '/care-for-children-elderly',
			},
			{
				title: 'Сировина / матеріали',
				link: '/raw_materials',
			},
			{
				title: 'Ремонт та обслуговування техніки',
				link: '/electronics-repair-maintenance',
			},
			{
				title: 'Побутові послуги',
				link: '/household',
			},
			{
				title: 'Клінінг',
				link: '/cleaning',
			},
			{
				title: 'Організація свят',
				link: '/event-organization',
			},
			{
				title: 'Ритуальні послуги',
				link: '/funeral',
			},
			{
				title: 'Прийом вторсировини',
				link: '/recycling',
			},
			{
				title: 'Ділові послуги',
				link: '/business',
			},
		],
	},
	{
		title: 'Оренда та прокат',
		link: '/rent',
		color: '#c8f8f6',
		img: 'category/rent.png',
		subcategories: [
			{
				title: 'Оренда транспорту та спецтехніки',
				link: '/rental-transport_special-equipment',
			},
			{
				title: 'Прокат велосипедів і мото',
				link: '/bike-moto',
			},
			{
				title: 'Оренда обладнання',
				link: '/equipment',
			},
			{
				title: 'Прокат інструментів',
				link: '/tool',
			},
			{
				title: 'Прокат товарів мед призначення',
				link: '/medical-equipment',
			},
			{
				title: 'Прокат техніки та електроніки',
				link: '/technology_electronics',
			},
			{
				title: 'Прокат товарів для заходів',
				link: '/event',
			},
			{
				title: 'Прокат спорт і туристичних товарів',
				link: '/sports-tourist',
			},
			{
				title: 'Прокат одягу та аксесуарів',
				link: '/clothing_accessories',
			},
			{
				title: 'Прокат дитячого одягу та товарів',
				link: '/childrens_clothing',
			},
			{
				title: 'Інші товари на прокат',
				link: '/other',
			},
		],
	},
	{
		title: 'Мода і стиль',
		link: '/fashion',
		img: 'category/fashion.png',
		color: '#ffd6c9',
		subcategories: [
			{
				title: "Краса / здоров'я",
				link: '/beauty_health',
			},
			{
				title: 'Для весілля',
				link: '/wedding',
			},
			{
				title: 'Аксесуари',
				link: '/accessories',
			},
			{
				title: 'Наручні годинники',
				link: '/wristwatches',
			},
			{
				title: 'Подарунки',
				link: '/gifts',
			},
			{
				title: 'Мода різне',
				link: '/fashion-various',
			},
			{
				title: 'Чоловіча білизна та плавки',
				link: '/mens-underwear_swimwear',
			},
			{
				title: 'Жіноча білизна та купальники',
				link: '/womens-underwear_swimwear',
			},
			{
				title: 'Одяг для вагітних',
				link: '/maternity-clothing',
			},
			{
				title: 'Головні убори',
				link: '/headwear',
			},
			{
				title: 'Чоловіче взуття',
				link: '/mens-footwear',
			},
			{
				title: 'Жіноче взуття',
				link: '/womens-footwear',
			},
			{
				title: 'Жіночий одяг',
				link: '/womens-clothing',
			},
			{
				title: 'Чоловічий одяг',
				link: '/mens-clothing',
			},
			{
				title: 'Спецодяг, спецвзуття та аксесуари',
				link: '/workwear_footwear_accessories',
			},
		],
	},
	{
		title: 'Хобі, відпочинок і спорт',
		link: '/hobby',
		img: 'category/hobby.png',
		color: '#fff6d9',
		subcategories: [
			{
				title: 'Музичні інструменти',
				link: '/musical-instruments',
			},
			{
				title: 'Книги / журнали',
				link: '/books_magazines',
			},
			{
				title: 'Антикваріат / колекції',
				link: '/antiques_collectibles',
			},
			{
				title: 'Квитки',
				link: '/tickets',
			},
			{
				title: 'Пошук попутників',
				link: '/travel-companions',
			},
			{
				title: 'Пошук гуртів / музикантів',
				link: '/bands-musicians-search',
			},
			{
				title: 'CD / DVD / Платівки',
				link: '/cd_dvd_vinyl',
			},
			{
				title: 'Спорт / відпочинок',
				link: '/sports_recreation',
			},
			{
				title: 'Інше',
				link: '/other',
			},
			{
				title: 'Мілітарія',
				link: '/military',
			},
			{
				title: 'Вело',
				link: '/bicycles',
			},
			{
				title: 'Квадрокоптери та аксесуари',
				link: '/quadcopters-accessories',
			},
		],
	},
	{
		title: 'Віддам безкоштовно',
		link: '/free',
		img: 'category/free.png',
		color: '#3a77ff',
	},
	{
		title: 'Обмін',
		link: '/exchange',
		img: 'category/exchange.png',
		color: '#23e5db',
	},
]

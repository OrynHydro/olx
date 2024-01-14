export interface ICategory {
	title: string
	link?: string
	img?: string
	color?: string
	bgColor?: string
	subcategories?: ICategory[]
}

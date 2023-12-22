export interface ICategory {
	title: string
	img?: string
	color?: string
	link?: string
	subcategories?: ICategory[]
}

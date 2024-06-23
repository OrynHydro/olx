import { Request, Response, Router } from 'express'
import mongoose from 'mongoose'
import Post, { IPost } from '../models/Post'
import { categoriesData } from './../../client/src/helpers/category.data'

const router = Router()

// create post
router.post('/', async (req: Request, res: Response) => {
	try {
		const {
			userId,
			title,
			category,
			search,
			photos,
			desc,
			price,
			location,
			sellerName,
			sellerEmail,
			sellerPhone,
		} = req.body

		const newPost: IPost = new Post({
			userId: new mongoose.Types.ObjectId(userId),
			title,
			category,
			search,
			photos,
			desc,
			price,
			location,
			sellerName,
			sellerEmail,
			sellerPhone,
		})

		await newPost.save()

		return res.status(200).json({
			message: 'Post created successfully.',
			post: newPost,
		})
	} catch (err: any) {
		console.log(err)
		return res.status(500).json({
			message: 'An error occurred while creating the post.',
			error: err.message,
		})
	}
})

// get all posts in category
router.get('/fetch_posts/:category', async (req: Request, res: Response) => {
	try {
		const category = req.params.category
		let posts: IPost[] = []
		let categoryData

		if (category.includes('$')) {
			const categoryParts = category.split('$')
			if (categoryParts.length < 2) {
				return res.status(400).json({ message: 'Invalid category format' })
			}

			categoryData = categoriesData.find(
				categoryData => categoryData.link === `/${categoryParts[0]}`
			)

			if (!categoryData) {
				return res.status(404).json({ message: 'Category not found' })
			}

			const subcategoryData = categoryData.subcategories?.find(
				subcategory => subcategory.link === `/${categoryParts[1]}`
			)

			if (!subcategoryData) {
				return res.status(404).json({ message: 'Subcategory not found' })
			}

			posts = await Post.find({
				$expr: {
					$cond: {
						if: { $eq: [{ $indexOfBytes: ['$category.data', ' / '] }, -1] },
						then: {
							$eq: ['$category.label', subcategoryData?.title],
						},
						else: {
							$eq: [
								{ $arrayElemAt: [{ $split: ['$category.data', ' / '] }, -1] },
								subcategoryData?.title,
							],
						},
					},
				},
			})
		} else {
			categoryData = categoriesData.find(
				categoryData => categoryData.link === `/${category}`
			)
			if (categoryData?.title === 'Обмін') {
				posts = await Post.find({
					price: 'обмін',
				})
			} else if (categoryData?.title === 'Віддам безкоштовно') {
				posts = await Post.find({
					price: '0',
				})
			}
		}

		return res.status(200).json(posts)
	} catch (err: any) {
		return res.status(500).json({
			message: 'An error occurred while fetching the posts.',
			error: err.message,
		})
	}
})

export default router

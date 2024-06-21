import { Request, Response, Router } from 'express'
import mongoose from 'mongoose'
import Post, { IPost } from '../models/Post'

const router = Router()

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

export default router

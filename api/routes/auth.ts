import User from '../models/User'
import bcrypt from 'bcrypt'
import { Request, Response, Router } from 'express'
import jwt from 'jsonwebtoken'

const router = Router()

const secretKey = process.env.JWT_SECRET!

router.post('/', async (req: Request, res: Response) => {
	try {
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(req.body.password, salt)
		const newUser = new User({
			username: req.body.email.split('@')[0],
			email: req.body.email,
			password: hashedPassword,
		})

		const user = await newUser.save()

		const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' })

		// Установка токена в куки
		res.cookie('token', token, { httpOnly: true })

		res.status(200).json(user)
	} catch (error) {
		res.status(500).json(error)
	}
})

export default router

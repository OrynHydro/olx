import User from '../models/User'
import bcrypt from 'bcrypt'
import { Request, Response, Router } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const router = Router()

dotenv.config({ path: '.env.local' })

const secretKey = process.env.JWT_SECRET!

router.post('/register', async (req: Request, res: Response) => {
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

		res.cookie('accessToken', token, { httpOnly: true })

		res.status(200).json(user)
	} catch (error) {
		res.status(500).json(error)
	}
})

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body

		const user = await User.findOne({ email })

		if (!user) {
			return res.status(401).json('Invalid credentials')
		}

		const isPasswordValid = await bcrypt.compare(password, user.password)

		if (!isPasswordValid) {
			return res.status(401).json('Invalid credentials')
		}

		const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' })

		res.cookie('accessToken', token, { httpOnly: true })

		res.status(200).json(user)
	} catch (error) {
		res.status(500).json(error)
	}
})

export default router

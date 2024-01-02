import { Router } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/User'

const router = Router()

dotenv.config({ path: '.env.local' })

router.get('/', async (req, res) => {
	const token = req.cookies['accessToken']

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET!)

		const user = decoded as JwtPayload

		if (!user) {
			return res.status(401).json({ message: 'Unauthorized: Invalid token' })
		}

		const dbUser = await User.findById(user.userId)

		res.status(200).json(dbUser)
	} catch (error) {
		return res.status(401).json({ message: 'Unauthorized: Invalid token' })
	}
})

export default router

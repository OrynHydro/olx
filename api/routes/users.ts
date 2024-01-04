import { Router } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/User'

const router = Router()

dotenv.config({ path: '.env.local' })

const secretKeyAccess = process.env.JWT_SECRET_ACCESS!
const secretKeyRefresh = process.env.JWT_SECRET_REFRESH!

router.get('/', async (req, res) => {
	const accessToken = req.cookies['accessToken']
	const refreshToken = req.cookies['refreshToken']

	try {
		const decodedAccessToken = jwt.verify(accessToken, secretKeyAccess)

		const user = decodedAccessToken as JwtPayload

		if (!user) {
			return res.status(401).json('Unauthorized: Invalid access token')
		}

		const dbUser = await User.findById(user.userId)
		return res.status(200).json(dbUser)
	} catch (accessTokenError) {
		try {
			const decodedRefreshToken = jwt.verify(refreshToken, secretKeyRefresh)

			const user = decodedRefreshToken as JwtPayload

			if (!user) {
				return res.status(401).json('Unauthorized: Invalid refresh token')
			}

			const newAccessToken = jwt.sign(
				{ userId: user.userId },
				secretKeyAccess,
				{ expiresIn: '1h' }
			)

			res.cookie('accessToken', newAccessToken, { httpOnly: false })

			const dbUser = await User.findById(user.userId)
			return res.status(200).json(dbUser)
		} catch (refreshTokenError) {
			return res
				.status(401)
				.json('Unauthorized: Invalid access and refresh tokens')
		}
	}
})

export default router

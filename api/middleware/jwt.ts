import jwt from 'jsonwebtoken'

const secretKey = process.env.JWT_SECRET!

export const authenticateToken = (req, res, next) => {
	const token = req.cookies.token

	if (!token) {
		return res.sendStatus(401)
	}

	jwt.verify(token, secretKey, (err, user) => {
		if (err) {
			return res.sendStatus(403)
		}

		req.user = user
		next()
	})
}

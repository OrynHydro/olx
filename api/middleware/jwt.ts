import { Request, Response, NextFunction } from 'express'
import jwt, { VerifyErrors } from 'jsonwebtoken'

const secretKey = process.env.JWT_SECRET!

export const authenticateToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const token = req.cookies.token

	if (!token) {
		return res.sendStatus(401)
	}

	jwt.verify(token, secretKey, (err: VerifyErrors | null, user: any) => {
		if (err) {
			return res.sendStatus(403)
		}

		// Теперь TypeScript знает о свойстве user на объекте Request
		req.user = user
		next()
	})
}

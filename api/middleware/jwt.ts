import { Request, Response, NextFunction } from 'express'
import jwt, { VerifyErrors } from 'jsonwebtoken'
import { IUser } from '../models/User'

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

	jwt.verify(token, secretKey, (err: VerifyErrors | null, decoded: any) => {
		if (err) {
			return res.sendStatus(403)
		}

		const user = decoded as IUser
		req.user = user
		next()
	})
}

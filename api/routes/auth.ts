import User from '../models/User'
import bcrypt from 'bcrypt'
import { Request, Response, Router } from 'express'

const router = Router()

router.post('/', async (req: Request, res: Response) => {
	res.send('Auth route')
})

export default router

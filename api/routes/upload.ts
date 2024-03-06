import { Request, Response, Router } from 'express'
import upload from '../middleware/multer-storage'

const router = Router()

router.post('/', upload.array('files'), (req: Request, res: Response) => {
	try {
		return res.status(200).json('Files uploaded successfully.')
	} catch (err) {
		console.log(err)
	}
})

export default router

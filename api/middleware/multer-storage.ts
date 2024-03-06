import { Request } from 'express'
import multer from 'multer'

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const storage = multer.diskStorage({
	destination: (
		req: Request,
		file: Express.Multer.File,
		cb: DestinationCallback
	): void => {
		cb(null, './public/images/storage')
	},
	filename: (
		req: Request,
		file: Express.Multer.File,
		cb: FileNameCallback
	): void => {
		cb(null, file.originalname)
	},
})

const upload = (module.exports = multer({ storage }))

export default upload

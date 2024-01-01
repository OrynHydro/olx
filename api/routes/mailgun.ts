import { Request, Response, Router } from 'express'
import mg from 'mailgun-js'
import dotenv from 'dotenv'
import { GenerateCode } from '../middleware/generate-code'

const router = Router()

dotenv.config({ path: '.env.local' })

const mailgunConfig = {
	apiKey: process.env.MAILGUN_API_KEY!,
	domain: process.env.MAILGUN_DOMAIN!,
}

const mailgun = () => mg(mailgunConfig)

router.post('/', async (req: Request, res: Response) => {
	const receiver = req.body.receiver

	const code = GenerateCode(6)

	const emailInfo = {
		from: '"orynhydro" <oreshnikovvl@gmail.com>',
		to: `${receiver}`,
		subject: 'Verification code',
		html: `
			<div style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; padding: 20px; text-align: center;">
			<h1 style="color: #333333;">Verification Code</h1>
			<p style="font-size: 16px; color: #666666;">Dear ${receiver.split('@')[0]},</p>
			<p style="font-size: 18px; color: #333333;">Your verification code is:</p>
			<h2 style="color: #4285f4; background-color: #ebebeb; padding: 10px; border-radius: 8px; display: inline-block;">
				${code}
			</h2>
			<p style="font-size: 16px; color: #666666;">Best regards,<br>orynhydro</p>
			</div>
		`,
	}

	mailgun()
		.messages()
		.send(emailInfo, (error, body) => {
			if (error) {
				console.log(error)
				res.status(500).json('Error sending email')
			} else {
				res.status(200).json(code)
			}
		})
})

export default router

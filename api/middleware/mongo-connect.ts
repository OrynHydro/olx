import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config({ path: '.env.local' })

export const MongoConnect = () => {
	mongoose
		.connect(process.env.MONGO_URL!)
		.then(() => {
			console.log('Connected to MongoDB')
		})
		.catch(error => {
			console.error('Error connecting to MongoDB: ', error)
		})
}

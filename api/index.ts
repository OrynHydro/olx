import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

import authRoute from './routes/auth'

// app config

const app: Application = express()
const port = 8800

// Middleware

dotenv.config({ path: '.env.local' })
app.use(cors())
app.use(express.json())
app.use(cookieParser())

// DB connection

mongoose
	.connect(process.env.MONGO_URL!)
	.then(() => {
		console.log('Connected to MongoDB')
	})
	.catch(error => {
		console.error('Error connecting to MongoDB: ', error)
	})

// Routes

app.use('/auth', authRoute)

app.listen(port, () => console.log(`Server is running on port ${port}`))

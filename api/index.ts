import express, { Application } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { MongoConnect } from './middleware/mongo-connect'

// Routes import

import authRoute from './routes/auth'
import mailgunRoute from './routes/mailgun'

// app config

const app: Application = express()
const port = 8800

// Middleware

app.use(cors())
app.use(express.json())
app.use(cookieParser())

// DB connection

MongoConnect()

// Routes

app.use('/auth', authRoute)
app.use('/mailgun', mailgunRoute)

app.listen(port, () => console.log(`Server is running on port ${port}`))

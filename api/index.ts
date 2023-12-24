import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

import authRoute from './routes/auth'

const app: Express = express()
const port = 8800

// app.use(express.json())

app.use('/auth', authRoute)

app.listen(port, () => console.log(`Server is running on port ${port}`))

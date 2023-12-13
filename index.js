import express from "express"
import * as dotenv from 'dotenv'
import compression from 'compression'
import { connectDB } from './configs/connectDB.js'
import cors from 'cors'

import postRouter from "./routes/postRouter.js"
import aiRouter from './routes/aiRouter.js'

dotenv.config()

const app = express()
app.use(compression())
app.use(cors())

app.use(express.json({ limit: '50mb' }))

const $PORT = process.env.PORT || 3001

app.use('/api/v1/post', postRouter)
app.use('/api/v1/ai', aiRouter)
 
async function start() {
    try {
        await connectDB(process.env.DATABASE_URL)
        app.listen($PORT, () => console.log(`Server has been started on port ${$PORT}`))
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()


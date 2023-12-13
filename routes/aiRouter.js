import express from 'express'
import * as dotenv from 'dotenv'
import AiController from '../controllers/ai-controller.js'
import { checkPrompt } from '../middlewares/check-prompt.js'

dotenv.config()

const router = express.Router()

router.post('/create', checkPrompt, AiController.generateNewImage)

export default router
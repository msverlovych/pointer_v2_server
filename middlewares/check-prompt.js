import { MISSING_PROMOT_ERROR } from '../constants/index.js'

export const checkPrompt = (req, res, next) => {
    const { prompt } = req.body
    if (!prompt) return res.status(400).json({ message: MISSING_PROMOT_ERROR })

    next()
}
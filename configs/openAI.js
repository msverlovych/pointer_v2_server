import { OpenAIApi, Configuration } from 'openai'

const aiConfig = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY
})

export const openAi = new OpenAIApi(aiConfig)
import { openAi } from '../configs/openAI.js'

class AiService {
    async GenerateImage(prompt, size) {
        const aiResponse = await openAi.createImage({
            model: "dall-e-3",
            quality: 'standard',
            prompt,
            n: 1,
            size,
            response_format: 'b64_json'
        })

        return aiResponse.data.data[0].b64_json
    }
}

export default new AiService()
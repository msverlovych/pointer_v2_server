import { 
    CREATED_NEW_POINT_SUCCESS, 
    LIMIT_REQUEST_IMAGE_ERROR, 
    DEFAULT_IMAGE_LINK, 
    UNABLE_GENERATE_IMAGE,
    GLOBAL_ERROR
} from "../constants/index.js"
import AiService from '../services/ai-service.js'

class AiController {
    async generateNewImage(req, res) {
        try {
            const { prompt, size } = req.body
            const generatedImage = await AiService.GenerateImage(prompt, size)

            return res.status(201).json({ message: CREATED_NEW_POINT_SUCCESS, image: generatedImage }) 
        } catch (error) {
            if (error?.response) {
                const statusCode = error.response.status

                switch (statusCode) {
                    case 429:
                        return res.status(429).json({ message: LIMIT_REQUEST_IMAGE_ERROR, image: DEFAULT_IMAGE_LINK })
                        break;
                
                    case 400:
                        return res.status(400).json({ message: UNABLE_GENERATE_IMAGE, image: DEFAULT_IMAGE_LINK })
                        break;    
                    default:
                        return res.json({ message: GLOBAL_ERROR, image: DEFAULT_IMAGE_LINK })
                        break;
                }
            }
        }  
    }
}

export default new AiController()
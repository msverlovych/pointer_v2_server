import { cloudinaryConfig } from '../configs/cloudinary.js'
import { v2 as cloudinary } from 'cloudinary'

cloudinaryConfig()

class CloudinaryService {
    async uploadImage(image, prompt) {
        const dashedPromptName = prompt.replace(/\s+/g, '-').toLowerCase()

        const imageUrl = await cloudinary.uploader.upload(image, { 
            folder: `${process.env.CLOUDINARY_PUBLIC_ID_PREFIX}/store`,
            use_filename: true,
            filename_override: dashedPromptName,
            unique_filename: false,
            overwrite: true,
            format: 'webp'
        })

        return { imageUrl: imageUrl.secure_url, width: imageUrl.width, height: imageUrl.height }
    }
}

export default new CloudinaryService()
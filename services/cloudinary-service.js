import { cloudinaryConfig } from '../configs/cloudinary.js'
import { v2 as cloudinary } from 'cloudinary'

cloudinaryConfig()

class CloudinaryService {
    async uploadImage(image) {
        const imageUrl = await cloudinary.uploader.upload(image, { 
            folder: `${process.env.CLOUDINARY_PUBLIC_ID_PREFIX}/store`,
            use_filename: true,
            unique_filename: false,
            overwrite: true
        })

        return imageUrl.secure_url
    }
}

export default new CloudinaryService()
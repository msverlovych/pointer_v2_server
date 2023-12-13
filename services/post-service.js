import CloudinaryService from '../services/cloudinary-service.js'
import Post from '../models/index.js'
import { DEFAULT_IMAGE_LINK } from '../constants/index.js'

class PostService {
    async GetAllPosts(cursorNumber) {
        try {
            const LIMIT = 10
            const startIndex = (cursorNumber -1) * LIMIT;
            let data

            data = await Post.aggregate([
                { $sort: { createdAt: -1 } },
                { $skip: startIndex },
                { $limit: LIMIT }
            ])

            return data
        } catch (error) {
            return error
        }
    }

    async GetPostsBySearch(searchQuery) {
        try {
            const pipeline = [
                {
                    $search: {
                        index: 'post',
                        text: {
                            query: searchQuery,
                            path: ['userName', 'prompt']
                        }
                    }
                },
                {
                    $project: {
                        _id: true,
                        userName: true,
                        prompt: true,
                        image: true,
                        createdAt: true
                    }
                },
                { $sort: { createdAt: -1 } }
            ]

            let data
            data = await Post.aggregate(pipeline)

            return data
        } catch (error) {
            return error
        }
    }

    async CreatePost(userName, prompt, image) {
        try {
            const imgUrl = await CloudinaryService.uploadImage(image, userName)
            await Post.create({
                userName,
                prompt,
                image: imgUrl ? imgUrl : DEFAULT_IMAGE_LINK
            })
        } catch (error) {
            return error
        }
    }
}

export default new PostService()
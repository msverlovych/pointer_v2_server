import CloudinaryService from '../services/cloudinary-service.js'
import Post from '../models/index.js'
import { DEFAULT_IMAGE_LINK } from '../constants/index.js'

class PostService {
    async GetAllPosts(cursorNumber) {
        try {
            const LIMIT = 10
            const startIndex = (cursorNumber -1) * LIMIT;
            let data

            const pipeline = [
                {
                    $project: {
                        _id: true,
                        userName: true,
                        prompt: true,
                        image: true,
                        createdAt: true
                    }
                },
                { $sort: { createdAt: -1 } },
                { $skip: startIndex },
                { $limit: LIMIT }
            ]

            data = await Post.aggregate(pipeline)

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
            const { imageUrl, width, height } = await CloudinaryService.uploadImage(image, prompt)
            await Post.create({
                userName,
                prompt,
                image: { url: imageUrl ? imageUrl : DEFAULT_IMAGE_LINK, width, height }
            })
        } catch (error) {
            return error
        }
    }
}

export default new PostService()
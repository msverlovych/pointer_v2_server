import { GLOBAL_ERROR, UNABLE_CREATE_POST, CREATED_NEW_POST_SUCCESS, NO_POST_FOUND_ERROR } from "../constants/index.js"
import PostService from '../services/post-service.js'

class PostController {
    async getAllPosts(req, res) {
        const { cursor } = req.query
        if (!cursor) return res.status(400).json({ success: false, message: GLOBAL_ERROR })

        const cursorNumber = parseInt(cursor) || 1
        const data = await PostService.GetAllPosts(cursorNumber)
        if (!data) return res.status(404).json({ success: false, message: NO_POST_FOUND_ERROR })

        return res.status(200).json({ success: true, data })
    }

    async getPostsBySearch(req, res) {
        const { searchQuery } = req.query
        if (!searchQuery) return res.status(400).json({ success: false, message: GLOBAL_ERROR })

        const data = await PostService.GetPostsBySearch(searchQuery)
        if (!data) return res.status(404).json({ success: false, message: NO_POST_FOUND_ERROR })

        return res.status(200).json({ success: true, data })
    }

    async createPost(req, res) {
        try {
            const { userName, prompt, image } = req.body
            await PostService.CreatePost(userName, prompt, image)
    
            return res.status(201).json({ message: CREATED_NEW_POST_SUCCESS })
        } catch (error) {
            return res.status(500).json({ success: false, message: UNABLE_CREATE_POST })
        }
    }
}

export default new PostController()
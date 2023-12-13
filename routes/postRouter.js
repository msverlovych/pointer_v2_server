import express from 'express'
import * as dotenv from 'dotenv'
import PostController from '../controllers/post-controller.js'

dotenv.config()

const router = express.Router()

router.get('/posts', PostController.getAllPosts)
router.get('/posts/search', PostController.getPostsBySearch)
router.post('/create', PostController.createPost)

export default router
import mongoose from "mongoose"

const Post = new mongoose.Schema({
    userName: { type: String, required: true },
    prompt: { type: String, required: true },
    image: { type: String, required: true }
}, { timestamps: true })

export default mongoose.model('Post', Post)
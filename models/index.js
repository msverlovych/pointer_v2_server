import mongoose from "mongoose"

const Post = new mongoose.Schema({
    userName: { type: String, required: true },
    prompt: { type: String, required: true },
    image: { 
        url: { type: String, required: true },
        height: { type: Number, required: true },
        width: { type: Number, required: true },
    }
}, { timestamps: true })

export default mongoose.model('Post', Post)
import mongoose from "mongoose"

export const connectDB = async (url) => {
    mongoose.set('strictQuery', true)
    await mongoose.connect(url)
        .then(() => console.log('Connected to mongodb'))
        .catch((err) => {
            console.error('failed to connect with mongo')
            console.error(err)
        })
}
import mongoose from "mongoose"

const connectDb = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connection succedd")
    } catch (error) {
        console.log("DB connection failed", error)
    }
}

export default connectDb;
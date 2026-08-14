import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    content: {
        type: String,
        required: [true, "Content is required"]
    }
}, {timestamps: true})

const noteModel = mongoose.model("notes", noteSchema)

export default noteModel;
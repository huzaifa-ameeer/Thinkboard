import express from "express"
import notesRouter from "./src/routes/notesRoutes.js"

const app = express();

const port = process.env.PORT || 3000

app.use(express.json())
app.use("/api/notes", notesRouter)

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDb from "./src/config/db.js";
import notesRouter from "./src/routes/notes.routes.js";
import rateLimiter from "./src/middlewares/rateLimiter.js";
import cors from "cors";

const app = express();

const port = process.env.PORT || 3000;

connectDb();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

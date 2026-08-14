import express from "express";
import {
  deleteNote,
  getAllNotes,
  postNote,
  getNoteById,
  updateNote,
} from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", postNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;

import express from "express";
import {
  deleteNote,
  getNote,
  postNote,
  updateNote,
} from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/", getNote);

router.post("/", postNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;

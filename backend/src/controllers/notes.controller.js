import noteModel from "../models/notes.model.js";

export const getNote = async (req, res) => {
  try {
    const notes = await noteModel.find({});
    res.status(200).json({
      message: "Notes fetched successfully",
      notes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const postNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await noteModel.create({
      title,
      content,
    });
    res.status(201).json({
      message: "Note created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = await noteModel.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      {
        new: true,
      },
    );
    if (!newNote) {
      return res.status(404).json({
        message: "Note not found",
      });
    }
    res.status(200).json({
      message: "Note updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await noteModel.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({
        message: "Note not found",
      });
    }
    res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

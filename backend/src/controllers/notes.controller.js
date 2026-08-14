import noteModel from "../models/notes.model";

export const getNote = async (req, res) => {
  try {
    const notes = await noteModel.find({});
    res.status(200).json({
      message: "Notes fetched successfully",
      notes,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const postNote = async (req, res) => {
  
};

export const updateNote = async (req, res) => {
  res.status(200).json({
    message: "Note updated successfully",
  });
};

export const deleteNote = async (req, res) => {
  res.status(200).json({
    message: "Note deleted successfully",
  });
};

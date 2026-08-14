export const getNote = async (req, res) => {
    res.status(200).json({
    message: "Note fetched successfully",
  });
};

export const postNote = async (req, res) => {
    res.status(201).json({
    message: "Note created successfully",
  });
}

export const updateNote = async (req, res) => {
    res.status(200).json({
    message: "Note updated successfully",
  });
}

export const deleteNote = async (req, res) => {
    res.status(200).json({
    message: "Note deleted successfully",
  });
}
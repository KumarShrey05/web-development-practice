export const validateStudentId = (req, res, next) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: "Invalid student ID",
    });
  }

  next();
};
const express = require("express");

const {
  getAllTeachers,
  addTeacher,
  getTeacher,
  editTeacher,
  deleteTeacher,
} = require("../controllers/teacher.controller");

const teacherRouter = express.Router();

teacherRouter.get("/", async (req, res) => {
  try {
    const allTeachers = await getAllTeachers();
    res.status(200).json({
      message: "All teachers fetched successfully",
      teachers: allTeachers,
    });
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch all teachers", error });
  }
});

teacherRouter.post("/", async (req, res) => {
  try {
    const newTeacher = await addTeacher(req.body);
    if (newTeacher) {
      res.status(201).json({
        message: "New teacher added successfully",
        teacher: newTeacher,
      });
    } else {
      res.status(404).json({ error: "Error adding new teacher" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to add new teacher", error });
  }
});

teacherRouter.get("/:teacherName", async (req, res) => {
  try {
    const searchedTeacher = await getTeacher(req.params.teacherName);
    if (searchedTeacher) {
      res.status(200).json({
        message: "Teacher fetched successfully",
        teacher: searchedTeacher,
      });
    } else {
      res.status(404).json({ error: "Teacher not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch teacher", error });
  }
});

teacherRouter.put("/:teacherId", async (req, res) => {
  try {
    const updatedTeacher = await editTeacher(req.params.teacherId, req.body);
    if (updatedTeacher) {
      res.status(200).json({
        message: "Updated teacher successfully",
        teacher: updatedTeacher,
      });
    } else {
      res.status(404).json({ error: "Teacher not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to update teacher", error });
  }
});

teacherRouter.delete("/:teacherId", async (req, res) => {
  try {
    const deletedTeacher = await deleteTeacher(req.params.teacherId);
    if (deletedTeacher) {
      res.status(200).json({
        message: "Deleted teacher successfully",
        teacher: deletedTeacher,
      });
    } else {
      res.status(404).json({ error: "Teacher not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to delete teacher:", error });
  }
});

module.exports = teacherRouter;

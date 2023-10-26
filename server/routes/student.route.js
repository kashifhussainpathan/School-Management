const express = require("express");

const {
  getAllStudents,
  addStudent,
  getStudent,
  editStudent,
  deleteStudent,
} = require("../controllers/student.controller");

const studentRouter = express.Router();

studentRouter.get("/", async (req, res) => {
  try {
    const allStudents = await getAllStudents();
    res.status(200).json({
      message: "All students fetched successfully",
      students: allStudents,
    });
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch all students", error });
  }
});

studentRouter.post("/", async (req, res) => {
  try {
    const newStudent = await addStudent(req.body);
    if (newStudent) {
      res.status(201).json({
        message: "New student added successfully",
        student: newStudent,
      });
    } else {
      res.status(404).json({ error: "Error adding new student" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to add new student", error });
  }
});

studentRouter.get("/:studentName", async (req, res) => {
  try {
    const searchedStudent = await getStudent(req.params.studentName);
    if (searchedStudent) {
      res.status(200).json({
        message: "Student fetched successfully",
        student: searchedStudent,
      });
    } else {
      res.status(404).json({ error: "Student not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch student", error });
  }
});

studentRouter.put("/:studentId", async (req, res) => {
  try {
    const updatedStudent = await editStudent(req.params.studentId, req.body);
    if (updatedStudent) {
      res.status(200).json({
        message: "Updated student successfully",
        student: updatedStudent,
      });
    } else {
      res.status(404).json({ error: "Student not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to update student", error });
  }
});

studentRouter.delete("/:studentId", async (req, res) => {
  try {
    const deletedStudent = await deleteStudent(req.params.studentId);
    if (deletedStudent) {
      res.status(200).json({
        message: "Deleted student successfully",
        student: deletedStudent,
      });
    } else {
      res.status(404).json({ error: "Student not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to delete student:", error });
  }
});

module.exports = studentRouter;

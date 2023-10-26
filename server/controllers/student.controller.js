const mongoose = require("mongoose");
const fs = require("fs");

const jsonData = fs.readFileSync("./data/student.json");
const studentData = JSON.parse(jsonData);

const Student = require("../models/student.model");

const seedStudentDatabase = async () => {
  try {
    for (const student of studentData) {
      const newStudent = new Student(student);
      await newStudent.save();
      console.log(`Student ${student.name} seeded`);
    }
    console.log("Student database seeded successfully");
  } catch (error) {
    console.log("Error seeding student database:", error);
  } finally {
    mongoose.disconnect();
  }
};

const getAllStudents = async () => {
  try {
    const allStudents = await Student.find();
    console.log("All students:", allStudents);
    return allStudents;
  } catch (error) {
    console.error("Error fetching all students:", error);
  }
};

const addStudent = async (student) => {
  try {
    const newStudent = new Student(student);
    const addedStudent = await newStudent.save();
    if (addedStudent) {
      console.log("New student added:", addedStudent);
      return addedStudent;
    } else {
      console.log(`Couldn't add new student`);
    }
  } catch (error) {
    console.log("Error adding new student:", error);
  }
};

const editStudent = async (studentId, student) => {
  try {
    const editedStudent = await Student.findByIdAndUpdate(studentId, student, {
      new: true,
    });
    if (editedStudent) {
      console.log("Updated student:", editedStudent);
      return editedStudent;
    } else {
      console.log(`Couldn't update student`);
    }
  } catch (error) {
    console.log("Error updating student:", error);
  }
};

const deleteStudent = async (studentId) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(studentId);
    if (deletedStudent) {
      console.log("Student deleted successfully:", deletedStudent);
      return deletedStudent;
    } else {
      console.log("Student not found");
    }
  } catch (error) {
    console.log("Error deleting student:", error);
  }
};

const getStudent = async (studentName) => {
  try {
    const searchedStudent = await Student.findOne({ name: studentName });
    if (searchedStudent) {
      console.log("Student fetched successfully:", searchedStudent);
      return searchedStudent;
    } else {
      console.log("Student not found");
    }
  } catch (error) {
    console.log("Error fetching student:", error);
  }
};

module.exports = {
  seedStudentDatabase,
  getAllStudents,
  addStudent,
  editStudent,
  deleteStudent,
  getStudent,
};

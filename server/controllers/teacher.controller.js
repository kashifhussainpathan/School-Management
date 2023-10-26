const mongoose = require("mongoose");
const fs = require("fs");

const jsonData = fs.readFileSync("./data/teacher.json");
const teacherData = JSON.parse(jsonData);

const Teacher = require("../models/teacher.model");

const seedTeacherDatabase = async () => {
  try {
    for (const teacher of teacherData) {
      const newTeacher = new Teacher(teacher);
      await newTeacher.save();
      console.log(`Teacher ${teacher.name} seeded`);
    }
    console.log("Teacher database seeded successfully");
  } catch (error) {
    console.log("Error seeding teacher database:", error);
  } finally {
    mongoose.disconnect();
  }
};

const getAllTeachers = async () => {
  try {
    const allTeachers = await Teacher.find();
    console.log("All teachers:", allTeachers);
    return allTeachers;
  } catch (error) {
    console.error("Error fetching all teachers:", error);
  }
};

const addTeacher = async (teacher) => {
  try {
    const newTeacher = new Teacher(teacher);
    const addedTeacher = await newTeacher.save();
    if (addedTeacher) {
      console.log("New teacher added:", addedTeacher);
      return addedTeacher;
    } else {
      console.log(`Couldn't add new teacher`);
    }
  } catch (error) {
    console.log("Error adding new teacher:", error);
  }
};

const editTeacher = async (teacherId, teacher) => {
  try {
    const editedTeacher = await Teacher.findByIdAndUpdate(teacherId, teacher, {
      new: true,
    });
    if (editedTeacher) {
      console.log("Updated teacher:", editedTeacher);
      return editedTeacher;
    } else {
      console.log(`Couldn't update teacher`);
    }
  } catch (error) {
    console.log("Error updating teacher:", error);
  }
};

const deleteTeacher = async (teacherId) => {
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(teacherId);
    if (deletedTeacher) {
      console.log("Teacher deleted successfully:", deletedTeacher);
      return deletedTeacher;
    } else {
      console.log("Teacher not found");
    }
  } catch (error) {
    console.log("Error deleting teacher:", error);
  }
};

const getTeacher = async (teacherName) => {
  try {
    const searchedTeacher = await Teacher.findOne({ name: teacherName });
    if (searchedTeacher) {
      console.log("Teacher fetched successfully:", searchedTeacher);
      return searchedTeacher;
    } else {
      console.log("Teacher not found");
    }
  } catch (error) {
    console.log("Error fetching teacher:", error);
  }
};

module.exports = {
  seedTeacherDatabase,
  getAllTeachers,
  addTeacher,
  editTeacher,
  deleteTeacher,
  getTeacher,
};

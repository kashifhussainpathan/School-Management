// AddStudent.js
import React, { useState } from "react";

import StudentForm from "./StudentForm";
import { useDispatch, useSelector } from "react-redux";
import { addStudentAsync } from "../../features/students/studentApi";

function AddStudent({ setShowStudentForm }) {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const [student, setStudent] = useState({
    name: "",
    age: "",
    grade: "",
    class: "",
    gender: "",
    attendance: "",
    marks: "",
  });

  const handleStudentInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    dispatch(addStudentAsync(student));
    setShowStudentForm(false);
    setStudent({
      name: "",
      age: 0,
      grade: "",
      class: "",
      gender: "",
      attendance: 0,
      marks: 0,
    });
  };

  return (
    <div>
      <StudentForm
        student={student}
        inputChangeHandler={handleStudentInputChange}
        submitHandler={handleAddStudent}
      />
    </div>
  );
}

export default AddStudent;

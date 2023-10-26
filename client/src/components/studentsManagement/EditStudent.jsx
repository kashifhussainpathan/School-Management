import React, { useState } from "react";
import { useDispatch } from "react-redux";

import StudentForm from "./StudentForm";
import { updateStudentAsync } from "../../features/students/studentApi";

const EditStudent = ({ student, setShowStudentEditForm }) => {
  const dispatch = useDispatch();
  const [studentDetails, setStudentDetails] = useState(student);

  const handleStudentInputEdit = (e) => {
    const { name, value } = e.target;
    setStudentDetails({ ...student, [name]: value });
  };

  const handleEditStudent = (e) => {
    e.preventDefault();
    dispatch(
      updateStudentAsync({ id: student._id, updatedStudent: studentDetails })
    );
    setShowStudentEditForm(false);
    setStudentDetails({
      name: "",
      age: 0,
      grade: "",
      gender: "",
      attendance: 0,
      marks: 0,
    });
  };

  return (
    <div>
      <StudentForm
        student={studentDetails}
        submitHandler={handleEditStudent}
        inputChangeHandler={handleStudentInputEdit}
        edit
      />
    </div>
  );
};

export default EditStudent;

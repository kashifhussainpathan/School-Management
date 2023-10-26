import React, { useState } from "react";

import TeacherForm from "./TeacherForm";
import { useDispatch, useSelector } from "react-redux";
import { addTeacherAsync } from "../../features/teachers/teacherApi";

const AddTeacher = ({ setShowTeacherForm }) => {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers.teachers);
  const [teacher, setTeacher] = useState({
    name: "",
    subject: "",
    contact: "",
  });

  const handleTeacherInputChange = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };

  const handleAddTeacher = (e) => {
    e.preventDefault();
    dispatch(addTeacherAsync(teacher));
    setTeacher({ name: "", subject: "", contact: "" });
    setShowTeacherForm(false);
  };

  return (
    <div>
      <TeacherForm
        teacher={teacher}
        submitHandler={handleAddTeacher}
        inputChangehandler={handleTeacherInputChange}
      />
    </div>
  );
};

export default AddTeacher;

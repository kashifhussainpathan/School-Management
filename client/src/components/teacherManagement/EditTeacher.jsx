import React, { useState } from "react";

import TeacherForm from "./TeacherForm";
import { useDispatch } from "react-redux";
import { updateTeacherAsync } from "../../features/teachers/teacherApi";

const EditTeacher = ({ teacher, setShowTeacherEditForm }) => {
  const dispatch = useDispatch();
  const [teacherDetails, setTeacherDetails] = useState(teacher);

  const handleTeacherInputEdit = (e) => {
    const { name, value } = e.target;
    setTeacherDetails({ ...teacherDetails, [name]: value });
  };

  const handleEditTeacher = (e) => {
    e.preventDefault();
    dispatch(
      updateTeacherAsync({ id: teacher._id, updatedTeacher: teacherDetails })
    );
    setShowTeacherEditForm(false);
    setTeacherDetails({
      name: "",
      subject: "",
      contact: "",
    });
  };
  return (
    <div>
      <TeacherForm
        teacher={teacherDetails}
        submitHandler={handleEditTeacher}
        inputChangehandler={handleTeacherInputEdit}
        edit
      />
    </div>
  );
};

export default EditTeacher;

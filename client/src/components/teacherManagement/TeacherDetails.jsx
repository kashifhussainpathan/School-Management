import "./teacherManagement.css";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EditTeacher from "./EditTeacher";
import { useDispatch, useSelector } from "react-redux";
import { deleteTeacherAsync } from "../../features/teachers/teacherApi";

const TeacherDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { teacherId } = useParams();
  const [showTeacherEditForm, setShowTeacherEditForm] = useState(false);

  const teacher = useSelector((state) =>
    state.teachers.teachers.find((t) => t._id === teacherId)
  );

  const handleDeleteTeacher = () => {
    dispatch(deleteTeacherAsync(teacher._id));
    navigate("/teachers");
  };

  if (!teacher) {
    return <div>Teacher not found</div>;
  }

  return (
    <div>
      {showTeacherEditForm && (
        <div className="teacherFormModal">
          <div
            className="overlay"
            onClick={() => setShowTeacherEditForm(false)}
          ></div>
          <div className="modal">
            <EditTeacher
              teacher={teacher}
              setShowTeacherEditForm={setShowTeacherEditForm}
            />
          </div>
        </div>
      )}

      <div className="teacher-details">
        <h3>{teacher.name}'s Details</h3>
        <ul>
          <li>
            Name: <span>{teacher.name} </span>
          </li>
          <li>
            Subject: <span>{teacher.subject} </span>
          </li>
          <li>
            Contact: <span>{teacher.contact}</span>
          </li>
        </ul>

        <button onClick={() => setShowTeacherEditForm(true)}>
          Edit Teacher
        </button>
        <button onClick={handleDeleteTeacher}>Delete Teacher</button>
      </div>
    </div>
  );
};

export default TeacherDetails;

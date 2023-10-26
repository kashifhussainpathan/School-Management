import "./teacherManagement.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import AddTeacher from "./AddTeacher";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../features/teachers/teacherApi";

const TeachersList = () => {
  const dispatch = useDispatch();
  const [showTeacherForm, setShowTeacherForm] = useState(false);
  const { teachers, status } = useSelector(({ teachers }) => teachers);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTeachers());
    }
  }, [status, dispatch]);

  return (
    <div>
      <div className="teachers">
        <h3>Teachers :</h3>
        <div>
          <ol>
            {status === "loading"
              ? "loading..."
              : teachers.map(({ _id, name }) => (
                  <li className="teacher" key={_id}>
                    <Link to={`/teachers/${_id}`}>{name} </Link>
                  </li>
                ))}
          </ol>
        </div>

        <button onClick={() => setShowTeacherForm(true)}>Add Teacher</button>
      </div>

      {showTeacherForm && (
        <div className="teacherFormModal">
          <div
            className="overlay"
            onClick={() => setShowTeacherForm(false)}
          ></div>
          <div className="modal">
            <AddTeacher setShowTeacherForm={setShowTeacherForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TeachersList;

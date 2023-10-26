import "./studentManagement.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AddStudent from "./AddStudent";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../features/students/studentApi";

const StudentsList = () => {
  const dispatch = useDispatch();
  const [showStudentForm, setShowStudentForm] = useState(false);
  const { students, status } = useSelector(({ students }) => students);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStudents());
    }
  }, [status, dispatch]);

  return (
    <div>
      <div className="students">
        <h3>Students :</h3>

        <div>
          <ol className="student">
            {status === "loading"
              ? "loading..."
              : students.map(({ _id, name }) => (
                  <li key={_id}>
                    <Link to={`/students/${_id}`}> {name}</Link>
                  </li>
                ))}
          </ol>
        </div>

        <button onClick={() => setShowStudentForm(true)}>Add Student</button>
      </div>

      {showStudentForm && (
        <div className="studentFormModal">
          <div
            className="overlay"
            onClick={() => setShowStudentForm(false)}
          ></div>
          <div className="modal">
            <AddStudent setShowStudentForm={setShowStudentForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsList;

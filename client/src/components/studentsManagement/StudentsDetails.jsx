import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EditStudent from "./EditStudent";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudentAsync } from "../../features/students/studentApi";

const StudentsDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { studentId } = useParams();
  const [showStudentEditForm, setShowStudentEditForm] = useState(false);

  const student = useSelector((state) =>
    state.students.students.find((s) => s._id === studentId)
  );

  const handleDelete = (id) => {
    dispatch(deleteStudentAsync(id));
    navigate("/students");
  };

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div>
      {showStudentEditForm && (
        <div className="teacherFormModal">
          <div
            className="overlay"
            onClick={() => setShowStudentEditForm(false)}
          ></div>
          <div className="modal">
            <EditStudent
              student={student}
              setShowStudentEditForm={setShowStudentEditForm}
            />
          </div>
        </div>
      )}

      <div className="student-details">
        <h3>{student.name}'s Details</h3>
        <ul>
          <li>
            Age: <span>{student.age}</span>
          </li>
          <li>
            Class: <span>{student.class} </span>
          </li>
          <li>
            Grade: <span>{student.grade} </span>
          </li>
          <li>
            Gender: <span>{student.gender} </span>
          </li>
          <li>
            Marks: <span>{student.marks}</span>
          </li>
          <li>
            Attendance: <span>{student.attendance}%</span>{" "}
          </li>
        </ul>

        <button onClick={() => setShowStudentEditForm(true)}>
          Edit Student
        </button>
        <button onClick={() => handleDelete(student._id)}>
          Delete Student
        </button>
      </div>
    </div>
  );
};

export default StudentsDetails;

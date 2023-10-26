import "./schoolView.css";
import React from "react";
import { useSelector } from "react-redux";

const SchoolView = () => {
  const students = useSelector((state) => state.students.students);

  const totalStudents = students.length;

  const totalAttendance = students.reduce(
    (acc, { attendance }) => acc + attendance,
    0
  );
  const avgAttendance = totalAttendance / totalStudents;

  const totalMarks = students.reduce((acc, { marks }) => acc + marks, 0);
  const avgMarks = totalMarks / totalStudents;

  const topStudent = students.reduce((prevTopStudent, student) => {
    if (student.marks > prevTopStudent.marks) {
      return student;
    }
    return prevTopStudent;
  }, students[0]);

  return (
    <div className="school-container">
      <div className="school">
        <div>
          <span>Total Students: </span>
          <span className="records">{totalStudents}</span>
        </div>

        <div>
          <span>Average Attendance: </span>{" "}
          <span className="records">{avgAttendance.toFixed(2)}% </span>{" "}
        </div>

        <div>
          <span>Average Marks: </span>
          <span className="records">{avgMarks.toFixed(2)} </span>
        </div>

        <div>
          <span>Top-performing Student: </span>
          <span className="records">{topStudent.name} </span>
        </div>
      </div>
    </div>
  );
};

export default SchoolView;

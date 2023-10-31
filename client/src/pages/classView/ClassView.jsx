import "./classView.css";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Filters from "../../components/filters/Filters";
import { fetchStudents } from "../../features/students/studentApi";
import { fetchTeachers } from "../../features/teachers/teacherApi";

const ClassView = () => {
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedGender, setSelectedGender] = useState("All");
  const students = useSelector((state) => state.students.students);
  const { teachers } = useSelector(({ teachers }) => teachers);

  console.log(teachers);

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const filteredStudents = students.filter((student) => {
    if (selectedClass && student.class !== selectedClass) {
      return false;
    }
    if (selectedGender !== "All" && student.gender !== selectedGender) {
      return false;
    }

    return true;
  });

  let sortedStudents = [...filteredStudents];

  if (sortBy === "name") {
    sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "age") {
    sortedStudents.sort((a, b) => a.age - b.age);
  } else if (sortBy === "attendance") {
    sortedStudents.sort((a, b) => b.attendance - a.attendance);
  } else if (sortBy === "marks") {
    sortedStudents.sort((a, b) => b.marks - a.marks);
  }

  useEffect(() => {
    if (teachers.length === 0 && students.length === 0) {
      dispatch(fetchStudents());
      dispatch(fetchTeachers());
    }
  }, [teachers, students]);

  return (
    <div className="class">
      <div className="filters">
        <Filters
          sortBy={sortBy}
          setSortBy={setSortBy}
          selectedClass={selectedClass}
          selectedGender={selectedGender}
          handleClassChange={handleClassChange}
          handleGenderChange={handleGenderChange}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Class</th>
            <th>Gender</th>
            <th>Attendance</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.class}th</td>
              <td>{student.gender}</td>
              <td>{student.attendance}%</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassView;

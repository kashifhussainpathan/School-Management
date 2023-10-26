import React from "react";
import { useSelector } from "react-redux";

const Filters = ({
  sortBy,
  setSortBy,
  selectedClass,
  selectedGender,
  handleClassChange,
  handleGenderChange,
}) => {
  const students = useSelector((state) => state.students.students);

  const uniqueClasses = students.reduce((classesArray, student) => {
    if (!classesArray.includes(student.class)) {
      classesArray.push(student.class);
    }
    return classesArray;
  }, []);

  return (
    <>
      <select value={selectedClass} onChange={handleClassChange}>
        <option value="">All Classes</option>
        {uniqueClasses.map((classValue) => (
          <option value={classValue} key={classValue}>
            Class {classValue}th
          </option>
        ))}
      </select>

      <select value={selectedGender} onChange={handleGenderChange}>
        <option value="All">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="age">Age</option>
        <option value="attendance">Attendance</option>
        <option value="marks">Marks</option>
      </select>
    </>
  );
};

export default Filters;

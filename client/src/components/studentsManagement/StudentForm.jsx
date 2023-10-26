import React from "react";

const StudentForm = ({ student, inputChangeHandler, submitHandler, edit }) => {
  const allGrades = [
    "A+",
    "A",
    "B+",
    "B",
    "C+",
    "C",
    "D+",
    "D",
    "E+",
    "E",
    "F",
  ];

  const allClasses = [
    "Std I",
    "Std II",
    "Std III",
    "Std IV",
    "Std V",
    "Std VI",
    "Std VII",
    "Std VIII",
    "Std IX",
    "Std X",
    "Std XI",
    "Std XII",
  ];

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={student.name}
          onChange={inputChangeHandler}
          placeholder="Enter student's name"
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={student.age}
          onChange={inputChangeHandler}
          placeholder="Enter student's age"
        />

        <label htmlFor="grade">Grade:</label>
        <select
          onChange={inputChangeHandler}
          value={student.grade}
          name="grade"
        >
          <option value="">Select Grade</option>
          {allGrades.map((grade) => (
            <option value={grade} key={grade}>
              {grade}
            </option>
          ))}
        </select>

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={student.gender}
          onChange={inputChangeHandler}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Transgender">Other</option>
        </select>

        <label htmlFor="class">Class:</label>
        <select
          onChange={inputChangeHandler}
          value={student.class}
          name="class"
        >
          <option value="">Select Class</option>
          {allClasses.map((className) => (
            <option value={className} key={className}>
              {className}
            </option>
          ))}
        </select>

        <label htmlFor="attendance">Attendance:</label>
        <input
          type="number"
          id="attendance"
          name="attendance"
          value={student.attendance}
          onChange={inputChangeHandler}
          placeholder="Enter attendance percentage"
        />

        <label htmlFor="marks">Marks:</label>
        <input
          type="number"
          id="marks"
          name="marks"
          value={student.marks}
          onChange={inputChangeHandler}
          placeholder="Enter student's marks"
        />

        <button type="submit">{edit ? "Edit Student" : "Add Student"}</button>
      </form>
    </div>
  );
};

export default StudentForm;

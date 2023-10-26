import React from "react";

const TeacherForm = ({ teacher, submitHandler, inputChangehandler, edit }) => {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={teacher.name}
          onChange={inputChangehandler}
          placeholder="Enter student's name"
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={teacher.subject}
          onChange={inputChangehandler}
          placeholder="Enter subject"
        />

        <label htmlFor="name">contact:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={teacher.contact}
          onChange={inputChangehandler}
          placeholder="Enter contact no."
        />

        <button type="submit">{edit ? "Edit Teacher" : "Add Teacher"}</button>
      </form>
    </div>
  );
};

export default TeacherForm;

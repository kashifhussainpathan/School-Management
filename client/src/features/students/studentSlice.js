import { createSlice } from "@reduxjs/toolkit";
import {
  addStudentAsync,
  deleteStudentAsync,
  fetchStudents,
  updateStudentAsync,
} from "./studentApi";

const initialState = {
  students: [],
  status: "idle",
  error: null,
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },

    editStudent: (state, action) => {
      const { id, updatedStudent } = action.payload;
      const studentIndex = state.students.findIndex(
        (student) => student.id === id
      );

      state.students[studentIndex] = updatedStudent;
    },

    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
  },

  extraReducers: {
    [fetchStudents.pending]: (state) => {
      state.status = "loading";
    },
    [fetchStudents.fulfilled]: (state, action) => {
      state.status = "success";
      state.students = action.payload;
    },
    [fetchStudents.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },

    [addStudentAsync.pending]: (state) => {
      state.status = "loading";
    },
    [addStudentAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.students.push(action.payload);
    },
    [addStudentAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },

    [updateStudentAsync.pending]: (state) => {
      state.status = "loading";
    },
    [updateStudentAsync.fulfilled]: (state, action) => {
      state.status = "success";
      const updatedStudent = action.payload;
      const index = state.students.findIndex(
        (student) => student._id === updatedStudent._id
      );
      if (index !== -1) {
        state.students[index] = updatedStudent;
      }
    },
    [updateStudentAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },

    [deleteStudentAsync.pending]: (state) => {
      state.status = "loading";
    },
    [deleteStudentAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.students = state.students.filter(
        (student) => student._id !== action.payload._id
      );
    },
    [deleteStudentAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export const { addStudent, editStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;

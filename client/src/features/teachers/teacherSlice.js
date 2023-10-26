import { createSlice } from "@reduxjs/toolkit";
import {
  addTeacherAsync,
  deleteTeacherAsync,
  fetchTeachers,
  updateTeacherAsync,
} from "./teacherApi";

const initialState = {
  teachers: [],
  status: "idle",
  error: null,
};

const teacherReducer = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    addTeacher: (state, action) => {
      state.teachers.push(action.payload);
    },

    editTeacher: (state, action) => {
      const { id, updatedTeacher } = action.payload;
      const teacherIndex = state.teachers.findIndex(
        (teacher) => teacher.id === id
      );

      state.teachers[teacherIndex] = updatedTeacher;
    },

    deleteTeacher: (state, action) => {
      state.teachers = state.teachers.filter(
        (teacher) => teacher.id !== action.payload
      );
    },
  },

  extraReducers: {
    [fetchTeachers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTeachers.fulfilled]: (state, action) => {
      state.status = "success";
      state.teachers = action.payload;
    },
    [fetchTeachers.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },

    [addTeacherAsync.pending]: (state) => {
      state.status = "loading";
    },
    [addTeacherAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.teachers.push(action.payload);
    },
    [addTeacherAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },

    [updateTeacherAsync.pending]: (state) => {
      state.status = "loading";
    },
    [updateTeacherAsync.fulfilled]: (state, action) => {
      state.status = "success";
      const updatedTeacher = action.payload;
      const index = state.teachers.findIndex(
        (teacher) => teacher._id === updatedTeacher._id
      );
      if (index !== -1) {
        state.teachers[index] = updatedTeacher;
      }
    },
    [updateTeacherAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },

    [deleteTeacherAsync.pending]: (state) => {
      state.status = "loading";
    },
    [deleteTeacherAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.teachers = state.teachers.filter(
        (teacher) => teacher._id !== action.payload._id
      );
    },
    [deleteTeacherAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export const { addTeacher, editTeacher, deleteTeacher } =
  teacherReducer.actions;

export default teacherReducer.reducer;

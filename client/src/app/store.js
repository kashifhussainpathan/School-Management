// store.js
import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/students/studentSlice";
import teacherReducer from "../features/teachers/teacherSlice";

const store = configureStore({
  reducer: {
    students: studentReducer,
    teachers: teacherReducer,
  },
});

export default store;

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:4000/teachers";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data.teachers;
  }
);

export const addTeacherAsync = createAsyncThunk(
  "teachers/addTeacherAsync",
  async (newTeacher) => {
    const response = await axios.post(BASE_URL, newTeacher);
    return response.data.teacher;
  }
);

export const updateTeacherAsync = createAsyncThunk(
  "teachers/updateTeacherAsync",
  async ({ id, updatedTeacher }) => {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedTeacher);
    return response.data.teacher;
  }
);

export const deleteTeacherAsync = createAsyncThunk(
  "teachers/deleteTeacherAsync",
  async (id) => {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data.teacher;
  }
);

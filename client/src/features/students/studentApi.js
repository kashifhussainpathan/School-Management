import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:4000/students";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data.students;
  }
);

export const addStudentAsync = createAsyncThunk(
  "students/addStudentAsync",
  async (newStudent) => {
    const response = await axios.post(BASE_URL, newStudent);
    return response.data.student;
  }
);

export const updateStudentAsync = createAsyncThunk(
  "students/updateStudentAsync",
  async ({ id, updatedStudent }) => {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedStudent);
    return response.data.student;
  }
);

export const deleteStudentAsync = createAsyncThunk(
  "students/deleteStudentAsync",
  async (id) => {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data.student;
  }
);

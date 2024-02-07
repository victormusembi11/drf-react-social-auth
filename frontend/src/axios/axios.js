import axios from "axios";

const baseUrl = "http://localhost:8000/";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export const axiosInstanceAuth = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

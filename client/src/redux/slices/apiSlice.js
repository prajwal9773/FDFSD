import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const API_URI =import.meta.env.VITE_APP_BASE_URL;
const API_URI = window.location.origin === "http://localhost" ? "http://localhost:8800" : "";

const baseQuery = fetchBaseQuery({ baseUrl: API_URI +"/api" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
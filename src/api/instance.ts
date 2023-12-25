import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_MOVIE_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
  }
})
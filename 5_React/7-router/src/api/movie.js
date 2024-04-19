import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});
// http://localhost:8080/api/movie
export const getMovies = async () => {
  return await instance.get("movie");
};

export const addMovie = async (data) => {
  return await instance.post("movie", data);
};

export const deleteMovie = async (no) => {
  return await instance.delete("movie/" + no);
};

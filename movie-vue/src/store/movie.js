import { getMovies, addMovie, delMovie } from "@/api/movie.js";

export default {
  state: {
    movies: [], // 영화 정보를 저장할 상태
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies; // 상태를 업데이트하는 변이
    },
    addMovie(state, movie) {
      state.movies.push(movie); // 새 영화를 상태에 추가하는 변이
    },
    removeMovie(state, no) {
      state.movies = state.movies.filter((movie) => movie.no !== no); // 영화를 상태에서 삭제하는 변이
    },
  },
  actions: {
    async fetchMovies({ commit }) {
      const response = await getMovies();
      commit("setMovies", response.data); // 변이를 호출하여 상태를 업데이트
    },
    async insertMovie({ commit }, data) {
      const response = await addMovie(data); // 영화 추가하기
      commit("addMovie", response.data); // 상태에 새 영화 추가
    },
    async deleteMovie({ commit }, no) {
      await delMovie(no); // 영화 삭제하기
      commit("removeMovie", no); // 상태에서 영화 삭제
    },
  },
};

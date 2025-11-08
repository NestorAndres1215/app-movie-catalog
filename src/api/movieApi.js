// src/api/movieApi.js
import axiosClient from "./axiosClient";

const movieApi = {
  getPopular: (page = 1) =>
    axiosClient.get(`/movie/popular`, { params: { page } }),

  getTopRated: (page = 1) =>
    axiosClient.get(`/movie/top_rated`, { params: { page } }),

  getUpcoming: (page = 1) =>
    axiosClient.get(`/movie/upcoming`, { params: { page } }),

  getById: (id) =>
    axiosClient.get(`/movie/${id}`, {
      params: { append_to_response: "videos,images,credits" }
    }),

  searchMovie: (query, page = 1) =>
    axiosClient.get(`/search/movie`, { params: { query, page } }),

  getGenres: () => axiosClient.get(`/genre/movie/list`)
};

export default movieApi;

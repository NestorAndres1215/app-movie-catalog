// src/api/movieApi.js
import axiosClient from "./axiosClient";

const movieApi = {
    // Películas
    getPopular: (page = 1) =>
        axiosClient.get(`/movie/popular`, { params: { page } }),

    getTopRated: (page = 1) =>
        axiosClient.get(`/movie/top_rated`, { params: { page } }),

    getUpcoming: (page = 1) =>
        axiosClient.get(`/movie/upcoming`, { params: { page } }),

    getById: (id) =>
        axiosClient.get(`/movie/${id}`, {
            params: { append_to_response: "videos,images,credits" },
        }),

    searchMovie: (query, page = 1) =>
        axiosClient.get(`/search/movie`, { params: { query, page } }),

    getGenres: () => axiosClient.get(`/genre/movie/list`),

    // 🔥 Tendencias (Películas y Series)
    getTrendingMovies: (time = "week") =>
        axiosClient.get(`/trending/movie/${time}`),

    getTrendingSeries: (time = "week") =>
        axiosClient.get(`/trending/tv/${time}`),

    // 🎭 Actores
    getPopularActors: (page = 1) =>
        axiosClient.get(`/person/popular`, { params: { page } }),

    getAllPopularActors: async (maxPages = 5) => {
        let allActors = [];
        for (let page = 1; page <= maxPages; page++) {
            const res = await axiosClient.get(`/person/popular`, { params: { page } });
            allActors = allActors.concat(res.data.results);
        }
        return allActors;
    },
    getActorDetails: (id) =>
        axiosClient.get(`/person/${id}`, {
            params: { append_to_response: "movie_credits,images" },
        }),

    // 🎬 Directores (Filtrar crew por job === 'Director')
    getDirectorDetails: (id) =>
        axiosClient.get(`/person/${id}`, {
            params: { append_to_response: "movie_credits" },
        }),

    // 📺 Series
    getPopularSeries: (page = 1) =>
        axiosClient.get(`/tv/popular`, { params: { page } }),

    getTopRatedSeries: (page = 1) =>
        axiosClient.get(`/tv/top_rated`, { params: { page } }),

    getSeriesById: (id) =>
        axiosClient.get(`/tv/${id}`, {
            params: { append_to_response: "videos,images,credits" },
        }),

    searchSeries: (query, page = 1) =>
        axiosClient.get(`/search/tv`, { params: { query, page } }),
};

export default movieApi;

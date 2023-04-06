import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const API_KEY = '6031aff1495aee0d83201b316a243945';

export const getTrendingMovie = () => {
  return axios
    .get(`/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data.results);
};

export const getMovieByName = query => {
  return axios
    .get(`/search/movie?api_key=${API_KEY}`, {
      params: {
        query,
      },
    })
    .then(response => response.data.results);
};

export const getMovieById = id => {
  return axios
    .get(`/movie/${id}?api_key=${API_KEY}`)
    .then(response => response.data);
};

export const getMovieCredits = id => {
  return axios
    .get(`/movie/${id}/credits?api_key=${API_KEY}`)
    .then(response => response.data.cast);
};

export const getMovieReviews = id => {
  return axios
    .get(`/movie/${id}/reviews?api_key=${API_KEY}`)
    .then(response => response.data.results);
};

export const getPoster = path => {
  return axios
    .get(`https://image.tmdb.org/t/p/w300${path}`)
    .then(response => response.config.url);
};

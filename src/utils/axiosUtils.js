import axios from "axios";

// Requests.
let moviesRequest;

export const initAxios = () => {
  // Initialize movies request.
  moviesRequest = getMovieRequest();
};

export const getMovieRequest = () => {
  if (!moviesRequest) {
    moviesRequest = axios.create({
      baseURL: process.env.TMDB_BASE_URI,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return moviesRequest;
};

// Common query string.
export const getDefaultArguments = () => {
  return new URLSearchParams({
    api_key: process.env.TMDB_KEY,
  });
};
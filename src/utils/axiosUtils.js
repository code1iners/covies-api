import axios from "axios";

// Requests.
let moviesRequest;
let tvRequest;

export const initAxios = () => {
  // Initialize movies request.
  moviesRequest = getMovieRequest();
  tvRequest = getTvRequest();
};

/**
 * ### Getting movie request.
 */
export const getMovieRequest = () => {
  if (!moviesRequest) {
    moviesRequest = axios.create({
      baseURL: `${process.env.TMDB_BASE_URI}/movie`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return moviesRequest;
};

/**
 * ### Getting tv request.
 */
export const getTvRequest = () => {
  if (!tvRequest) {
    tvRequest = axios.create({
      baseURL: `${process.env.TMDB_BASE_URI}/tv`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return tvRequest;
};

// Common query string.
export const getDefaultArguments = () => {
  return new URLSearchParams({
    api_key: process.env.TMDB_KEY,
  });
};

import axios, { AxiosInstance } from "axios";
import { URLSearchParams } from "url";

// Requests.
let moviesRequest: AxiosInstance,
  tvRequest: AxiosInstance,
  providerRequest: AxiosInstance;

export const initAxios = (): void => {
  // Initialize movies request.
  moviesRequest = getMovieRequest();
  tvRequest = getTvRequest();
  providerRequest = getProviderRequest();
};

/**
 * ### Getting movie request.
 */
export const getMovieRequest = (): AxiosInstance => {
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
export const getTvRequest = (): AxiosInstance => {
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

/**
 * ### Getting providers request.
 */
export const getProviderRequest = (): AxiosInstance => {
  if (!providerRequest) {
    providerRequest = axios.create({
      baseURL: `${process.env.TMDB_BASE_URI}/watch/providers`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return providerRequest;
};

// Common query string.
export const getDefaultArguments = (): URLSearchParams => {
  return new URLSearchParams({
    api_key: String(process.env.TMDB_KEY),
  });
};

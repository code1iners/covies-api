import { getMovieRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    populars: async (_, { page = 1 }) => {
      try {
        // Init request.
        const request = getMovieRequest();

        // Init query string.
        const queryString = new URLSearchParams({
          api_key: process.env.TMDB_KEY,
          page,
        });

        // Data fetch.
        const {
          status,
          statusText,
          data: { results },
        } = await request.get(`/movie/popular?${queryString.toString()}`);

        // Check response status
        if (status !== 200) {
          return {
            ok: false,
            error: {
              code: status,
              message: statusText,
            },
          };
        }

        return {
          ok: true,
          data: results,
        };
      } catch (error) {
        console.error("[populars]", error);
        return {
          ok: false,
          error: {
            code: 500,
            message: error?.message,
          },
        };
      }
    },
  },
};

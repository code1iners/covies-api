import { getMovieRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    moviePopulars: async (_, { page = 1, language = "ko", region }) => {
      try {
        // Init request.
        const request = getMovieRequest();

        // Init arguments.
        const queryString = new URLSearchParams({
          api_key: process.env.TMDB_KEY,
          page,
          ...(language && { language }),
          ...(region && { region }),
        });

        // Data fetch.
        const { status, statusText, data } = await request.get(
          `/popular?${queryString.toString()}`
        );

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
          data,
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

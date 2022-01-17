import { getDefaultArguments, getMovieRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    movieCredits: async (_, { movieId }) => {
      try {
        // Init request.
        const request = getMovieRequest();

        // Init argunemts.
        const args = getDefaultArguments();

        // Data fetch.
        const { status, statusText, data } = await request.get(
          `movie/${movieId}/credits?${args.toString()}`
        );

        // Response is invalid?
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
        console.error("[movieCredits]", error);
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

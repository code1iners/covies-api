import { getDefaultArguments, getMovieRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    movieReviews: async (_, { movieId }) => {
      try {
        // Init request.
        const request = getMovieRequest();

        // Init arguments.
        const args = getDefaultArguments();

        // Data fetch.
        const { status, statusText, data } = await request.get(
          `movie/${movieId}/reviews?${args.toString()}`
        );

        // Response is invalid?
        if (status !== 200) {
          console.error("[movieReviews]", statusText);
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
        console.error("[movieReviews]", error);
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

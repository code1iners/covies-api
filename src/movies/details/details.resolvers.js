import { getDefaultArguments, getMovieRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    movieDetail: async (_, { movieId }) => {
      try {
        // Init request.
        const request = getMovieRequest();

        // Init arguments.
        const args = getDefaultArguments();

        // Data fetch.
        const { status, statusText, data } = await request.get(
          `movie/${movieId}?${args.toString()}`
        );

        // Response valid check.
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
        console.error("[detail]", error);
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

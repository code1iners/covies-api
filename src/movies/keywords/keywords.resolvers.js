import { getDefaultArguments, getMovieRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    movieKeywords: async (_, { movieId }) => {
      try {
        // Init request.
        const request = getMovieRequest();

        // Init arguments.
        const args = getDefaultArguments();

        // Data fetch.
        const { status, statusText, data } = await request.get(
          `/${movieId}/keywords?${args.toString()}`
        );

        // Response is invalid?
        if (status !== 200) {
          console.error("[movieKeywords]".statusText);
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
        console.error("[movieKeywords]".error);
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

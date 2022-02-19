import { getDefaultArguments, getMovieRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    movieSimilars: async (_, { movieId, language = "ko" }) => {
      try {
        // Init request.
        const request = getMovieRequest();

        // Init Arguments.
        const args = getDefaultArguments();
        if (language) args.append("language", language);

        // Data fetch.
        const { status, statusText, data } = await request.get(
          `/${movieId}/similar?${args.toString()}`
        );

        // Response is invalid?
        if (status !== 200) {
          console.error("[movieSimilars]", statusText);
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
        console.error("[movieSimilars]", error);
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

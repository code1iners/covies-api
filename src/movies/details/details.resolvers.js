import { getDefaultArguments, getMovieRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    movieDetail: async (_, { movieId, language = "ko", appendToResponse }) => {
      try {
        // Init request.
        const request = getMovieRequest();

        // Init arguments.
        const args = getDefaultArguments();
        if (language) args.append("language", language);
        if (appendToResponse)
          args.append("append_to_response", appendToResponse);

        // Data fetch.
        const { status, statusText, data } = await request.get(
          `/${movieId}?${args.toString()}`
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

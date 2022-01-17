import { getDefaultArguments, getMovieRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    movieVideos: async (_, { movieId }) => {
      try {
        // Init request.
        const request = getMovieRequest();

        // Init arguments.
        const args = getDefaultArguments();

        // Data fetch.
        const { status, statusText, data } = await request.get(
          `movie/${movieId}/videos?${args.toString()}`
        );

        // Response is invalid?
        if (status !== 200) {
          console.error("[movieVideos]", statusText);
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
        console.error("[movieVideos]", error);
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

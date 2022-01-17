import { getDefaultArguments, getMovieRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    movieImages: async (_, { movieId }) => {
      try {
        const request = getMovieRequest();

        const args = getDefaultArguments();

        const { status, statusText, data } = await request.get(
          `movie/${movieId}/images?${args.toString()}`
        );

        if (status !== 200) {
          console.error("[movieImages]", statusText);
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
        console.error("[movieImages]", error);
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

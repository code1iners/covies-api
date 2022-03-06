import { getDefaultArguments, getMovieRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    movieNowPlaying: async (_, { page = 1, language = "ko", region }) => {
      try {
        // Init request.
        const request = getMovieRequest();

        // Init arguments.
        const args = getDefaultArguments();
        args.append("page", page);
        args.append("language", language);
        if (region) args.append("region", region);

        // Data fetch.
        const { status, statusText, data } = await request.get(
          `/now_playing?${args.toString()}`
        );

        // Response is invalid?
        if (status !== 200) {
          console.error("[MovieNowPlaying]", statusText);
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
        console.error("[MovieNowPlaying]", error);
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

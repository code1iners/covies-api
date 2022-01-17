import { getDefaultArguments, getMovieRequest } from "../utils/axiosUtils";

export default {
  Query: {
    trendings: async (_, { mediaType, timeWindow }) => {
      try {
        // Init request.
        const request = getMovieRequest();

        // Init arguments.
        const args = getDefaultArguments();
        args.append("mediaType", mediaType);
        args.append("timeWindow", timeWindow);

        // Data fetch.
        const { status, statusText, data } = await request.get(
          `trending/${mediaType}/${timeWindow}?${args.toString()}`
        );

        // Response is invalid?
        if (status !== 200) {
          console.error("[trendings]", statusText);
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
        console.error("[trendings]", error);
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

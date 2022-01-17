import { getDefaultArguments, getMovieRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    movieUpcomings: async (_, { page = 1, language, region }) => {
      try {
        const request = getMovieRequest();
        const args = getDefaultArguments();
        args.append("page", page);
        if (language) args.append("language", language);
        if (region) args.append("region", region);

        const { status, statusText, data } = await request.get(
          `/upcoming?${args.toString()}`
        );

        // Response is invalid?
        if (status !== 200) {
          console.error("[movieUpcomings]", statusText);
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
        console.error("[movieUpcomings]", error);
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

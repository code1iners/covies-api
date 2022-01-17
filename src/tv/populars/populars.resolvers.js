import { getDefaultArguments, getTvRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    TvPopulars: async (_, { page = 1 }) => {
      try {
        // Init request.
        const request = getTvRequest();

        // Init arguments.
        const args = getDefaultArguments();
        args.append("page", page);

        // Data fetch.
        const { status, statusText, data } = await request.get(
          `/popular?${args.toString()}`
        );

        // Check response status
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
        console.error("[populars]", error);
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

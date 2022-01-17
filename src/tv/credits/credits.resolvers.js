import { getDefaultArguments, getTvRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    tvCredits: async (_, { tvId }) => {
      try {
        // Init request.
        const request = getTvRequest();

        // Init arguments.
        const args = getDefaultArguments();

        // Data fetch.
        const { status, statusText, data } = await request.get(
          `/${tvId}/credits?${args.toString()}`
        );

        // Response is invalid?
        if (status !== 200) {
          console.error("[tvCredits]", statusText);
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
        console.error("[tvCredits]", error);
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

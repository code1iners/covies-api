import { getDefaultArguments, getTvRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    tvKeywords: async (_, { tvId }) => {
      try {
        const request = getTvRequest();
        const args = getDefaultArguments();
        const { status, statusText, data } = await request.get(
          `/${tvId}/keywords?${args.toString()}`
        );
        if (status !== 200) {
          console.error("[tvKeywords]", statusText);
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
        console.error("[tvKeywords]", error);
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

import { getDefaultArguments, getTvRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    tvDetail: async (_, { tvId }) => {
      try {
        const request = getTvRequest();
        const args = getDefaultArguments();
        const { status, statusText, data } = await request.get(
          `/${tvId}?${args.toString()}`
        );

        if (status !== 200) {
          console.error("[tvDetail]", statusText);
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
        console.error("[tvDetail]", error);
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

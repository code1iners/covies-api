import { getDefaultArguments, getTvRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    tvImages: async (_, { tvId }) => {
      try {
        const request = getTvRequest();
        const args = getDefaultArguments();
        const { status, statusText, data } = await request.get(
          `/${tvId}/images?${args.toString()}`
        );
        if (status !== 200) {
          console.error("[tvImages]", statusText);
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
        console.error("[tvImages]", error);
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

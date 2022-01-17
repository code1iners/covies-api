import { getDefaultArguments, getTvRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    tvTopRated: async () => {
      try {
        const request = getTvRequest();
        const args = getDefaultArguments();
        const { status, statusText, data } = await request.get(
          `/top_rated?${args.toString()}`
        );
        if (status !== 200) {
          console.error("[tvTopRated]", statusText);
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
        console.error("[tvTopRated]", error);
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

import { getDefaultArguments, getTvRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    tvVideos: async (_, { tvId }) => {
      try {
        const request = getTvRequest();
        const args = getDefaultArguments();
        const { status, statusText, data } = await request.get(
          `/${tvId}/videos?${args.toString()}`
        );
        if (status !== 200) {
          console.error("[tvVideos]", statusText);
          return {
            ok: false,
            error: { code: status, message: statusText },
          };
        }

        return {
          ok: true,
          data,
        };
      } catch (error) {
        console.error("[tvVideos]", error);
        return {
          ok: false,
          error: { code: 500, message: error?.message },
        };
      }
    },
  },
};

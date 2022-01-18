import {
  getDefaultArguments,
  getProviderRequest,
} from "../../utils/axiosUtils";

export default {
  Query: {
    movieProviders: async () => {
      try {
        const request = getProviderRequest();
        const args = getDefaultArguments();
        const { status, statusText, data } = await request.get(
          `movie?${args.toString()}`
        );
        if (status !== 200) {
          console.error("[movieProviders]", statusText);
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
        console.error("[movieProviders]", error);
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

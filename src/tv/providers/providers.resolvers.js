import {
  getDefaultArguments,
  getProviderRequest,
} from "../../utils/axiosUtils";

export default {
  Query: {
    tvProviders: async () => {
      try {
        const request = getProviderRequest();
        const args = getDefaultArguments();
        const { status, statusText, data } = await request.get(
          `tv?${args.toString()}`
        );
        if (status !== 200) {
          console.error("[tvProviders]", statusText);
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
        console.error("[tvProviders]", error);
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

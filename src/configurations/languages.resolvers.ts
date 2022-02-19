import {
  getConfigurationsRequest,
  getDefaultArguments,
} from "../utils/axiosUtils";
import { Resolvers } from "./../types/shared/shared.d";
const resolvers: Resolvers = {
  Query: {
    configurationLanguages: async () => {
      try {
        const request = getConfigurationsRequest();
        const args = getDefaultArguments();
        const { status, statusText, data } = await request.get(
          `/languages?${args}`
        );

        if (status !== 200) {
          console.error("[movieConfigurationLanguages]", statusText);
          return {
            ok: false,
            error: {
              code: 500,
              message: statusText,
            },
          };
        }

        return {
          ok: true,
          data,
        };
      } catch (e) {
        console.error("[movieConfigurationLanguages]", e);
        return {
          ok: false,
          error: {
            code: 500,
            message: e,
          },
        };
      }
    },
  },
};
export default resolvers;

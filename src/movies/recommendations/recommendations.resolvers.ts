import { MovieRecommendationsProps } from "./../../types/movies/recommendations.d";
import { getDefaultArguments, getMovieRequest } from "../../utils/axiosUtils";
import { Resolvers } from "./../../types/shared/shared.d";
const resolvers: Resolvers = {
  Query: {
    movieRecommendations: async (
      _,
      { movieId, language = "ko" }: MovieRecommendationsProps
    ) => {
      try {
        const request = getMovieRequest();

        const args = getDefaultArguments();
        if (language) args.append("language", language);

        const { status, statusText, data } = await request.get(
          `/${movieId}/recommendations?${args.toString()}`
        );

        if (status !== 200) {
          console.error("[movieRecommendations]", statusText);
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
      } catch (e) {
        console.error("[movieRecommendations]", e);
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

import { getDefaultArguments, getMovieRequest } from "../../utils/axiosUtils";

export default {
  Query: {
    movieImages: async (
      _,
      { movieId, language = "ko", includeImageLanguage }
    ) => {
      try {
        const request = getMovieRequest();

        const args = getDefaultArguments();
        if (language) args.append("language", language);
        if (includeImageLanguage)
          args.append("include_image_language", includeImageLanguage);

        const { status, statusText, data } = await request.get(
          `/${movieId}/images?${args.toString()}`
        );

        if (status !== 200) {
          console.error("[movieImages]", statusText);
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
        console.error("[movieImages]", error);
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

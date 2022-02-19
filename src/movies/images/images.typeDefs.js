import { gql } from "apollo-server-core";

export default gql`
  type Backdrop {
    aspect_ratio: Float
    file_path: String
    height: Int
    iso_639_1: String
    vote_average: Float
    vote_count: Int
    width: Int
  }

  type Poster {
    aspect_ratio: Float
    file_path: String
    height: Int
    iso_639_1: String
    vote_average: Float
    vote_count: Int
    width: Int
  }

  type MovieImage {
    id: Int
    backdrops: [Backdrop]
    posters: [Poster]
  }

  type MovieImagesResponse {
    ok: Boolean!
    error: CovieSimpleError
    data: MovieImage
  }

  type Query {
    movieImages(
      movieId: Int!
      language: String
      includeImageLanguage: String
    ): MovieImagesResponse!
  }
`;

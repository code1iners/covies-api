import { gql } from "apollo-server-core";

export default gql`
  type TvImagePoster {
    aspect_ratio: Float
    file_path: String
    height: Int
    iso_639_1: String
    vote_average: Float
    vote_count: Int
    width: Int
  }

  type TvImageBackdrop {
    aspect_ratio: Float
    file_path: String
    height: Int
    iso_639_1: String
    vote_average: Float
    vote_count: Int
    width: Int
  }

  type TvImagesData {
    id: Int
    backdrops: [TvImageBackdrop]
    posters: [TvImagePoster]
  }

  type TvImagesResponse {
    ok: Boolean!
    error: CovieSimpleError
    data: TvImagesData
  }

  type Query {
    tvImages(tvId: Int!): TvImagesResponse!
  }
`;

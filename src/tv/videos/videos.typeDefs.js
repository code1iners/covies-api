import { gql } from "apollo-server-core";

export default gql`
  type TvVideo {
    iso_639_1: String
    iso_3166_1: String
    name: String
    key: String
    site: String
    size: Int
    type: String
    official: Boolean
    published_at: String
    id: String
  }

  type TvVideosData {
    id: Int
    results: [TvVideo]
  }

  type TvVideosResponse {
    ok: Boolean!
    error: CovieSimpleError
    data: TvVideosData
  }

  type Query {
    tvVideos(tvId: Int!): TvVideosResponse!
  }
`;

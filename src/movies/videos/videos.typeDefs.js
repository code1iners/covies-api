import { gql } from "apollo-server-core";

export default gql`
  type MovieVideo {
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

  type MovieVideosData {
    id: Int
    results: [MovieVideo]
  }

  type MovieVideosResponse {
    ok: Boolean!
    error: CovieSimpleError
    data: MovieVideosData
  }

  type Query {
    movieVideos(movieId: Int!): MovieVideosResponse!
  }
`;

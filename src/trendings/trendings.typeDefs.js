import { gql } from "apollo-server-core";

export default gql`
  type Trendings {
    poster_path: String
    adult: Boolean
    overview: String
    release_date: String
    genre_ids: [Int]
    id: Int
    original_title: String
    original_language: String
    title: String
    backdrop_path: String
    popularity: Float
    vote_count: Int
    video: Boolean
    vote_average: Float
  }

  type TrendingsData {
    page: Int
    results: [Trendings]
    total_pages: Int
    total_results: Int
  }

  type TrendingsResponse {
    ok: Boolean!
    error: SimpleError
    data: TrendingsData
  }

  type Query {
    trendings(mediaType: String!, timeWindow: String!): TrendingsResponse!
  }
`;

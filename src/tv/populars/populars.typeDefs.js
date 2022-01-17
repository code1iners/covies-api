import { gql } from "apollo-server-core";

export default gql`
  type TvPopular {
    poster_path: String
    popularity: Float
    id: Int
    backdrop_path: String
    vote_average: Float
    overview: String
    first_air_date: String
    origin_country: [String]
    genre_ids: [Int]
    original_language: String
    vote_count: Int
    name: String
    original_name: String
  }

  type TvPopularData {
    page: Int
    results: [TvPopular]
    total_results: Int
    total_pages: Int
  }

  type TvPopularResponse {
    ok: Boolean!
    data: TvPopularData
    error: SimpleError
  }

  type Query {
    TvPopulars(page: Int): TvPopularResponse!
  }
`;

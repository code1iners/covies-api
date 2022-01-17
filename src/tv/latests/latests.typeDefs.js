import { gql } from "apollo-server-core";

export default gql`
  type TvLatestGenre {
    id: Int
    name: String
  }

  type TvLatestNetwork {
    id: Int
    name: String
  }

  type TvLatestSeason {
    air_date: String
    id: Int
    poster_path: String
    season_number: Int
  }

  type TvLatestData {
    backdrop_path: String
    episode_run_time: [Int]
    first_air_date: String
    genres: [TvLatestGenre]
    homepage: String
    id: Int
    in_production: Boolean
    languages: [String]
    last_air_date: String
    name: String
    networks: [TvLatestNetwork]
    number_of_episodes: Int
    number_of_seasons: Int
    origin_country: [String]
    original_language: String
    original_name: String
    overview: String
    popularity: Int
    poster_path: String
    seasons: [TvLatestSeason]
    status: String
    type: String
    vote_average: Float
    vote_count: Int
  }

  type TvLatestResponse {
    ok: Boolean
    error: SimpleError
    data: TvLatestData
  }

  type Query {
    tvLatest: TvLatestResponse!
  }
`;

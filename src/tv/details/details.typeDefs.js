import { gql } from "apollo-server-core";

export default gql`
  type TvDetailCreatedBy {
    id: Int
    credit_id: String
    name: String
    gender: Int
    profile_path: String
  }

  type TvDetailGenre {
    id: Int
    name: String
  }

  type TvDetailLastEpisodeToAir {
    air_date: String
    episode_number: Int
    id: Int
    name: String
    overview: String
    production_code: String
    season_number: Int
    still_path: String
    vote_average: Float
    vote_count: Int
  }

  type TvDetailNetwork {
    name: String
    id: Int
    logo_path: String
    origin_country: String
  }

  type TvDetailProductionCompany {
    id: Int
    logo_path: String
    name: String
    origin_country: String
  }

  type TvDetailProductionCountry {
    iso_3166_1: String
    name: String
  }

  type TvDetailSeason {
    air_date: String
    episode_count: Int
    id: Int
    name: String
    overview: String
    poster_path: String
    season_number: Int
  }

  type TvDetailSpokenLanguage {
    english_name: String
    iso_639_1: String
    name: String
  }

  type TvDetailData {
    backdrop_path: String
    created_by: [TvDetailCreatedBy]
    episode_run_time: [Int]
    first_air_date: String
    genres: [TvDetailGenre]
    homepage: String
    id: Int
    in_production: Boolean
    languages: [String]
    last_air_date: String
    last_episode_to_air: TvDetailLastEpisodeToAir
    name: String
    networks: [TvDetailNetwork]
    number_of_episodes: Int
    number_of_seasons: Int
    origin_country: [String]
    original_language: String
    original_name: String
    overview: String
    popularity: Float
    poster_path: String
    production_companies: [TvDetailProductionCompany]
    production_countries: [TvDetailProductionCountry]
    seasons: [TvDetailSeason]
    spoken_languages: [TvDetailSpokenLanguage]
    status: String
    tagline: String
    type: String
    vote_average: Float
    vote_count: Int
  }

  type TvDetailResponse {
    ok: Boolean!
    error: CovieSimpleError
    data: TvDetailData
  }

  type Query {
    tvDetail(tvId: Int!): TvDetailResponse!
  }
`;

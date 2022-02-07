import { gql } from "apollo-server-core";

export default gql`
  type MovieDetailBelongsToCollection {
    id: Int
    name: String
    poster_path: String
    backdrop_path: String
  }

  type MovieDetailGenre {
    id: Int
    name: String
  }

  type MovieDetailProductionCompany {
    id: Int
    logo_path: String
    name: String
    origin_country: String
  }

  type MovieDetailProductionCountries {
    iso_3166_1: String
    name: String
  }

  type MovieDetailSpokenLanguage {
    english_name: String
    iso_639_1: String
    name: String
  }

  type MovieDetailData {
    adult: Boolean
    backdrop_path: String
    belongs_to_collection: MovieDetailBelongsToCollection
    budget: Int
    genres: [MovieDetailGenre]
    homepage: String
    id: Int
    imdb_id: String
    original_language: String
    original_title: String
    overview: String
    popularity: Float
    poster_path: String
    production_companies: [MovieDetailProductionCompany]
    production_countries: [MovieDetailProductionCountries]
    release_date: String
    revenue: Int
    runtime: Int
    spoken_languages: [MovieDetailSpokenLanguage]
    status: String
    tagline: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }

  type MovieDetailResponse {
    ok: Boolean
    data: MovieDetailData
    error: CovieSimpleError
  }

  type Query {
    movieDetail(movieId: Int!): MovieDetailResponse!
  }
`;

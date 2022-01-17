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

  type ProductionCompanie {
    id: Int
    logo_path: String
    name: String
    origin_country: String
  }

  type ProductionCountries {
    iso_3166_1: String
    name: String
  }

  type SpokenLanguage {
    english_name: String
    iso_639_1: String
    name: String
  }

  type MovieDetail {
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
    production_companies: [ProductionCompanie]
    production_countries: [ProductionCountries]
    release_date: String
    revenue: Int
    runtime: Int
    spoken_languages: [SpokenLanguage]
    status: String
    tagline: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }

  type MovieDetailResponse {
    ok: Boolean
    data: MovieDetail
    error: SimpleError
  }

  type Query {
    movieDetail(movieId: Int!): MovieDetailResponse!
  }
`;

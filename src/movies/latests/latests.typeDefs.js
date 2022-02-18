import { gql } from "apollo-server-core";

export default gql`
  type MovieLatestGenre {
    id: Int
    name: String
  }

  type MovieLatestProductionCompany {
    id: Int
    logo_path: String
    name: String
    origin_country: String
  }

  type MovieLatestProductionCountry {
    iso_3166_1: String
    name: String
  }

  type MovieLatestSpokenLanguage {
    english_name: String
    iso_639_1: String
    name: String
  }

  type MovieLatestData {
    adult: Boolean
    backdrop_path: String
    budges: Int
    genres: [MovieLatestGenre]
    homepage: String
    id: Int
    imdb_id: String
    original_language: String
    original_title: String
    overview: String
    popularity: Int
    poster_path: String
    production_companies: [MovieLatestProductionCompany]
    production_countries: [MovieLatestProductionCountry]
    release_date: String
    revenue: Int
    runtime: Int
    spoken_languages: [MovieLatestSpokenLanguage]
    status: String
    tagline: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }

  type MovieLatestResponse {
    ok: Boolean!
    error: CovieSimpleError
    data: MovieLatestData
  }

  type Query {
    movieLatest: MovieLatestResponse!
  }
`;

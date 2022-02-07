import { gql } from "apollo-server-core";

export default gql`
  type MovieSimilar {
    id: Int
    poster_path: String
    adult: Boolean
    overview: String
    release_date: String
    genre_ids: [Int]
    original_title: String
    original_language: String
    title: String
    backdrop_path: String
    popularity: Int
    vote_count: Int
    video: Boolean
    vote_average: Int
  }

  type MovieSimilarsData {
    page: Int
    results: [MovieSimilar]
    total_pages: Int
    total_results: Int
  }

  type MovieSimilarsResponse {
    ok: Boolean!
    error: CovieSimpleError
    data: MovieSimilarsData
  }

  type Query {
    movieSimilars(movieId: Int!): MovieSimilarsResponse!
  }
`;

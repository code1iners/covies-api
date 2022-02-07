import { gql } from "apollo-server-core";

export default gql`
  type MovieTopRated {
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

  type MovieTopRatedData {
    page: Int
    results: [MovieTopRated]
    total_results: Int
    total_pages: Int
  }

  type MovieTopRatedResponse {
    ok: Boolean!
    error: CovieSimpleError
    data: MovieTopRatedData
  }

  type Query {
    movieTopRated(
      page: Int
      language: String
      region: String
    ): MovieTopRatedResponse!
  }
`;

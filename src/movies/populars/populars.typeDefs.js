import { gql } from "apollo-server-core";

export default gql`
  type MoviePopular {
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

  type MoviePopularData {
    page: Int
    results: [MoviePopular]
    total_results: Int
    total_pages: Int
  }

  type PopularResponse {
    ok: Boolean!
    data: MoviePopularData
    error: CovieSimpleError
  }

  type Query {
    moviePopulars(page: Int): PopularResponse!
  }
`;

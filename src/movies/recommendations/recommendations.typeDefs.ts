import { gql } from "apollo-server-core";

export default gql`
  type RecommendationResult {
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
    popularity: Int
    vote_count: Int
    video: Boolean
    vote_average: Int
  }

  type RecommendationData {
    page: Int
    results: [RecommendationResult]
    total_pages: Int
    total_results: Int
  }

  type RecommendationResponse {
    ok: Boolean!
    data: RecommendationData
    error: CovieSimpleError
  }

  type Query {
    movieRecommendations(
      movieId: Int!
      page: Int
      language: String
    ): RecommendationResponse!
  }
`;

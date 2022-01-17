import { gql } from "apollo-server-core";

export default gql`
  type MovieAuthorDetail {
    name: String
    username: String
    avatar_path: String
    rating: Float
  }

  type MovieReview {
    author: String
    author_details: MovieAuthorDetail
    content: String
    created_at: String
    updated_at: String
    id: String
    url: String
  }

  type MovieReviewData {
    id: Int
    page: Int
    results: [MovieReview]
    total_pages: Int
    total_results: Int
  }

  type MovieReviewsResponse {
    ok: Boolean!
    error: SimpleError
    data: MovieReviewData
  }

  type Query {
    movieReviews(movieId: Int!): MovieReviewsResponse!
  }
`;

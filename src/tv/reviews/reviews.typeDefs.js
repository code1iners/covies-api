import { gql } from "apollo-server-core";

export default gql`
  type TvReviewAuthorDetail {
    name: String
    username: String
    avatar_path: String
    rating: Int
  }

  type TvReview {
    author: String
    author_details: TvReviewAuthorDetail
    content: String
    created_at: String
    id: String
    updated_at: String
    url: String
  }

  type TvReviewsData {
    id: Int
    page: Int
    results: [TvReview]
    total_pages: Int
    total_results: Int
  }

  type TvReviewsResponse {
    ok: Boolean!
    error: CovieSimpleError
    data: TvReviewsData
  }

  type Query {
    tvReviews(tvId: Int!): TvReviewsResponse!
  }
`;

import { gql } from "apollo-server-core";

export default gql`
  type MovieUpcomingDates {
    maximum: String
    minimum: String
  }

  type MovieUpcoming {
    poster_path: String
    adult: Boolean
    overview: String
    release_date: String
    genre_ids: [Int]
    id: Int
  }

  type MovieUpcomingData {
    page: Int
    results: [MovieUpcoming]
    dates: MovieUpcomingDates
    total_pages: Int
    total_results: Int
  }

  type MovieUpcomingResponse {
    ok: Boolean!
    error: CovieSimpleError
    data: MovieUpcomingData
  }

  type Query {
    movieUpcomings(
      page: Int
      language: String
      region: String
    ): MovieUpcomingResponse!
  }
`;

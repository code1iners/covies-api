import { gql } from "apollo-server-core";

export default gql`
  type MovieNowPlayingDate {
    maximum: String
    minimum: String
  }

  type MovieNowPlaying {
    poster_path: String
    adult: Boolean
    overview: String
    release_date: String
    genre_ids: [Int]
    id: Int
  }

  type MovieNowPlayingData {
    page: Int
    results: [MovieNowPlaying]
    dates: MovieNowPlayingDate
    total_pages: Int
    total_results: Int
  }

  type MovieNowPlayingResponse {
    ok: Boolean!
    error: SimpleError
    data: MovieNowPlayingData
  }

  type Query {
    movieNowPlaying(
      page: Int
      language: String
      region: String
    ): MovieNowPlayingResponse!
  }
`;

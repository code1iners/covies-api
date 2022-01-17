import { gql } from "apollo-server-core";

export default gql`
  type PopularResponse {
    ok: Boolean!
    data: [MoviePopular]
    error: SimpleError
  }

  type MoviePopular {
    poster_path: String
    adult: Boolean
    overview: String
    release_date: String
    genre_ids: [Int]
    id: Int
    original_title: String
    original_tanguage: String
    title: String
    backdrop_path: String
    popularity: Float
    vote_count: Int
    video: Boolean
    vote_average: Float
  }

  type Query {
    moviePopulars(page: Int): PopularResponse!
  }
`;

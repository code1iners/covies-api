import { gql } from "apollo-server-core";

export default gql`
  type MovieProvider {
    display_priority: Int
    logo_path: String
    provider_name: String
    provider_id: Int
  }

  type MovieProvidersData {
    results: [MovieProvider]
  }

  type MovieProvidersResponse {
    ok: Boolean!
    error: SimpleError
    data: MovieProvidersData
  }

  type Query {
    movieProviders: MovieProvidersResponse!
  }
`;

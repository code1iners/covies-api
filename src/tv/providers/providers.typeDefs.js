import { gql } from "apollo-server-core";

export default gql`
  type TvProvider {
    display_priority: Int
    logo_path: String
    provider_name: String
    provider_id: Int
  }

  type TvProvidersData {
    results: [TvProvider]
  }

  type TvProvidersResponse {
    ok: Boolean!
    error: CovieSimpleError
    data: TvProvidersData
  }

  type Query {
    tvProviders: TvProvidersResponse!
  }
`;

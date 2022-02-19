import { gql } from "apollo-server-core";

export default gql`
  type ConfigurationLanguagesData {
    iso_639_1: String
    english_name: String
    name: String
  }

  type ConfigurationLanguagesResponse {
    ok: Boolean!
    error: CovieSimpleError
    data: [ConfigurationLanguagesData]
  }

  type Query {
    configurationLanguages: ConfigurationLanguagesResponse!
  }
`;

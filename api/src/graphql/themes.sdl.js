export const schema = gql`
  type Theme {
    id: String!
    user: User!
    userId: Int!
    title: String!
    description: JSON!
    createdAt: DateTime!
    startingAt: DateTime!
    endingAt: DateTime
    dailyPrompts: [String]
    dailyTracking: [String]
  }

  type Query {
    themes: [Theme!]! @requireAuth
    theme(id: String!): Theme @requireAuth
  }

  input CreateThemeInput {
    userId: Int
    title: String!
    description: JSON!
    startingAt: DateTime
    endingAt: DateTime
    dailyPrompts: [String]
    dailyTracking: [String]
  }

  input UpdateThemeInput {
    title: String
    description: JSON
    startingAt: DateTime
    endingAt: DateTime
    dailyPrompts: [String]
    dailyTracking: [String]
  }

  type Mutation {
    createTheme(input: CreateThemeInput!): Theme @requireAuth
    updateTheme(id: String!, input: UpdateThemeInput!): Theme @requireAuth
  }
`

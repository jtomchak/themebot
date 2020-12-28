export const schema = gql`
  type User {
    id: Int!
    netlifyID: String!
    stripeID: String!
    createdAt: DateTime!
  }

  type Query {
    users: [User!]!
    getUserByNetlifyID(netlifyID: String!): User!
    getUserByStripeID(stripeID: String!): User!
  }

  input CreateUserInput {
    netlifyID: String!
    stripeID: String!
  }

  input UpdateUserInput {
    netlifyID: String
    stripeID: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }
`

export const schema = gql`
  type User {
    id: Int!
    netlifyID: Int!
    stripeID: Int!
    createdAt: DateTime!
  }

  type Query {
    users: [User!]!
    getUserByNetlifyID(netlifyID: Int!): User!
    getUserByStripeID(stripeID: Int!): User!
  }

  input CreateUserInput {
    netlifyID: Int!
    stripeID: Int!
  }

  input UpdateUserInput {
    netlifyID: Int
    stripeID: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }
`

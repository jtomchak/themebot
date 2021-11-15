export const schema = gql`
  type User {
    id: Int!
    netlifyID: String!
    stripeID: String!
    createdAt: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    getUserByNetlifyID(netlifyID: String!): User! @requireAuth
    getUserByStripeID(stripeID: String!): User! @requireAuth
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
    createUser(input: CreateUserInput!): User @requireAuth
  }
`

export const schema = gql`
  type StripeSession {
    link: String!
  }

  type Query {
    getStripeSession: StripeSession! @requireAuth
  }
`

export const QUERY = gql`
  query StripeSessionQuery {
    stripeSession: getStripeSession {
      link
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ stripeSession }) => {
  return (
    <a
      href={stripeSession.link}
      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Change plan
    </a>
  )
}

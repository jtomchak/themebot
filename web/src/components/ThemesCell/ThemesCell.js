import Theme from 'src/components/Theme'

export const QUERY = gql`
  query ThemesQuery {
    themes {
      id
      title
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ themes }) => {
  return (
    <div className="-mt-8">
      {themes.map((theme) => (
        <div key={theme.id} className="mt-8">
          <Theme theme={theme} />
        </div>
      ))}
    </div>
  )
}

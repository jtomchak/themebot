import { useMutation } from '@redwoodjs/web'
import type { FindEditThemeQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { toast, Toaster } from '@redwoodjs/web/toast'
import ThemeForm from 'src/components/Theme/ThemeForm'

export const QUERY = gql`
  query FindThemeByIdQuery($id: String!) {
    theme: theme(id: $id) {
      id
      title
      description
    }
  }
`

const UPDATE_THEME = gql`
  mutation UpdateTheme($id: String!, $input: UpdateThemeInput!) {
    updateTheme(id: $id, input: $input) {
      id
      title
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ theme }: CellSuccessProps<FindEditThemeQuery>) => {
  const [updateTheme, { loading, error }] = useMutation(UPDATE_THEME, {
    onCompleted: () => {
      toast.success('New theme saved and ready!')
      location.href = '/theme'
    },
  })

  const onSubmit = (data) => {
    updateTheme({ variables: { id: theme.id, input: data } })
  }
  return (
    <div>
      <Toaster />
      <ThemeForm
        loading={loading}
        error={error}
        onSubmit={onSubmit}
        theme={theme}
      />
    </div>
  )
}

import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import ThemeJournalLayout from 'src/layouts/ThemeJournalLayout'
import ThemeForm from 'src/components/Theme/ThemeForm'

const CREATE_THEME = gql`
  mutation CreateThemeMutation($input: CreateThemeInput!) {
    createTheme(input: $input) {
      id
    }
  }
`

const NewThemePage = () => {
  const [create, { loading, error }] = useMutation(CREATE_THEME, {
    onCompleted: () => {
      toast.success('New theme saved and ready!')
      location.href = '/theme'
    },
  })
  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }
  return (
    <ThemeJournalLayout>
      <Toaster />
      <ThemeForm loading={loading} error={error} onSubmit={onSubmit} />
    </ThemeJournalLayout>
  )
}

export default NewThemePage

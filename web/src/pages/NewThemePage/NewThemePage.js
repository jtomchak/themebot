import { Link, routes, navigate } from '@redwoodjs/router'
import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import ThemeJournalLayout from 'src/layouts/ThemeJournalLayout'

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
      <Form
        onSubmit={onSubmit}
        validation={{ mode: 'onBlur' }}
        className="space-y-8 divide-y divide-gray-200"
      >
        {error && (
          <div style={{ color: 'red' }}>
            {"We couldn't save your theme: "}
            {error.message}
          </div>
        )}
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            <div>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                What is your theme, remember to be broad and vauge.
              </p>
            </div>

            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <Label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Title
                </Label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      Year of
                    </span>
                    <TextField
                      type="text"
                      name="title"
                      validation={{ required: true }}
                      className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                      errorClassName="flex-1 block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                    />
                  </div>
                  <FieldError
                    name="title"
                    className="mt-2 text-sm text-red-600"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <Label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Description
                </Label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <TextAreaField
                    name="description"
                    rows="3"
                    validation={{ required: true }}
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    errorClassName="max-w-lg shadow-sm block w-full border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                  ></TextAreaField>
                  <FieldError
                    name="description"
                    className="mt-2 text-sm text-red-600"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Write a few sentences detailing the theme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => navigate(routes.theme())}
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <Submit
              type="submit"
              disabled={loading}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </Submit>
          </div>
        </div>
      </Form>
    </ThemeJournalLayout>
  )
}

export default NewThemePage

import { Link, routes } from '@redwoodjs/router'
import ThemeJournalLayout from 'src/layouts/ThemeJournalLayout'

const ThemePage = () => {
  return (
    <ThemeJournalLayout>
      <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Themes</h3>
        <div className="mt-3 sm:mt-0 sm:ml-4">
          <Link to={routes.newTheme()}>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create new theme
            </button>
          </Link>
        </div>
      </div>
    </ThemeJournalLayout>
  )
}

export default ThemePage

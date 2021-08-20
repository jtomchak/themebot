import { render } from '@redwoodjs/testing'

import EditThemePage from './EditThemePage'

describe('EditThemePagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditThemePagePage />)
    }).not.toThrow()
  })
})

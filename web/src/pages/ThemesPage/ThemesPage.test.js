import { render } from '@redwoodjs/testing'

import ThemesPage from './ThemesPage'

describe('ThemesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThemesPage />)
    }).not.toThrow()
  })
})

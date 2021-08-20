import { render } from '@redwoodjs/testing'

import ThemePage from './ThemePage'

describe('ThemesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThemePage />)
    }).not.toThrow()
  })
})

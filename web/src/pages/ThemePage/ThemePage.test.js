import { render } from '@redwoodjs/testing'

import ThemePage from './ThemePage'

describe('ThemePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThemePage />)
    }).not.toThrow()
  })
})

import { render } from '@redwoodjs/testing'

import NewThemePage from './NewThemePage'

describe('NewThemePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewThemePage />)
    }).not.toThrow()
  })
})

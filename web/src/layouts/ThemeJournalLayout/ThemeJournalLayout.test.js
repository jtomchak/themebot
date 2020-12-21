import { render } from '@redwoodjs/testing'

import ThemeJournalLayout from './ThemeJournalLayout'

describe('ThemeJournalLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThemeJournalLayout />)
    }).not.toThrow()
  })
})

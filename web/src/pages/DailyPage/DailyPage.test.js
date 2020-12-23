import { render } from '@redwoodjs/testing'

import DailyPage from './DailyPage'

describe('DailyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DailyPage />)
    }).not.toThrow()
  })
})

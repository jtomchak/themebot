import { render, screen } from '@redwoodjs/testing'

import Theme from './Theme'

describe('Theme', () => {
  it('renders successfully', () => {
    expect(() => {
      const theme = {
        title: 'Public Content',
        description: 'to make things out in the open',
        createdAt: '2020-01-01T12:34:56Z',
      }
      render(<Theme theme={theme} />)

      expect(screen.getByText(theme.title)).toBeInTheDocument()
      expect(screen.getByText(theme.description)).toBeInTheDocument()
      const dateExpected = screen.getByText(/1 January 2020/i)
      expect(dateExpected).toBeInTheDocument()
      expect(dateExpected.nodeName).toEqual('TIME')
      expect(dateExpected).toHaveAttribute('dateTime', theme.createdAt)
    }).not.toThrow()
  })
})

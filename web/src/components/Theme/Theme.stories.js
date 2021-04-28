import Theme from './Theme'

export const generated = () => {
  return (
    <div className="m-4">
      <Theme
        theme={{
          title: 'Public Content',
          description: 'to make things out in the open',
          createdAt: '2020-01-01T12:34:56Z',
        }}
      />
    </div>
  )
}

export default { title: 'Components/Theme' }

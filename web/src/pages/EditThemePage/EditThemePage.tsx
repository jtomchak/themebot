import { useParams } from '@redwoodjs/router'

import ThemeJournalLayout from 'src/layouts/ThemeJournalLayout/ThemeJournalLayout'
import EditThemeCell from 'src/components/EditThemeCell/EditThemeCell'

const EditThemePage = () => {
  const { id } = useParams()

  return (
    <ThemeJournalLayout>
      <EditThemeCell id={id} />
    </ThemeJournalLayout>
  )
}

export default EditThemePage

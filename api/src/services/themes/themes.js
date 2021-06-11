import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const themes = async () => {
  return await db.theme.findMany({ where: { userId: context.currentUser.sub } })
}

export const theme = async ({ id }) => {
  requireAuth()
  if (!id) return null

  const userId = context.currentUser?.sub
  return await db.theme.findOne({ where: { id, userId } })
}

export const createTheme = ({ input }) => {
  return db.theme.create({
    data: {
      ...input,
      userId: context.currentUser.sub,
    },
  })
}

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { context } from '@redwoodjs/graphql-server'

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const themes = async () => {
  return await db.theme.findMany({ where: { userId: context.currentUser.sub } })
}
export const theme = async ({ id }) => {
  if (!id) return null

  return await db.theme.findUnique({ where: { id } })
}

export const createTheme = ({ input }) => {
  return db.theme.create({
    data: {
      ...input,
      userId: context.currentUser.sub,
    },
  })
}

export const updateTheme = ({ id, input }) => {
  return db.theme.update({ where: { id }, data: { ...input } })
}

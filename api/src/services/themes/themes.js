import { db } from 'src/lib/db'
// import { context } from '@redwoodjs/api'

export const themes = async () => {
  return await db.theme.findMany({ where: { userId: context.currentUser.sub } })
}

export const Theme = {
  user: (_obj, { root }) => db.theme.findOne({ where: { id: root.id } }).user(),
}

export const createTheme = ({ input }) => {
  return db.theme.create({
    data: {
      ...input,
      userId: context.currentUser.sub,
    },
  })
}

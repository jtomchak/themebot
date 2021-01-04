import { db } from 'src/lib/db'

export const themes = () => {
  return db.theme.findMany()
}

export const Theme = {
  user: (_obj, { root }) => db.theme.findOne({ where: { id: root.id } }).user(),
}

export const createTheme = ({ input }) => {
  return db.theme.create({ data: input })
}

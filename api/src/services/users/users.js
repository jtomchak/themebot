import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const createUser = ({ input }) => {
  return db.user.create({ data: input })
}

export const getUserByNetlifyID = ({ id }) => {
  return db.user.findUnique({
    where: {
      netlifyID: id,
    },
  })
}
export const getUserByStripeID = ({ id }) => {
  return db.user.findUnique({
    where: {
      stripeID: id,
    },
  })
}

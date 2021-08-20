import { db } from 'src/lib/db'

export const beforeResolver = () => {}

export const users = () => {
  return db.user.findMany()
}

export const createUser = ({ input }) => {
  return db.user.create({ data: input })
}

export const getUserByNetlifyID = ({ netlifyID }) => {
  return db.user.findFirst({
    where: { netlifyID },
  })
}
export const getUserByStripeID = ({ stripeID }) => {
  return db.user.findFirst({
    where: {
      stripeID: stripeID,
    },
  })
}

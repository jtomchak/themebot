import { requireAuth, getCurrentUser } from 'src/lib/auth'
import { getUserByNetlifyID } from 'src/services/users/users'
import { context } from '@redwoodjs/graphql-server'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const getStripeSession = async () => {
  const { currentUser } = context
  try {
    const result = await getUserByNetlifyID({ netlifyID: currentUser.sub })
    console.log(result)
    // get stripe id
    const { stripeID } = result

    // generate stripe managed link
    const link = await stripe.billingPortal.sessions.create({
      customer: stripeID,
      return_url: `${process.env.URL}/account`,
    })
    return {
      statusCode: 200,
      link: link.url,
    }
  } catch (error) {
    console.log(error)
  }
}

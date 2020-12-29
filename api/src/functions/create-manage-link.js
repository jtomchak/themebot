import stripe from '../lib/stripe'
import { getUserByNetlifyID } from 'src/services/users/users'

export const handler = async (event, context) => {
  // get user context from Netlify
  const { user } = context.clientContext
  try {
    const result = await getUserByNetlifyID(user.sub)

    // get stripe id
    const { stripeID } = result.data.getUserByNetlifyID

    // generate stripe managed link
    const link = await stripe.billingPortal.sessions.create({
      customer: stripeID,
      return_url: process.env.URL,
    })
    return {
      statusCode: 200,
      body: JSON.stringify(link.url),
    }
  } catch (error) {
    console.log(error)
  }
}

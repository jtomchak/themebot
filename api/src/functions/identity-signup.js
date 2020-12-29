import stripeModule from 'stripe'
import { createUser } from 'src/services/users/users'

const stripe = stripeModule(process.env.STRIPE_SECRET_KEY)

const signUpErrorHandler = (e) => console.log(e)

export const handler = async (event, context) => {
  const data = JSON.parse(event.body)
  const { user, event: eventData } = data
  // create a new customer in Stripe
  const customer = await stripe.customers.create({ email: user.email })

  // subscribe the new customer to the free plan
  await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ price: process.env.STRIPE_DEFAULT_PRICE_PLAN }],
  })

  // store the Netlify and Stripe IDs in DB
  if (eventData == 'signup') {
    try {
      await createUser({
        input: {
          netlifyID: user.id,
          stripeID: customer.id,
        },
      })
      return {
        statusCode: 200,
        body: JSON.stringify({
          app_metadata: {
            roles: ['free'],
          },
        }),
      }
    } catch (e) {
      signUpErrorHandler(e)
    }
  }
}

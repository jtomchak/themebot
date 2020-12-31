const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
import fetch from 'node-fetch'

import { getUserByStripeID } from 'src/services/users/users'

export const handler = async ({ body, headers }, context) => {
  try {
    // make sure this event was sent legitimately.
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET
    )

    // bail if this is not a subscription update event
    if (stripeEvent.type !== 'customer.subscription.updated') return

    const subscription = stripeEvent.data.object

    const result = await getUserByStripeID(subscription.customer)
    // get netlify id from the stripe id
    const { netlifyID } = result

    // take the first word of the plan name and use it as the role
    const productID = subscription.items.data[0].plan.product
    const stripeProduct = await stripe.products.retrieve(productID)
    const {
      metadata: { role },
    } = stripeProduct

    // send a call to the Netlify Identity admin API to update the user role
    const { identity } = context.clientContext
    await fetch(`${identity.url}/admin/users/${netlifyID}`, {
      method: 'PUT',
      headers: {
        // note that this is a special admin token for the Identity API
        Authorization: `Bearer ${identity.token}`,
      },
      body: JSON.stringify({
        app_metadata: {
          roles: [role],
        },
      }),
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: `Webhook Error: ${error.message}`,
    }
  }
}

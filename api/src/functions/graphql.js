import { createGraphQLHandler } from '@redwoodjs/graphql-server'
import { logger } from 'src/lib/logger'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { getCurrentUser } from 'src/lib/auth'
import { db } from 'src/lib/db'

export const handler = createGraphQLHandler({
  getCurrentUser,
  loggerConfig: { logger, options: {} },
  directives,
  services,
  sdls,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})

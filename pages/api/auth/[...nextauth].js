import dbConnect from '../../../middlewares/dbConnect'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Users from '../../../models/User'

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Email({
      server: {
        port: 465,
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: 'Username', type: 'email', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        await dbConnect()
        const user = await Users.findOne(
          { email: credentials.email },
          { password: 0 }
        )
        if (!user) return null

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null or false then the credentials will be rejected
          return null
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
        }
      },
    }),
  ],
  database: process.env.DATABASE_URL,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
      //  "user" parameter is the object received from "authorize"
      //  "token" is being send below to "session" callback...
      //  ...so we set "user" param of "token" to object from "authorize"...
      //  ...and return it...
      user && (token.user = user)
      return Promise.resolve(token) // ...here
    },
    session: async (session, user, sessionToken) => {
      //  "session" is current session object
      //  below we set "user" param of "session" to value received from "jwt" callback
      session.user = user.user
      return Promise.resolve(session)
    },
  },
}

export default (req, res) => NextAuth(req, res, options)

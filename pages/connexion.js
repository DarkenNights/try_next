import { getCsrfToken } from 'next-auth/client'
import Layout from '../components/Layout'

export default function Connexion({ csrfToken }) {
  return (
    <Layout>
      <h1>Vous êtes sur la page de connexion</h1>
      <form method="POST" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <input type="text" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Connexion</button>
      </form>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}

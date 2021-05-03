import Layout from '../components/Layout'
import useTranslation from 'next-translate/useTranslation'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Index() {
  const { lang } = useTranslation()
  const [session, loading] = useSession()

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <Layout>
      <h1>Vous êtes sur la page d'accueil</h1>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          {console.log(session.user)}
          {new Date(session.user.created_at).toLocaleDateString(lang)}
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </Layout>
  )
}

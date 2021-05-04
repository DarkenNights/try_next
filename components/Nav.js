import Link from 'next/link'
import { signOut, useSession } from 'next-auth/client'

export default function Nav() {
  const [session, loading] = useSession()

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <nav>
        <Link href="/">
          <a>Accueil</a>
        </Link>
        <ul>
          <li>
            <Link href="/produits">
              <a>Les produits</a>
            </Link>
          </li>
          <li>
            <Link href="/ajout-produit">
              <a>Ajouter un produit</a>
            </Link>
          </li>
          {session ? (
            <>
              <li onClick={signOut}>
                <a href="#">Déconnexion</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/connexion">
                  <a>Connexion</a>
                </Link>
              </li>
              <li>
                <Link href="/inscription">
                  <a>Inscription</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  )
}

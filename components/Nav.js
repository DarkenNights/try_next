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
            <Link href="/products">
              <a>Les produits</a>
            </Link>
          </li>
          <li>
            <Link href="/products/add">
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
                <Link href="/login">
                  <a>Connexion</a>
                </Link>
              </li>
              <li>
                <Link href="/register">
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

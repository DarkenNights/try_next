import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return <>
    <Head>
      <title>Pop Collection Next</title>
    </Head>
    <nav>
      <Link href="/"><a>Accueil</a></Link>
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
        {/*{user ? (*/}
        {/*  <Link href="/login" onClick={handleLogout}>*/}
        {/*    <li>Déconnexion</li>*/}
        {/*  </Link>*/}
        {/*) : (*/}
        {/*  <div style={{ display: 'inherit' }}>*/}
        {/*    <Link href="/login">*/}
        {/*      <li>Connexion</li>*/}
        {/*    </Link>*/}
        {/*    <Link href="/register">*/}
        {/*      <li>Inscription</li>*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*)}*/}
      </ul>
    </nav>
    {children}
  </>
}

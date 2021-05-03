import Head from 'next/head'
import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Pop Collection Next</title>
      </Head>
      <Nav />
      {children}
    </>
  )
}

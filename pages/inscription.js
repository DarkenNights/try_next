import Layout from '../components/Layout'
import { useState } from 'react'
import AuthService from '../services/AuthService'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'

export default function Inscription() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      //Création de l'utilisateur - Enpoint : /api/auth/register
      let response = await AuthService.register(name, email, password)
      //Si on a bien créé l'utilisateur
      if (response.status === 201) {
        //Connexion de l'utilisateur
        response = await signIn('credentials', {
          redirect: false,
          email,
          password,
        })
        //Redirection vers la page des produits
        if (response.status === 200) {
          await router.push('/produits')
          window.location.reload()
        }
      }
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <Layout>
      <h1>Vous êtes sur la page d'inscription</h1>
      <form>
        {error && <div className="login-form-error">{error}</div>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Connexion
        </button>
      </form>
    </Layout>
  )
}

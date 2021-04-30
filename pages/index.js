import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

export default function Index() {

  const { t } = useTranslation('auth');

  return (
    <Layout>
      <div>
        <h1>Vous êtes sur la page d'accueil</h1>
        <h2>{t('auth.name.error.required')}</h2>
      </div>
    </Layout>
  )
}

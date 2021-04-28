import Layout from '../components/layout'

const Products = ({ productsData }) => {
  return (
    <Layout>
      <div>
        <h1>Vous êtes sur la page d'accueil</h1>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {

}

export default ProductsPage;

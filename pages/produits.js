import Layout from '../components/Layout'
import ProductsService from '../services/productsService'
import ProductInfos from '../components/ProductInfos'
import AwsHelper from '../utils/AWS'

export default function Produits({ products }) {
  // useEffect(() => {
  //   fetchProducts()
  // }, [])
  //
  // const [products, setProducts] = useState([])
  //
  // const fetchProducts = async () => {
  //   try {
  //     const products = await ProductsService.getAll()
  //     setProducts(products.data)
  //     console.log(products.data)
  //   } catch (err) {
  //     console.log(err.response) // Failed to fetch
  //   }
  // }

  const handleRemove = async (product) => {
    // try {
    //   await ProductsService.remove(product.name)
    //   const productUrl = product.image.split('/')
    //   await AwsHelper.removeFile(productUrl[productUrl.length - 1], 'images')
    //   let updatedProducts = [...products]
    //   const index = updatedProducts.findIndex(
    //     (currentProduct) => currentProduct.name === product.name
    //   )
    //   updatedProducts.splice(index, 1)
    //   setProducts(updatedProducts)
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <Layout>
      <h1>Vous êtes sur la page des produits</h1>
      {products &&
        products.map((product) => (
          <ProductInfos
            key={product._id}
            product={product}
            // handleRemove={handleRemove(product)}
          />
        ))}
    </Layout>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const products = await ProductsService.getAll()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products: products.data,
    },
  }
}

import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import ProductsService from '../services/productsService'
import ProductInfos from '../components/ProductInfos'

export default function Products() {
  useEffect(() => {
    fetchProducts()
  }, [])

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const products = await ProductsService.getAll()
      setProducts(products.data)
      console.log(products.data)
    } catch (err) {
      console.log(err.response) // Failed to fetch
    }
  }

  const handleDelete = async (product) => {
    try {
      await ProductsService.delete(product.name)
      const productUrl = product.image.split('/')
      await AwsHelper.removeFile(productUrl[productUrl.length - 1], 'images')
      let updatedProducts = [...products]
      const index = updatedProducts.findIndex(
        (currentProduct) => currentProduct.name === product.name
      )
      updatedProducts.splice(index, 1)
      setProducts(updatedProducts)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <h1>Vous êtes sur la page des produits</h1>
      {products.map((product) => (
        <ProductInfos
          key={product._id}
          product={product}
          handleDelete={handleDelete(product)}
        />
      ))}
    </Layout>
  )
}

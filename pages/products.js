import Layout from '../components/layout'
import {useEffect, useState} from "react";
import ProductsService from '../services/productsService';
import ProductInfos from "../components/productInfos";

export default function Products() {

  useEffect(() => {
    fetchProducts();
  }, []);

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const products = await ProductsService.getAll();
      setProducts(products.data);
      console.log(products.data);
    } catch (err) {
      console.log(err.response); // Failed to fetch
    }
  };

  return (
    <Layout>
      <h1>Vous êtes sur la page des produits</h1>
      {products.map((product) => (
        <ProductInfos
          key={product._id}
          product={product}
        />
      ))}
    </Layout>
  )
}

export default function ProductInfos({ product, handleRemove }) {
  return (
    <>
      <h2>
        {product.name} <button onClick={() => handleRemove(product)}>X</button>
      </h2>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
    </>
  )
}

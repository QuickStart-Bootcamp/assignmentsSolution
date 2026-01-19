function ProductList () {


  const products = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", featured: false },
    { id: 2, name: "T-shirt", price: 19.99, category: "Clothing", featured: true },
    { id: 3, name: "Microwave", price: 89.99, category: "Home Essentials", featured: false },
    { id: 4, name: "Smartphone", price: 699.99, category: "Electronics", featured: true },
    { id: 5, name: "Jeans", price: 39.99, category: "Clothing", featured: false },
  ];




  return (
    <>
      <p>This is our class B2-25-SW-9-SEP</p>
      <p>This is our class B2-25-SW-9-SEP</p>
      <p>This is our class B2-25-SW-9-SEP</p>
      {
      products.map ((product) => (
        <p>{product.name} - {product.price} $</p>

      ))
      }
    </>
  )
}

export default ProductList;
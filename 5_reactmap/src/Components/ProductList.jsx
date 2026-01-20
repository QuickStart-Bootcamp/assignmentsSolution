function ProductList () {
 const products = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics", featured: false },
  { id: 2, name: "T-shirt", price: 19.99, category: "Clothing", featured: true },
  { id: 3, name: "Microwave", price: 89.99, category: "Home Essentials", featured: false },
  { id: 4, name: "Smartphone", price: 699.99, category: "Electronics", featured: true },
  { id: 5, name: "Jeans", price: 39.99, category: "Clothing", featured: false },
];


  return (
    <p>
      {products.map (  (product)=>
        (<p>{product.name} - {product.price} - {product.category}</p>)    )}
    </p>
  ) 
}

export default ProductList

// Product[0] = { id: 1, name: "Laptop", price: 999.99, category: "Electronics", featured: false }
// Product[1] = { id: 2, name: "T-shirt", price: 19.99, category: "Clothing", featured: true }
// Product[2] =  { id: 3, name: "Microwave", price: 89.99, category: "Home Essentials", featured: false },
// Product[3] = { id: 4, name: "Smartphone", price: 699.99, category: "Electronics", featured: true },
// Product[4] = { id: 5, name: "Jeans", price: 39.99, category: "Clothing", featured: false },
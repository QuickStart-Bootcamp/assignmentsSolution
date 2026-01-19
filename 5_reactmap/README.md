# Build a React page that displays a list of products using React + map().
## Objective: 
Build a React application to display product details dynamically using state and props. This exercise will help you practice managing state, passing props, and rendering dynamic content in React.
Components Structure: You must create two components: App (parent component)and ProductList (child component)

## Instructions
1.	Create a React app using create-react-app.
2.	Inside the src folder, create a new file, ProductList.jsx
3.	In ProductList.jsx, create an array called products. The array must contain at least 5 prod-ucts. Each product must have the following properties: id, name, price, category and fea-tured (true or false)
```
const products = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics", featured: false },
  { id: 2, name: "T-shirt", price: 19.99, category: "Clothing", featured: true },
  { id: 3, name: "Microwave", price: 89.99, category: "Home Essentials", featured: false },
  { id: 4, name: "Smartphone", price: 699.99, category: "Electronics", featured: true },
  { id: 5, name: "Jeans", price: 39.99, category: "Clothing", featured: false },
];
```
4.	Still in ProductList.js: Use map() to display the product list including, Product name, Price, Category, Show “⭐ Featured” if the product is featured.
Expected Output: A list of products displayed on the page, for example.
•	Laptop — $999.99 — Electronics
•	T-shirt — $19.99 — Clothing ⭐ Featured
•	Microwave — $89.99 — Home Essentials



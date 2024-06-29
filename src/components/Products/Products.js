import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";
import './Product.css';

function Products() {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(res => {
        setProducts(res);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-card-container">
      {products.map((item, index) => (
        <ProductCard key={index} product={item} />
      ))}
    </div>
  );
}

export let a = 10;
export let b = 20;
export default Products;

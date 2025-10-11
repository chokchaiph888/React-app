import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddForm from './Product/AddForm';

export default function Home() {
  const [products, setProducts] = useState([]);
  const apiURL = 'https://68e9fffbf1eeb3f856e5bb1d.mockapi.io/React/products';

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await axios.get(apiURL);
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    getProducts();
  }, []);

  async function addProduct(product) {
    try {
      const res = await axios.post(apiURL, product);
      setProducts([...products, res.data]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  }

  return (
    <>
      <h1>New Products</h1>

      {products.length > 0 ? (
        <ul className="Home__products">
          {products.map((product) => (
            <li key={product.id} style={{ listStyle: 'none', margin: '10px', textAlign: 'center' }}>
              <img
                src={product.imageURL || 'https://via.placeholder.com/150'}
                alt={product.name}
                width="120"
                style={{ borderRadius: '10px' }}
              />
              <h3>{product.name}</h3>
              <p>{product.type}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading products...</div>
      )}

      <AddForm addProduct={addProduct} />
    </>
  );
}

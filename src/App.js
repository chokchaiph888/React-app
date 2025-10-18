import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import GlobalStyle from "./features/GlobalStyle";
import Navbar from "./features/Navbar";
import Container from "./features/Container";
import Home from "./features/Home";
import AddForm from "./features/Product/AddForm";
import UpdateForm from "./features/Product/UpdateForm";

function App() {
  // ✅ ใช้ useState แทน Redux
  const [products, setProducts] = useState([]);

  // ✅ โหลดสินค้าจาก MockAPI
  useEffect(() => {
    async function getProducts() {
      const res = await axios.get(
        "https://68e9fffbf1eeb3f856e5bb1d.mockapi.io/React/products"
      );
      setProducts(res.data);
    }
    getProducts();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        {products.length > 0 ? (
          <Routes>
            <Route path="/create-product" element={<AddForm />} />
            <Route path="/update-product/:id" element={<UpdateForm />} />
            <Route path="/" element={<Home products={products} />} />
          </Routes>
        ) : (
          <div>Loading products...</div>
        )}
      </Container>
    </>
  );
}

export default App;

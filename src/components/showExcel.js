import React, { useEffect, useState } from 'react';
import axios from 'axios';
function ShowExcel() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/products');
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);

    return (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product ID</th>
              <th>SKU</th>
              <th>Variant ID</th>
              <th>Price</th>
              <th>Discount Percentage</th>
              <th>Description</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.product_name}</td>
                <td>{product.product_id}</td>
                <td>{product.sku}</td>
                <td>{product.variant_id}</td>
                <td>{product.price}</td>
                <td>{product.discount_percentage}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    };

export default ShowExcel;
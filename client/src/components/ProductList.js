import Product from './Product.js'
// import data from '../../mockData/data.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
const ProductList = () => {

  let [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/products');
      console.log('data is: ', data);
      setProducts(data);
    })();    
  }, []);

  return (
    <ul>
      {products.map(dataObj => <Product key={dataObj._id} productData={dataObj}/> )}
    </ul>
  )
}

export default ProductList;
import { useState } from 'react';
import EditForm from './EditForm';
import axios from 'axios';

const Product = (props) => {
  let { title, price, quantity } = props.productData;
  const [ displayEditForm, setDisplayEditForm ] = useState(false);

  const handleShowEditForm = event => {
    event.preventDefault();
    setDisplayEditForm(!displayEditForm);
  }

  const handleDeleteProduct = async (event) => {
    event.preventDefault();
    let id = props.productData._id;
    try {
      const {data} = await axios.delete(`/api/products/${id}`)
      console.log('product deleted');
    } catch(e) {
      console.log('error in deleting product');
    }
  }

  //added after submission to srdjan
  const handleAddToCart = async (event) => {
    event.preventDefault();
    let productId = props.productData._id;
    try {
      console.log('add to cart route hit');
      const {data} = await axios.post(`/api/add-to-cart`, {productId})
      console.log('data from add to cart: ', data);
    } catch(e) {
      console.log('error in add to cart');
    }
  }
  
  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          <button className="edit" onClick={handleShowEditForm}>Edit</button>
          {displayEditForm && <EditForm productData={props.productData} />}
        </div>
        <button className="delete-button" onClick={handleDeleteProduct}>
          <span>X</span>
        </button>
      </div>
    </li>
  )
}

export default Product;
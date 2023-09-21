import { useState } from "react";
import axios from 'axios';

const EditForm = (props) => {

  let { _id, title, price, quantity } = props.productData;

  const [ newTitle, setNewTitle ] = useState(title);
  const [ newPrice, setNewPrice ] = useState(price);
  const [ newQuantity, setNewQuantity ] = useState(quantity);

  const handleSubmit = async (e) => {
    console.log('handle submit pressed');
    e.preventDefault();
    let editedProduct = {title: newTitle, price: newPrice, quantity: newQuantity};
    
    try {
      const {data} = await axios.put(`/api/products/${_id}`, editedProduct)
      console.log('data is: ', data);
      
    } catch(e) {
      console.log('error in editing product');
    }
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form action='' onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
            aria-label="Product Name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={newPrice}
            onChange={(e) => {
              setNewPrice(e.target.value);
            }}
            aria-label="Product Price"
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={newQuantity}
            onChange={(e) => {
              setNewQuantity(e.target.value);
            }}
            aria-label="Product Quantity"
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditForm;
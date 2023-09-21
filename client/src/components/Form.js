import {useState, useEffect} from 'react';
import axios from 'axios';

const Form = () => {

  const [newProduct, setNewProduct] = useState({});
  
  const [ title, setTitle ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ quantity, setQuantity ] = useState('');

  const handleAddNewProduct = async (e) => {
    e.preventDefault();
    let newProduct = {title, price, quantity};
    try {
      const {data} = await axios.post('/api/products', newProduct)
      console.log('data is: ', data);
      reset();
    } catch(e) {
      console.log('error in submitting new product');
    }
  }
  
  const reset = () => {
    setTitle('');
    setPrice('');
    setQuantity('');
  }

  return (
    <form action='' onSubmit={handleAddNewProduct}>
      <div className="input-group">
        <label htmlFor="product-name">Product Name:</label>
        <input
          type="text"
          id="product-name"
          name="product-name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="product-price">Price:</label>
        <input
          type="number"
          id="product-price"
          name="product-price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          min="0"
          step="0.01"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="product-quantity">Quantity:</label>
        <input
          type="number"
          id="product-quantity"
          name="product-quantity"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          min="0"
          required
        />
      </div>
      <div className="actions form-actions">
        <button type="submit">Add</button>
        <button type="button">Cancel</button>
      </div>
    </ form>
  )
}

export default Form;
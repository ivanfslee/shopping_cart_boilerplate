import CartItem from './CartItem.js';
import {useState, useEffect} from 'react';
import axios from 'axios';
const Cart = ({cartItems}) => {
  // const [displayCartItems, setDisplayCartItems] = useState(cartItems);
  
  // const getCartItems = async () => {
  //   try {
  //     const { data } = await axios.get('/api/cart');
  //     // console.log('cart items is: ', data); //array
  //     setCartItems(data);
  //   } catch(e) {
  //     console.log('error in getting cart items'); 
  //   }
  // };  

  // useEffect(() => {
  //   setDisplayCartItems(cartItems);
  // }, [displayCartItems])

  const calcTotal = () => {
    let total = cartItems.reduce((total, item) => total += (item.quantity * item.price), 0);
    return total;
  }

  // useEffect(() => {
  //   getCartItems();
  //   calcTotal();
  // }, []);

  return (
    <>
      {cartItems.length === 0 ? <p>Your cart is empty</p> :
      <table className="cart-items">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(cartItem => <CartItem key={cartItem._id} productData={cartItem}/>)}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="total">Total: ${calcTotal()}</td>
            </tr>
          </tfoot>
      </table>}
    </>
  )
}

export default Cart;
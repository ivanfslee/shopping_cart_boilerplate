// import { useEffect, useState } from "react";
import Cart from './Cart.js';
// import CartItem from './CartItem.js';
// import axios from 'axios';

const Header = ({cartItems}) => {

  return (
    <header>
      <h1>The Shop!</h1>
      <div className='cart'>
        <h2>Your Cart</h2>
        <Cart cartItems={cartItems}/>
        <button className="checkout" disabled={cartItems.length === 0}>Checkout</button>
      </div>
    </header>
  )
}

export default Header;
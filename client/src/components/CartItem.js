const CartItem = (props) => {
  const {title, quantity, price} = props.productData;
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>{quantity}</td>
        <td>{price}</td>
      </tr>
    </>
  )
}

export default CartItem;
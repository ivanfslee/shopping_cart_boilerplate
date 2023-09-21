//Note: Component not used
const InputGroup = (props) => {
  // const { type } = props
  return (
    <div className='input-group'>
      <label for="product-name">Product Name:</label>
      <input
        type="text"
        id="product-name"
        name="product-name"
        required
      />
    </div>
  )
}

export default InputGroup;
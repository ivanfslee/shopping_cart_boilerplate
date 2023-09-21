import ProductList from './ProductList.js'
import Header from './Header.js';
import Form from './Form.js';
import {useState} from 'react';
const App = () => {

  const [displayForm, setDisplayForm] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    setDisplayForm(!displayForm);
  };

  return (
    <div id='app'>
      <Header />
      <main>
        <div className='product-listing'>
          <h2>Products</h2>
          <ProductList />
        </div>
        <div className={displayForm ? 'add-form visible' : 'add-form'}>
          <p><button className="add-product-button" onClick={handleClick}>Add A Product</button></p>
          <h3>Add Product</h3>
          <Form />
        </div>
      </main>
    </div>
  )
}

export default App;
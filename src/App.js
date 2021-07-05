import React from 'react';
import Header from './components/header/header.jsx'
import Categories from './components/storefront/categories.jsx';
import Products from './components/storefront/products.jsx'

import Footer from './components/footer/footer.jsx'
function App() {
  return (
   <React.Fragment>
     <Header/>
     <Categories/>

     <Products/>
     <Footer/>
   </React.Fragment>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ProductDescriptionPage } from './pages/ProductDescriptionPage/productDescriptionPage.jsx';
import { ProductListingPage } from './pages/ProductListingPage/productListingPage.jsx';


function App() {
  return (  
      <Router>
      <Routes>
        <Route exact path="/" element={<ProductListingPage/>} />
        <Route path="/pokemons/:id" element={<ProductDescriptionPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {ProductListingPage} from './ProductListingPage/productListingPage.jsx';
import {ProductDescriptionPage} from './ProductDescriptionPage/productDescriptionPage.jsx';
import { ThemeContext,ThemeProvider } from './context/themeContext.jsx';
import{AuthProvider} from './context/authContext.jsx'

function App() {
  return (  
    <AuthProvider>
      <ThemeProvider>
      <Router>
      <Routes>
        <Route exact path="/" element={<ProductListingPage/>} />
        <Route path="/pokemons/:id" element={<ProductDescriptionPage/>} />
      </Routes>
    </Router>
    </ThemeProvider>  
    </AuthProvider>
    
  );
}

export default App;

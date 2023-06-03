import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/footer';
import Header from './Components/header';
import Catalog from './Components/catalog';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{backgroundColor:'black'}}>
      <Header />
      <Catalog />
      <Catalog />
      <Catalog />
      <Footer />
    </Box>
  )
}

export default App;

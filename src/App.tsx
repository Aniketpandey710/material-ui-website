import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/footer';
import Header from './Components/header';
import Catalog from './Components/catalog';
import { Box } from '@mui/material';
import Slider from './Components/slider';
import Banner from './Components/banner';
import CarouselBanner from './Components/CarouselBanner/CarouselBanner';
import Home from './pages/Home';

function App() {

  return (
    <Box
    // sx={{ backgroundColor: 'black' }}
    >
      <Header />
      <Home />
      {/* <Banner
        title=""
        description=""
        imageUrl="Banner.webp" // Replace with the actual path to your banner image
      /> */}
      {/* <Slider />
      <Catalog /> */}
      <Footer />
    </Box>
  )
}

export default App;

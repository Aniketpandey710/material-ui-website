import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/footer';
import Header from './Components/header';
import Catalog from './Components/catalog';
import { Box, TextField } from '@mui/material';
import Slider from './Components/slider';
import YoutubeEmbed from './Components/youtube';

function App() {
  const [data,setData]=useState('')
  const d=['','FcIyKHIf2U8','JCFHA8O-T9Q','vxzOZLIxzNI','dADX8FxdFZQ','vI0Pthnz8Sk','QUou2T-MyOA','MwpjJc0KkSM','Ubd1xBGyvg8','PYjCzpI6Aio','Y3GeznVpfBE']
  const handleTextChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setData(event.target.value);
  };
  return (
    <Box sx={{backgroundColor:'black'}}>
      <Header />
      <div id='Slider'>
      <Slider />
      </div>
      <Catalog />
      {/* <Catalog />
      <Catalog />
      <Catalog />
      <Catalog /> */}
      <div id='catalog'>
      <Catalog />
      </div>
      {/* <Catalog />
      <Slider />
      <Slider />
      <Footer /> */}
      {/* JCFHA8O-T9Q */}
      <TextField id="outlined-basic" color="warning" focused label="Enter Id" variant="outlined" value={Number(data)} onChange={handleTextChange}/>
      { Number(data) > 0 && 
      <Box sx={{display:'grid',gridTemplateColumns:'repeat(3, auto)'}}>
      <YoutubeEmbed embedId={d[Number(data)]} />
      <YoutubeEmbed embedId={d[Number(data)]}  />
      <YoutubeEmbed embedId={d[Number(data)]}  />
      <YoutubeEmbed embedId={d[Number(data)]}  />
      <YoutubeEmbed embedId={d[Number(data)]} />
      <YoutubeEmbed embedId={d[Number(data)]}  />
      <YoutubeEmbed embedId={d[Number(data)]}  />
      <YoutubeEmbed embedId={d[Number(data)]}  />
      <YoutubeEmbed embedId={d[Number(data)]}  />
      <YoutubeEmbed embedId={d[Number(data)]}  />
      <YoutubeEmbed embedId={d[Number(data)]}  />
      <YoutubeEmbed embedId={d[Number(data)]}  />
      </Box>
}
    </Box>
  )
}

export default App;

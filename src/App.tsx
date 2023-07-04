import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/footer';
import Header from './Components/header';
import Catalog from './Components/catalog';
import { Box, FormControlLabel, Switch, TextField, Typography } from '@mui/material';
import Slider from './Components/slider';
import YoutubeEmbed from './Components/youtube';

function App() {
  const [useId,setId]=useState(true)
  const [data,setData]=useState('')
  const d=['','FcIyKHIf2U8','JCFHA8O-T9Q','vxzOZLIxzNI','dADX8FxdFZQ','vI0Pthnz8Sk','QUou2T-MyOA','MwpjJc0KkSM','Ubd1xBGyvg8','PYjCzpI6Aio','Y3GeznVpfBE']
  const handleTextChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setData(event.target.value);
  }
  const handleToggleChange = () => {
    setId(!useId)
  }

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
      <Typography variant='h2'>Youtube Player</Typography> 
      <Box sx={{padding:'1rem', color:'white',display:'flex',gap:'1rem'}}>
      <TextField id="outlined-basic" color="warning" focused label="Enter Id" variant="outlined" value={data} onChange={handleTextChange} sx={{ input: { color: 'white' } }}/>
      <Typography>Code</Typography> <FormControlLabel control={<Switch />} label="" onChange={handleToggleChange} style={{margin:'1rem'}}/> <Typography>Id</Typography>

      </Box>
      { data.length >0 && 
      <Box sx={{display:'grid',gridTemplateColumns:'repeat(3, auto)'}}>
      <YoutubeEmbed embedId={useId ? d[Number(data)]:data} />
      <YoutubeEmbed embedId={useId ? d[Number(data)]:data}  />
      <YoutubeEmbed embedId={useId ? d[Number(data)]:data}  />
      <YoutubeEmbed embedId={useId ? d[Number(data)]:data}  />
      <YoutubeEmbed embedId={useId ? d[Number(data)]:data} />
      <YoutubeEmbed embedId={useId ? d[Number(data)]:data}  />
      <YoutubeEmbed embedId={useId ? d[Number(data)]:data}  />
      <YoutubeEmbed embedId={useId ? d[Number(data)]:data}  />
      <YoutubeEmbed embedId={useId ? d[Number(data)]:data}  />
      <YoutubeEmbed embedId={useId ? d[Number(data)]:data}  />
      <YoutubeEmbed embedId={useId ? d[Number(data)]:data}  />
      <YoutubeEmbed embedId={useId ? d[Number(data)]:data}  />
      </Box>
}
    </Box>
  )
}

export default App;

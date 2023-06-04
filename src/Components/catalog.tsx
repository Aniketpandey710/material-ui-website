import React from 'react'
import { MediaCard } from './cards'
import { Box, Typography } from '@mui/material'

function Catalog() {
  return (
    <>
        <Typography variant='h5' sx={{color:'white', ml:2}}>Categories</Typography>
    <Box sx={{display:'-webkit-box', flexDirection:'row', overflowX:'scroll' }}>
    <MediaCard title={'Garudasana'} description={"Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"} image={'/Garudasana.webp'} />
    <MediaCard title={'Bhujangasana'} description={"Bhujangasana or Cobra Pose is a reclining back-bending asana in hatha yoga and modern yoga as exercise. It is commonly performed in a cycle of asanas in Surya Namaskar."} image={'/Bhujangasana.jpeg'} />
    <MediaCard title={'Trikonasana'} description={"Lranging across all continents except Antarctica"}/>
    <MediaCard title={'Dhanurasana'} description={"Lizards are a widesp6,000species, ranging across all continents except Antarctica"}  />
    <MediaCard title={'Bakasana'} description={"Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"}/>
    </Box>
    </>
  )
}

export default Catalog
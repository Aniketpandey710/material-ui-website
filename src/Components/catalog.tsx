import React from 'react'
import { MediaCard } from './cards'
import { Box, Typography } from '@mui/material'

function Catalog() {
  return (
    <>
        <Typography variant='h5' sx={{color:'white', ml:2}}>Categories</Typography>
    <Box sx={{display:'-webkit-box', flexDirection:'row', overflowX:'scroll' }}>
    <MediaCard title={'Yoga Asana'} description={"Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"} image={'/yoga2.jpeg'} />
    <MediaCard title={'Yoga Asana'} description={"Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"} image={'/yoga2.jpeg'} />
    <MediaCard title={'Yoga Asana'} description={"Lranging across all continents except Antarctica"} image={'/yoga2.jpeg'} />
    <MediaCard title={'Yoga Asana'} description={"Lizards are a widesp6,000species, ranging across all continents except Antarctica"} image={'/yoga2.jpeg'} />
    <MediaCard title={'Yoga Asana'} description={"Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"} image={'/yoga2.jpeg'} />
    </Box>
    </>
  )
}

export default Catalog
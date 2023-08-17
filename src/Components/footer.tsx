import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '20px',
        marginTop: 'auto',
        position:'static'
      }}
    >
      <Typography variant="body2" align="center" color="white">
        &copy {new Date().getFullYear()} My Awesome Website
      </Typography>
    </Box>
  )
}

export default Footer
